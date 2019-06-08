function rollTheDices() {
  return Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1);
}

export { rollTheDices };
