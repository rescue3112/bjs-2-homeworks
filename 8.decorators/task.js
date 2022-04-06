const hash = (args) => args.join(',');
function cachingDecoratorNew(func) {
  let cache = {};
  function wrapper(...rest) {
    let key = hash(rest);
    if (key in cache) {
      console.log("Из кэша: " + cache[key]);
      return "Из кэша: " + cache[key];
    } 
    if (Object.keys(cache).lenght > 5) {
      delete cache[Object.keys(cache)[0]];
    }
    let result = func(...rest);
    cache[key] = result;
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;
}
//let ttt=func (...rest);
//let timeout;
//let timer = setTimeout(() => {
  //func(...rest);
  //flag = false;
//}, timeout);


function debounceDecoratorNew(func, timeout) {
  let flag = false;
  let timeout2;
  return function (...args) {
    if (flag) {
      return;       
    }   
    clearTimeout(timeout2);
      func.apply(this, args);   
       flag = true;
    timeout2 = setTimeout(() => {
        flag = false;         
      func.apply(this, args);
    }, timeout);
    };
  }

function debounceDecoratorNew2(func, timeout) {
let flag = false;      
let timeout2; 
wrapper.count = 0;
  return function wrapper(...args) {

    if (isThrottled) {
      return;       
    }  
     wrapper.count++;
     clearTimeout(timeout2);
      func.apply(this, args);   
       flag = true;
   timeout2 = setTimeout(() => {
        flag = false;         
      func.apply(this, args);
    }, timeout);
};
  }