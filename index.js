function myEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

function myMap(arr, callback) { 
  let newArr = [];
  myEach(arr, function(element) {
    newArr.push(callback(element));
  });
  return newArr;
}

function myReduce(arr, callback, initialValue) {
  let acc = initialValue;
  myEach(arr, function(element) {
    if (acc === undefined) {
      acc = element;
    } else {
      acc = callback(acc, element);
    }
  });
  return acc;
}

function myFilter(arr, callback) {
  let newArr = [];
  myEach(arr, function(element) {
    if (callback(element)) {
      newArr.push(element);
    }
  });
  return newArr;
}

function mySome(arr, callback) {
  let result = false;
  myEach(arr, function(element) {
    if (callback(element)) {
      result = true;
    }
  });
  return result;
}

function myEvery(arr, callback) {    
  let result = true;
  myEach(arr, function(element) {
    if (!callback(element)) {
      result = false;
    }
  });
  return result;
}
function myFind(arr, callback) {    
  let result = undefined;
  myEach(arr, function(element) {
    if (callback(element)) {
      result = element;
    }
  });
  return result;
}

function myEach(arr, callback) {
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            callback(arr[i]);
        }
    }else if (typeof arr === 'object') {
        for (let key in arr) {
            callback(arr[key]);
        }
    }
}

function myEach(arr, callback) {
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            callback(arr[i]);
        }
    }else if (typeof arr === 'object') {
        for (let key in arr) {
            callback(arr[key]);
        }
    }
}

function myFind(arr, callback){
    for (let i = 0; i < arr.length; i++){
        if (callback(arr[i])){
            return arr[i];
        }
    }
    return undefined;
}

function mySize(arr){
    let counter = 0;
    myEach(arr, function(){
        counter++;
    });
    return counter;
}

function myFirst(arr, n){
    if (n === undefined){
        return arr[0];
    }else{
        return arr.slice(0, n);
    }
}

function myLast(arr, n){
    if (n === undefined){
        return arr[arr.length - 1];
    }else{
        return arr.slice(arr.length - n);
    }
}

function myKeys(obj){
    let keys = [];
    myEach(obj, function(key){
        keys.push(key);
    });
    return keys;
}