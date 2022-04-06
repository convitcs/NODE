const students=[
    {
        name: 'An Nguyễn',
        score: 9
    },
    {
        name: 'Lê Phan',
        score: 7
    },
    {
        name: "Bình Đỗ",
        score: 10
    },
    {
        name: "Anh Phạm",
        score: 8
    }
]
let sum= students.reduce( (accumulator, curr) => {
    return accumulator+curr.score
},
0
)

console.log("Diem trung binh cua cac hoc sinh la:" + sum/students.length)