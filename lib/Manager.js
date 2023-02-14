 const Employee = require('./Employee');
 
 class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //this will call the Employee parent class constructor
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
 } 

 module.exports = Manager;