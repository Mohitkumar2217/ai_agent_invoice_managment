export function isDuplicate(current: any, history: any[]): boolean {
  return history.some(
    inv =>
      inv.vendor === current.vendor &&
      inv.fields.invoiceNumber === current.fields.invoiceNumber &&
      Math.abs(
        new Date(inv.fields.invoiceDate).getTime() -
        new Date(current.fields.invoiceDate).getTime()
      ) < 3 * 86400000
  );
}
