# Zombie Horde

In an epic battle between the undead 🧟 and humans 👮‍♂️, both sides have a list of combatants with specific attack powers.

The battle unfolds in rounds, with each round pitting each combatant from their side against each other.

The side with the higher attack power wins the round, and their power is added to the next combatant of their team.

In case of a tie, both combatants fall and do not affect the next round.

Given two strings `zombies` and `humans`, where each digit (from 1 to 9) represents the attack power of a combatant, determine who remains at the end and with how much attack power.

**Important:** Both strings will always have the same length.

The output is a string representing the final result of the battle.

- If a zombie remains, return their power followed by "z", for example "3z".
- If a human remains, return their power followed by "h", for example "2h".
- If there is a tie and no one remains with power at the end, return "x".

Here is an example:

```javascript
const zombies = '242';
const humans = '334';

const result = battleHorde(zombies, humans);  // -> "2h"

// first round: zombie 2 vs human 3 -> human wins (+1)
// second round: zombie 4 vs human 3+1 -> tie
// third round: zombie 2 vs human 4 -> human wins (+2)
// result: "2h"
```

Another example with a tie:

```javascript
const zombies = '444';
const humans = '282';

const result = battleHorde(zombies, humans);  // -> "x"

// first round: zombie 4 vs human 2 -> zombie wins (+2)
// second round: zombie 4+2 vs human 8 -> human wins (+2)
// third round: zombie 4 vs human 2+2 -> tie
// result: "x"
```