
import CharacterSheetSkillProficiency from "./skillProficiency";
import CharacterSheetSkillTrait from "./skillTrait";

function CharacterSheetSkill(params) {

  const {skillData, displayAllTraits} = params;
  console.log(displayAllTraits);
  const getSkillBoostTotal = skill =>       
    skillData.traits?.reduce((acc, val) =>  
      val.skillBoosts?.includes(skill) ? acc + 1 : acc, 0)

  if (!skillData) return (<div></div>)

  const proficiencyDisplay = <CharacterSheetSkillProficiency skillData={skillData} />

  const skillChecksItems = skillData.checks.map(skillCheck => (
    <li className="character_sheet__skill__check_list_item">
      <span>{skillCheck}:</span>
      <span>+ {getSkillBoostTotal(skillCheck) || 0}</span>
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
      <CharacterSheetSkillTrait traitData={trait} />
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
      <b className="character_sheet__skill__name">{skillData.displayName}</b>

      {proficiencyDisplay}

      {skillChecksDisplay}

      {traitsDisplay}

    </div>
  );
}

export default CharacterSheetSkill;