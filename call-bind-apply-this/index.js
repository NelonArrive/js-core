const user = {
	fullName: 'James Bool',
	email: 'user@gmail.com',
	role: 'user',
	isAdmin: false,
	logInfo(role) {
		console.log(`Full Name: ${this.fullName}`)
		console.log(`Email: ${this.email}`)
		console.log(`Is Admin: ${!!this.isAdmin}`)
		console.log(`Role: ${role}`)
	},
}

const admin = {
	fullName: 'David Pat',
	email: 'admin@gmail.com',
	isAdmin: true,
}

// user.logInfo.bind(admin, 'admin')()
// user.logInfo.call(admin, 'admin')
// user.logInfo.apply(admin, ['admin'])

// Example
const array = [1, 2, 3, 4, 5]

// function miltBy(arr, n) {
// 	return arr.map(i => i * n)
// }
// console.log(miltBy(array, 5))

Array.prototype.miltBy = function (n) {
	return this.map(i => i * n)
}

console.log(array.miltBy(5))
