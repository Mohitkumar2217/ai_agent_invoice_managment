import { MemoryStore } from "./memoryStore";
import { Invoice, AgentOutput } from "./types";
import { shouldAutoApply } from "./decisionLogic";

export class AgentEngine {
  constructor(private memory: MemoryStore) {}

  process(invoice: Invoice): AgentOutput {
    const audit: { step: "recall" | "apply" | "decide" | "learn"; timestamp: string; details: string; }[] = [];
    const updates: string[] = [];
    const corrections: string[] = [];

    const memories = this.memory.recall(invoice.vendor);
    audit.push({ step: "recall", timestamp: new Date().toISOString(), details: `${memories.length} memories` });

    const normalized = { ...invoice.fields };

    for (const mem of memories) {
      if (invoice.rawText.includes(mem.key) && shouldAutoApply(mem)) {
        normalized[mem.value.field] = mem.value.to;
        corrections.push(`Applied ${mem.key}`);
      }
    }

    audit.push({ step: "apply", timestamp: new Date().toISOString(), details: corrections.join(", ") || "None" });

    const confidenceScore =
      memories.reduce((a, b) => a + b.confidence, 0) / (memories.length || 1);

    const requiresHumanReview = confidenceScore < 0.7;

    audit.push({
      step: "decide",
      timestamp: new Date().toISOString(),
      details: requiresHumanReview ? "Escalated" : "Auto-approved"
    });

    return {
      normalizedInvoice: normalized,
      proposedCorrections: corrections,
      requiresHumanReview,
      reasoning: corrections.join("; ") || "No strong memory matched",
      confidenceScore,
      memoryUpdates: updates,
      auditTrail: audit,
    };
  }
}
