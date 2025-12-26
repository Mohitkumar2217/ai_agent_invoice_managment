// import express from "express";
// import { MemoryRepo } from "./memoryRepo";

// export function startUI() {
//   const app = express();
//   const repo = new MemoryRepo();

//   app.get("/", (_, res) => {
//     const memories = repo.all();
//     res.send(`
//       <h1>🧠 Memory Viewer</h1>
//       <table border="1">
//         <tr>
//           <th>Vendor</th><th>Key</th><th>Confidence</th><th>Usage</th>
//         </tr>
//         ${memories.map(m => `
//           <tr>
//             <td>${m.vendor}</td>
//             <td>${m.key}</td>
//             <td>${m.confidence.toFixed(2)}</td>
//             <td>${m.usage}</td>
//           </tr>
//         `).join("")}
//       </table>
//     `);
//   });

//   app.listen(3000, () =>
//     console.log("🧠 Memory UI running at http://localhost:3000")
//   );
// }
