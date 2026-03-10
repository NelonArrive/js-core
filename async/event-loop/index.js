function log(value) {
	console.log(value)
}

console.log('1')

setTimeout(() => {
	console.log('SetTimeout 1')
	Promise.resolve().then(() => {
		console.log('Promise setTimeout')
	})
}, 0)

setTimeout(() => {
	console.log('setTimeout 2')
}, 0)

Promise.resolve().then(() => {
	log('Promise 1')
})

Promise.resolve().then(() => {
	log('Promise 2')
})

log('4')

// 1 - 4 - Promise 1 - Promise 2 - SetTimeout 1 - Promise setTimeout - setTimeout 2

// 🔅 microtasks
// выполняются сразу после текущего кода, до следующего рендера.
// после await (что до него сразу выполниться)
// Promise.then / catch / finally
// queueMicrotask()

// 🔅 macrotasks
// выполняются в следующем цикле событий (event loop).
// setTimeout()
// setInterval()
// requestAnimationFrame()
// обработчики событий (click, load, и т.д.)

// 🧠 Порядок:
// 1️⃣ Выполняется основной код
// 2️⃣ Потом все микрозадачи
// 3️⃣ Потом одна макрозадача
// 4️⃣ И снова по кругу
