import {useState} from "react";

import CharacterSheetSkill from "./skill";

function CharacterSheetSkills(params) {


  const [displayAllTraits, setDisplayAllTraits] = useState(false);

  const toggleTraitDisplay = () => {
    setDisplayAllTraits(!displayAllTraits)
  }

  const { skills } = params;

  if (!skills) return (<div></div>)

  const skillsDisplay = skills.map(skill => (
    <CharacterSheetSkill 
      key={skill.name.toLowerCase()}
      skillData={skill} 
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
      <div className="character_sheet__skills_groups">
        {skillsDisplay}
      </div>
    </div>
  );
}

export default CharacterSheetSkills;