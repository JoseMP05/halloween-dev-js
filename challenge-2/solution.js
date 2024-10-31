export function battleHorde (zombies, humans) {
  const zombiesArray = zombies.split('').map(Number)
  const humansArray = humans.split('').map(Number)

  let zombiesPower = zombiesArray[0]
  let humansPower = humansArray[0]

  for (let i = 1; i < zombiesArray.length; i++) {
    zombiesPower += zombiesArray[i]
    humansPower += humansArray[i]
  }

  const difference = Math.abs(zombiesPower - humansPower)

  if (zombiesPower === humansPower) return 'x'

  return zombiesPower > humansPower ? `${difference}z` : `${difference}h`
}