/** Graham Number = √(22,5 × LPA × VPA) */
export function grahamNumber(lpa: number, vpa: number): number {
  return Math.sqrt(22.5 * lpa * vpa);
}

/** Dívida Líquida / EBITDA  */
export function debtNetEbitda(
  totalDebt: number,
  totalCash: number,
  ebitda: number
): number {
  const netDebt = totalDebt - totalCash;
  return ebitda ? netDebt / ebitda : NaN;
}
