// Реализовать ф-цию sum которая принимает любое кол-во аргументов и возвращает сумму всех аргументов
function sum(...args){
    let result = 0;
    for(let i = 0; i < args.length; i++){
        result += args[i];
    }
    return result
}
console.log(sum(5, 3, 2));


//лучше сделать через reduce
function betterSum(...args) {
    var result = args.reduce((sum, current) => sum + current, 0);
    return result;
}
  
console.log(betterSum(5, 3, 2));
