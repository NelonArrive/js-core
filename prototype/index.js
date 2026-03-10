const person = {
	name: 'Maxim',
	age: 25,
	greet: () => {
		console.log('Greet!')
	},
}

const person1 = new Object({})

Object.prototype.sayHello = () => console.log('Hello!')

const nelon = Object.create(person)