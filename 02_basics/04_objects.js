const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1,  obj2);

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = {
    name: "shivam",
    email: "shjkah@",
    mob: "09388432908"
}
// console.log(Object.keys(users));
// console.log(Object.values(users));
// console.log(Object.entries(users));

// console.log(users.hasOwnProperty('email'));

// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "shivam"
// }

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
// console.log(instructor);

// {
//     "name": "Shivam",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]