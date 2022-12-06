export default {
  name: "Simu",
  backgrounds: [
    {
      displayName: "Hunter",
      primaryAttribute: "perception",
      description: "Those who have experience capturing or killing creatures regardless of method. A hunter may use traps to protect their farm, a bow feed their family, or their own wits to bring in criminals with bounties on their heads.",
      luck: 1,
      stamina: 1,
      vigilance: 1,
      willpower: 1,
      primarySkill: "survival",
      secondarySkill: "stealth",
      tertiarySkill: "awareness"
    },
    {
      displayName: "Laborer",
      primaryAttribute: "body",
      description: "",
      luck: 1,
      stamina: 3,
      vigilance: 0,
      willpower: 0,
      primarySkill: "survival",
      secondarySkill: "physical conditioning",
      tertiarySkill: "animal handling",
      traitsOptional: ["Hardy", "Healthy"]
    },
    {
      displayName: "Sniper",
      primaryAttribute: "perception",
      description: "",
      luck: 0,
      stamina: 1,
      vigilance: 2,
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
    'Defense Bonus, Ranged': 4,
    'Size': 0,
    'Speed': 4
  },
  resources: {
    defense: {
      max: 13,
      currentMax: 13,
      current: 13
    },
    stamina: {
      max: 9,
      currentMax: 9,
      current: 9
    },
    vigilance: {
      max: 7,
      currentMax: 7,
      current: 7
    },
    willpower: {
      max: 7,
      currentMax: 7,
      current: 7
    },
    luck: {
      max: 3,
      currentMax: 3,
      current: 3
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
      proficiency: 'untrained',
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
      proficiency: 'Untrained',
      advancementPoints: 0,
      advancementPointsSpend: 9,
      traits: [
        {
          name: "quick_to_notice",
          cost: 2,
          effect: "gain +1 to all alertness skill checks",
          skillBoosts: ["Alertness"]
        },
        {
          name: "combat_awareness",
          cost: 2,
          effect: "gain +1 ranged defense bonus",
          alwaysDisplay: true
        },
        {
          name: "vigilant",
          cost: 2,
          effect: "gain +1 vigilance",
          skillBoosts: ["Vigilance"]
        },
        {
          name: "vigilant",
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
      proficiency: 'Untrained',
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
      proficiency: 'Untrained',
      advancementPoints: 0,
      advancementPointsSpend: 0,
      checks: [
        'Placeholder'
      ]
    },
    knowledgeAcademics: {
      displayName: 'Knowledge (Academics)',
      proficiency: 'Untrained',
      advancementPoints: 0,
      advancementPointsSpend: 0,
      checks: [
        'Placeholder'
      ]
    },
    knowledgeLore: {
      displayName: 'Knowledge (Lore)',
      proficiency: 'Untrained',
      advancementPoints: 0,
      advancementPointsSpend: 0,
      checks: [
        'Placeholder'
      ]
    },
    legerdemain: {
      displayName: 'Legerdemain',
      proficiency: 'Untrained',
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
      proficiency: 'Untrained',
      advancementPoints: 0,
      advancementPointsSpend: 0,
      checks: [
        'Placeholder'
      ]
    },
    meleeCombat: {
      displayName: 'Melee Combat',
      proficiency: 'Untrained',
      advancementPoints: 0,
      advancementPointsSpend: 0,
      checks: [
        'Placeholder'
      ]
    },
    performance: {
      displayName: 'Performance',
      proficiency: 'Untrained',
      advancementPoints: 0,
      advancementPointsSpend: 0,
      checks: [
        'Placeholder'
      ]
    },
    personalDefense: {
      displayName: 'Personal Defense',
      proficiency: 'Untrained',
      advancementPoints: 0,
      advancementPointsSpend: 0,
      checks: [
        'Placeholder'
      ]
    },
    personalMovement: {
      displayName: 'Personal Movement',
      proficiency: 'Untrained',
      advancementPoints: 0,
      advancementPointsSpend: 0,
      checks: [
        'Placeholder'
      ]
    },
    physicalConditioning: {
      displayName: 'Physical Conditioning',
      proficiency: 'Untrained',
      advancementPoints: 2,
      advancementPointsSpend: 4,
      traits: [
        {
          name: "stubborn_tenacity",
          cost: 2,
          effect: "gain +1 to all hold breath and remain conscious skill checks",
          skillBoosts: ["Hold Breath", "Remain Conscious"]
        },
        {
          name: "staying_power",
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
      proficiency: 'Untrained',
      advancementPoints: 2,
      advancementPointsSpend: 7,
      traits: [
        {
          name: "aim",
          cost: 2,
          effect: "Your maximum aim bonus is increased by +1.",
          alwaysDisplay: true
        },
        {
          name: "overwatch",
          cost: 2,
          effect: "When taking the overwatch action, increase the diameter of your targeted area by +1",
          alwaysDisplay: true
        },
        {
          name: "aim",
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
      proficiency: 'Untrained',
      advancementPoints: 2,
      advancementPointsSpend: 7,
      traits: [
        {
          name: "masquerade",
          cost: 2,
          effect: "Gain +1 to all cover tracks and disguise skill checks.",
          skillBoosts: ["Cover Tracks", "Disguise"]
        },
        {
          name: "obfuscate",
          cost: 2,
          effect: "Gain +1 to all hide and sneak skill checks.",
          skillBoosts: ["Hide", "Sneak"]
        },
        {
          name: "obfuscate",
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
      proficiency: 'Untrained',
      advancementPoints: 1,
      advancementPointsSpend: 23,
      traits: [
        {
          name: "surveyor",
          cost: 2,
          effect: "Gain +1 to all find/build shelter and make traps skill checks.",
          skillBoosts: ["Find/Build Shelter", "Make Traps"]
        },
        {
          name: "tracker",
          cost: 2,
          effect: "Gain +1 to all track skill checks.",
          skillBoosts: ["Track"]
        },
        {
          name: "surveyor",
          cost: 3,
          effect: "Gain +1 to all find/build shelter and make trap skill checks.",
          skillBoosts: ["Find/Build Shelter", "Make Traps"]
        },
        {
          name: "tracker",
          cost: 3,
          effect: "Gain +1 to all track skill checks.",
          skillBoosts: ["Track"]
        },
        {
          name: "tracker",
          cost: 5,
          effect: "Gain +1 to all track skill checks.",
          skillBoosts: ["Track"]
        },
        {
          name: "tracker",
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