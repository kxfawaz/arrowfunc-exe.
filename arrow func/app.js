
  const filterOutOdds = (...nums) => nums.filter((num) => num % 2 === 0)


  const findMin = (...nums) => Math.min(...nums);

  

  const mergeObjects = (obj1, obj2) => {
return {...obj1,...obj2};
}


const doubleAndReturnArgs = (arr,...args) => [...arr,...args.map(value => value *2)]


const removeRandom = (items) => {
    let idx = Math.floor(Math.random()*items.length);
   return [...items.slice(0,idx), ...items.slice(idx+1)]
  
   
}


const extend = (array1,array2) => [...array1,...array2];

const addKeyVal = (obj, key ,val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}


const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key]
    return newObj;
}

const combine = (obj1,obj2) => ({...obj1,...obj2})


const update = (obj,key,val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj
}