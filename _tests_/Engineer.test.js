const Engineer = require('..lib/Engineer');

//creating an instance of Engineer class
const engineerTester = new Engineer('KABUNDI', '900190', 'bertintshisuaka@hotmail.com', 'bertintshisuaka2');

test('Testing the getName() method to return the name', () => {
    expect(engineerTester.getName()).toBe('KABUNDI');
});

test('Testing the getId() method to return the ID', () => {
    expect(engineerTester.getId()).toBe('900190');
});

test('Testing the getName() method to return the email', () => {
    expect(engineerTester.getEmail()).toBe('bertintshisuaka@hotmail.com');
});

test('Testing the getName() method to return the email', () => {
    expect(engineerTester.getGitHub()).toBe('bertintshisuaka2');
});