export default {
  name: "Lidia",
  backgrounds: [
    {
      key: "nobility",
      primarySkill: "Performance",
      secondarySkill: "Personal Defense",
      tertiarySkill: "Artisan (Chemist)"
    },
    {
      key: "skilledCrafter",
      primarySkill: "Artisan (Chemist)",
      secondarySkill: "Medicine",
      tertiarySkill: "Physical Conditioning"
    },
    {
      key: "tutoredStudent",
      primarySkill: "Discipline",
      secondarySkill: "Artisan (Chemist)",
      tertiarySkill: "Knowledge (Academics)"
    }
  ],
  advancementPoints: 0,
  attributeBonuses: {
    body: 0,
    mind: 3,
    perception: 1,
    reflexes: 2
  },
  resources: {
    defense: {
      max: 11,
      current: 11
    },
    stamina: {
      max: 5,
      current: 5
    },
    vigilance: {
      max: 6,
      current: 6
    },
    willpower: {
      max: 12,
      current: 12
    },
    luck: {
      max: 2,
      current: 2
    },
    wounds: {
      max: 3,
      current: 3
    }
  },
  skills: {
    'artisan (chemist)': {
      advancementPoints: 1,
      traits: [
        {
          name: "Crafty",
          cost: 2
        },
        {
          name: "Copy Cat",
          cost: 2
        },
        {
          name: "Discerning Artisan",
          cost: 2
        },
        {
          name: "Crafty",
          cost: 3
        },
        {
          name: "Discerning Artisan",
          cost: 3
        },
        {
          name: "Combat Chemist",
          cost: 8
        }
      ]
    },
    discipline: {
      advancementPoints: 0,
      traits: [
        {
          name: "Commanding",
          cost: 2
        },
        {
          name: "Focused",
          cost: 2
        },
        {
          name: "Mind Over Matter",
          cost: 8
        }
      ]
    },
    knowledge: {
      advancementPoints: 1,
      traits: [
        {
          name: "Naturalist",
          cost: 2
        }
      ]
    },
    medicine: {
      advancementPoints: 0,
      traits: [
        {
          name: "Medic",
          cost: 2
        },
        {
          name: "Apothecary",
          cost: 2
        },
        {
          name: "Barber",
          cost: 2
        }
      ]
    },
    performance: {
      advancementPoints: 0,
      traits: [
        {
          name: "Bard",
          cost: 2
        },
        {
          name: "Politician",
          cost: 2
        },
        {
          name: "Politician",
          cost: 3
        },
        {
          name: "Intimidating Presence",
          cost: 5
        }
      ]
    },
    'personal defense': {
      displayName: 'Personal Defense',
      advancementPoints: 1,
      advancementPointsSpend: 5,
      traits: [
        {
          name: "Combat Awareness",
          cost: 2
        },
        {
          name: "Combat Awareness",
          cost: 3
        }
      ]
    },
    'physical conditioning': {
      advancementPoints: 1,
      traits: [
        {
          name: "Stubborn Tenacity",
          cost: 2
        }
      ]
    }
  }
}