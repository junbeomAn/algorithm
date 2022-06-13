function isVip(payment, period) {
  const MONTH = 12;
  const section = {
    payment: {
      first: 900000,
      second: 600000,
    },
    period: {
      two: 2 * MONTH,
      five: 5 * MONTH,
    },
  };
  if (payment >= section.payment.first && period >= section.period.two) {
    return true;
  } else if (
    payment >= section.payment.second &&
    period >= section.period.five
  ) {
    return true;
  }
  return false;
}

function solution(periods, payments, estimates) {
  const N = periods.length;
  const currMonthVip = [];
  const nextMonthVip = [];
  let toBeVip = 0;
  let toBeNonVip = 0;

  for (let i = 0; i < N; i++) {
    const period = periods[i];
    const paymentLastTwelveMonth = payments[i].reduce((sum, p) => p + sum, 0);
    const estimate = estimates[i];

    currMonthVip[i] = isVip(paymentLastTwelveMonth, period);
    nextMonthVip[i] = isVip(
      paymentLastTwelveMonth - payments[i][0] + estimate[i],
      period
    );
  }

  for (let i = 0; i < N; i++) {
    if (currMonthVip[i] === false && nextMonthVip[i] === true) {
      toBeVip += 1;
    } else if (currMonthVip[i] === true && nextMonthVip[i] === false) {
      toBeNonVip += 1;
    }
  }
  return [toBeVip, toBeNonVip];
}
