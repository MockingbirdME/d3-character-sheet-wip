export default {
  name: "Simu",
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
      primarySkill: "survival",
      secondarySkill: "physical conditioning",
      tertiarySkill: "animal handling",
      traitsOptional: ["Hardy", "Healthy"]
    },
    {
      displayName: "Sniper",
      description: "",
      luck: 0,
      stamina: 1,
      vigilance: 1,
      willpower: 2,
      primarySkill: "ranged combat",
      secondarySkill: "awareness",
      tertiarySkill: "stealth",
      traitsOptional: ["Ambusher", "Combat Reflexes"]
    }
  ],
  advancementPoints: 0,
  attributes: {
    body: 1,
    mind: 2,
    perception: 2,
    reflexes: 1,
    'Defense Bonus, Mental': 2,
    'Defense Bonus, Melee': 1,
    'Defense Bonus, Ranged': 3,
    'Size': 0,
    'Speed': 4
  },
  resources: {
    defense: {
      max: 8,
      currentMax: 8,
      current: 8
    },
    stamina: {
      max: 8,
      currentMax: 8,
      current: 8
    },
    vigilance: {
      max: 7,
      currentMax: 7,
      current: 7
    },
    willpower: {
      max: 8,
      currentMax: 8,
      current: 8
    },
    luck: {
      max: 3,
      currentMax: 3,
      current: 3
    },
    wounds: {
      max: 2,
      currentMax: 2,
      current: 2
    }
  },
  skills: {
    animalHandling: {
      displayName: 'Animal Handling',
      
      advancementPoints: 1,
      advancementPointsSpend: 2,
      traits: [
        {
          name: "something_about_my_smell_rank_one",
          cost: 2,
          effect: "gain +1 to all befriend skill checks",
          skillBoosts: ["Befriend"]
        }
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
      advancementPointsSpend: 9,
      traits: [
        {
          name: "Quick to Notice",
          cost: 2,
          effect: "gain +1 to all alertness skill checks",
          skillBoosts: ["Alertness"]
        },
        {
          name: "Bob and Weave",
          cost: 2,
          effect: "gain +1 ranged defense bonus"
        },
        {
          name: "Vigilant",
          cost: 2,
          effect: "gain +1 vigilance",
          skillBoosts: ["Vigilance"]
        },
        {
          name: "Vigilant",
          cost: 3,
          effect: "gain +1 vigilance",
          skillBoosts: ["Vigilance"]
        }
      ],
      checks: [
        'Alertness',
        'Investigate',
        'Search',
        'Sense Motive',
        'Size Up'
      ]
    },
    artisan_example: {
      displayName: 'Artisan (example)',
      
      advancementPoints: 0,
      advancementPointsSpend: 0,
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
      
      advancementPoints: 0,
      advancementPointsSpend: 0,
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
      checks: []
    },
    personalMovement: {
      displayName: 'Personal Movement',
      
      advancementPoints: 0,
      advancementPointsSpend: 0,
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
      
      advancementPoints: 2,
      advancementPointsSpend: 4,
      traits: [
        {
          name: "Stubborn Tenacity",
          cost: 2,
          effect: "gain +1 to all hold breath and remain conscious skill checks",
          skillBoosts: ["Hold Breath", "Remain Conscious"]
        },
        {
          name: "Staying Power",
          cost: 2,
          effect: "Gain +1 to all endurance skill checks",
          skillBoosts: ["Endurance"]
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
      
      advancementPoints: 2,
      advancementPointsSpend: 7,
      traits: [
        {
          name: "Steady Aim",
          cost: 2,
          effect: "Your maximum aim bonus is increased by +1.",
          alwaysDisplay: true
        },
        {
          name: "Overwatch",
          cost: 2,
          effect: "When taking the overwatch action, increase the diameter of your targeted area by +1",
          alwaysDisplay: true
        },
        {
          name: "Steady Aim",
          cost: 3,
          effect: "Your maximum aim bonus is increased by +1.",
          alwaysDisplay: true
        }
      ],
      checks: [
        'Ranged Attack'
      ]
    },
    stealth: {
      displayName: 'Stealth',
      
      advancementPoints: 2,
      advancementPointsSpend: 7,
      traits: [
        {
          name: "Masquerade",
          cost: 2,
          effect: "Gain +1 to all cover tracks and disguise skill checks.",
          skillBoosts: ["Cover Tracks", "Disguise"]
        },
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
      
      advancementPoints: 1,
      advancementPointsSpend: 23,
      traits: [
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
          name: "Surveyor",
          cost: 3,
          effect: "Gain +1 to all find/build shelter and make trap skill checks.",
          skillBoosts: ["Find/Build Shelter", "Make Traps"]
        },
        {
          name: "Tracker",
          cost: 3,
          effect: "Gain +1 to all track skill checks.",
          skillBoosts: ["Track"]
        },
        {
          name: "Tracker",
          cost: 5,
          effect: "Gain +1 to all track skill checks.",
          skillBoosts: ["Track"]
        },
        {
          name: "Tracker",
          cost: 8,
          effect: "Gain +1 to all track skill checks.",
          skillBoosts: ["Track"]
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