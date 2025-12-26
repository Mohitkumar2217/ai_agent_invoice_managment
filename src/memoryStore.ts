import fs from "fs";
import { v4 as uuid } from "uuid";
import { Memory, MemoryType } from "./types";

const PATH = "./data/memory.json";

export class MemoryStore {
  private memory: Memory[] = fs.existsSync(PATH)
    ? JSON.parse(fs.readFileSync(PATH, "utf-8"))
    : [];

  save() {
    fs.writeFileSync(PATH, JSON.stringify(this.memory, null, 2));
  }

  recall(vendor: string) {
    return this.memory.filter(m => m.vendor === vendor);
  }

  learn(vendor: string, type: MemoryType, key: string, value: any) {
    const existing = this.memory.find(
      m => m.vendor === vendor && m.key === key
    );

    if (existing) {
      existing.confidence = Math.min(1, existing.confidence + 0.1);
      existing.usage++;
      existing.updatedAt = new Date().toISOString();
    } else {
      this.memory.push({
        id: uuid(),
        vendor,
        type,
        key,
        value,
        confidence: 0.6,
        usage: 1,
        updatedAt: new Date().toISOString()
      });
    }
    this.save();
    return `Memory learned: ${key}`;
  }
}
