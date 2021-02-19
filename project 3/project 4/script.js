'use strict';

class Rectangle { 
    constructor(height, width) {
       this.height = height; 
       this.width = width; 
    }
     
    calcArea () { 
       return this.height * this.width;
    }
}   

// const square = new Rectangle(20, 10); 
// const long = new Rectangle(20, 100);

// console.log(long.calcArea());
// console.log(square.calcArea()); 



class ColoredRectangleWithText extends Rectangle { 
    constructor(height, width, text, bgColor) {
        super(height, width); 
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProperty() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(20, 20, 'Hello World', 'blue');

div.showMyProperty(); 
console.log(div.calcArea());