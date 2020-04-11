const throttle = (callback, delay = 100) => {
  let last = null
  let timer = null
  return (...args) => {
    const now = +new Date()
    if (last && now < last + delay) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        last = now
        callback.apply(this, args)
      }, delay)
    } else {
      last = now
      callback.apply(this, args)
    }
  }
}

export default throttle
