export const setCount = (num) => {
  return {
    type: "copy",
    payload: num
  };
};
export const setTotal = (num) => {
  return {
    type: "copytotal",
    payload: num
  };
};
export const subadd = (num) => {
  return {
    type: "add",
    payload: num
  };
};
export const subsub = (num) => {
  return {
    type: "sub",
    payload: num
  };
};
export const inc = () => {
  return {
    type: "inc"
  };
};
export const dec = () => {
  return {
    type: "dec"
  };
};
export const increase = (product) => {
  return {
    type: "increase",
    payload: product
  };
};
export const decrease = (product) => {
  return {
    type: "decrease",
    payload: product
  };
};
