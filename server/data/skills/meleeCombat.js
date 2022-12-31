export default {
  name: 'Melee Combat',
  description: "How well a character fights with a sword, axe, or fists. Melee combat skill is most often used when fighting in close quarters but also has a place in many sporting activities.",
  skillChecks: [
    {
      name: 'Faint',
      primaryAttribute: ['Reflexes'],
      teamworkPossible: false,
      description:
        '',
      difficultyExamples:
        `
          4 - 
          7 - 
          10 - 
          13 - 
          16 - 
          19 - 
          22 - 
        `,
      criticalFailure: 'The attacker provokes a free attack from the target',
      conditionalFailure: '',
      nearSuccess: 'The target looses 1 defense',
      criticalSuccess: `The target looses 1 defense and your next attack against the target this turn gains a bonus die`,
    },
      {
        name: 'Melee Attack',
        primaryAttribute: ['Reflexes'],
        teamworkPossible: false,
        description:
          '',
        difficultyExamples:
          `
            4 - 
            7 - 
            10 - 
            13 - 
            16 - 
            19 - 
            22 - 
          `,
        criticalFailure: 'The attacker loses 1 defense',
        conditionalFailure: 'The target loses 1 defense',
        nearSuccess: 'The target loses 1 defense and stamina',
        criticalSuccess: `
          The target loses 1 defense and suffers damage from the attack based on the weapon used, additionally for each point by which the skill check exceeded its difficulty the attacker may spend one additional success for the following effects: 
          - Extra Damage: increase the damage by one for each additional success spent.
          - Armor Piercing: increase the attacks APV by one for every two success spent.
          - Disarm: spend any amount of additional successes to attempt to disarm an opponent of one item they are holding. If the number of additional successes spent exceeds the target's melee defense bonus, or double the bonus if they are wielding the item in two hands, the item is knocked to the ground in the defender's hex of the attackers choice no further from the target than the number of successes spent to disarm greater than what was required. If the weapon were to end in the attacker's hex and the attack was made unarmed the attacker may choose to equip it as part of the attack action. 
          - Grapple: Coming Soon
          - Shove: if the attack was made unarmed or with a weapon with the bash property spend any amount of additional successes to attempt to knock the target back, the target will be pushed 1 hex for every success spent greater than the sum of the target's body stat and size. If a shove displaces a target by at least 1 hex more than their melee defense bonus the target is also knocked prone.
          - Targeted Attack: spend one additional success to target the body or legs, two to target a specific arm, or three to target the head, spend double the required number of success for the target location to also roll a second die for wound effect and the attacker chooses which of the die rolls to use.
          - Trip: Coming Soon
        `,
      }
  ],
  isSkillTree: true,
  traits: [
    {name: "Brawler", effect: {text: "Treat all successful melee attacks made with out a weapon as if they had 1 additional success"}, alwaysDisplay: true},
    {name: "Bull Rusher", effect: {text: "When you successfully shove a character with an attack, your next move action this turn has its speed reduced by 1 if you use the movement to close the distance between you and the shoved target"}, alwaysDisplay: true},
    {name: "Distracting Combatant", effect: {text: "Gain +1 to faint skill checks"}, alwaysDisplay: true},
    {name: "Fast attacker", effect: {text: "When you take the flurry of blows combat action, increase the maximum number of additional successes you may spend by 1"}, alwaysDisplay: true},
    {name: "Finesse Fighter", effect: {text: "Treat one additional success spent to attempt to disarm an opponent as if it were two additional successes"}, alwaysDisplay: true},
    {name: "Wrestler", effect: {text: "Treat one additional success spent to attempt to grapple an opponent as if it were two additional successes"}, alwaysDisplay: true},
    {name: "Line Disruptor", effect: {text: "Treat one additional success spent to attempt to shove an opponent as if it were two additional successes"}, alwaysDisplay: true},
    {name: "Tripper???", effect: {text: "Treat one additional success spent to attempt to trip an opponent as if it were two additional successes"}, alwaysDisplay: true},
    {name: "Solid Striker", effect: {text: "When you take the power attack combat action, treat your body stat as 1 greater than it is"}, alwaysDisplay: true},
    {name: "Weapon Training", cost: [2], unlimited: true, effect: {text: "Select one melee weapon, reduce the difficulty rating of that weapon when making attacks with it by 1"}, alwaysDisplay: true},
    {name: "TODO figure out how TWF works and make a trait for it", cost: [3], effect: {text: ""}, alwaysDisplay: true},
    {name: "Reckless Attacker", cost: [3, 8], effect: {text: "When making a melee attack action you may spend 1 point of defense to add one bonus die to your skill check, for each bonus die in the final skill check result lose one additional defense. If you've taken this trait twice you may add a second bonus die to your skill check when using this trait."}, alwaysDisplay: true}
  ],
};