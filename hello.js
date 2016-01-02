function myfirstmodule(fn) {
  fn(); // do the function right now
  return setInterval.apply(this, arguments); // defer to setInterval
}

module.exports = myfirstmodule; // let me be required