# AI Agent Invoice Management

A **persistent, memory‑driven AI agent** for invoice automation.  
This project demonstrates how to build an **autonomous agent** that can **learn and recall knowledge over time** to assist with processing, understanding, and managing invoices in an intelligent workflow.

> Currently implemented in TypeScript using a memory store and agent pattern.

---

## 🧠 Overview

AI Agent Invoice Management is designed to act as an intelligent assistant that can:

- Learn from previous interactions (vendor‑specific memory)
- Store context and improve over time
- Provide explainable reasoning
- Maintain an audit trail
- Prevent duplicate memory entries

This approach makes the agent more effective in repetitive invoice management tasks by allowing it to **adapt based on past interactions** and user corrections.

---

## 🚀 Features

- 🧠 **Vendor‑specific memory storage**
- 📈 **Confidence reinforcement & decay**
- 📜 **Explainable reasoning with audit logs**
- 📊 **Duplicate‑safe learning**
- 🗃️ **Simple, persistent database layer**

> Memory persistence is implemented using **SQLite (better‑sqlite3)** with a flexible memory store format.

---

## 📁 Repository Structure

```

.
├── data/                    # Local database files
├── src/                     # Source code
│   ├── memoryStore.ts       # Memory layer implementation
│   ├── agent.ts             # Agent logic
│   └── index.ts             # Entry point
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md

````

---

## 🧩 Getting Started

### Prerequisites

Make sure you have the following installed:

✔️ Node.js >= 16.x  
✔ npm (or yarn)  

---

### 🚀 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Mohitkumar2217/ai_agent_invoice_managment.git
   cd ai_agent_invoice_managment
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the application**

   ```bash
   npm start
   ```

---

## 🛠️ How It Works

### Memory Store

The `MemoryStore` persists agent memory in a SQLite database.
It supports:

* Adding new memories
* Updating confidence for existing memories
* Loading memories for a given vendor

Memory records look like this:

| Field      | Description                          |
| ---------- | ------------------------------------ |
| id         | Unique identifier (UUID)             |
| vendor     | Vendor identifier                    |
| type       | Memory category/type                 |
| key        | Memory key                           |
| value      | Arbitrary JSON value                 |
| confidence | Confidence that this memory is valid |
| usage      | How many times it’s used             |
| updatedAt  | Last updated timestamp               |

---

## 📌 Example Usage

Here’s a simplified example of how to use the agent:

```ts
import { MemoryStore } from "./src/memoryStore";
import { Agent } from "./src/agent";

const store = new MemoryStore();
const aiAgent = new Agent(store);

aiAgent.processInvoice(pdfBuffer)
  .then(result => {
    console.log("Extracted invoice data:", result);
  });
```

The memory layer ensures that similar invoices or vendors can influence future interactions.

---

## 🧪 Testing

There are no tests included by default yet, but you can integrate tools like Jest or Vitest for unit and integration testing.

---

## 📦 Tools & Technologies

* 📦 **TypeScript**
* 🗄️ **SQLite** via `better‑sqlite3`
* 🧠 **UUID** for unique memory keys
* 🤖 AI agent patterns (custom implementation)

---

## 🤝 Contributing

Contributions are welcome!
To contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Add feature"`)
4. Push (`git push origin feature-name`)
5. Open a Pull Request

---

## 📄 License

This project does not currently include a license file.
If you want to make it open source, consider adding a license (MIT/Apache‑2.0, etc.).

---

## 🙌 About

Built by **Mohitkumar2217** — an experimental AI agent project focusing on persistent learning for invoice automation and reasoning.

--- 