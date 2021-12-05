let doTask = new Promise((resolve, reject) => {
  //do some trasactions
  let flag = true;
  if (flag) {
    resolve("Success");
  } else {
    reject("Failure");
  }
});
doTask
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  });
