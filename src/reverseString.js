function reverse(str) {
    return str.split("").reverse().join("");
}
//console.log(reverse("hello"));

//function to find a number divisible by 3 or 5 or both. 
function reverseString(value){
  if(value ==='')
  {
    return null;
  }
  else if(isNaN(value) && (typeof(value) !== typeof(String()))) //still has problems
  {
    return true;
  }
  else if(value === reverse(value))
  {
    console.log("ds");
    return true;
  }
   else if(value !== reverse(value))
  {
    return reverse(value);
  }
  
}