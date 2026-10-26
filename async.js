function hello(n) {
  return n + n;
}

function sub(n) {
  return n - n;
}

function delay(a, fn) {
  console.log(fn);
}
setTimeout(delay, 2000);
console.log("2s delay");
