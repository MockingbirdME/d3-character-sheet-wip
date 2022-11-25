const character1 = {
  name: "Joey, child of pain",
  advancementPoints: 7,
  attributes: {
    body: 1,
    mind: 0,
    perception: 1,
    reflexes: 2,
    'Armor Value': 0,
    'Defense Bonus, Mental': 1,
    'Defense Bonus, Melee': 2,
    'Defense Bonus, Ranged': 4,
    'Initiative': 2,
    'Reach': 1,
    'Size': 0,
    'Speed': 4
  },
  resources: {
    defense: {
      max: 8,
      currentMax: 8,
      current: 4
    },
    stamina: {
      max: 8,
      currentMax: 8,
      current: 4

    },
    vigilance: {
      max: 8,
      currentMax: 6,
      current: 4

    },
    willpower: {
      max: 8,
      currentMax: 8,
      current: 4

    },
    luck: {
      max: 3,
      currentMax: 2,
      current: 1

    },
    wounds: {
      max: 3,
      currentMax: 2,
      current: 1

    }
  },
  skills: {
    animalHandling: {
      displayName: 'Animal Handling',
      proficiency: 'novice',
      checks: [
        {name: 'Befriend', bonus: 1},
        {name: 'Ride/Drive', bonus: 1},
        {name: 'Train/Command', bonus: 1}
      ]
    },
    awareness: {
      displayName: 'Awareness',
      proficiency: 'Untrained',
      checks: [
        {name: 'Alertness', bonus: 2},
        {name: 'Investigate', bonus: 0},
        {name: 'Search', bonus: 0},
        {name: 'Sense Motive', bonus: 1},
        {name: 'Size Up', bonus: 1}
      ]
    },
    legerdemain: {
      displayName: 'Legerdemain',
      proficiency: 'Skilled',
      checks: [
        {name: 'Pick Locks', bonus: 1},
        {name: 'Slight of Hand', bonus: 2},
        {name: 'Thieves Cant', bonus: 0}
      ]
    }
  }
}

module.exports = [
  character1
]