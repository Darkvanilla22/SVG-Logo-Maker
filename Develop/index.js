// index.js

const fs = require('fs');
const readline = require('readline');
const { Triangle, Circle, Square } = require('./lib/shapes');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

(async () => {
    const text = await askQuestion('Enter up to three characters for the text: ');
    const textColor = await askQuestion('Enter the text color (keyword or hexadecimal): ');
    const shapeType = await askQuestion('Choose a shape (circle, triangle, square): ');
    const shapeColor = await askQuestion('Enter the shape color (keyword or hexadecimal): ');

    let shape;
    switch (shapeType.toLowerCase()) {
        case 'triangle':
            shape = new Triangle();
            break;
        case 'circle':
            shape = new Circle();
            break;
        case 'square':
            shape = new Square();
            break;
        default:
            console.log('Invalid shape type.');
            rl.close();
            return;
    }

    shape.setColor(shapeColor);

    const svgContent = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>
`;

    fs.writeFileSync('logo.svg', svgContent.trim());
    console.log('Generated logo.svg');
    rl.close();
})();