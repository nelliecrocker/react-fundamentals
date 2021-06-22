//ES6 JS Classes
class User {
    constructor(name) {
        this.name = name
        this.type = 'Trial User'
    }

    //Method 1
    greet() {
        console.log(`Welcome back, ${this.name}`);
    }
    //Method 2
    status() {
        console.log(`Current status: ${this.type}`);
    }
}

class TrialUser extends User {
    trialEnding() {
        console.log(`Your trial will be ending soon, ${this.name}. Would you like to join our program?`);
    }
}

//instance of User class
let anonDude = new User('Anonymous')
anonDude.greet()
anonDude.status()

//instance of TrialUser class
let trialUser = new TrialUser('Paul')
trialUser.greet()
trialUser.trialEnding()
trialUser.status()

//Banned User

class BannedUser extends User {
    userBanned(){
        console.log(`This is to inform you that you are banned from this program.`);
    }
}