class PerformanceCalculator {
  constructor(aPerformance, aPlay) {
    this.performance = aPerformance;
    this.play = aPlay;
  }

  get amount() {
    throw new Error('서브클래스에서 처리');
  }

  get volumeCredits() {
    let volumeCredits = 0;
    volumeCredits += Math.max(this.performance.audience - 30, 0);

    if ('comedy' === this.performance.play.type) {
      volumeCredits += Math.floor(this.performance.audience / 5);
    }

    return volumeCredits;
  }
}

class TragedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 40_000;
    if (this.performance.audience > 30) {
      result += 1000 * (this.performance.audience - 30);
    }
    return result;
  }
}
class ComedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 30_000;

    if (this.performance.audience > 20) {
      result += 10_000 + 500 * (this.performance.audience - 20);
    }
    result += 300 * this.performance.audience;

    return result;
  }
}

/** 팩토리 함수 - 자바스크립트는 class 생성자에서 서브클래스 인스턴스를 반환할 수 없기 때문에
 *           - 팩토리 함수를 사용하는 것을 권장한다.
 */
function createPeformanceCalculator(aPerformance, aPlay) {
  switch (aPlay.type) {
    case 'tragedy':
      return new TragedyCalculator(aPerformance, aPlay);
    case 'comedy':
      return new ComedyCalculator(aPerformance, aPlay);
    default:
      throw new Error('Unkown Genre');
  }
}

export default function createStatementData(invoice, plays) {
  const statementData = {};
  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances.map(enrichPerformance);
  statementData.totalAmount = totalAmount(statementData);
  statementData.totalVolumeCredits = totalVolumeCredits(statementData);

  function enrichPerformance(aPerformance) {
    const calculator = createPeformanceCalculator(
      aPerformance,
      playFor(aPerformance)
    );
    const result = Object.assign({}, aPerformance);
    result.play = calculator.play;
    result.amount = calculator.amount;
    result.volumeCredits = calculator.volumeCredits;

    return result;
  }

  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }

  function amountFor(aPerformance) {
    return new PerformanceCalculator(aPerformance, playFor(aPerformance))
      .amount;
  }

  function volumeCreditsFor(aPerformance) {
    return new PerformanceCalculator(
      aPerformance,
      playFor(aPerformance)
    ).volumeCredits();
  }

  function totalVolumeCredits(data) {
    return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
  }

  function totalAmount(data) {
    return data.performances.reduce((total, p) => total + p.amount, 0);
  }
}
