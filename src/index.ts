import { invoices, humanCorrections } from "./loader";
import { MemoryStore } from "./memoryStore";
import { AgentEngine } from "./engine";

const memory = new MemoryStore();
const engine = new AgentEngine(memory);

console.log("=== FLOWBIT MEMORY AGENT DEMO ===");

for (const inv of invoices) {
  console.log(`\nProcessing ${inv.invoiceId}`);
  const output = engine.process(inv);
  console.log(JSON.stringify(output, null, 2));

  const hc = humanCorrections.find((h: { invoiceId: string; corrections: { field: string; to: unknown; reason?: string }[] }) => h.invoiceId === inv.invoiceId);
  if (hc) {
    for (const c of hc.corrections) {
      memory.learn(inv.vendor, "CORRECTION", c.reason, {
        field: c.field,
        to: c.to
      });
    }
  }
}
