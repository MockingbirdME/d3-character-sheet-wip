import {useState} from "react";

import CharacterSheetSkill from "./skill";

function CharacterSheetSkills(params) {


  const [displayAllTraits, setDisplayAllTraits] = useState(false);

  const toggleTraitDisplay = () => {
    console.log('toggle');
    setDisplayAllTraits(!displayAllTraits)
  }

  const {characterData} = params;

  if (!characterData.resources) return (<div></div>)

  const skills = Object.keys(characterData.skills)

  const skillsDisplay = skills.map(skill => (
    <CharacterSheetSkill 
      skillData={characterData.skills[skill]} 
      displayAllTraits={displayAllTraits}
    />
  ))

  const showAllTraitsButton = (
    <div 
      className="character_sheet__toggle_button"
      onClick={toggleTraitDisplay}
    >Show All Traits</div>
  )

  const hideSomeTraitsButton = (
    <div 
      className="character_sheet__toggle_button"
      onClick={toggleTraitDisplay}
    >Show All Traits</div>
  )

  return (
    <div className="character_sheet__skills">
      <div className="character_sheet__skills__header_row">
        <b style={{textDecoration: 'underline'}}>Skills</b>
        {displayAllTraits ? showAllTraitsButton : hideSomeTraitsButton}
      </div>
      <div className="character_sheet__resources_groups">
        {skillsDisplay}
      </div>
    </div>
  );
}

export default CharacterSheetSkills;