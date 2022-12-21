export default {
  name: "Ren",
  backgrounds: [
    {
      key: "hunter",
      primarySkill: "survival",
      secondarySkill: "stealth",
      tertiarySkill: "awareness"
    },
    {
      key: "laborer",
      primarySkill: "physical conditioning",
      secondarySkill: "survival",
      tertiarySkill: "artisan (woodworker)"
    },
    {
      key: "ranger",
      primarySkill: "Personal Movement",
      secondarySkill: "Melee Combat",
      tertiarySkill: "Survival"
    }
  ],
  advancementPoints: 0,
  attributeBonuses: {
    body: 3,
    mind: 2,
    perception: 1,
    reflexes: 0
  },
  resources: {
    defense: {
      max: 6,
      current: 6
    },
    stamina: {
      max: 12,
      current: 12
    },
    vigilance: {
      max: 6,
      current: 6
    },
    willpower: {
      max: 9,
      current: 9
    },
    luck: {
      max: 2,
      current: 2
    },
    wounds: {
      max: 6,
      current: 6
    }
  },
  skills: {
    awareness: {
      advancementPoints: 1,
      traits: [
        {
          name: "Eye for Detail",
          cost: 2
        },
      ]
    },
    'artisan (woodworker)': {
      advancementPoints: 1,
      traits: [
        {
          name: "Crafty",
          cost: 2
        }
      ]
    },
    'melee combat': {
      advancementPoints: 0,
      traits: [
        {
          name: "Brawler",
          cost: 2
        },
        {
          name: "Line Disruptor",
          cost: 2
        },
        {
          name: "Solid Striker",
          cost: 2
        }
      ]
    },
    'personal movement': {
      advancementPoints: 0,
      traits: [
        {
          name: "Adventurous",
          cost: 2
        },
        {
          name: "Long Strider",
          cost: 2
        },
        {
          name: "Mobile Combatant",
          cost: 2
        },
        {
          name: "Long Strider",
          cost: 3
        },
        {
          name: "Mobile Combatant",
          cost: 3
        }
      ]
    },
    'physical conditioning': {
      advancementPoints: 0,
      traits: [
        {
          name: "Staying Power",
          cost: 2
        },
        {
          name: "High Vitality",
          cost: 2
        },
        {
          name: "High Vitality",
          cost: 3
        },
        {
          name: "Peak Health",
          cost: 5
        }
      ]
    },
    stealth: {
      advancementPoints: 1,
      traits: [
        {
          name: "Obfuscate",
          cost: 2
        },
        {
          name: "Obfuscate",
          cost: 3
        }
      ]
    },
    survival: {
      advancementPoints: 4,
      traits: [
        {
          name: "Scavenger",
          cost: 2
        },
        {
          name: "Surveyor",
          cost: 2
        },
        {
          name: "Tracker",
          cost: 2
        },
        {
          name: "Scavenger",
          cost: 3
        },
        {
          name: "Surveyor",
          cost: 3
        },
        {
          name: "Scavenger",
          cost: 5
        }
      ]
    }
  }
}