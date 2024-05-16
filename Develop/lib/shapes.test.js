const { Triangle, Circle, Square } = require('./shapes'); // Require the Triangle, Circle, and Square classes

// Test the Triangle class
test('Triangle renders correctly', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

// Test the Circle class
test('Circle renders correctly', () => {
    const shape = new Circle();
    shape.setColor('red');
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
});

// Test the Square class
test('Square renders correctly', () => {
    const shape = new Square();
    shape.setColor('green');
    expect(shape.render()).toEqual('<rect x="70" y="20" width="160" height="160" fill="green" />');
});
