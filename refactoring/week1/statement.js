import { amountFor } from './amountFor';
import { usd } from './usd';
import { playFor } from './playFor';
import { volumeCreditsFor } from './volumeCreditsFor';

export function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구내역 (고객명: ${invoice.customer})\n`;

  for (let perf of invoice.performances) {
    volumeCredits += volumeCreditsFor(perf);

    // 청구 내역을 출력한다.
    result += `${playFor(perf).name}: ${usd(amountFor(perf, playFor(perf)))} ${
      perf.audience
    }석\n`;

    totalAmount += amountFor(perf, playFor(perf));
  }
  result += `총액 ${usd(totalAmount)}\n`;
  result += `적립 포인트 ${volumeCredits}점\n`;

  return result;
}
