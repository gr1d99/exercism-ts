interface IBandLookup {
  [key: string]: number
}

const bandsLookup: IBandLookup = {
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

type Input = (keyof IBandLookup)[]

export function decodedValue(input: Input): number {
  const [band1, band2] = input
  return parseInt(`${bandsLookup[band1]}${bandsLookup[band2]}`, 10)
}

const d = decodedValue(['brown', 'pink'])
console.dir({d})