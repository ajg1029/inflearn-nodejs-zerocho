// REPL 에서
// 그냥 node os 라고만 실행시켜도 나오긴 함
// ...? 안되는디요


const operatingSystem = require('os')
console.log(operatingSystem)
// 이렇게 하면 되용
console.log(operatingSystem.cpus())