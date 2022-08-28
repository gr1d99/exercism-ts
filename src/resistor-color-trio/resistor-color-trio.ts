type Band =
  "black" |
  "brown" |
  "red" |
  "orange" |
  "yellow" |
  "green" |
  "blue" |
  "violet" |
  "grey" |
  "white"

const bandLookup: Record<Band, number> = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
}


type Input = Band[]

export function decodedResistorValue(input: Input): string {
  const [firstColor, secondColor, lastColor] = input
  const ohmsCodeValue = Number(`${bandLookup[firstColor]}${bandLookup[secondColor]}`)
  const lastColorValue = bandLookup[lastColor]
  const ohmsValue = Number(ohmsCodeValue + "0".repeat(lastColorValue))
  const isKiloOhms = ohmsValue > 1000

  if (isKiloOhms) {
    const toKiloOhms =  ohmsValue / 1000
     return `${toKiloOhms} kiloohms`
  }

  return `${ohmsValue} ohms`
}
