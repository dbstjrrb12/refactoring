// 중첩된 레코드 캡슐화하기
export const customerData = {
  1920: {
    name: '마틴 파울러',
    id: '1920',
    usages: {
      2016: {
        1: 50,
        2: 55,
        3: 54,
        4: 57,
        5: 58,
        6: 51,
        7: 48,
        8: 49,
        9: 45,
        10: 65,
        11: 64,
        12: 58,
      },
      2015: {
        1: 70,
        2: 63,
        3: 76,
        4: 72,
        5: 67,
        6: 68,
        7: 62,
        8: 55,
        9: 59,
        10: 76,
        11: 71,
        12: 69,
      },
    },
  },
  38673: {
    name: '닐 포드',
    id: '38673',
    usages: {
      2016: {
        1: 69,
        2: 55,
        3: 76,
        4: 72,
        5: 67,
        6: 65,
        7: 61,
        8: 55,
        9: 71,
        10: 72,
        11: 71,
        12: 69,
      },
      2015: {
        1: 70,
        2: 63,
        3: 54,
        4: 57,
        5: 58,
        6: 58,
        7: 48,
        8: 47,
        9: 45,
        10: 51,
        11: 64,
        12: 63,
      },
    },
  },
};

export function compareUsage(customerId, laterYear, month) {
  const later = customerData[customerId].usages[laterYear][month];
  const earlier = customerData[customerId].usages[laterYear - 1][month];

  return {
    laterAmount: later,
    change: later - earlier,
  };
}

customerData[customerId].usages[year][month] = amount;
