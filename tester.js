function foo() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(2);
      reject();
    }, 1000);
  });
}

async function bar() {
  try {
    const a = await foo();
    const b = await foo();
    return a;
  } catch (err) {
    console.error(err);
  }
}

bar();
// 2
// Cannot read properties of undefined (reading 'toString') 
