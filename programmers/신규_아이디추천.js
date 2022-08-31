function first(str) {
  return str.toLowerCase();
}
function isAlpha(c) {
  return 97 <= c.charCodeAt() && c.charCodeAt() <= 122;
}
function isNumber(c) {
  return '0' <= c && c <= '9';
}
function second(str) {
  const inclusive = { '-': 1, _: 1, '.': 1 };
  let result = '';
  for (const c of str) {
    if (isAlpha(c) || isNumber(c) || c in inclusive) result += c;
  }
  return result;
}
function third(str) {
  let temp = '';
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    if (c === '.') {
      temp += c;
      continue;
    } else {
      if (temp) {
        result += temp[0];
        temp = '';
      }
      result += c;
    }
  }
  if (temp) result += temp[0];
  return result;
}
function fourth(str) {
  let first = false,
    last = false;
  if (str[0] === '.') {
    first = true;
  }
  if (str[str.length - 1] === '.') {
    last = true;
  }
  if (first && last) {
    return str.slice(1, str.length - 1);
  } else if (first) {
    return str.slice(1);
  } else if (last) {
    return str.slice(0, str.length - 1);
  }
  return str;
}
function fifth(str) {
  return str === '' ? 'a' : str;
}
function sixth(str) {
  return str.length > 15 ? fourth(str.slice(0, 15)) : str;
}
function seventh(str) {
  return str.length <= 2
    ? str + str[str.length - 1].repeat(3 - str.length)
    : str;
}
function solution(new_id) {
  let answer = '';
  answer = first(new_id);
  answer = second(answer);
  answer = third(answer);
  answer = fourth(answer);
  answer = fifth(answer);
  answer = sixth(answer);
  answer = seventh(answer);

  return answer;
}
