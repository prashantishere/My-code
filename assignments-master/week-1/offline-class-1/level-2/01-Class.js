// class Animal {
//   constructor(name, legCount) {
//     this.name = name;
//     this.legCount = legCount;
//   }
//   describe() {
//     return `${this.name} has ${this.legCount} legs`;
//   }
// }
// function prashant(n) {
//   return n + n;
// }

let ans = 0;
for (let i = 1; i <= 50; i++) {
  ans += i;
}

console.log(ans);
