const Employee = require('./lib/Employee');

//creating an instance of Employee class
const employeeTester = new Employee('KABUNDI', '900190', 'bertintshisuaka@hotmail.com');

test('Testing the getName() method to return the name', () => {
    expect(employeeTester.getName()).toBe('KABUNDI');
});

test('Testing the getId() method to return the ID', () => {
    expect(employeeTester.getId()).toBe('900190');
});

test('Testing the getName() method to return the email', () => {
    expect(employeeTester.getEmail()).toBe('bertintshisuaka@hotmail.com');
});