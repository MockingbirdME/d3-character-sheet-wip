export default {
  criminal: {
    displayName: "Criminal",
    description: "",
    luck: 1,
    stamina: 0,
    defense: 1,
    willpower: 1
  },
  duelist: {
    displayName: "Duelist",
    description: "",
    luck: 1,
    stamina: 1,
    defense: 1,
    willpower: 0,
    primarySkill: "Ranged Combat",
    secondarySkill: "Personal Defense",
    tertiarySkill: "Awareness"
  },
  gambler: {
    displayName: "Gambler",
    description: "A gambler is someone who has a history of taking risks, they might be a scoundrel who is most at home playing cards in some tavern basement, a merchant who puts his fortune on the line to make more money, or an acrobat who performs ever more daring feats without a proper safety net.",
    luck: 2,
    stamina: 1,
    defense: 0,
    willpower: 0  
  },
  hunter: {
    displayName: "Hunter",
    description: "Those who have experience capturing or killing creatures regardless of method. A hunter may use traps to protect their farm, a bow feed their family, or their own wits to bring in criminals with bounties on their heads.",
    luck: 1,
    stamina: 1,
    defense: 1,
    willpower: 0
  },
  laborer: {
    displayName: "Laborer",
    description: "",
    luck: 0,
    stamina: 2,
    defense: 0,
    willpower: 2,
    traitsOptional: ["Hardy", "Healthy"]
  },
  nobility: {
    displayName: "Nobility",
    description: "Being born into a household of privilege comes with a host of expectations and and responsibilities but, generally, also with a basic education.",
    luck: 1,
    stamina: 0,
    defense: 0,
    willpower: 2,
    traitsOptional: []
  },
  ranger: {
    displayName: "Ranger",
    description: "Ambitious or wealthy heads of households might higher private tutors for they're children or even send them off to an academy for an education.",
    luck: 0,
    stamina: 1,
    defense: 1,
    willpower: 2
  },
  skilledCrafter: {
    displayName: "Skilled Crafter",
    description: "Not all workers are simple laborers many have honed their craft to such levels that they could make a living in most villages where they're skills are in demand.",
    luck: 0,
    stamina: 1,
    defense: 1,
    willpower: 2,
    traitsOptional: []
  },
  sniper: {
      displayName: "Sniper",
      description: "",
      luck: 0,
      stamina: 1,
      defense: 1,
      willpower: 2,
      traitsOptional: ["Ambusher", "Combat Reflexes"]
  },
  tutoredStudent: {
    displayName: "Tutored Student",
    description: "Ambitious or wealthy heads of households might higher private tutors for they're children or even send them off to an academy for an education.",
    luck: 0,
    stamina: 1,
    defense: 1,
    willpower: 2,
    traitsOptional: []
  }
}