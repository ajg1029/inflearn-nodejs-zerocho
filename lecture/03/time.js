console.time('timeAttack')
let a = 0
for (let i = 0; i < 100; i++) {
    a += i
}
console.log(a)
console.timeEnd('timeAttack')