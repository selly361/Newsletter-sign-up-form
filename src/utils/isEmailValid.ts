function isEmailValid(email: string) {
  if (email.trim() === "") {
    return false
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return false
  }

  return true
}

export { isEmailValid }
