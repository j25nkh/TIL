function each(list, iteratee, finalCallback) {
  var counter = 0;
  
  if (list.length === 0) {
    finalCallback();
  }

  function callback() {
    counter++;




    if (counter === list.length) {
      finalCallback(err);
    }
  }


  for (var i = 0; i < list.length; i++) {
    iteratee(list[i], callback);
  }

}
