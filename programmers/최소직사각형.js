function solution(sizes) {
  let ph = sizes[0][0];
  let pv = sizes[0][1];
  let pw = sizes[0][0] * sizes[0][1];

  for (let i = 1; i < sizes.length; i++) {
    const tw1 = Math.max(ph, sizes[i][0]) * Math.max(pv, sizes[i][1]);
    const tw2 = Math.max(ph, sizes[i][1]) * Math.max(pv, sizes[i][0]);

    if (tw1 < tw2) {
      ph = Math.max(ph, sizes[i][0]);
      pv = Math.max(pv, sizes[i][1]);
      pw = ph * pv;
    } else {
      ph = Math.max(ph, sizes[i][1]);
      pv = Math.max(pv, sizes[i][0]);
      pw = ph * pv;
    }
  }
  return pw;
}
