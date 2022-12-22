
import { useState } from "react";
import CharacterSheetSkillProficiency from "./skillProficiency";
import CharacterSheetSkillTrait from "./skillTrait";

function CharacterSheetSkill(params) {
  const {skillData, displayAllTraits} = params;

  const [selectedVariant, setSelectedVariant] = useState();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const setVariant = key => {
    console.log('setting variant', key);
    const { advancementPoints, checks, name, traits } = skillData.variants[key];

    skillData.advancementPoints = advancementPoints;
    skillData.checks = checks;
    skillData.name = name;
    skillData.traits = traits;
    
    setSelectedVariant(key);
    setOpen(false);
  }

  const setHighestProficiencyVariant = () => {
    const highestProficiencyVariant = Object.keys(skillData.variants).reduce((acc, key) => {
      const variant = skillData.variants[key];
      const totalAdvancementPoints = variant.traits.reduce((acc, trait) => {
        return trait.cost + acc;
      }, variant.advancementPoints);

      return !acc.key || totalAdvancementPoints > acc.totalAdvancementPoints  
        ? { key, totalAdvancementPoints }
        : acc

    }, {});
    setVariant(highestProficiencyVariant.key)
  }

  const variants = skillData.variants 
    ? Object.keys(skillData.variants)
    : null;

  if (skillData.variants) {
    // TODO, instead set it to the index with the highest advancement point total
    if (!selectedVariant) setHighestProficiencyVariant();
  }

  if (skillData.variants && !selectedVariant) return ""

  const nameDisplayDropdown = skillData.variants
    ? (
      <div className="dropdown">
      <button onClick={handleOpen}>{open ? 'v' : '>'}</button>
      {open ? (
        <ul className="character_sheet__skill__name_variant_menu">
          {variants.map(variant => (
            <li key={variant} className="character_sheet__skill__name_variant_menu_item">
              <button
                onClick={() => setVariant(variant)}
                className="character_sheet__skill__name_variant_menu_item_button">
                  {variant}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
    )
    : ""

  const nameDisplay = (
    <div className="character_sheet__skill__name"><div><b>{skillData.name}</b></div>{nameDisplayDropdown}</div>
  )

  const proficiencyDisplay = <CharacterSheetSkillProficiency skillData={skillData} />

  const skillChecksItems = Object.keys(skillData.checks || {}).map(skillCheck => (
    <li key={skillCheck.toLocaleLowerCase()} className="character_sheet__skill__check_list_item">
      <span>{skillCheck}:</span>
      <span>+ {skillData.checks[skillCheck]}</span>
    </li>
  ))

  const skillChecksDisplay = !skillChecksItems || skillChecksItems.length === 0 
    ? ""
    : (
      <div>
        <p className="character_sheet__skill__list_header"><b>Skill Checks</b></p>
        <ul className="character_sheet__skill__check_list">
          {skillChecksItems}
        </ul>
      </div>
    )

  const traitsDisplayItems = skillData.traits?.map(trait => {
    if (!trait.alwaysDisplay && !displayAllTraits) return "";
    return (
      <CharacterSheetSkillTrait key={`${trait.name.toLocaleLowerCase()}-${trait.cost}`}  traitData={trait} />
    )
  }).filter(item => item)

  const traitsDisplay = !traitsDisplayItems || traitsDisplayItems.length === 0 
    ? ""
    : (
      <div>
        <p className="character_sheet__skill__list_header"><b>Traits</b></p>
        <ul className="character_sheet__skill__trait_list">
          {traitsDisplayItems}
        </ul>
      </div>
    )

  return (
    <div className="character_sheet__skill">
      {nameDisplay}

      {proficiencyDisplay}

      {skillChecksDisplay}

      {traitsDisplay}

    </div>
  );
}

export default CharacterSheetSkill;