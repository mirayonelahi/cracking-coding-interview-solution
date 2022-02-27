
const makeArr = (x,y,n) => {
  
    //input: x-y is number range
    //n is number of distinct values
  let arr=new Set(); 
  let i=0;
  while( i <n){
    let randVal = Math.floor(Math.random()*(y-x)+x);
    arr.add(randVal); 
    i++;
    if(i===n && arr.size!==3){
      i--;
    }
  } 
  return arr;   
};
    
console.log(makeArr(12,20,3));