function validParentheses(patern) {
  let obj = {
    '(' : 0,
    '{' : 0,
    '[' : 0
  };
    
  for(let i=0; i<patern.length; i++){
      
    let curVal = patern[i];
      
    if(curVal===')' && obj['(']<=0 ){
      return false;
    } 
    if(curVal==='}' && obj['{']<=0 ){
      return false;
    }
    if(curVal===']' && obj['[']<=0 ){
      return false;
    }
      
    //  obj[curVal] = curVal
    if(curVal===')'){
      if(obj['(']>0){
        obj['(']--;
      }
    }
    else if(curVal==='}'){
      if(obj['{']>0){
        obj['{']--;
      }
    }
    else if(curVal===']'){
      if(obj['[']>0){
        obj['[']--;
      }
    }
    else 
         { 
      console.log(i);
      obj[curVal] ++;
    }
  }

      
  console.log(obj);
  return !((obj['('])||(obj['{'])||(obj['[']));
}
    
 
function validParentheses(parens) {
    //lets use some hashmap
    //use an object for key value mapping
  let obj= {
    '(':')',
    '{':'}',
    '[':']',
  };
     //use an array for stack
  let stack=[];
  for (let i of parens){
    if(obj[i]){
      stack.push(i);
    }
     else{
      let lastVal = stack.pop();
      if(i!==obj[lastVal]){
        return false;
      }
    }
     
  }
  return !stack.length;
}


console.log(validParentheses(''));
