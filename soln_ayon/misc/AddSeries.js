//(1+2-3-4+5+6-7-8….+-n)
//input number 
//output number
//iterate thru that
//need 2 pointers
//one for add and one for sub  we can use toggle boolean
//one for counting total
// when toggle is true we add and when false we subtract
// when any odd number we can change the toggle 
const AddSeries =(num) => {
  let count=0;
  let toggle= true;
  
  for(let i=1; i<=num ; i++){
    if(i%2!==0 && i>1){
      toggle =!toggle;
    }
    if(toggle) {
      count+=i;
    }
    if(!toggle){
      count-=i;
    }
  }
  return count;
};
console.log(AddSeries(7));