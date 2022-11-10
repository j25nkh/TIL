const something = {
  age: 10,
  speak: function () {
    console.log(this.age);
  },
};

const butler = {
  age: 20,
  serve: function (cb) {
    cb();
  },
};

butler.serve(something.speak);