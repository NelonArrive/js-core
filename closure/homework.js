function logPerson() {
	console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = { name: 'David', age: 13, job: 'Front' }
const person2 = { name: 'James', age: 17, job: 'Back' }

function bind(obj, fn) {
	return function (...args) {
		fn.apply(obj, args)
	}
}

bind(person1, logPerson)()
bind(person2, logPerson)()
