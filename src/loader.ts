import fs from "fs";

export const loadJSON = (path: string) =>
  JSON.parse(fs.readFileSync(path, "utf-8"));

export const invoices = loadJSON("./data/SampleData/invoices_extracted.json");
export const purchaseOrders = loadJSON("./data/SampleData/purchase_orders.json");
export const deliveryNotes = loadJSON("./data/SampleData/delivery_notes.json");
export const humanCorrections = loadJSON("./data/SampleData/human_corrections.json");
