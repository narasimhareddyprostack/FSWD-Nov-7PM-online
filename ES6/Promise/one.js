let doTask = (a, b) => {
  //do some transactions
  let flag = true;
  if (flag) {
    a("Working File");
  } else {
    b("Not Working");
  }
};
doTask(
  (suchi) => {
    console.log(suchi);
  },
  (err) => {
    console.log(err);
  }
);
