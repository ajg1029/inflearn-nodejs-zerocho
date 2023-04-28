// console.log(process)
// console.log(process.cwd())
// console.log(process.env)

// setImmediate(() => {
//     console.log('setImmediate')
// })
// process.nextTick(() => {
//     console.log('process.nextTick')
// })
// setTimeout(() => {
//     console.log('setTimeout')
// }, 0)
// Promise.resolve().then(() => console.log('Promise'))
// 참고로 실행 환경에 따라서 setTimeout(0) 이랑 setImmediate 중에서 뭐가 먼저 실행될지 결정된다. 0ms 굳이 쓰지 말고 setImmediate 쓰자

// REPL 에서
// process.uptime()
// process.exit(0)
// process.exit(1)
