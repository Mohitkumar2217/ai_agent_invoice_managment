export type MemoryType = "VENDOR" | "CORRECTION" | "RESOLUTION";

export interface Invoice {
  invoiceId: string;
  vendor: string;
  fields: any;
  rawText: string;
  confidence: number;
}

export interface MemoryEntry {
  vendor: string;
  type: MemoryType;
  key: string;
  value: any;
  confidence: number;
}

export interface Memory {
  id: string;
  vendor: string;
  type: MemoryType;
  key: string;
  value: any;
  confidence: number;
  usage: number;
  updatedAt: string;
}

export interface AgentOutput {
  normalizedInvoice: any;
  proposedCorrections: string[];
  requiresHumanReview: boolean;
  reasoning: string;
  confidenceScore: number;
  memoryUpdates: string[];
  auditTrail: {
    step: "recall" | "apply" | "decide" | "learn";
    timestamp: string;
    details: string;
  }[];
}
