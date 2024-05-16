// index.js

const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the text:',
        validate: input => input.length <= 3 || 'Text must be up to three characters'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (keyword or hexadecimal):',
    },
    {
        type: 'list',
        name: 'shapeType',
        message: 'Choose a shape:',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (keyword or hexadecimal):',
    }
];

inquirer.prompt(questions).then(answers => {
    const { text, textColor, shapeType, shapeColor } = answers;

    let shape;
    let textYPosition = 110; // Default Y position for Circle and Square

    switch (shapeType.toLowerCase()) {
        case 'triangle':
            shape = new Triangle();
            textYPosition = 140; // Adjusted Y position for Triangle
            break;
        case 'circle':
            shape = new Circle();
            break;
        case 'square':
            shape = new Square();
            break;
        default:
            console.log('Invalid shape type.');
            return;
    }

    shape.setColor(shapeColor);

    const svgContent = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    <text x="150" y="${textYPosition}" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>
`;

    fs.writeFileSync('logo.svg', svgContent.trim());
    console.log('Generated logo.svg');
});