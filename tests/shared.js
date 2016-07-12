const tiedButtons = [
  { disabled: true },
  { disabled: true },
  { disabled: true },
  { disabled: true },
  { disabled: true },
  { disabled: true },
  { disabled: true },
  { disabled: true },
  { disabled: true },
]

const winButtons = [
  { disabled: true },
  { disabled: true },
  { disabled: true },
  { disabled: false },
  { disabled: false },
  { disabled: false },
  { disabled: false },
  { disabled: false },
  { disabled: false },
]

let wins = {
  X: 0,
  O: 0,
  ties: 0,
}

export default {
  tiedButtons,
  winButtons,
}
