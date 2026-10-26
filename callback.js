function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function quad(n) {
  console.log("quad called ");
  return n * n * n * n;
}

function sumofsomething(a, b, fn) {
  let sq1 = fn(a);
  let sq2 = fn(b);
  // console.log(sq1 + sq2); this is not a good way doing any function it must be return something
  // return sq1 + sq2;
  console.log(sq1 + sq2);
}

//setTimeout(sumofsomething(6, 2, square), 2000);

setTimeout(() => {
  sumofsomething(2, 3, quad);
}, 5000);
console.log("after settimeout");
