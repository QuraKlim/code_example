/* export function debounce(callback: Function, delay: number) {
  let timer: NodeJS.Timeout;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback();
    }, delay);
  };
} */

export const debounce = (func: Function, delay: number) => {
  let timeoutId: any;
  return function (...args: any) {
    clearTimeout(timeoutId);
    // @ts-ignore
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};
