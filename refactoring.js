function createStatementData(invoice, plays) {
  const statementData = {};
  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances.map(enrichPerformance);
  statementData.totalAmount = totalAmount(statementData);
  statementData.totalVolumeCredits = totalVolumeCredits(statementData);

  function enrichPerformance(aPerformance) {
    const result = Object.assign({}, aPerformance);
    result.play = getPlay(aPerformance);
    result.amount = getAmount(aPerformance);
    result.volumeCredits = getVolumeCredits(aPerformance);
  }

  function getPlay(aPerformance) {
    return plays[aPerformance.playID];
  }

  function getAmount(aPerformance) {
    let result = 0;

    switch (getPlay(aPerformance).type) {
      case 'tragedy':
        result = 40_000;

        if (aPerformance.audience > 30) {
          result += 1_000 * (aPerformance.audience - 30);
        }
        break;
      case 'comedy':
        result = 30_000;

        if (aPerformance.audience > 20) {
          result += 10_000 + 500 * (aPerformance.audience - 20);
        }
        result += 300 * aPerformance.audience;
        break;

      default:
        throw new Error(`알 수 없는 장르: ${getPlay(aPerformance).type}`);
    }

    return result;
  }

  function getVolumeCredits(aPerformance) {
    let result = 0;
    result += Math.max(aPerformance.audience - 30, 0);

    if ('comedy' === getPlay(aPerformance).type) {
      result += Math.floor(aPerformance.audience / 5);
    }

    return result;
  }

  function totalVolumeCredits(data) {
    return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
  }

  function totalAmount(data) {
    return data.performances.reduce((total, p) => total + p.amount, 0);
  }
  return statementData;
}

function renderPlainText(data) {
  let result = `청구내역 (고객명: ${data.customer})\n`;

  function usd(price) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2,
    }).format(price / 100);
  }

  for (let perf of data.performances) {
    result += `${data.play.name}: ${usd(perf.amount)} ${perf.audience}석\n`;
  }

  result += `총액 ${usd(data.totalAmount)}\n`;
  result += `적립 포인트 ${data.totalVolumeCredits}점\n`;

  return result;
}

function statement(invoice, plays) {
  return renderPlainText(createStatementData(invoice, plays));
}
