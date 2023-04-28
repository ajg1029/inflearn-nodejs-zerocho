console.log(__filename)
console.log(__dirname)

// exports 에 여러 개 넣고 싶을 때

const odd = '홀'
const even = '짝'

exports.odd = odd
exports.even = even

// 이렇게 넣는 건 됨
// module. <-- 생략