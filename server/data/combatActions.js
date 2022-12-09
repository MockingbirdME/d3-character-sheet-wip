export default [
  {
    displayName: "Walk",
    type: "Movement",
    actionPointCost: 1,
    staminaCost: 0,
    speed: 2,
    description:
      "Move up to half your speed in hexes."
  },
  {
    displayName: "Dash",
    type: "Movement",
    actionPointCost: 1,
    staminaCost: 1,
    speed: 3,
    description:
      "Move up to the character's speed in hexes, this movement provokes free attacks when the character moves from a hex that is threatened by an enemy to one that is not."
  },
  {
    displayName: "Sprint",
    type: "Movement",
    actionPointCost: 2,
    staminaCost: 2,
    speed: 7,
    description:
      "Make a *sprint* skill check and move up to a number of hexes based on the result, this movement provokes free attacks when the character moves into or out of of a threatened hex."
  },
  {
    displayName: "Climb",
    type: "Movement",
    actionPointCost: 1,
    staminaCost: 1,
    speed: 3,
    description: ""
  },
  {
    displayName: "Swim",
    type: "Movement",
    actionPointCost: 1,
    staminaCost: 1,
    speed: 3,
    description: ""
  },
  {
    displayName: "Faint",
    type: "Melee",
    actionPointCost: 1,
    staminaCost: 1,
    speed: 3,
    description:
      "Target one targets within your melee range, perform a faint skill check with them as the target"
  },
  {
    displayName: "Basic Attack",
    type: "Melee",
    actionPointCost: 1,
    staminaCost: 1,
    speed: 3,
    description:
      "Make an unarmed attack or an attack with a readied melee weapon. The character makes a *melee attack skill check* and applies the results."
  },
  {
    displayName: "Flurry of Blows",
    type: "Melee",
    actionPointCost: 1,
    staminaCost: 2,
    speed: 5,
    description:
      "Make a series of quick basic attacks, increasing your odds of getting past your opponents defenses at the cost of strength behind each blow. The character makes a *melee attack skill check*, adding one bonus die to the roll. If this attack hits ignore the character's body stat, if it's positive, for purposes of calculating damage. Regardless of the skill check total, a maximum of 1 additional success that can be spend as part of this skill check."
  },
  {
    displayName: "Power Attack",
    type: "Melee",
    actionPointCost: 1,
    staminaCost: 2,
    speed: 5,
    description:
      "Make an attack that sacrifices accuracy for power. The character makes a *melee attack skill check* with one penalty die added to it and one penalty die added to it unless the character performed a dash action this turn immediately before making this attack. If the attack hits treat the character's body stat as one higher than it is."
  },
  {
    displayName: "Quick Attack",
    type: "Melee",
    actionPointCost: 1,
    staminaCost: 1,
    speed: 2,
    description:
      "Make an attack that sacrifices power for speed. The character makes a *melee attack skill check*. If this attack hits, regardless of the skill check total, a maximum of 1 additional success can be spend as part of this skill check."
  },
  {
    displayName: "Aim",
    type: "Ranged",
    actionPointCost: 1,
    staminaCost: 0,
    speed: 2,
    description:
      "The character selects one target they can see and is within range of a readied, loaded, ranged weapon; their next attack against that target gains +1 to the skill check to a maximum of +2. An aiming character that moves or takes any non ranged attack action that requires a skill check is no longer aiming."
  },
  {
    displayName: "Load",
    type: "Ranged",
    actionPointCost: "varies",
    staminaCost: "varies",
    speed: "varies",
    description:
      "The character loads 1 readied piece of ammunition into a ranged weapon. The action point cost and stamina cost of this action vary based on the weapon being loaded."
  },
  {
    displayName: "Loose/Shoot/Fire",
    type: "Ranged",
    actionPointCost: 1,
    staminaCost: 0,
    speed: 2,
    description:
      "Make an attack with a readied, loaded, ranged weapon. The character makes a *ranged attack skill check* and applies the results."
  },
  {
    displayName: "Overwatch",
    type: "Ranged",
    actionPointCost: 1,
    staminaCost: 0,
    speed: 4,
    description:
      "The character chooses an area with a radius of 1 hex within the range of their readied, loaded, ranged weapon, readied throwable weapon, or cast, throwable spell. Until the beginning of the character's next turn anyone who enters or moves within the targeted area provokes a free attack that can be made with a readied and loaded ranged weapon."
  },
  {
    displayName: "Throw",
    type: "Ranged",
    actionPointCost: 1,
    staminaCost: 1,
    speed: 3,
    description:
      "Make an attack with a readied throwable weapon or cast throwable spell. The character makes a *ranged attack skill check* and applies the results."
  },
  {
    displayName: "Steady Oneself",
    type: "Defensive",
    actionPointCost: 1,
    staminaCost: 0,
    speed: 4,
    description:
      "The character takes stock of their surroundings and steadies their balance. They regain 2 defense."
  },
  {
    displayName: "Defensive Stance",
    type: "Defensive",
    actionPointCost: 1,
    staminaCost: 0,
    speed: 4,
    description:
      "The character readies themselves to continue an extended melee. They increase their melee defense bonus by 1 + the parry value of any weapons they have readied until the beginning of their next turn."
  },
  {
    displayName: "Dodge",
    type: "Defensive",
    actionPointCost: 1,
    staminaCost: 0,
    speed: 4,
    description:
      "The character bobs and weaves, zig and zags, and generally makes themselves a difficult target for ranged attacks. They increase their ranged defense bonus by 2 until the beginning of their next turn."
  },
  {
    displayName: "Restoration Action",
    type: "Defensive",
    actionPointCost: 1,
    staminaCost: 0,
    speed: 4,
    description:
      "The character does their best to catch their breath and reposition themselves. They regain 2 stamina."
  },
  {
    displayName: "Focus",
    type: "Other",
    actionPointCost: 1,
    staminaCost: 0,
    speed: 4,
    description:
      "The character clears their mind and ignores all distractions, spend one willpower to gain a bonus die on each skill check they make until the beginning of their next turn. When this action is taken the character may spend a max willpower instead to also ignore status effects, such as fear and wounds for the same duration."
  },
  {
    displayName: "Delay",
    type: "Other",
    actionPointCost: 0,
    staminaCost: 0,
    speed: "variable",
    description:
      "A character may choose to delay their next turn, when this action is taken set its speed to any value you wish between 1 and 10."
  },
  {
    displayName: "Ready Stow Item",
    type: "Other",
    actionPointCost: 1,
    staminaCost: 0,
    speed: 4,
    description:
      "The character readies up to one weapon or item or stows the same number of currently readied weapons/items."
  }
]