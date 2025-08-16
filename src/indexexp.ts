// interface User2{
//     readonly name:string,
//     readonly age:number
// }

// const Userdetail:User2={
//     name:"uday",
//     age:20
// }

// Userdetail.name="uday bhatnagar"

//we can also wirte like this
// interface User2{
//      name:string,
//      age:number
// }

// const Userdetail:Readonly<User2>={
//     name:"uday",
//     age:20
// }

// Userdetail.name="uday bhatnagar"





// function sumofage(user1:User,user2:User){
// return user1.age +user2.age;
// }

// const ans=sumofage({name:"uday",age:21},{name:"vidhi",age:22});
// console.log(ans);

// interface User{
//     id:string,
//     name:string,
//     age:number,
//     email:string,
//     password:string
// }

// type updatedProps= Pick<User,'name'|'email'|'password'>

// type UpdatepropsOptional=Partial<updatedProps>

// function updateUser(updatedprops:updatedProps){
//     //database call

