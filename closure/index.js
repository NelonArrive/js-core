function createUrl(base) {
	return function (path) {
		return `${base}/${path}`
	}
}

const api = createUrl('https://api.example.com')

console.log(api('users')) // 👉 https://api.example.com/users
console.log(api('posts')) // 👉 https://api.example.com/posts
