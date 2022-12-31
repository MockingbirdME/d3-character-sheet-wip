export default [
  {
    name: 'Body',
    baseValue: 0,
    primaryAttribute: true
  },
  {
    name: 'Mind',
    baseValue: 0,
    primaryAttribute: true
  },
  {
    name: 'Perception',
    baseValue: 0,
    primaryAttribute: true
  },
  {
    name: 'Reflexes',
    baseValue: 0,
    primaryAttribute: true
  },
  {
    name: 'Defense',
    baseValue: 3,
    primaryAttributes: ['mind', 'perception', 'reflexes'],
    resource: true
  },
  {
    name: 'Stamina',
    baseValue: 3,
    primaryAttributes: ['body'],
    resource: true
  },
  {
    name: 'Willpower',
    baseValue: 3,
    primaryAttributes: ['mind'],
    resource: true
  },
  {
    name: 'Luck',
    baseValue: 1,
    resource: true
  },
  {
    name: 'Wounds',
    baseValue: 2,
    primaryAttributes: ['body'],
    resource: true
  },
  {
    name: 'Damage Resistance (Concussive)',
    baseValue: 0,
    primaryAttributes: ['body'],
    alwaysDisplay: true
  },
  {
    name: 'Damage Resistance (Penetrating)',
    baseValue: 0,
    alwaysDisplay: true
  },
  {
    name: 'Defense Bonus (Mental)',
    baseValue: 0,
    primaryAttributes: ['mind'],
    alwaysDisplay: true
  },
  {
    name: 'Defense Bonus (Melee)',
    baseValue: 0,
    primaryAttributes: ['reflexes'],
    alwaysDisplay: true
  },
  {
    name: 'Defense Bonus (Ranged)',
    baseValue: 0,
    primaryAttributes: ['perception'],
    alwaysDisplay: true
  },
  {
    name: 'Initiative',
    baseValue: 0,
    primaryAttributes: ['perception', 'reflexes'],
    alwaysDisplay: true
  },
  {
    name: 'Size',
    baseValue: 0,
    alwaysDisplay: true
  },
  {
    name: 'Speed',
    baseValue: 4,
    alwaysDisplay: true
  }
]
