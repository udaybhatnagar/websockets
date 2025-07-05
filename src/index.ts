

// function sumofage(user1:User,user2:User){
// return user1.age +user2.age;
// }

// const ans=sumofage({name:"uday",age:21},{name:"vidhi",age:22});
// console.log(ans);

interface User{
    id:string,
    name:string,
    age:number,
    email:string,
    password:string
}

type updatedProps= Pick<User,'name'|'email'|'password'>

type UpdatepropsOptional=Partial<updatedProps>

function updateUser(updatedprops:updatedProps){
    //database call

}