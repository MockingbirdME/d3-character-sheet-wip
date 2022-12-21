export default {
  name: "Simu",
  backgrounds: [
    {
      key: "hunter",
      primarySkill: "survival",
      secondarySkill: "stealth",
      tertiarySkill: "awareness"
    },
    {
      key: "laborer",
      primarySkill: "survival",
      secondarySkill: "physical conditioning",
      tertiarySkill: "animal handling"
    },
    {
      key: "sniper",
      primarySkill: "ranged combat",
      secondarySkill: "awareness",
      tertiarySkill: "stealth"
    }
  ],
  advancementPoints: 0,
  attributeBonuses: {
    body: 1,
    mind: 2,
    perception: 2,
    reflexes: 1
  },
  resources: {
    defense: {
      max: 8,
      current: 8
    },
    stamina: {
      max: 8,
      current: 8
    },
    vigilance: {
      max: 9,
      current: 9
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
      max: 3,
      current: 3
    }
  },
  skills: {
    'animal handling': {
      advancementPoints: 1,
      traits: [
        {
          name: "Something about my Smell",
          cost: 2
        }
      ]
    },
    awareness: {
      advancementPoints: 0,
      traits: [
        {
          name: "Quick to Notice",
          cost: 2
        },
        {
          name: "Bob and Weave",
          cost: 2
        },
        {
          name: "Vigilant",
          cost: 2
        },
        {
          name: "Vigilant",
          cost: 3
        }
      ]
    },
    'physical conditioning': {
      advancementPoints: 2,
      traits: [
        {
          name: "Stubborn Tenacity",
          cost: 2
        },
        {
          name: "Staying Power",
          cost: 2
        }
      ]
    },
    'ranged combat': {
      advancementPoints: 2,
      traits: [
        {
          name: "Steady Aim",
          cost: 2
        },
        {
          name: "Overwatch",
          cost: 2
        },
        {
          name: "Steady Aim",
          cost: 3
        }
      ]
    },
    stealth: {
      advancementPoints: 2,
      traits: [
        {
          name: "Masquerade",
          cost: 2
        },
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
      advancementPoints: 1,
      traits: [
        {
          name: "Surveyor",
          cost: 2
        },
        {
          name: "Tracker",
          cost: 2
        },
        {
          name: "Surveyor",
          cost: 3
        },
        {
          name: "Tracker",
          cost: 3
        },
        {
          name: "Tracker",
          cost: 5
        },
        {
          name: "Tracker",
          cost: 8
        }
      ]
    }
  }
}