export const convertToNum = (str) => {
  if (str.includes(".")) {
    return parseFloat(str);
  } else {
    return parseInt(str);
  }
};

export const calculatePercentage = (num) => {
  const result = num / 100;
  if (result.toString().length < 10 && !result.toString().includes("e")) {
    return result.toPrecision(1);
  }
  return result.toPrecision(2);
};

export const isSign = (str) => {
  return str === "+" || str === "-" || str === "X" || str === "/";
};
