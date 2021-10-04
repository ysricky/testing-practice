const analyze = (arr) => {
  return {
    avr: arr.reduce((acc, curr) => (acc += curr), 0) / arr.length,

    min: Math.min(...arr),

    max: Math.max(...arr),

    len: arr.length,
  };
};

export default analyze;
