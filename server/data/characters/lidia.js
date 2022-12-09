export default {
  name: "Lidia",
  backgrounds: [
    {
      displayName: "Nobility",
      description: "Being born into a household of privilege comes with a host of expectations and and responsibilities but, generally, also with a basic education.",
      luck: 1,
      stamina: 0,
      vigilance: 0,
      willpower: 2,
      primarySkill: "Performance",
      secondarySkill: "Personal Defense",
      tertiarySkill: "Artisan (Chemist)",
      traitsOptional: []
    },
    {
      displayName: "Skilled Crafter",
      description: "Not all workers are simple laborers many have honed their craft to such levels that they could make a living in most villages where they're skills are in demand.",
      luck: 0,
      stamina: 1,
      vigilance: 1,
      willpower: 2,
      primarySkill: "Artisan (Chemist)",
      secondarySkill: "Medicine",
      tertiarySkill: "Physical Conditioning",
      traitsOptional: []
    },
    {
      displayName: "Tutored Student",
      description: "Ambitious or wealthy heads of households might higher private tutors for they're children or even send them off to an academy for an education.",
      luck: 0,
      stamina: 1,
      vigilance: 1,
      willpower: 2,
      primarySkill: "Discipline",
      secondarySkill: "Artisan (Chemist)",
      tertiarySkill: "Knowledge (Academics)",
      traitsOptional: []
    }
  ],
  advancementPoints: 0,
  attributes: {
    body: 0,
    mind: 3,
    perception: 1,
    reflexes: 2,
    'Defense Bonus, Mental': 3,
    'Defense Bonus, Melee': 2,
    'Defense Bonus, Ranged': 1,
    'Size': 0,
    'Speed': 4
  },
  resources: {
    defense: {
      max: 11,
      currentMax: 11,
      current: 11
    },
    stamina: {
      max: 5,
      currentMax: 5,
      current: 5
    },
    vigilance: {
      max: 6,
      currentMax: 6,
      current: 6
    },
    willpower: {
      max: 12,
      currentMax: 12,
      current: 12
    },
    luck: {
      max: 2,
      currentMax: 2,
      current: 2
    },
    wounds: {
      max: 3,
      currentMax: 3,
      current: 3
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
      advancementPoints: 0,
      advancementPointsSpend: 0,
      traits: [
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
      displayName: 'Artisan (Chemist)',
      advancementPoints: 1,
      advancementPointsSpend: 20,
      traits: [
        {
          name: "Crafty",
          cost: 2,
          effect: "Gain +1 to your Craft skill checks.",
          skillBoosts: ["Craft"]
        },
        {
          name: "Copy Cat",
          cost: 2,
          effect: "Gain +1 to your Forge/Duplicate skill checks.",
          skillBoosts: ["CForge/Duplicateraft"]
        },
        {
          name: "Discerning Artisan",
          cost: 2,
          effect: "Gain +1 to your Identify skill checks.",
          skillBoosts: ["Identify"]
        },
        {
          name: "Crafty",
          cost: 3,
          effect: "Gain +1 to your Craft skill checks.",
          skillBoosts: ["Craft"]
        },
        {
          name: "Discerning Artisan",
          cost: 3,
          effect: "Gain +1 to your Identify skill checks.",
          skillBoosts: ["Identify"]
        },
        {
          name: "Combat Chemist",
          cost: 8,
          effect: "You may use your Artisan (Chemist) skill to make melee or ranged attacks that involve deploying your concoctions without additional tools (ex. blowing powder, pour liquid, or tossing a vial of something awful all apply, but firing a crossbow with an explosive attached to the bolt would not)",
          alwaysDisplay: true
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
      advancementPointsSpend: 12,
      traits: [
        {
          name: "Commanding",
          cost: 2,
          effect: "Gain +1 to your command skill checks.",
          skillBoosts: ["Command"]
        },
        {
          name: "Focused",
          cost: 2,
          effect: "Gain +1 to your concentrate skill checks.",
          skillBoosts: ["Concentrate"]
        },
        {
          name: "Mind Over Matter",
          cost: 8,
          effect: "Gain +1 max wounds."
        }
      ],
      checks: [
        'Command',
        'Concentrate',
        'Resit Fear'
      ]
    },
    knowledgeAcademics: {
      displayName: 'Knowledge (Academics)',
      advancementPoints: 1,
      advancementPointsSpend: 2,
      traits: [
        {
          name: "Naturalist",
          cost: 2,
          effect: "Gain +1 to your science skill checks.",
          skillBoosts: ["Science"]
        }
      ],
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
      advancementPointsSpend: 6,
      traits: [
        {
          name: "Medic",
          cost: 2,
          effect: "Gain +1 to your first aid and triage skill checks.",
          skillBoosts: ["First Aid", "Triage"]
        },
        {
          name: "Apothecary",
          cost: 2,
          effect: "Gain +1 to your pharmaceuticals skill checks.",
          skillBoosts: ["Pharmaceuticals"]
        },
        {
          name: "Barber",
          cost: 2,
          effect: "Gain +1 to your surgery skill checks.",
          skillBoosts: ["Surgery"]
        }
      ],
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
      advancementPointsSpend: 0,
      checks: [
        'Faint',
        'Melee Attack'
      ]
    },
    performance: {
      displayName: 'Performance',
      advancementPoints: 12,
      advancementPointsSpend: 0,
      traits: [
        {
          name: "Bard",
          cost: 2,
          effect: "Gain +1 to your oration skill checks.",
          skillBoosts: ["Oration"]
        },
        {
          name: "Politician",
          cost: 2,
          effect: "Gain +1 to your diplomacy skill checks.",
          skillBoosts: ["Diplomacy"]
        },
        {
          name: "Politician",
          cost: 3,
          effect: "Gain +1 to your diplomacy skill checks.",
          skillBoosts: ["Diplomacy"]
        },
        {
          name: "Intimidating Presence",
          cost: 5,
          effect: "Gain a bonus die on all checks where you are attempting to instill fear in your audience.",
          alwaysDisplay: true
        }
      ],
      checks: [
        'Diplomacy',
        'Music',
        'Oration'
      ]
    },
    personalDefense: {
      displayName: 'Personal Defense',
      advancementPoints: 1,
      advancementPointsSpend: 5,
      traits: [
        {
          name: "Combat Awareness",
          cost: 2,
          effect: "Gain +1 max defense.",
        },
        {
          name: "Combat Awareness",
          cost: 3,
          effect: "Gain +1 max defense.",
        }
      ],
      checks: []
    },
    personalMovement: {
      displayName: 'Personal Movement',
      advancementPoints: 0,
      advancementPointsSpend: 0,
      traits: [],
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
      advancementPoints: 1,
      advancementPointsSpend: 2,
      traits: [
        {
          name: "Stubborn Tenacity",
          cost: 2,
          effect: "Gain +1 to all hold breath and remain conscious skill checks.",
          skillBoosts: ["Hold Breath", "Remain Conscious"]
        },
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
      advancementPoints: 0,
      advancementPointsSpend: 0,
      traits: [
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
      advancementPoints: 0,
      advancementPointsSpend: 0,
      traits: [
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