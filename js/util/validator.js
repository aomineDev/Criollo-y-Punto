export function isRequired(input) {
  if (input.value === '') {
    input.classList.add('invalid')
    return 1
  }

  return 0
}

export function isPhone(input) {
  if (/^\d{9}$/.test(input.value.replaceAll(" ", ""))) 
    return 0

  input.classList.add('invalid')
  return 1
}

export function isEmail(input) {
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value))
    return 0

  input.classList.add('invalid')
  return 1
}

export function isEqualLength(input, length) {
  if (input.value.length !== length) {
    input.classList.add('invalid')
    return 1
  }

  return 0
}
