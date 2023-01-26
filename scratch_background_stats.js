const backgrounds = {
  athlete: {
    displayName: "Athlete",
    description: "",
    luck: 0,
    stamina: 3,
    defense: 0,
    willpower: 1,
    skills: [ "Personal Movement", "Physical Conditioning" ]
  },
  charlatan: {
    displayName: "Charlatan",
    description: "Snake oil salesmen, false prophets, courtiers, and polititians are all likely to have this background.",
    luck: 1,
    stamina: 0,
    defense: 1,
    willpower: 1,
    skills: [ "Discipline", "" ]
  },
  criminal: {
    displayName: "Criminal",
    description: "",
    luck: 1,
    stamina: 0,
    defense: 1,
    willpower: 1,
    skills: [ "Awareness", "Legerdemain" ]
  },
  cultist: {
    displayName: "Cultist",
    description: "There are many cults on Flax dedicated to some dweller, ohma, or immortal or another and even a few that follow individuals they believe to be some fabled hero. Cults provide vital services to the towns of Flax often supplying much needed story telling and medical attention to the populace.",
    luck: 0,
    stamina: 0,
    defense: 1,
    willpower: 3,
    skills: [ "Knowledge", "Medicine" ]
  },
  doctor: {
    displayName: "Doctor",
    description: "",
    luck: 1,
    stamina: 0,
    defense: 1,
    willpower: 2,
    skills: [ "Discipline", "Medicine" ]
  },
  duelist: {
    displayName: "Duelist",
    description: "",
    luck: 1,
    stamina: 0,
    defense: 2,
    willpower: 0,
    skills: [ "Melee Combat", "Personal Defense" ]
  },
  entertainer: {
    displayName: "Entertainer",
    description: "Actors, orators, musicians, street magicians and the like are all various forms of performers that can be found in any large city or traveling show.",
    luck: 0,
    stamina: 2,
    defense: 1,
    willpower: 1,
    startingWealth: 0,
    skills: [ "Artisan", "Performance" ]
  },
  gambler: {
    displayName: "Gambler",
    description: "A gambler is someone who has a history of taking risks, they might be a scoundrel who is most at home playing cards in some tavern basement, a merchant who puts his fortune on the line to make more money, or an acrobat who performs ever more daring feats without a proper safety net.",
    luck: 2,
    stamina: 0,
    defense: 0,
    willpower: 0,
    skills: [ "Legerdemain", "Performance" ]
  },
  hunter: {
    displayName: "Hunter",
    description: "Those who have experience capturing or killing creatures regardless of method. A hunter may use traps to protect their farm, a bow feed their family, or their own wits to bring in criminals with bounties on their heads.",
    luck: 1,
    stamina: 1,
    defense: 1,
    willpower: 0,
    skills: [ "Survival", "Stealth" ]
  },
  laborer: {
    displayName: "Laborer",
    description: "",
    luck: 0,
    stamina: 2,
    defense: 0,
    willpower: 2,
    skills: [ "Artisan", "Physical Conditioning" ]
  },
  leviedSoldier: {
    displayName: "Levied Soldier",
    description: "Whatever your profession if your poor enough, or your local lords in need enough nearly anyone can become a levied soldier at some point in their lives. They've been handed a spear, drilled until you were ready to drop, and sent to fight in some battle they couldn't possibly understand the true reasons for.",
    luck: 0,
    stamina: 2,
    defense: 1,
    willpower: 1,
    skills: [ "Melee Combat", "Physical Conditioning"]
  },
  nobility: {
    displayName: "Nobility",
    description: "Being born into a household of privilege comes with a host of expectations and and responsibilities but, generally, also with a basic education.",
    luck: 1,
    stamina: 0,
    defense: 0,
    willpower: 2,
    skills: [ "Discipline", "Performance" ],
    traitsOptional: []
  },
  professionalSoldier: {
    displayName: "Professional Soldier",
    description: "",
    luck: 0,
    stamina: 2,
    defense: 1,
    willpower: 1,
    skills: [ "Melee Combat", "Ranged Combat" ]
  },
  pugilist: {
    displayName: "Pugilist",
    description: "",
    luck: 0,
    stamina: 3,
    defense: 1,
    willpower: 0,
    skills: [ "Melee Combat", "Physical Conditioning" ]
  },
  ranger: {
    displayName: "Ranger",
    description: "Ambitious or wealthy heads of households might higher private tutors for they're children or even send them off to an academy for an education.",
    luck: 0,
    stamina: 1,
    defense: 1,
    willpower: 2,
    skills: [ "Personal Movement", "Survival" ]
  },
  servant: {
    displayName: "Servant",
    description: "Wealthy household's of nobles, citizens, and merchants in nearly every nation upon Flax imploy service workers of some kind from cooks and maids to gardeners and stable workers",
    luck: 0,
    stamina: 1,
    defense: 1,
    willpower: 4,
    skills: [ "animal handling", "awareness", "craft (cooking)", "discipline", "knowledge (academics)", "medicine", "performance" ]
  },
  scout: {
    displayName: "Scout",
    description: "",
    luck: 1,
    stamina: 2,
    defense: 1,
    willpower: 1,
    skills: [ "Awareness", "Personal Movement" ]
  },
  skilledCrafter: {
    displayName: "Skilled Crafter",
    description: "Not all workers are simple laborers many have honed their craft to such levels that they could make a living in most villages where they're skills are in demand.",
    luck: 0,
    stamina: 1,
    defense: 1,
    willpower: 2,
    skills: [ "Artisan", "" ],
    traitsOptional: []
  },
  sniper: {
      displayName: "Sniper",
      description: "",
      luck: 0,
      stamina: 1,
      defense: 1,
      willpower: 2,
      skills: [ "Ranged Combat", "" ],
      traitsOptional: ["Ambusher", "Combat Reflexes"]
  },
  tutoredStudent: {
    displayName: "Tutored Student",
    description: "Ambitious or wealthy heads of households might higher private tutors for they're children or even send them off to an academy for an education.",
    luck: 0,
    stamina: 1,
    defense: 1,
    willpower: 2,
    skills: [ "", "" ],
    traitsOptional: []
  },
  urchin: {
    displayName: "Urchin",
    description: "Growing up on the streets is a death sentence to many, a good way to become a slave for others but some strive in this element as ciminals, workers, or performers.",
    luck: 2,
    stamina: 1,
    defense: 1,
    willpower: 0,
    skills: [ "Awareness", "Stealth" ]
  },
  warrior: {
    displayName: "Warrior",
    description: "Soldiers, crime inforcers, gladiators, rangers, squires, and just about any one who grew up scrappy can make claim to the warrior background.",
    luck: 0,
    stamina: 4,
    defense: 1,
    willpower: 1,
    skills: [ "Melee combat", "Personal defense"]
  }
}

const primarySkillMap = {};

const resourcesMap = {};

const exactResourceMap = {}

// TODO make a attribute map


for (const key in backgrounds) {
  const background = backgrounds[key];

  const resourcePoints = (background.luck * 2) + background.stamina + background.defense + background.willpower;

  if (resourcePoints !== 4) console.log(`${key} has ${resourcePoints} resourcePoints when it should have 4.`);

  const resourcesString = `${background.luck}-${background.stamina}-${background.defense}-${background.willpower}`;

  if (!resourcesMap[resourcesString]) resourcesMap[resourcesString] = { count: 0, backgrounds: [] }

  resourcesMap[resourcesString].count++
  resourcesMap[resourcesString].backgrounds.push(key)

  if (!background.skills) background.skills = [];

  for (const skill of background.skills) {
    if (!primarySkillMap[skill]) primarySkillMap[skill] = {count: 0, backgrounds: []}
    primarySkillMap[skill].count++
    primarySkillMap[skill].backgrounds.push(key)
  }

  const skillsString = background.skills.join(" ");
  if (!exactResourceMap[skillsString]) exactResourceMap[skillsString] = { count: 0, backgrounds: [] }

  exactResourceMap[skillsString].count++
  exactResourceMap[skillsString].backgrounds.push(key)
}

console.log(resourcesMap);
console.log(primarySkillMap);
console.log(exactResourceMap);
