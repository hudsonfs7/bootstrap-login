function togleMode() {
  const theme = document.querySelector('[data-bs-theme]')
  const themeAply = theme.getAttribute('data-bs-theme')

  const tagHtml = document.documentElement
  tagHtml.classList.toggle('light')

  const imgSwitch = document.querySelector('.imgSwt', '.img')

  if (themeAply === 'light') {
    theme.setAttribute('data-bs-theme', 'dark')
    imgSwitch.setAttribute('src', '../assets/moon.svg')
  } else {
    theme.setAttribute('data-bs-theme', 'light')
    imgSwitch.setAttribute('src', '../assets/sun.svg')
  }
}
