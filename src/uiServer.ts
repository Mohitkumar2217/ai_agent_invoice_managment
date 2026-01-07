import express from "express";
// Import your MemoryStore type/class
import { MemoryStore } from "./memoryStore"; 

export function startUI(repo: MemoryStore) { // Now accepts the store as a param
  const app = express();

  app.get("/", (_, res) => {
    // Assuming MemoryStore has an .all() or .getMemories() method
    const memories = repo.recall(""); // Fetch all memories; adjust as needed
    
    res.send(`
      <body style="font-family: sans-serif; padding: 20px; background: #f4f7f6;">
        <h1>🧠 Flowbit Memory Viewer</h1>
        <table border="1" style="width: 100%; border-collapse: collapse; background: white;">
          <tr style="background: #eee;">
            <th style="padding: 10px;">Vendor</th>
            <th style="padding: 10px;">Key</th>
            <th style="padding: 10px;">Context/Reason</th>
            <th style="padding: 10px;">Data</th>
          </tr>
          ${memories.map(m => `
            <tr>
              <td style="padding: 10px;">${m.vendor}</td>
              <td style="padding: 10px;"><b>${m.key}</b></td>
              <td style="padding: 10px;">${m.type}</td>
              <td style="padding: 10px;"><pre>${JSON.stringify(m.value, null, 2)}</pre></td>
            </tr>
          `).join("")}
        </table>
      </body>
    `);
  });

  app.listen(3001, () =>
    console.log("🧠 Memory UI running at http://localhost:3001")
  );
}