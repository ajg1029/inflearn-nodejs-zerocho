const min = 2; // 2부터 10,000,000(천만)까지 소수를 찾는 알고리즘. 에라토스테네스의 체?
const max = 10_000_000;
const primes = [];


// function generatePrimes(start, range) {
//     let isPrime = true;
//     const end = start + range;
//     for (let i = start; i < end; i++) {
//         for (let j = start; j < Math.sqrt(end); j++) {
//             if (i !== j && i % j === 0) {
//                 isPrime = false;
//                 break
//             }
//         }
//         if (isPrime) {
//             primes.push(i);
//         }
//         isPrime = true
//     }
// }


// 이렇게 되어야 하는 거 아닌가?
// 쓰레드 나눠서 하려면 위에꺼 써야댐
function generatePrimes(start, end) {
    let isPrime = true;
    for (let i = start; i < end; i++) {
        for (let j = start; j < Math.sqrt(end); j++) {
            if (i !== j && i % j === 0) {
                isPrime = false;
                break
            }
        }
        if (isPrime) {
            primes.push(i);
        }
        isPrime = true
    }
}

console.time('prime');
generatePrimes(min, max);
console.timeEnd('prime');
console.log(primes.length);