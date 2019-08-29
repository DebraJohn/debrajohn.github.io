export function isPhone() {
  return /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)
}