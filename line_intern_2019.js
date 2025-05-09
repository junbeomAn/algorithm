const c = 11;
const b = 1;
const g = 0;

// 0 <= p <= 200,000
// b - 1, b + 1, b * 2
const q = [[b, 0, c, g]];
const LIMIT = 200000;

const dx = [(v) => v + 1, (v) => v - 1, (v) => v * 2];

function bfs() {
  while (q.length) {
    const [brown, time, cony, gap] = q.shift();

    if (cony > LIMIT) {
      console.log(time);
      return;
    }

    if (brown === cony) {
      console.log(time);
      return;
    }

    for (let i = 0; i < dx.length; i++) {
      const fn = dx[i];
      const nextB = fn(brown);

      if ((nextB) => 0 && nextB <= LIMIT) {
        q.push([nextB, time + 1, cony + gap + 1, gap + 1]);
      }
    }
  }
}

bfs();
