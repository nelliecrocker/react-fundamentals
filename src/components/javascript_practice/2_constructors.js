//! Constructor
class User {
    constructor(first, last, e) {
        this.f = first
        this.l = last
        this.email = e
    }
}

let userOne = new User("Paul", "O'connor", "poconnor@elevenfifty.org")
console.log(userOne.first); //undefined
console.log(userOne.f); //Paul
console.log(userOne.l);//O'connor
console.log(userOne);//User {f: "Paul", l: "O'connor", email: "poconnor@elevenfifty.org"}


class Player {
    constructor(number, height, team) {
        this.number = number
        this.height = height
        this.team = team
    }
}

let playerOne = new Player("23", "6'5", "Chicago Bulls")