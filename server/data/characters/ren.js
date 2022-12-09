export default {
  name: "Ren",
  backgrounds: [
    {
      displayName: "Hunter",
      description: "Those who have experience capturing or killing creatures regardless of method. A hunter may use traps to protect their farm, a bow feed their family, or their own wits to bring in criminals with bounties on their heads.",
      luck: 1,
      stamina: 1,
      vigilance: 1,
      willpower: 0,
      primarySkill: "survival",
      secondarySkill: "stealth",
      tertiarySkill: "awareness"
    },
    {
      displayName: "Laborer",
      description: "",
      luck: 0,
      stamina: 2,
      vigilance: 0,
      willpower: 2,
      primarySkill: "physical conditioning",
      secondarySkill: "survival",
      tertiarySkill: "artisan (primitive construction)",
      traitsOptional: ["Hardy", "Healthy"]
    },
    {
      displayName: "Ranger",
      description: "Ambitious or wealthy heads of households might higher private tutors for they're children or even send them off to an academy for an education.",
      luck: 0,
      stamina: 1,
      vigilance: 1,
      willpower: 2,
      primarySkill: "Personal Movement",
      secondarySkill: "Melee Combat",
      tertiarySkill: "Survival",
      traitsOptional: []
    }
  ],
  advancementPoints: 0,
  attributes: {
    body: 3,
    mind: 2,
    perception: 1,
    reflexes: 0,
    'Defense Bonus, Mental': 2,
    'Defense Bonus, Melee': 0,
    'Defense Bonus, Ranged': 1,
    'Size': 0,
    'Speed': 6
  },
  resources: {
    defense: {
      max: 6,
      currentMax: 6,
      current: 6
    },
    stamina: {
      max: 12,
      currentMax: 12,
      current: 12
    },
    vigilance: {
      max: 6,
      currentMax: 6,
      current: 6
    },
    willpower: {
      max: 9,
      currentMax: 9,
      current: 9
    },
    luck: {
      max: 2,
      currentMax: 2,
      current: 2
    },
    wounds: {
      max: 6,
      currentMax: 6,
      current: 6
    }
  },
  skills: {
    animalHandling: {
      displayName: 'Animal Handling',
      advancementPoints: 0,
      advancementPointsSpend: 0,
      traits: [
      ],
      checks: [
        'Befriend',
        'Ride/Drive',
        'Train/Command'
      ]
    },
    awareness: {
      displayName: 'Awareness',
      advancementPoints: 1,
      advancementPointsSpend: 2,
      traits: [
        {
          name: "Eye for Detail",
          cost: 2,
          effect: "gain +1 to all search and investigate skill checks",
          skillBoosts: ["Search", "Investigate"]
        },
      ],
      checks: [
        'Alertness',
        'Investigate',
        'Search',
        'Sense Motive',
        'Size Up'
      ]
    },
    artisan_chemist: {
      displayName: 'Artisan (Primitive Construction)',
      advancementPoints: 1,
      advancementPointsSpend: 2,
      traits: [
        {
          name: "Crafty",
          cost: 2,
          effect: "Gain +1 to your Craft skill checks.",
          skillBoosts: ["Craft"]
        }
      ],
      checks: [
        'Craft',
        'Forge/Duplicate',
        'Identify',
        'Repair',
        'Upgrade'
      ]
    },
    discipline: {
      displayName: 'Discipline',
      advancementPoints: 0,
      advancementPointsSpend: 0,
      traits: [ ],
      checks: [
        'Command',
        'Concentrate',
        'Resit Fear'
      ]
    },
    knowledgeAcademics: {
      displayName: 'Knowledge (Academics)',
      advancementPoints: 0,
      advancementPointsSpend: 0,
      traits: [ ],
      checks: [
        'History',
        'Science',
        'Strategy'
      ]
    },
    knowledgeLore: {
      displayName: 'Knowledge (Lore)',
      advancementPoints: 0,
      advancementPointsSpend: 0,
      checks: [
        'Placeholder'
      ]
    },
    legerdemain: {
      displayName: 'Legerdemain',
      advancementPoints: 0,
      advancementPointsSpend: 0,
      traits: [ ],
      checks: [
        'Pick Locks', 
        'Slight of Hand', 
        'Thieves Cant'
      ]
    },
    medicine: {
      displayName: 'Medicine',
      advancementPoints: 0,
      advancementPointsSpend: 0,
      traits: [ ],
      checks: [
        'First Aid',
        'Pharmaceuticals',
        'Surgery',
        'Triage'
      ]
    },
    meleeCombat: {
      displayName: 'Melee Combat',
      advancementPoints: 0,
      advancementPointsSpend: 6,
      traits: [
        {
          name: "Brawler",
          cost: 2,
          effect: "Treat all successful melee attacks made with out a weapon as if they had 1 additional success",
          alwaysDisplay: true
        },
        {
          name: "Line Disruptor",
          cost: 2,
          effect: "Treat one additional success spent to attempt to shove an opponent as if it were two additional successes",
          alwaysDisplay: true
        },
        {
          name: "Solid Striker",
          cost: 2,
          effect: "hen you take the power attack combat action, treat your body stat as 1 greater than it is",
          alwaysDisplay: true
        }
      ],
      checks: [
        'Faint',
        'Melee Attack'
      ]
    },
    performance: {
      displayName: 'Performance',
      advancementPoints: 0,
      advancementPointsSpend: 0,
      traits: [ ],
      checks: [
        'Diplomacy',
        'Music',
        'Oration'
      ]
    },
    personalDefense: {
      displayName: 'Personal Defense',
      advancementPoints: 0,
      advancementPointsSpend: 0,
      traits: [ ],
      checks: []
    },
    personalMovement: {
      displayName: 'Personal Movement',
      advancementPoints: 0,
      advancementPointsSpend: 12,
      traits: [
        {
          name: "Adventurous",
          cost: 2,
          effect: "Gain +1 to all climb and swim skill checks.",
          skillBoosts: ["Climb", "Swim"]
        },
        {
          name: "Long Strider",
          cost: 2,
          effect: "Gain +1 speed"
        },
        {
          name: "Mobile Combatant",
          cost: 2,
          effect: "Gain a cumulative +1 mobile defense bonus against free attacks you provoke while moving."
        },
        {
          name: "Long Strider",
          cost: 3,
          effect: "Gain +1 speed"
        },
        {
          name: "Mobile Combatant",
          cost: 3,
          effect: "Gain a cumulative +1 mobile defense bonus against free attacks you provoke while moving.",
          alwaysDisplay: true
        }
      ],
      checks: [
        'Balance',
        'Climb',
        'Jump',
        'Sprint',
        'Swim',
        'Tumble'
      ]
    },
    physicalConditioning: {
      displayName: 'Physical Conditioning',
      advancementPoints: 0,
      advancementPointsSpend: 12,
      traits: [
        {
          name: "Staying Power",
          cost: 2,
          effect: "Gain +1 to all endurance skill checks.",
          skillBoosts: ["Endurance"]
        },
        {
          name: "High Vitality",
          cost: 2,
          effect: "Gain +1 stamina"
        },
        {
          name: "High Vitality",
          cost: 3,
          effect: "Gain +1 stamina"
        },
        {
          name: "Peak Health",
          cost: 5,
          effect: "Gain +1 wound"
        }
      ],
      checks: [
        'Lift/Drag/Push',
        'Endurance',
        'Hold Breath',
        'Remain Conscious'
      ]
    },
    rangedCombat: {
      displayName: 'Ranged Combat',
      advancementPoints: 0,
      advancementPointsSpend: 0,
      traits: [ ],
      checks: [
        'Ranged Attack'
      ]
    },
    stealth: {
      displayName: 'Stealth',
      advancementPoints: 1,
      advancementPointsSpend: 5,
      traits: [
        {
          name: "Obfuscate",
          cost: 2,
          effect: "Gain +1 to all hide and sneak skill checks.",
          skillBoosts: ["Hide", "Sneak"]
        },
        {
          name: "Obfuscate",
          cost: 3,
          effect: "Gain +1 to all hide and sneak skill checks.",
          skillBoosts: ["Hide", "Sneak"]
        }
      ],
      checks: [
        'Blend In',
        'Cover Tracks',
        'Disguise',
        'Hide',
        'Sneak'
      ]
    },
    survival: {
      displayName: 'Survival',
      advancementPoints: 4,
      advancementPointsSpend: 17,
      traits: [
        {
          name: "Scavenger",
          cost: 2,
          effect: "Gain +1 to all forage and hunt skill checks.",
          skillBoosts: ["Forager", "Hunt"]
        },
        {
          name: "Surveyor",
          cost: 2,
          effect: "Gain +1 to all find/build shelter and make traps skill checks.",
          skillBoosts: ["Find/Build Shelter", "Make Traps"]
        },
        {
          name: "Tracker",
          cost: 2,
          effect: "Gain +1 to all track skill checks.",
          skillBoosts: ["Track"]
        },
        {
          name: "Scavenger",
          cost: 3,
          effect: "Gain +1 to all forage and hunt skill checks.",
          skillBoosts: ["Forager", "Hunt"]
        },
        {
          name: "Surveyor",
          cost: 3,
          effect: "Gain +1 to all find/build shelter and make traps skill checks.",
          skillBoosts: ["Find/Build Shelter", "Make Traps"]
        },
        {
          name: "Scavenger",
          cost: 5,
          effect: "Gain +1 to all forage and hunt skill checks.",
          skillBoosts: ["Forager", "Hunt"]
        }
      ],
      checks: [
        'Find/Build Shelter',
        'Forage',
        'Hunt',
        'Make Traps',
        'Track'
      ]
    }
  }
}