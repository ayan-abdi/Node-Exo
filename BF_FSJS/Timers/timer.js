// const timerTimeOut = setTimeout(() => console.log('timer'), 0)
const timerImmediate = setImmediate(() => {
  console.log('timer')

  console.log("Après le timer");
})
