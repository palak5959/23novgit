// stack(primitive) , heap(non primitive)

//->primitive->call by value(copy)

let name1 = "palak"

let name2 = name1;// palak
name2 = "elina";// elina

console.log(name1);
console.log(name2);

//->non primitive ->call by reference

let user1 = {
    email: "palak@gmail.com",
    upi: "user@pyl"
}

let user2 = user1;

console.log(user1);//{ email: 'palak@gmail.com', upi: 'user@pyl' }
console.log(user2);//{ email: 'palak@gmail.com', upi: 'user@pyl' }

user2.email = "elina@gmail.com";
console.log(user1);//{ email: 'elina@gmail.com', upi: 'user@pyl' }
console.log(user2);//{ email: 'elina@gmail.com', upi: 'user@pyl' }



