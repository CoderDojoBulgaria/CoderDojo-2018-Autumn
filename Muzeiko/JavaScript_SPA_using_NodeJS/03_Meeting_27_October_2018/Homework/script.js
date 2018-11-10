var Circle = function (inputRadius) {
    this.radius = inputRadius;

    this.calculateParameter = function () {
        return this.radius * 2;
    }
    this.calculateArea = function () {
        return Math.PI * (this.radius * this.radius);
    }
    this.calculatePerimeter = function () {
        return 2 * Math.PI * this.radius;
    }
}

var myCircle = new Circle(3);
console.log(myCircle.calculateArea());
console.log(myCircle.calculateParameter());
console.log(myCircle.calculatePerimeter());