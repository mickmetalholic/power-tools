const KEY_PREFIX = '__POWER_UTILS__'

export function getLocalStorage(key: string): unknown {
  const v = window.localStorage.getItem(`${KEY_PREFIX}--${key}`)

  if (!v) {
    return v
  }

  try {
    return JSON.parse(v)
  } catch {
    return v
  }
}

export function setLocalStorage(key: string, value: unknown): void {
  const valueStr = JSON.stringify(value)
  window.localStorage.setItem(`${KEY_PREFIX}--${key}`, valueStr)
}
