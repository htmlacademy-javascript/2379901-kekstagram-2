const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};


const isEscEvent  = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

export { getRandomInteger, isEscEvent };