// 예제 입력이 여러줄로 되어 있을 떼
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function(line) {
  input.push(line);
}).on('close', function() {
  const [n, m] = input[0].split(' ').map(Number);
  const p = Array(n + 1)
    .fill(0)
    .map((_, i) => i);
  let res = '';

  function getParent(parent, a) {
    if (parent[a] === a) return a;
    return (parent[a] = getParent(parent, parent[a]));
  }
  function unionParent(parent, a, b) {
    const pa = getParent(parent, a);
    const pb = getParent(parent, b);
    if (pa < pb) {
      parent[pb] = pa;
    } else {
      parent[pa] = pb;
    }
  }
  function checkSameParent(parent, a, b) {
    const pa = getParent(parent, a);
    const pb = getParent(parent, b);
    if (pa === pb) return true;
    return false;
  }

  for (let i = 1; i <= m; i++) {
    const [c, a, b] = input[i].split(' ').map(Number);
    if (c === 0) {
      unionParent(p, a, b);
    } else {
      if (checkSameParent(p, a, b)) {
        res += 'YES\n';
      } else {
        res += 'NO\n';
      }
    }
  }
  console.log(res);

  process.exit();
});
