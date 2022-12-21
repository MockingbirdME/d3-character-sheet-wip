import attributes from "../data/attributes.js";
import backgrounds from "../data/backgrounds.js";
import skills from "../data/skills/index.js";

export default class Character {
  static expandBackgroundData(background) {
    const { key, primarySkill, secondarySkill, tertiarySkill } = background;

    return { ...backgrounds[key], primarySkill, secondarySkill, tertiarySkill };
  }

  static expandBackgroundsData(backgrounds) {
    return backgrounds.map(background => Character.expandBackgroundData(background))
  }

  constructor(rawData) {
    const { name, attributeBonuses, backgrounds, advancementPoints, resources, skills } = rawData;

    this._name = name;
    this._advancementPoints = advancementPoints;

    
    this.addAttributes(attributeBonuses, resources);
    
    this.addBackgrounds(backgrounds);
    
    this.addSkills(skills);
  }

  get name() {
    return this._name || 'unnammed';
  }

  get advancementPoints() {
    return this._advancementPoints || 0;
  }

  get backgrounds() {
    return this._backgrounds || [];
  }

  get attributes() {
    const attributeKeys = Object.keys(this._attributes);
    return attributeKeys.map(key => this.getAttribute(key));
  }
 
  getAttribute(attributeKey) {
    const {...attribute} = this._attributes[attributeKey];
    attribute.value = this.attributeValue(attributeKey);

    return attribute;
  }

  attributeValue(attributeKey) {
    const attribute = this._attributes[attributeKey];

    const { baseValue = 0, primaryAttributes, backgroundBonuses = 0, traitBonuses = 0, otherBonuses = 0 } = attribute;

    const attributeBonuses = this.calculateAttributeBonus(primaryAttributes);
  
      return baseValue + attributeBonuses + backgroundBonuses + traitBonuses + otherBonuses;
  }

  addAttributes(bonuses = {}, currentResourceValues = {}) {
    this._attributes = {};

    for (const attribute of attributes) {
      const key = attribute.name.toLowerCase();
      this._attributes[key] = {
        ...attribute,
        otherBonuses: bonuses[key] || 0
      }
      if (attribute.resource) {
        this._attributes[key].current = currentResourceValues[key]?.current || 0;
        this._attributes[key].max = currentResourceValues[key]?.max || 0;
      }
    }
  }

  calculateAttributeBonus(attributes) {
    if (!attributes || (Array.isArray(attributes) && attributes.length === 0)) {
      return 0;
    }
    if (typeof attributes === 'string') {
      attributes = [attributes];
    }

    return attributes.reduce((acc, attribute) => {
      return acc + this.attributeValue(attribute);
    }, 0)
  }

  get skills() {
    const skillKeys = Object.keys(this._skills);
    return skillKeys.map(key => this._skills[key]);
  }

  addBackgrounds(backgroundSnubs) {
    this._backgrounds = Character.expandBackgroundsData(backgroundSnubs);

    for (const background of this._backgrounds) {
      this.applyBackgroundBaseResources(background)
    }
  }

  applyBackgroundBaseResources(background) {
    for (const resource of ['stamina', 'vigilance', 'willpower', 'luck']) {
      if (!this._attributes[resource].backgroundBonuses) {
        this._attributes[resource].backgroundBonuses = 0;
      }
      this._attributes[resource].backgroundBonuses += background[resource];
    }
  }

  addSkills(characterSkillsData) {
    this._skills = {};

    for (const skill of skills) {
      const {  name: skillName, variants } = skill;
      const key = skill.key || skillName.toLowerCase();
      
      if (!variants) {
        this._skills[key] = this.getSkillData(characterSkillsData[key], skill)
        continue
      }

      const variantData = {};
      
      for (const variant of variants) {
        const variantName = `${skillName} (${variant})`
        const variantKey = variant.toLowerCase();
        
        variantData[variantKey] = this.getSkillData(characterSkillsData[variantName.toLowerCase()], {...skill, name: variantName})
      }

      this._skills[key] = {
        name: skillName,
        variants: variantData
      }
      
    }
  }

  getSkillData(characterSkillData, skill) {
    const { name: skillName, skillChecks, traits: traitsData } = skill
    const { advancementPoints = 0, traits = [] } = characterSkillData || {};

    const checks = {};
    skillChecks.forEach(({name: skillCheckName}) => checks[skillCheckName] = 0);

    const selectedTraits = traits.map(trait => {
      const traitData = traitsData.find(({name: traitName}) => traitName === trait.name)

      if (traitData.effect.skillBoosts) {

        for (const skillCheck of traitData.effect.skillBoosts) {
          checks[skillCheck] += 1;
        }
      }

      if (traitData.effect.attributeBoost) {
        for (const attribute of traitData.effect.attributeBoost) {
          const attributeKey = attribute.toLowerCase();
          // TODO handle cases where attribute is not found.
          if (!this._attributes[attributeKey].traitBonuses) {
            this._attributes[attributeKey].traitBonuses = 0;
          }
          this._attributes[attributeKey].traitBonuses += 1;
        }
      }

      return {
        name: trait.name,
        cost: trait.cost,
        text: traitData.effect.text,
        alwaysDisplay: traitData.alwaysDisplay
      }
    })

    return {
      name: skillName,
      advancementPoints,
      checks,
      traits: selectedTraits
    }
  }

  toJSON() {
    // TODO make getters for the rest of the values
    const { name, advancementPoints, attributes, backgrounds, skills } = this;
    return {
      name,
      advancementPoints,
      backgrounds,
      attributes,
      skills
    }
  }

}