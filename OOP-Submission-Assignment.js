class Dog {
	breed;
	color;
	height;
	weight;
	name;

	shake = () => { console.log(`${this.name} shakes.`) }
	sit = () => { console.log(`${this.name} sits.`) }
	layDown = () => { console.log(`${this.name} lays down.`) }
}

var dog = new Dog()
dog.breed = "Hound"
dog.color = "Brown"
dog.height = "2 feet"
dog.weight = "60 pounds"
dog.name = "Fido"

dog.shake()
dog.sit()
dog.layDown()