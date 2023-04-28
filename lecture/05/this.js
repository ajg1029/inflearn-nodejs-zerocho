// 브라우저에서 this 는 window 를 가리킨다.

// node 에서는
// function 안에 있을 경우에는 global
// 전역 스코프에서는 빈 객체 {} 가 된다. module.exports

console.log(this === module.exports)
console.log(this === global)

function a() {
    console.log(this === module.exports)
    console.log(this === global)
}

a()