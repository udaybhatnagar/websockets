interface User2{
    readonly name:string,
    readonly age:number
}

const Userdetail:User2={
    name:"uday",
    age:20
}

Userdetail.name="uday bhatnagar"

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