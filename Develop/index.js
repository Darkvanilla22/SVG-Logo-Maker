const fs = require('fs');
const prompt = require('prompt-sync')();

function generateShape(shape, color) {
    const size = 100;  // Size for better visibility
    shape = shape.toLowerCase();  // Normalize the shape input to lowercase
    switch (shape) {
        case 'circle':
            // Circle is centered at (150, 100) with a radius of size
            return `<circle cx="150" cy="100" r="${size}" fill="${color}" />`;
        case 'square':
            // Square is centered by adjusting x, y to start at 100, 50, with the total size being twice the "size"
            return `<rect x="100" y="50" width="${size * 2}" height="${size * 2}" fill="${color}" />`;
        case 'triangle':
            // Points adjusted to make the triangle visually centered
            return `<polygon points="150,10 250,190 50,190" fill="${color}" />`;
        default:
            throw new Error("Unsupported shape: " + shape);
    }
}