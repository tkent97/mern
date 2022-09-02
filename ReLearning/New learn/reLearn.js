// const learn = ["book", "school", "online", "teacher"];

// const mapping = learn.map((elem, idx) => {
//     return `${idx + 2} ${elem} "is cool"`
// })

const learn2 = ["books", "history", "science", "math"];

const filterLearn = learn2.filter(el => el.includes("o")).map
    ((learn) => learn + " contains an o")

console.log(filterLearn)


