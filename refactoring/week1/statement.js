import { amountFor } from './amountFor';
import { playFor } from './playFor';
import { volumeCreditsFor } from './volumeCreditsFor';

export function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구내역 (고객명: ${invoice.customer})\n`;

  const format = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  }).format;

  for (let perf of invoice.performances) {
    volumeCredits += volumeCreditsFor(perf);

    // 청구 내역을 출력한다.
    result += `${playFor(perf).name}: ${format(
      amountFor(perf, playFor(perf)) / 100
    )} ${perf.audience}석\n`;

    totalAmount += amountFor(perf, playFor(perf));
  }
  result += `총액 ${format(totalAmount / 100)}\n`;
  result += `적립 포인트 ${volumeCredits}점\n`;

  return result;
}
