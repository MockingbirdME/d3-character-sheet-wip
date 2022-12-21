export default {
  name: "Bucky",
  backgrounds: [
    {
      key: "criminal",
      primarySkill: "Awareness",
      secondarySkill: "Ranged Combat",
      tertiarySkill: "Personal Movement"
    },
    {
      key: "duelist",
      primarySkill: "Ranged Combat",
      secondarySkill: "Personal Defense",
      tertiarySkill: "Awareness"
    },
    {
      key: "gambler",
      primarySkill: "Legerdemain",
      secondarySkill: "Awareness",
      tertiarySkill: "Ranged Combat"
    }
  ],
  advancementPoints: 0,
  attributeBonuses: {
    body: 0,
    mind: 2,
    perception: 2,
    reflexes: 2
  },
  resources: {
    defense: {
      max: 10,
      current: 10
    },
    stamina: {
      max: 4,
      current: 4
    },
    vigilance: {
      max: 11,
      current: 11
    },
    willpower: {
      max: 6,
      current: 6
    },
    luck: {
      max: 4,
      current: 4
    },
    wounds: {
      max: 2,
      current: 2
    }
  },
  skills: {
    awareness: {
      advancementPoints: 1,
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
          name: "Quick to Notice",
          cost: 3
        },
        {
          name: "Bob and Weave",
          cost: 3
        },
        {
          name: "Vigilant",
          cost: 3
        },
        {
          name: "Combat Awareness",
          cost: 5
        }
      ]
    },
    legerdemain: {
      advancementPoints: 0,
      traits: [
        {
          name: "Fast Hands",
          cost: 2
        },
        {
          name: "Subtle Speech",
          cost: 2
        },
        {
          name: "Quick Draw",
          cost: 2
        },
        {
          name: "Subtle Speech",
          cost: 3
        },
        {
          name: "Quick Draw",
          cost: 3
        }
      ]
    },
    'personal defense': {
      advancementPoints: 1,
      traits: [
        {
          name: "Combat Awareness",
          cost: 2
        },
        {
          name: "Seasoned Combatant",
          cost: 3
        }
      ]
    },
    'personal movement': {
      advancementPoints: 1,
      traits: [
        {
          name: "Long Strider",
          cost: 2
        }
      ]
    },
    'ranged combat': {
      advancementPoints: 3,
      traits: [
        {
          name: "Quick Loader",
          cost: 2
        },
        {
          name: "Quick Loader",
          cost: 3
        },
        {
          name: "Close Quarters Training",
          cost: 3
        },
        {
          name: "Quick Loader",
          cost: 5
        },
        {
          name: "Close Quarters Expert",
          cost: 5
        }
      ]
    }
  }
}