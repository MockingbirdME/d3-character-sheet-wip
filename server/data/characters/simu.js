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
    'Defense Bonus, Ranged': 3,
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
      advancementPoints: 0,
      advancementPointsSpend: 3,
      traits: [
        {
          name: "something_about_my_smell_rank_one",
          cost: 1,
          effect: "gain +1 to all befriend skill checks"
        },
        {
          name: "proficiency_novice",
          cost: 2,
          effect: "animal handling skill checks can be made without an unskilled penalty die"
        }
      ],
      checks: [
        {name: 'Befriend', bonus: 1},
        {name: 'Ride/Drive', bonus: 0},
        {name: 'Train/Command', bonus: 0}
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
          cost: 1,
          effect: "gain +1 to all alertness skill checks"
        },
        {
          name: "vigilant",
          cost: 1,
          effect: "gain +1 vigilance"
        },
        {
          name: "Proficiency (Novice)",
          cost: 2,
          effect: "awareness skill checks can be made without an unskilled penalty die"
        },
        {
          name: "vigilant",
          cost: 2,
          effect: "gain +1 vigilance"
        },
        { 
          name: "Proficiency (Skilled)",
          cost: 3,
          effect: "awareness skill checks gain a skilled bonus die"
        }
      ],
      checks: [
        {name: 'Alertness', bonus: 2},
        {name: 'Investigate', bonus: 0},
        {name: 'Search', bonus: 0},
        {name: 'Sense Motive', bonus: 1},
        {name: 'Size Up', bonus: 1}
      ]
    },
    artisan_example: {
      displayName: 'Artisan (example)',
      proficiency: 'Untrained',
      advancementPoints: 0,
      advancementPointsSpend: 0,
      checks: [
        {name: 'Craft', bonus: 0},
        {name: 'Forge/Duplicate', bonus: 0},
        {name: 'Identify', bonus: 0},
        {name: 'Repair', bonus: 0},
        {name: 'Upgrade', bonus: 0}
      ]
    },
    discipline: {
      displayName: 'Discipline',
      proficiency: 'Untrained',
      advancementPoints: 0,
      advancementPointsSpend: 0,
      checks: [
        {name: 'Placeholder', bonus: 1}
      ]
    },
    knowledgeAcademics: {
      displayName: 'Knowledge (Academics)',
      proficiency: 'Untrained',
      advancementPoints: 0,
      advancementPointsSpend: 0,
      checks: [
        {name: 'Placeholder', bonus: 1}
      ]
    },
    knowledgeLore: {
      displayName: 'Knowledge (Lore)',
      proficiency: 'Untrained',
      advancementPoints: 0,
      advancementPointsSpend: 0,
      checks: [
        {name: 'Placeholder', bonus: 1}
      ]
    },
    legerdemain: {
      displayName: 'Legerdemain',
      proficiency: 'Untrained',
      advancementPoints: 0,
      advancementPointsSpend: 0,
      checks: [
        {name: 'Pick Locks', bonus: 0},
        {name: 'Slight of Hand', bonus: 0},
        {name: 'Thieves Cant', bonus: 0}
      ]
    },
    medicine: {
      displayName: 'Medicine',
      proficiency: 'Untrained',
      advancementPoints: 0,
      advancementPointsSpend: 0,
      checks: [
        {name: 'Placeholder', bonus: 1}
      ]
    },
    meleeCombat: {
      displayName: 'Melee Combat',
      proficiency: 'Untrained',
      advancementPoints: 0,
      advancementPointsSpend: 0,
      checks: [
        {name: 'Placeholder', bonus: 1}
      ]
    },
    performance: {
      displayName: 'Performance',
      proficiency: 'Untrained',
      advancementPoints: 0,
      advancementPointsSpend: 0,
      checks: [
        {name: 'Placeholder', bonus: 1}
      ]
    },
    personalDefense: {
      displayName: 'Personal Defense',
      proficiency: 'Untrained',
      advancementPoints: 0,
      advancementPointsSpend: 0,
      checks: [
        {name: 'Placeholder', bonus: 1}
      ]
    },
    personalMovement: {
      displayName: 'personalMovement',
      proficiency: 'Untrained',
      advancementPoints: 0,
      advancementPointsSpend: 0,
      checks: [
        {name: 'Placeholder', bonus: 1}
      ]
    },
    physicalConditioning: {
      displayName: 'Physical Conditioning',
      proficiency: 'Untrained',
      advancementPoints: 0,
      advancementPointsSpend: 6,
      traits: [
        {
          name: "stubborn_tenacity",
          cost: 1,
          effect: "gain +1 to all hold breath and remain conscious skill checks"
        },
        {
          name: "staying_power",
          cost: 1,
          effect: "Gain +1 to all endurance skill checks"
        },
        { 
          name: "Proficiency (Novice)",
          cost: 2,
          effect: "physical conditioning skill checks can be made without an unskilled penalty die"
        },
        {
          name: "staying_power",
          cost: 2,
          effect: "Gain +1 to all endurance skill checks"
        }
      ],
      checks: [
        {name: 'Lift/Drag/Push', bonus: 0},
        {name: 'Endurance', bonus: 2},
        {name: 'Hold Breath', bonus: 1},
        {name: 'Remain Conscious', bonus: 1}
      ]
    },
    rangedCombat: {
      displayName: 'Ranged Combat',
      proficiency: 'Untrained',
      advancementPoints: 0,
      advancementPointsSpend: 9,
      traits: [
        {
          name: "aim",
          cost: 1,
          effect: "Your maximum aim bonus is increased by +1."
        },
        {
          name: "overwatch",
          cost: 1,
          effect: "When taking the overwatch action, increase the diameter of your targeted area by +1"
        },
        { 
          name: "Proficiency (Novice)",
          cost: 2,
          effect: "physical conditioning skill checks can be made without an unskilled penalty die"
        },
        {
          name: "aim",
          cost: 2,
          effect: "Your maximum aim bonus is increased by +1."
        },
        { 
          name: "Proficiency (Skilled)",
          cost: 3,
          effect: "awareness skill checks gain a skilled bonus die"
        }
      ],
      checks: [
        {name: 'Ranged Attack', bonus: 0}
      ]
    },
    stealth: {
      displayName: 'Stealth',
      proficiency: 'Untrained',
      advancementPoints: 0,
      advancementPointsSpend: 9,
      traits: [
        {
          name: "masquerade",
          cost: 1,
          effect: "Gain +1 to all cover tracks and disguise skill checks."
        },
        {
          name: "obfuscate",
          cost: 1,
          effect: "Gain +1 to all hide and sneak skill checks."
        },
        { 
          name: "Proficiency (Novice)",
          cost: 2,
          effect: "stealth skill checks can be made without an unskilled penalty die"
        },
        {
          name: "obfuscate",
          cost: 2,
          effect: "Gain +1 to all hide and sneak skill checks."
        },
        { 
          name: "Proficiency (Skilled)",
          cost: 3,
          effect: "stealth skill checks gain a skilled bonus die"
        }
      ],
      checks: [
        {name: 'Blend In', bonus: 0},
        {name: 'Cover Tracks', bonus: 1},
        {name: 'Disguise', bonus: 1},
        {name: 'Hide', bonus: 2},
        {name: 'Sneak', bonus: 2},
      ]
    },
    survival: {
      displayName: 'Survival',
      proficiency: 'Untrained',
      advancementPoints: 0,
      advancementPointsSpend: 24,
      traits: [
        {
          name: "surveyor",
          cost: 1,
          effect: "Gain +1 to all find/build shelter and make trap skill checks."
        },
        {
          name: "tracker",
          cost: 1,
          effect: "Gain +1 to all track skill checks."
        },
        { 
          name: "Proficiency (Novice)",
          cost: 2,
          effect: "survival skill checks can be made without an unskilled penalty die"
        },
        {
          name: "environment_specialist",
          cost: 2,
          selection: "forest",
          effect: "while in the chosen environment gain an additional skilled bonus die to all survival checks"
        },
        {
          name: "surveyor",
          cost: 2,
          effect: "Gain +1 to all find/build shelter and make trap skill checks."
        },
        {
          name: "tracker",
          cost: 2,
          effect: "Gain +1 to all track skill checks."
        },
        { 
          name: "Proficiency (Skilled)",
          cost: 3,
          effect: "survival skill checks gain a skilled bonus die"
        },
        {
          name: "surveyor",
          cost: 3,
          effect: "Gain +1 to all find/build shelter and make trap skill checks."
        },
        {
          name: "tracker",
          cost: 3,
          effect: "Gain +1 to all track skill checks."
        },
        {
          name: "proficiency_expert",
          cost: 5,
          effect: "survival skill checks gain a skilled bonus die and get +1 to the skill check result if at least one skilled bonus die was used to calculate the final result"
        }
      ],
      checks: [
        {name: 'Find/Build Shelter', bonus: 3},
        {name: 'Forage', bonus: 0},
        {name: 'Hunt', bonus: 0},
        {name: 'Make Traps', bonus: 3},
        {name: 'Track', bonus: 3}
      ]
    }
  }
}