export default {
  name: 'Animal Handling',
  description:
    "How familiar is the character with animals, particularly domestic ones. This skill should be used when dealing with an animal that has a chance of being controlled or calmed.",
  skillChecks: [
    {
      name: 'Befriend',
      primaryAttribute: ['Mind or Perception'],
      teamworkPossible: false,
      description:
        'coaxing animals to be friendly towards the character and potentially even taming them.',
      difficultyExamples:
        `
          4 - gain a loyal companion by giving your dog a treat every time you see them for a year
          7 - gain the trust of a stray by giving it food every day for a week
          10 - get a wild tomcat to keep your barn free of mice by setting out a bowl of milk each night
          13 - stop a she wolf from attacking when you are returning its lost pup
          16 - get the local crow population to look out for you by regularly feeding them nuts and berries
          19 - get a wild bear to safely camp with you for the night by sharing your dinner
          22 - get a board to stop mid charge by making soothing noises and offering ear scratches
        `,
      criticalFailure: 'the animal gets more aggressive, not less (ex. the bear goes into a rage and attacks when you offer it a bowl of soup)',
      conditionalFailure: 'the animal does not respond to your desired friendship but doesn\'t become outright hostile (ex. the crows take your offered berries, they may even leave some trinkets in return but don\'t warn you when your house is being broken into)',
      nearSuccess: 'the animal warms to you but now in the way you hoped (ex. the stray dog begins following you everywhere at small distance, including attempting to enter buildings thinking you might feed it but not becoming overly friendly in the process)',
      success: 'the animal is less hostile, maybe even friendly, at least for a time or until the situation changes (ex. the boar aborts its charge but doesn\'t hesitate to attack again when your party member shoots an arrow in its general direction hoping to scare it off)',
      criticalSuccess: 'the animal\'s attitude towards you increases more than you\'d hoped for (ex. the she wolf regularly visits your camps while traveling in its territory, it might even warn you of danger or join you in a fight as thanks for saving its young'
    },
    {
      name: 'Ride/Drive',
      primaryAttribute: ['Body, Perception, or Reflexes'],
      teamworkPossible: false,
      description:
        'charging on a warhorse or getting the donkey pulling your cart to willingly traverse a swaying bridge the ride/drive skill is used to determine what animals will obey your command while you are ride them or drive the vehicle they\'re hooked up to.',
      difficultyExamples:
        `
          4 - riding a trained pony at a walk from one village to another
          7 - getting the donkey pulling your cart to continue up the hill instead of stopping to eat a fallen apple
          10 - staying on your mount when it is startled by a branch that looks like a snake
          13 - participating in a formation calvary charge
          16 - staying mounted and controlling your steed after it's been shot with an arrow
          19 - controlling a wounded elephant in battle
          22 - convincing an untrained rhino to charge your enemy with you on its back
        `,
      criticalFailure: 'the animal fails to obey your command and causes some hardship (ex. your mount started by what it thought was a snake throws you and kicks you by accident on the way down)',
      conditionalFailure: 'the animal fails to obey your command but does something generally unharmful (ex. the elephant rampages through the battlefield but mostly damaging your enemy and doesn\'t attempt to throw you)',
      nearSuccess: 'the animal does some of what you asked for but not entirely (ex. the rhino trots off away from danger but doesn\'t seem to be bothered by your presence and lets you ride it)',
      success: 'the animal does exactly as commanded',
      criticalSuccess: 'the animal exceeds your expectations (ex. your steed takes the arrow in stride, it doesn\'t throw you and continues its charge), in combat a critical success on a ride check to get your mount to move means you can get them to move without rolling for an additional round for every 3 additional success you rolled.',
    },
    {
      name: 'Train/Command',
      primaryAttribute: ['Mind or Perception'],
      teamworkPossible: true,
      description:
        'training and commanding animals to act as the character wishes.',
      difficultyExamples:
        `
          4 - teach your own dog to sit while you hold a treat
          7 - teach a domestic horse to carry a rider
          10 - command an unknown dog to sit
          13 - command a circus animal to do a trick it hasn\'t practiced
          16 - teach a wild horse to let you ride it
          19 - command a charging stallion you don\'t know to stop
          22 - teach a shark to follow your ship as you sail
        `,
      criticalFailure: 'the animal doesn\'t learn or follow the command and becomes more stubborn or tries to do something unwanted (ex. the horse you\'re training becomes obstinate and has a higher ride difficulty in the future)',
      conditionalFailure: 'the animal doesn\'t learn or follow the command but still attempts to please you (ex. the circus animal confused by the new command reverts to one of its practiced tricks)',
      nearSuccess: 'the animal learns or performs the command but not exactly as desired (ex. the wild horse is happy for you to ride it but doesn\'t listen to your directions while on its back)',
      success: 'the animal learns or performs the expected activity',
      criticalSuccess: 'the animal exceeds all expectations on the training or command (ex. the shark you\'ve trained to follow your ship actively attacks sailors from other vessels you\'re battling against but leaves your sailers alone)',
    }
  ],
  isSkillTree: true,
  traits: [
    // {name: "Animal Specialist", effect: {text: "Choose one type of animal (horse, dog, hawk, etc.) and gain a bonus die to all Animal Handling skills checks when working with only that animal type. The same animal type cannot be chosen twice."}},
    {name: "Something about my Smell", effect: {text: "Gain +1 to all Befriend skill checks.", skillBoosts: ["Befriend"]}},
    {name: "Born to the Saddle", effect: {text: "Gain +1 to all Ride/Drive skill checks.", skillBoosts: ["Ride/Drive"]}},
    {name: "Animal Whisperer", effect: {text: "Gain +1 to all Train/Command skill checks.", skillBoosts: ["Train/Command"]}},
    {name: "Smell\'s like my Trainer", effect: {text: "When attempting to interact with a trained animal you may spend one permanent willpower to reroll one die in your Animal Handling skill check"}, costs: [2], alwaysDisplay: true},
    {name: "One with Nature", effect: {text: "When attempting to interact with a wild animal you may spend one permanent willpower to reroll one die in your Animal Handling skill check"}, costs: [3], alwaysDisplay: true},
    {name: "Animal\'s are Easy", effect: {text: "Your Smell\'s like my Trainer and One with Nature traits now only require the expenditure of a temporary willpower"}, requirements: "Smell\'s like my Trainer or One with Nature", costs: [5], alwaysDisplay: true},
    {name: "People are the problem", effect: {text: "When attempting to interact with an animal and no other people are in the area may add an additional skilled bonus die to your Animal Handling skill check"}, costs: [8], alwaysDisplay: true},
  ],
};