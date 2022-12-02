export default awareness = {
  name: 'Awareness',
  description: 'The quintessential perception skill, is used when looking for loot or information as well as noticing threats both passively and when actively looking for them.',
  skillChecks: [
      {
        name: 'Alertness',
        primaryAttribute: ['Perception'],
        teamworkPossible: false,
        description:
          'when there\'s something the character may not notice they should be asked to make this check to see if they become aware of it.',
        difficultyExamples:
          `
            4 - notice the door to your office open and close while you're working
            7 - notice the guard standing quietly in the corner when you enter a mid sized room
            10 - notice your bedroom window is open even though you closed it before you went to sleep
            13 - notice the rogue like figure your arguing with pulling a knife
            16 - notice a trip wire in a dimly lit hallway
            19 - notice a series of small holes in the wall, just large enough for darts to fly out of
            22 - notice that a cricket in a garden is actively listening in to your conversation
          `,
        criticalFailure: 'You are completely unaware of the thing to notice, if it attacks you are surprised and flat footed otherwise you will not notice it unless it is pointed out to you',
        conditionalFailure: 'You fail to notice the importance of the thing but may see it as something less interesting or fail to notice it entirely (ex. you notice the guard in the corner but take them for a common observer, failing to realize they are a potential threat, you notice the quiet cricket and find it fascinating and bring it with you where it can listen in on your conversation more easily); if it is dangerous you are surprised when it acts',
        nearSuccess: 'You notice the thing but misinterpret the importance (ex. you think a trip wire a spider web and may choose to brush it away or you notice the cricket and decide it grosses you out but without realizing it\'s actively watching you); if it\'s dangerous you are surprised',
        success: 'You notice the thing',
        criticalSuccess: 'The GM may give you additional details around what this thing is, or if it\'s dangerous give you time to act first based on how well you critically succeeded.',
      },
      {
        name: 'Investigate',
        primaryAttribute: ['Perception'],
        teamworkPossible: true,
        description:
          'the character looks for clues or information in an area related to a specific topic declared by the player.',
        difficultyExamples:
          `
            4 - look for signs that the owner of a house is ok when there's a massive puddle of blood in the middle of the kitchen
            7 - attempt to determine who ate the stolen cookie when a child has crumbs on their face
            10 - find hints of an upcoming war by talking to the sellers at a local market (the price of cheese has gone up)
            13 - induce that the butler couldn't have done it because he has a smudge of butter on his cuff and even though the crime happened in the kitchen there's no way a butler wouldn't have thoroughly cleaned his person if he had any hint he might need to
            16 - get some basic concept of what a mad alchemist had been working on by flipping through his journals filled with pictures of his nightmares
            19 - dust a recently cleaned magical sigil to determine what order the symbols on it need to be pressed to activate
            22 - identify a tasteless, odorless, colorless poison in a glass of water when there's no obviously poisoned person nearby
          `,
        criticalFailure: 'You do not find the clue you\'re looking for but you may find a false clue leading you in the wrong direction',
        conditionalFailure: 'you may not have identified the meaning of a clue but while searching you might have found something unexpected that the GM provides you, alternatively you may notice but fail to understand the importance of a clue and make a connection later',
        nearSuccess: 'you realize something but don\'t put everything together; the GM should help point you in the right direction giving perhapse a partial clue or a hint as to where to find the next one',
        success: 'you find the most obvious clue to what you\'re looking for',
        criticalSuccess: 'you may find additional clues or get additional information about the clue(s) found based on how great your critical success',
      },
      {
        name: 'Search',
        primaryAttribute: ['Perception'],
        teamworkPossible: true,
        description:
          'the character searches an area for money, valuables, other specific items of interest, or hiding characters.',
        difficultyExamples:
          `
            4 - searching for a mug in a tavern
            7 - looking for crackers in your own pantry
            10 - searching for an accountant's ledger in a desk
            13 - searching for a hidden latch to a secret door
            16 - searching for a mobsters second ledger in their office
            19 - searching for a needle in a haystack
            22 - searching for a specific fish in the sea
          `,
        criticalFailure: 'You don\'t find anything helpful but may have triggered a trap (ex. you don\'t notice any mugs because you\'re looking under teh table, you do upset a woman and her friends when they notice you and think you\'re trying to look up their skirts)',
        conditionalFailure: 'You don\'t find the specific item you were looking for but find something still of interest (ex. you have no idea how to open the door but while searching you find a book of forbidin occult lore on the bookshelf)',
        nearSuccess: 'You find the thing you\'re looking for but trigger a trap or other side effect (ex. you find the crackers but the box is empty)',
        success: 'You find what you sought',
        criticalSuccess: 'You may find more than you where looking for or you find a better version of what you hopped (ex. you find the hidden compartment with the second ledger in it, the compartment also contains a bag filled with enough money to live on for a week - year depending on how much the difficulty was surpassed)'
    },
      {
        name: 'Sense Motive',
        primaryAttribute: ['Perception', 'Mind'],
        teamworkPossible: false,
        description: 'you attempt to get a read on a character you are interacting with or observing for at least one minute.',
        difficultyExamples:
          `
            4 - the red faced yelling man is hostile
            7 - the child is lying about eating the stolen cookie
            10 - the bartender does know at least something about the character you've asked about that they denied knowledge of
            13 - the criminal you've paid for information is sending you into an ambush
            16 - the pirate ship's quartermaster secretly wants the captain dead and might help you escape
            19 - the cutpurse you're chasing has a heart of gold and would help you if you asked
            22 - the door is a mimic
          `,
        criticalFailure: 'you get the wrong feeling from about the character\'s motive (ex. you can absolutely trust the criminal you\'re buying information from)',
        conditionalFailure: 'you don\'t get a specific read on the target one way or another (ex. the red faced man is just drunk and boisterous, he\'s not hostile)',
        nearSuccess: 'you may get a feeling like this person is hiding something or holding something back but you can\'t put your finger on what it might be (ex. you feel like there\'s something up with teh quarter master but don\'t identify his hatred for the captain in particular)',
        success: 'you get the feeling about the person the GM had in mind',
        criticalSuccess: 'you get additional information based on what you might expect, how much depends on your level of critical success (ex. the child is lying about the stolen cookie but they\re also scared to get caught, with a high enough skill check you may notice they flinch slightly when you raise your fist to pick up your ale)',
      },
      {
      name: 'Size Up',
      primaryAttribute: ['Perception', 'Mind'],
      teamworkPossible: true,
      description: 'you attempt to get a read on specific strengths and weaknesses of a character you are observing for at least one minute.',
      difficultyExamples:
        `
          4 - you want to learn how skilled a boxer the man fighting in the ring is
          7 - you want to figure out how good a card player the three individuals playing cards are
          10 - you want to decern how sneaky a man is while watching him move through a crowd
          13 - you want to know if you're stronger than the thug boasting about his accomplishments at the tavern
          16 - you want to get a feel for the guard's martial skills by watching him interact with passing merchants
          19 - you want to know how smart the dutchess is by watching her quietly observe other at court
          22 - you want to know how fast the cutpurse who fakes a limp is in case you want to chase him
        `,
      criticalFailure: 'you are get the wrong idea about the target (ex. you\'re firmly convinced the dealer is a lousy card player and proceed to lose your spending money to him)',
      conditionalFailure: 'you have a hard time getting a read on the target (ex. that man seems just as likely to be the best thief in the city as he is a common cobbler)',
      nearSuccess: 'you get a sense for the target\'s skill but not the extent of it (ex. the guard seems like he\'s had some formal training in combat but you couldn\'t say if he was a novice or an expert)',
      success: 'you get the character\'s base skill level or stat that you were looking for (ex. the dutchess is watching all the most important people with interest, you believe she has a +1 mind stat)',
      criticalSuccess: 'you get additional information based on what you might expect, how much depends on your level of critical success (ex. the success told you the boxer had a melee combat rank of skilled with enough additional successes you are able to learn they have novice proficiency in personal defense and two ranks in the flurry of blows trait)'
    }
  ],
  isSkillTree: true,
  traits: [
    {name: "Quick to Notice", effect: {text: "Gain +1 to all alertness skill checks."}},
    {name: "Eye for Detail", effect: {text: "Gain +1 to all search and investigate skill checks."}},
    {name: "Understand People", effect: {text: "Gain +1 to all sense motive and size up skill checks."}},
    {name: "Combat Awareness", effect: {text: "Gain +1 ranged defense bonus"}},
    {name: "vigilant", effect: {text: "Gain +1 vigilance"}},
    // {name: "Inner Calm", effect: {text: "+1 defense when you take the Steady Oneself combat action"}},
    {name: "Fast Reflexes", cost: [2, 5], effect: {text: "Once on each of your turns, you may spend a point of defense, vigilance, or willpower to reduce each of your actions speeds by 1. If you've taken this trait twice, you may instead spend one point each of defense, vigilance, and willpower to reduce the speed of each of your actions by 2"}},
    // {name: "Defensive Camper", effect: {text: "While conscious characters attempting to sneak past or surprise you gain a difficulty penalty die to their skill checks"}, costs: [2]},
    // {name: "Alert", effect: {text: "While conscious characters attempting to sneak past or surprise you gain a difficulty penalty die to their skill checks"}, costs: [3]},
    // {name: "Always on Guard", effect: {text: "Being asleep or engaged in distracting or strenuous activity no longer prevents you from making alertness checks; this does not allow you to make such checks if your unconscious due to damage, poison, magic, or other exceptional effects"}, requirements: "Defensive Camper", costs: [5]},
    // {name: "Master Observer", effect: {text: "When an unexpected combat begins you may take one action before initiative is rolled, when some action or event that leads to a limited action event triggers you may take one action before the count begins.  "}, costs: [8]}
  ],
};