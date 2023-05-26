class Person{
    constructor(name, gender, nation, state, distict, pincode, phoneNumber){
        this.name = name;
        this.gender = gender;
        this.nation = nation;
        this.state = state;
        this.distict = distict;
        this.pincode = pincode;
        this.phoneNumber = phoneNumber
    }
    printDetails(){
        console.log(this.name, this.gender, this.nation, this.state, this.distict, this.pincode, this.phoneNumber)
    }
}

const member = new Person(niranjan, male, indian, tamilnadu, vellore, 632004, 9566498090);
member.printDetails()