const Intern = require('..lib/Intern');

//creating an instance of Intern class
const internTester = new Intern('KABUNDI', '900190', 'bertintshisuaka@hotmail.com', 'Georgia Tech');

test('Testing the getName() method to return the name', () => {
    expect(internTester.getName()).toBe('KABUNDI');
});

test('Testing the getId() method to return the ID', () => {
    expect(internTester.getId()).toBe('900190');
});

test('Testing the getName() method to return the email', () => {
    expect(internTester.getEmail()).toBe('bertintshisuaka@hotmail.com');
});

test('Testing the getName() method to return the email', () => {
    expect(internTester.getSchool()).toBe('Georgia Tech');
});