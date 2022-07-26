function solution(record) {
  let answer = [],
    temp = { order: [] },
    uid = '',
    chatInfo = [];
  for (let i = 0; i < record.length; i++) {
    chatInfo = record[i].split(' '); // leave id nickname
    uid = chatInfo[1];
    if (chatInfo[0] !== 'Leave') {
      temp[uid] = chatInfo[2];
    }
    if (chatInfo[0] !== 'Change') {
      temp.order.push([chatInfo[0], uid]);
    }
  }

  answer = temp.order.map((v) => {
    if (v[0] == 'Enter') return `${temp[v[1]]}님이 들어왔습니다.`;
    else if (v[0] == 'Leave') return `${temp[v[1]]}님이 나갔습니다.`;
  });

  return answer;
}
