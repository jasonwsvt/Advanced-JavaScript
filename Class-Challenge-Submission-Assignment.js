class Shape {
	color
	getArea = () => {}
}

class Rectangle extends Shape {
	height = 0
	width = 0
	getArea = () => this.height * this.width
}

class Triangle extends Shape {
	base = 0
	height = 0
	getArea = () => this.base * this.height / 2
}

class Circle extends Shape {
	radius = 0
	getArea = () => Math.PI * this.radius ** 2
}

var rect = new Rectangle()
rect.height = 5
rect.width = 2
console.log("Rectangle:", rect.height, rect.width, rect.getArea())

var tri = new Triangle()
tri.base = 5
tri.height = 2
console.log("Triangle:", tri.base, tri.height, tri.getArea())

var cir = new Circle()
cir.radius = 5
console.log("Circle:", cir.radius, cir.getArea())