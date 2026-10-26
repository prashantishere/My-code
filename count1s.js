let count = 0;
function countsecond() {
  console.log(count);
  count++;

  if (count == 5) {
    clearInterval(f);
  }
}

let f = setInterval(countsecond, 1000);
console.log(f);
