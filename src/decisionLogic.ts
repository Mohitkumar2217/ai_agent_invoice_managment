import { MemoryEntry } from "./types";

export function shouldAutoApply(memory: MemoryEntry): boolean {
  return memory.confidence >= 0.75;
}

export function computeConfidence(memories: MemoryEntry[]): number {
  if (memories.length === 0) return 0;
  return (
    memories.reduce((a, b) => a + b.confidence, 0) / memories.length
  );
}
