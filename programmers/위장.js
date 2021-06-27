function solution (clothes) {
  // 시간 복잡도 N, 공간 복잡도 N
  // 의상들의 모음을 closet으로 정하고 closet에 각 파트별로 옷의 숫자를 저장한다.
  let answer = 0;
  const closet = clothes.reduce((acc, v) => {
    if (!acc[v[1]]) {
      acc[v[1]] = 1;
    } else {
      acc[v[1]]++;
    }
    return acc;
  }, {});
  // 옷의 각 파트에 대해서 조합해서 입을 수 있는 경우의 수를 구한다. 모든 파트의 옷은 하나를 입는경우와, 안입는 경우 둘로 나뉜다.
  // 마지막에 -1 은 모든 파트의 옷들을 하나도 입지 않는 경우를 빼준 것.
  answer = Object.keys(closet).reduce((acc, part) => acc * (closet[part] + 1), 1) - 1;
  return answer;
};
