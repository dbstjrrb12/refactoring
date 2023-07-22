export const volumeCreditsFor = (aPerformance) => {
  let volumeCredits = 0;
  volumeCredits += Math.max(aPerformance.audience - 30, 0);

  if ('comedy' === playFor(aPerformance).type) {
    volumeCredits += Math.floor(aPerformance.audience / 5);
  }

  return volumeCredits;
};
