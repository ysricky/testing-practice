const capitalize = (string) => {
  if (string !== '') {
    const newString = string
      .split(' ')
      .filter((filtered) => filtered !== '')
      .map((word) => {
        const stringArray = word.toLowerCase().split('');
        stringArray.splice(0, 1, stringArray[0].toUpperCase());
        return stringArray.join('');
      });
    return newString.join(' ');
  } else {
    return '';
  }
};

export default capitalize;
