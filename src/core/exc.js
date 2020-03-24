export function isPhone() {
  return /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)
}

export function formatTime(timestamp) {
  // 2019.01.02
  const date = new Date(timestamp)
  return `${date.getFullYear()}.${zeroizm(date.getMonth() + 1)}.${zeroizm(date.getDate())}`
}


export function zeroizm(d) {
  return d < 10 ? `0${d}` : `${d}`
}