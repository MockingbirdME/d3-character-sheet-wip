export default {
  name: "Bucky",
  backgrounds: [
    {
      displayName: "Criminal",
      description: "",
      luck: 1,
      stamina: 0,
      vigilance: 1,
      willpower: 1,
      primarySkill: "Awareness",
      secondarySkill: "Ranged Combat",
      tertiarySkill: "Personal Movement",
      traitsOptional: []
    },
    {
      displayName: "Duelist",
      description: "",
      luck: 1,
      stamina: 1,
      vigilance: 1,
      willpower: 0,
      primarySkill: "Ranged Combat",
      secondarySkill: "Personal Defense",
      tertiarySkill: "Awareness",
      traitsOptional: []
    },
    {
      displayName: "Gambler",
      description: "A gambler is someone who has a history of taking risks, they might be a scoundrel who is most at home playing cards in some tavern basement, a merchant who puts his fortune on the line to make more money, or an acrobat who performs ever more daring feats without a proper safety net.",
      luck: 1,
      stamina: 0,
      vigilance: 2,
      willpower: 0,
      primarySkill: "Legerdemain",
      secondarySkill: "Awareness",
      tertiarySkill: "Ranged Combat",
      traitsOptional: []
    }
  ],
  advancementPoints: 0,
  attributes: {
    body: 0,
    mind: 2,
    perception: 2,
    reflexes: 2,
    'Defense Bonus, Mental': 2,
    'Defense Bonus, Melee': 2,
    'Defense Bonus, Ranged': 4,
    'Size': 0,
    'Speed': 5
  },
  resources: {
    defense: {
      max: 9,
      currentMax: 9,
      current: 9
    },
    stamina: {
      max: 4,
      currentMax: 4,
      current: 4
    },
    vigilance: {
      max: 9,
      currentMax: 9,
      current: 9
    },
    willpower: {
      max: 6,
      currentMax: 6,
      current: 6
    },
    luck: {
      max: 4,
      currentMax: 4,
      current: 4
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
      advancementPointsSpend: 20,
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
          name: "Quick to Notice",
          cost: 3,
          effect: "gain +1 to all alertness skill checks",
          skillBoosts: ["Alertness"]
        },
        {
          name: "Bob and Weave",
          cost: 3,
          effect: "gain +1 ranged defense bonus"
        },
        {
          name: "Vigilant",
          cost: 3,
          effect: "gain +1 vigilance",
          skillBoosts: ["Vigilance"]
        },
        {
          name: "Combat Awareness",
          cost: 5,
          effect: "When an enemy is making an attack against you that you are aware of, you may spend a max vigilance to take a dodge or defensive stance action as a reaction, if you have two ranks in this trait, you may spend 2 current vigilance instead.",
          alwaysDisplay: true
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
        'Placeholder'
      ]
    },
    knowledgeAcademics: {
      displayName: 'Knowledge (Academics)',
      advancementPoints: 0,
      advancementPointsSpend: 0,
      checks: [
        'Placeholder'
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
      advancementPointsSpend: 12,
      traits: [
        {
          name: "Fast Hands",
          cost: 2,
          effect: "gain +1 to all slight of hand skill checks",
          skillBoosts: ["Slight of Hand"]
        },
        {
          name: "Subtle Speech",
          cost: 2,
          effect: "gain +1 to all thieves cant skill checks",
          skillBoosts: ["Thieves Cant"]
        },
        {
          name: "Quick Draw",
          cost: 2,
          effect: "Reduce the speed of your ready/stow actions by 2, once reduced to 0 additional instances of this trait allow you to perform one ready/stow action each turn for 0 action points.",
          alwaysDisplay: true
        },
        {
          name: "Subtle Speech",
          cost: 3,
          effect: "gain +1 to all thieves cant skill checks",
          skillBoosts: ["Thieves Cant"]
        },
        {
          name: "Quick Draw",
          cost: 3,
          effect: "Reduce the speed of your ready/stow actions by 2, once reduced to 0 additional instances of this trait allow you to perform one ready/stow action each turn for 0 action points.",
          alwaysDisplay: true
        }
      ],
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
        'Placeholder'
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
        'Placeholder'
      ]
    },
    personalDefense: {
      displayName: 'Personal Defense',
      advancementPoints: 1,
      advancementPointsSpend: 5,
      traits: [
        {
          name: "Dodge",
          cost: 2,
          effect: "Increase the ranged defense bonus granted by the dodge action by 1.",
          skillBoosts: ["Dodge"]
        },
        {
          name: "Seasoned Combatant",
          cost: 3,
          effect: "When an enemy is making an attack against you that you are aware of, you may spend a max defense to take a dodge or defensive stance action as a reaction, if you have two ranks in this trait, you may spend 2 current defense instead.",
          alwaysDisplay: true
        }
      ],
      checks: []
    },
    personalMovement: {
      displayName: 'Personal Movement',
      advancementPoints: 1,
      advancementPointsSpend: 2,
      traits: [
        {
          name: "Long Strider",
          cost: 2,
          effect: "Gain +1 speed."
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
      advancementPointsSpend: 0,
      traits: [
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
      advancementPoints: 3,
      advancementPointsSpend: 18,
      traits: [
        {
          name: "Quick Loader",
          cost: 2,
          effect: "When readying or loading ammunition, ready or load 1 additional piece of ammunition",
          alwaysDisplay: true
        },
        {
          name: "Quick Loader",
          cost: 3,
          effect: "When readying or loading ammunition, ready or load 1 additional piece of ammunition",
          alwaysDisplay: true
        },
        {
          name: "Close Quarters Training",
          cost: 3,
          effect: "You may make ranged attacks when an opponent provokes a free attack against you",
          alwaysDisplay: true
        },
        {
          name: "Quick Loader",
          cost: 5,
          effect: "When readying or loading ammunition, ready or load 1 additional piece of ammunition",
          alwaysDisplay: true
        },
        {
          name: "Close Quarters Expert",
          cost: 5,
          effect: "You do not suffer a penalty die when making ranged attacks while in melee range of an opponent",
          alwaysDisplay: true
        },
      ],
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