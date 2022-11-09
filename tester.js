function outterFunction(){
  var print = 'sample text';  
  
  return function(){        
      console.log(print);
  }
}
innerFunction = outterFunction();
innerFunction();
