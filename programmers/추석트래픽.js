function solution(lines) {
  let max = -1;

  const info = lines.map((line) => {
    const [_, resTime, processTime] = line.split(' ');
    return [resTime, processTime.slice(0, processTime.length - 1)];
  });

  const timeRanges = info.map(([resTime, processTime]) => {
    const pow = 2;
    const processTimeSec = Number(processTime) * 1000;
    const endSec =
      1000 *
      resTime
        .split(':')
        .map((time, i) => Number(time) * Math.pow(60, pow - i))
        .reduce((acc, v) => acc + v, 0);
    const startSec = endSec - processTimeSec + 1;
    return [startSec, endSec, processTimeSec];
  });

  timeRanges.sort((a, b) => a[0] - b[0]);

  timeRanges.forEach(([start, end]) => {
    [start, end].forEach((point) => {
      let count = 0;
      const newRangeStart = point;
      const newRangeEnd = point + 999;
      timeRanges.forEach(([compareStart, compareEnd]) => {
        if (
          (newRangeStart <= compareEnd && newRangeEnd >= compareStart) ||
          (newRangeStart <= compareStart && newRangeEnd >= compareEnd) ||
          (newRangeStart <= compareStart && newRangeEnd >= compareStart)
        ) {
          count += 1;
        }
      });
      max = Math.max(max, count);
    });
  });
  return max;
}
