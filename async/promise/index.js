const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('Данные получены ✅')
		// reject('Ошибка ❌')
	}, 1000)
})

promise
	.then(data => console.log(data)) // если всё ок
	.catch(err => console.log(err)) // если ошибка
	.finally(() => console.log('Завершено!'))

// ========================================================

const getUser = fetch('https://jsonplaceholder.typicode.com/users/1')
const getPosts = fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
const getComments = fetch(
	'https://jsonplaceholder.typicode.com/comments?postId=1'
)

Promise.all([getUser, getPosts, getComments])
	.then(async ([userRes, postsRes, commentsRes]) => {
		const user = await userRes.json()
		const posts = await postsRes.json()
		const comments = await commentsRes.json()

		console.log('👤 User:', user)
		console.log('📝 Posts:', posts.length)
		console.log('💬 Comments:', comments.length)
	})
	.catch(err => console.error('Ошибка:', err))

Promise.race([getUser, getPosts, getComments])
	.then(async ([userRes, postsRes, commentsRes]) => {
		const user = await userRes.json()
		const posts = await postsRes.json()
		const comments = await commentsRes.json()

		console.log('👤 User:', user)
		console.log('📝 Posts:', posts.length)
		console.log('💬 Comments:', comments.length)
	})
	.catch(err => console.error('Ошибка:', err))
