function tomato(m, n, board) {
  let notRiped = 0;
  const q = [];
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
          if (board[i][j] === 0) {
              notRiped++;
          }
          if (board[i][j] === 1) {
              q.push([i, j, 0]);
          }
      }
  }
  if (notRiped === 0) console.log(0);

  while (q.length) {
      const [cx, cy, days] = q.shift();

      max = Math.max(days, max);

      for (let i = 0; i < 4; i++) {
          const nx = dx[i] + cx;
          const ny = dy[i] + cy;
          if ((0<= nx && nx < n) && (0<= ny && ny < m) && board[nx][ny] === 0) {
              board[nx][ny] = 1;
              notRiped--;
              q.push([nx, ny, days + 1]);
          }
      }
  }
  if (notRiped) {
      console.log(-1);
  }

}

