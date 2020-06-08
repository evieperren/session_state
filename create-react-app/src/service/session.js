export function writeToSessionStorage (key, value) {
  sessionStorage.setItem(key, value)
}

export function getSessionStorage (key, value) {
  sessionStorage.getItem(key)
}