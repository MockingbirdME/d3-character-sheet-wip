export default {
  name: 'Artisan',
  isTemplate: true,
  variants: [ 'Artist', 'Carpenter', "Chemist", "Cook", "Mason", "Smith", "Woodworker" ],
  skillChecks: [
    {
      name: 'Craft',
      primaryAttribute: ['Body', 'Mind', 'Perception'],
      teamworkPossible: false,
      description:
        'Create a finished product from a set of materials; GM should determine how long crafting an item takes on average, long crafted creations may be broken down into component pieces (ex. building a house may be several skill checks each spanning many days for example, one for framing, one to put up the walls, and another for putting up the roof)',
      difficultyExamples:
        `
          4 - Crafting stakes from straight sticks (Woodworker)
          7 - Building a simple boundary fence (Carpenter)
          10 - Baking bread or making a soup your family would be content with as dinner (Cook)
          13 - Building an arched entryway from pieces of stone you need cut to size (Mason)
          16 - Crafting a fitted suit of mail that allows ease of moment without compromising protection (Smith)
          19 - Painting a portrait that any lord would be happy to hang in their hall (Artist)
          22 - Mixing a chemical concoction almost impossible to come by in your setting (Chemist)
        `,
      criticalFailure: 'The final product is ruined, destroying at least some of the materials in the process and potentially harming the artisan or the environment around them (A chemist trying to create a smoke powder sets it off in the process, filling a city block with thick choking smog and destroying all of the components for the entire batch).',
      conditionalFailure: 'The product is of poor quality with obvious flaws, or the product failed to be created but at least some of the material may be reused (A smith crafts a sabre that\'s likely to be serviceable for a single fight before it risks breaking when it contacts its target or another blade)',
      nearSuccess: 'The product has a flaw, takes significantly longer or more material to craft than expected, but generally will fulfill its purpose (A carpenter splits their trim boards when putting a door on a house, they spend several extra hours and additional material but the end product is functional and only allows the smallest of drafts through)',
      success: 'The product is a textbook example of what was being tried for (A tavern owner produces dozens of uniform loaves of bread up to the standards of their high end customers)',
      criticalSuccess: 'The product is of slightly higher quality, required fewer materials, or was faster to create the level of each based on the number of additional successes rolled (An artist hired to paint a wall length mural originally planned to spend 3 months on the project but finished a full 2 weeks early with 4 extra successes)',
    },
    {
      name: 'Forge/Duplicate',
      primaryAttribute: ['Body', 'Mind', 'Perception'],
      teamworkPossible: false,
      description:
        'Craft a product that exactly matches another, forging requires first a successful craft check to match the quality of the work and then a forge/duplicate check to ensure the final product matches the desired item to duplicate.',
      difficultyExamples:
        `
          4 - making a poisoned loaf of bread appear to be from the seedy tavern with inconsistent loaves (Cooking)
          7 - building a segment of fence to exactly match the adjoining segments (Carpentry)
          10 - putting an extra level on a stone tower and making it appear to have been built all at one time (Mason)
          13 - crafting a dagger to appear as if a specific town smith forged it (Smith)
          16 - carving a wooden ring and painting it gold to have it, visually, look the same as the real ring on display in a glass box (Woodworker)
          19 - painting an exact duplicate of a famous painting (Artist)
          22 - making a bottle of perfume that smells the same as another with a secret recipe (Chemist)
        `,
      criticalFailure: 'The product is clearly not the item it was meant to appear as but a cursory examination will review that it was meant to be, potentially giving your deception away.',
      conditionalFailure: 'The product won\'t fool anyone as a copy but doesn\'t appear as if it was intended to be, it rather comes across as simply of a similar style',
      nearSuccess: 'The product would likely deceive a passive observer or scrutiny of someone not intimately familiar with the real thing',
      success: 'Only a thorough investigation by someone well aquatinted with the original could tell that this product isn\'t it',
      criticalSuccess: 'The difficulty to identify this item as a forgery goes up based on the number of additional successes as determined by the GM.',
    },
    {
      name: 'Improve/Identify',
      primaryAttribute: ['Body', 'Mind', 'Perception'],
      teamworkPossible: false,
      description:
        'Correct a subpar product or identify the composition of a completed one',
      difficultyExamples:
        `
          4 - determine that a door is made out of a specific kind of wood (Carpenter)
          7 - identify the ingredients in a common  tincture (Chemist)
          10 - remove imperfections from and reinforce a spear shaft (Woodworker)
          13 - add fullers to a sword that\'s too top heavy to improve the balance (Smith)
          16 - determine what ingredient was used to create a specific paint color (Artist)
          19 - taste the subtle difference in a stew to recognize it as poisoned (Cook)
          22 - strengthen the integrity of an already masterwork defensive wall (Mason)
        `,
      criticalFailure: 'Not only does your improvement or identify attempt fail but you damage or set off the original',
      conditionalFailure: 'You\'ve not improved or identified the product but you haven\'t made it worse either, you may even have learned something along the way',
      nearSuccess: 'You\'ve successfully improved or identified the item but you\'ve failed to fix a flaw or notice an important detail in composition or craftsmanship',
      success: 'The product is improved or identified as attempted',
      criticalSuccess: 'The task is completed faster or even more effectively than expected, the level of which varies based on level of critical success',
    },
    {
      name: 'Repair',
      primaryAttribute: ['Body', 'Mind', 'Perception'],
      teamworkPossible: false,
      description:
        'Fix damage to an product',
      difficultyExamples:
        `
          4 - remove damaged bristles from a paintbrush (Artist)
          7 - replace fallen bricks on a freestanding wall with fresh mortar (Mason)
          10 - bring a dull axe back to razor sharpness (Smith)
          13 - extract only the vinegar from a solution being inhibited by it (Chemist)
          16 - salvage a wedding cake after a child grabbed a chunk with their hand (Cook)
          19 - make snapped arrows shafts serviceable for one shot (Woodworker)
          22 - exactly restore a burned ornate chapel so no one would know it was ever damaged (Carpenter)
        `,
      criticalFailure: 'The product is worse after your attempt than before',
      conditionalFailure: 'The product is no better or worse than before you attempted to fix it',
      nearSuccess: 'The product may be better than it was but it\'s still damaged',
      success: 'The targeted defect is repaired as well as expected',
      criticalSuccess: 'The repair is done faster than hoped for or with fewer materials consumed depending on the number of additional successes',
    }
  ],
  isSkillTree: true,
  traits: [
    {name: "Bodger", effect: {text: "Gain +1 to your {variant} Repair skill checks", skillBoosts: ["Repair"]}},
    {name: "Copy Cat", effect: {text: "Gain +1 to your {variant} Forge/Duplicate skill checks", skillBoosts: ["Forge/Duplicate"]}},
    {name: "Crafty", effect: {text: "Gain +1 to your {variant} Craft skill checks", skillBoosts: ["Craft"]}},
    {name: "Discerning Artisan", effect: {text: "Gain +1 to your {variant} Improve/Identify skill checks", skillBoosts: ["Improve/Identify"]}},
    {name: "Combat Chemist", effect: {text: "You may use your Artisan (Chemist) skill to make melee or ranged attacks that involve deploying your concoctions without additional tools (ex. blowing powder, pour liquid, or tossing a vial of something awful all apply, but firing a crossbow with an explosive attached to the bolt would not)"}, alwaysDisplay: true, costs: [8]},
    {name: "One off trait with requirement", effect: {text: ""}, requirements: "One off trait", costs: [5]}
  ],
  variantTraits: {
    variant: [

    ]
  }
};