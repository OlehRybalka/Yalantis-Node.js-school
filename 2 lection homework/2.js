// Реализовать memoization - функция, которая принимает функции с любым количеством аргументов, и если она уже вызывалась ранее с этими же аргументами - отдавать сразу ответ, если же нет, вызывать переданную функцию
const multiply = (x, y) => x * y;

const memoize = (fn) => {
  let cache = {};

  return function(...args){
    let value = 1;

    if (args in cache) {
      console.log('Fetching from cache');
      value = cache[args];
    } else {
      console.log('Calculating result');
      for(let i = 0; i < args.length; i++){
        value *= args[i];
      }
      cache[args] = value;
    }
    return value
  }
}

const memoizedMulti = memoize(multiply);
console.log(memoizedMulti(3, 5));
console.log(memoizedMulti(3, 5));