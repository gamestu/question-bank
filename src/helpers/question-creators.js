export const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const createMultipleQuestion = (key) => {
  const a = getRandom(2, 9);
  const b = getRandom(2, 9);
  const operator = 'x';
  const answer = a * b;
  return (
    {a, b, operator, answer}
  );
}

export const createAddQuestion = (key) => {
  const a = getRandom(10, 19);
  const b = getRandom(1, 9);
  const answer = a + b;
  const operator = '+';
  return (
    { a, b, operator, answer }
  );;
}

export const createSubstractQuestion = (key) => {
  const a = getRandom(11, 19);
  const b = getRandom(a - 10, 9);
  const answer = a - b;
  const operator = '-';
  return (
    { a, b, operator, answer }
  );
}