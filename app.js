console.log(process.argv);

// only log the input args

for (let arg of process.argv) {
  if (arg[0] !== '/') {
    console.log(arg);
  }
}
