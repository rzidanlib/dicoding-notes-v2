export function getLocale() {
  if (localStorage.getItem("locale") === null) {
    putLocale("id");
  }

  return localStorage.getItem("locale");
}

export function putLocale(locale) {
  return localStorage.setItem("locale", locale);
}

export function getTheme() {
  if (localStorage.getItem("theme") === null) {
    putTheme("light");
  }

  return localStorage.getItem("theme");
}

export function putTheme(theme) {
  return localStorage.setItem("theme", theme);
}
