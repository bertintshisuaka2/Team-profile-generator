const Manager = require('..lib/Manager');

//creating an instance of Manager class
const managerTester = new Manager('KABUNDI', '900190', 'bertintshisuaka@hotmail.com', '200101');

test('Testing the getName() method to return the name', () => {
    expect(managerTester.getName()).toBe('KABUNDI');
});

test('Testing the getId() method to return the ID', () => {
    expect(managerTester.getId()).toBe('900190');
});

test('Testing the getName() method to return the email', () => {
    expect(managerTester.getEmail()).toBe('bertintshisuaka@hotmail.com');
});

test('Testing the getName() method to return the email', () => {
    expect(managerTester.getOfficeNumber()).toBe('200101');
});