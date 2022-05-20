const unit = {
  hourSec: 60 ** 2,
  minSec: 60 ** 1,
};

function toSec(time) {
  const [h, m, s] = time.split(':').map(Number);
  return unit.hourSec * h + unit.minSec * m + s;
}
function format(time) {
  const h = String(Math.floor(time / unit.hourSec)).padStart(2, '0');
  time = time % unit.hourSec;

  const m = String(Math.floor(time / unit.minSec)).padStart(2, '0');
  time = String(time % unit.minSec).padStart(2, '0');
  return `${h}:${m}:${time}`;
}

class Q {
  start = 0;
  last = 0;
  data = [];
  constructor() {}

  push(n) {
    this.data.push(n);
    this.last = this.last + 1;
  }
  pop() {
    const ret = this.data[this.start];
    this.start += 1;
    return ret;
  }
  get front() {
    return this.data[this.start];
  }
}

function solution(play_time, adv_time, logs) {
  play_time = toSec(play_time);
  adv_time = toSec(adv_time);

  const totalTime = Array(play_time).fill(0);
  const logsStartSec = [];
  const logsEndSec = [];

  logs.forEach((log) => {
    const [s, e] = log.split('-');
    logsStartSec.push(toSec(s));
    logsEndSec.push(toSec(e));
  });
  for (let i = 0; i < logs.length; i++) {
    totalTime[logsStartSec[i]] = totalTime[logsStartSec[i]] + 1;
    totalTime[logsEndSec[i]] = totalTime[logsEndSec[i]] - 1;
  }
  for (let i = 1; i < play_time; i++) {
    totalTime[i] = totalTime[i] + totalTime[i - 1];
  }

  let sum = 0;
  let max = 0;
  const q = new Q();
  let startTime = 0;

  for (let i = 0; i < adv_time; i++) {
    sum += totalTime[i];
    q.push(totalTime[i]);
  }

  max = sum;
  // advtime 부터 돌면서 sum에 맨 앞의 것을 빼고 현재 것을 더하면서
  // 구간합이 최대이면 max에 업데이트하고
  // 시작 시간 또한 업데이트한다.
  for (let i = adv_time; i < play_time; i++) {
    sum -= q.pop();
    sum += totalTime[i];
    q.push(totalTime[i]);
    if (max < sum) {
      max = sum;
      startTime = i - adv_time + 1;
    }
  }

  return format(startTime);
}
