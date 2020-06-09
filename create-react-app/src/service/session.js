export function writeToSessionStorage (key, value) {
  sessionStorage.setItem(key, value)
}

export function getSessionStorage (key) {
  return sessionStorage.getItem(key)
}

export function ensureString (value) {
  if(value){
    return value
  }
  return ''
}