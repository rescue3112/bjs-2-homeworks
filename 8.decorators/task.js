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
function debounceDecoratorNew(func, timeout) {
  let lastCallArgs;
  let timer;
  let flag = false;
  function wrapper(...rest) {
    lastCallArgs = rest;
    if (!flag) {
      flag = true;
      timer = setTimeout(() => {
        func(...lastCallArgs);
        flag = false;
      }, timeout);
      return func(...rest);
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...lastCallArgs);
        flag = false;
      }, timeout);
    }
  }
  return wrapper;
}
function debounceDecorator2(func, timeout) {
  let lastCallArgs;
  let timer;
  let flag = false;
  wrapper.count = 0;
  function wrapper(...rest) {
    lastCallArgs = rest;
    if (!flag) {
      flag = true;
      timer = setTimeout(() => {
      	console.log('Кол-во вызовов: ' + ++wrapper.count);
        func(...lastCallArgs);
        flag = false;
      }, timeout);
      console.log('Кол-во вызовов: ' + ++wrapper.count);
      return func(...rest);
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
      	console.log('Кол-во вызовов: ' + ++wrapper.count);
        func(...lastCallArgs);
        flag = false;
      }, timeout);
    }
  }
  return wrapper;
}