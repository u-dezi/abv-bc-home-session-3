function findMissing(arr,arr2){
  //if two empty arrays are parameters
  if(arr.length <= 0 && arr2.length <=0)
  {
    return 0;
  }
  else 
  {
    return findElement(arr,arr2);
  }
}

//Function to find unique elements in both arrays
// It does this by firt concatenating botha arrays ,
// then it loops and picks none duplicate elements.
function findElement(array1,array2){

  let temp = array1.concat(array2);
  temp = temp.sort((a, b) => a - b);
  let storage;
  
  // removes unique and stores it in storage
  for(let i = 0; i <temp.length; i++){
    
    if(temp[i] === temp[i+1])
    {
      i++;
    }
    else
    {
       storage = temp[i];
    }
   
   
  }
  // if nothing is unique it is to return 0.
  if(storage == undefined)
  {
    return 0;
  }

  return storage;
}
