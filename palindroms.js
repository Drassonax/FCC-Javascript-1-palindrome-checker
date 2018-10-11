function palindrome(str) {
    // Good luck!
    str = str.toLowerCase().split(/\W|_/).join('')
    for (let i=0; i<str.length; i++) {
        if (str[i] !== str[str.length-1-i]) {
            return false
        }
    }
    return true
  }

palindrome('eye')