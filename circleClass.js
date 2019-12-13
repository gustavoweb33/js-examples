/*Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The circles constructed must have two getters getArea() (PIr^2) and getPerimeter() (2PI*r) which give both respective areas and perimeter (circumference). */

class Circle {
    constructor( radius ) {
        this.radius = radius;
    }

    getArea() {
        const area = Math.PI * ( this.radius * this.radius );
        return area;
    }

    getPerimeter() {
        const perimeter = 2 * Math.PI * this.radius;
        return perimeter;
    }
}

const circle1 = new Circle( 4.44);
//const circle1Area = circle1.getArea();
const circlePerimeter = circle1.getPerimeter()
console.log(circlePerimeter)