// memoryRepo.ts
export interface Memory {
  vendor: string;
  key: string;
  confidence: number;
  usage: string;
}

export class MemoryRepo {
  private memories: Memory[] = [
    { vendor: "OpenAI", key: "gpt-4o", confidence: 0.98, usage: "Contextual Chat" },
    { vendor: "Google", key: "gemini-1.5", confidence: 0.95, usage: "Multi-modal Analysis" },
    { vendor: "Anthropic", key: "claude-3", confidence: 0.92, usage: "Code Generation" }
  ];

  all(): Memory[] {
    return this.memories;
  }
}