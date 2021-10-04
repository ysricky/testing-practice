const reverseString = (string) => {
  const newArray = [];
  string.split('').map((char) => {
    newArray.unshift(char);
  });
  return newArray.join('');
};

export default reverseString;
