const path = require('path')

// console.log(path)

console.log(path.join(__dirname, 'whereAmI.js'))
console.log(path.join(__dirname, '/whereAmI.js'))
console.log(path.resolve(__dirname, 'whereAmI.js'))
console.log(path.resolve(__dirname, '/whereAmI.js')) // 앞에꺼 무시하고 절대경로로 가버림

