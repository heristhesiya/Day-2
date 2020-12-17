console.log('Local Storage, Session Storage, and Cookies')

// =================================================
console.log('LOCAL STORAGE')
// after session value store as it is its called local storage
localStorage.setItem('name', 'heris')
localStorage.setItem('name1', 'heris1')
localStorage.setItem('name2', 'heris2')
localStorage.setItem('name3', 'heris3')
console.log(localStorage.getItem('name'))
// localStorage.removeItem('name')

// ==================================================
console.log('SESSION STORAGE')
sessionStorage.setItem('name', 'ram')
sessionStorage.setItem('name1', 'ram1')
console.log(sessionStorage.getItem('name'))
sessionStorage.removeItem('name')

// ============================================
console.log('COOKIES')

document.cookie = 'name4=shree'

document.cookie = 'name=sita; Expires=' + new Date(2021, 3, 12).toUTCString()

document.cookie =
  'name1=hanuman; Expires=' + new Date(2021, 5, 22).toUTCString()

document.cookie =
  'name2=bahubali; Expires=' + new Date(2021, 11, 10).toUTCString()

console.log(document.cookie)
