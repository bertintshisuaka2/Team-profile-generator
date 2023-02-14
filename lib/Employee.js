class Employee {
    //constructor method for class
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email; 
    }

    //getter methods for the attributes of Employee
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;