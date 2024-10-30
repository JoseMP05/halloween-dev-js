// Long way
/* export function createMagicPotion(potions, target){
  const solutions = []

  for(let i = 0; i <= potions.length; i++){
    const difference = target - potions[i]
    const matchingPotionIndex = potions.indexOf(difference)

    if(matchingPotionIndex === -1 || matchingPotionIndex === i)
      continue

    if(solutions.length && matchingPotionIndex >= solutions[1])
      continue

    if (matchingPotionIndex < i)
      continue

    solutions[0] = i
    solutions[1] = matchingPotionIndex
  }

  return solutions.length ? solutions : undefined
}
 */

export function createMagicPotion (potions, target) {
  const seen = {}

  for (let i = 0; i < potions.length; i++) {
    const difference = target - potions[i]

    if (seen.hasOwnProperty(difference)) { return [seen[difference], i] }

    seen[potions[i]] = i
  }

  return undefined
}
