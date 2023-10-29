export function unslugify(slug) {
  return slug.split("-").join(" ")
}

export function firstLetterCapital(string) {
  const str = string
  const arr = str.split(" ")

  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
  }

  const str2 = arr.join(" ")
  return str2
}

export function capitalizeWords(str) {
  return str.replace(/\b\w/g, (match) => match.toUpperCase())
}

export function spacesToCamelCase(str) {
  let stringWithoutSpaces = str.replace(/\s+/g, "")
  let camelCaseString = capitalizeWords(stringWithoutSpaces)
  return camelCaseString.charAt(0).toLowerCase() + camelCaseString.slice(1)
}
