let c = 550;
let b = 500;
let time = 0;
const q = [];

const visited = Array(200001)
  .fill(0)
  .map(() => ({}));
q.push([b, 0]);
visited[b][time] = true;

while (c <= 200000) {
  c += time;

  if (visited[c][time]) {
    console.log(time);
    break;
  }
  const len = q.length;

  for (let i = 0; i < len; i++) {
    const [pos, currTime] = q.shift();
    // console.log(q);
    const newTime = currTime + 1;
    let newPos = pos - 1;

    if (0 <= newPos && newPos <= 200000) {
      visited[newPos][newTime] = true;
      q.push([newPos, newTime]);
    }
    newPos = pos + 1;
    if (0 <= newPos && newPos <= 200000) {
      visited[newPos][newTime] = true;
      q.push([newPos, newTime]);
    }
    newPos = pos * 2;
    if (0 <= newPos && newPos <= 200000) {
      visited[newPos][newTime] = true;
      q.push([newPos, newTime]);
    }
  }
  time += 1;
}
