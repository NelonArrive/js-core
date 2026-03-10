const obj = {
	name: 'Nelon',
	age: 18,
	job: 'Fullstack',
}

const entries = [
	['name', 'Nelon'],
	['age', 18],
	['job', 'Fullstack'],
]

// console.log(Object.entries(obj))
// console.log(Object.fromEntries(entries))

const map = new Map(entries)

// console.log(map.get('job'))
map.set('newField', 42).set(obj, 'Value of obj').set(NaN, 'NaNus')

// console.log(map.get(NaN))

map.delete('job')
console.log(map.has('job'))
console.log(map.size)
map.clear()

// ============================================================

// for (let [key, value] of map.entries()) {
// 	console.log(key, value)
// }

// for (let val of map.values()) {
// 	console.log(val)
// }

// for (let key of map.keys()) {
// 	console.log(key)
// }

// map.forEach((val, key, m) => {
// 	console.log(val, key)
// })

// ========================================

// const array = [...map]
// const array = Array.from(map)
// const mapObj = Object.fromEntries(map.entries())
// console.log(mapObj)

// ========================================
const users = [{ name: 'Elena' }, { name: 'Alex' }]

const visits = new Map()

visits
	.set(users[0], new Date())
	.set(users[1], new Date(new Date().getTime() + 1000 * 60))
	.set(users[2], new Date(new Date().getTime() + 5000 * 60))

function lastVisit(user) {
	return visits.get(user)
}

console.log(lastVisit(users[1]))

// ========================================

function twoSum(nums, target) {
	const seen = new Map()

	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i]
		if (seen.has(complement)) {
			return [seen.get(complement), i]
		}
		seen.set(nums[i], i)
	}

	return []
}
