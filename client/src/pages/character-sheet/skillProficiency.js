import {useState} from "react";

function CharacterSheetSkillProficiency(params) {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    console.log('hovering');
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    console.log('nto hovering');
    setIsHovering(false);
  };


  const {skillData} = params;

  const calculateProficiency = () => {
    const advancementPointTotal = (
      skillData.traits?.reduce(
        (acc, val) => val.cost + acc,
        skillData.advancementPoints)
    )
    
    if (advancementPointTotal >= 61) return "Paragon"
    if (advancementPointTotal >= 35) return "Master"
    if (advancementPointTotal >= 19) return "Expert"
    if (advancementPointTotal >= 9) return "Skilled"
    if (advancementPointTotal >= 3) return "Novice"
    return "Untrained"    
  }

  const getProficiencyLevelText = level => {
    switch(level) {
      case "Paragon":
        return "Add 2 Skilled bonus dice to all skill checks, gain +1 to the roll total for each bonus die in the final result"
      case "Master":
        return "Add 1 Skilled bonus dice to all skill checks, gain +1 to the roll total for each bonus die in the final result"
      case "Expert":
        return "Add 1 Skilled bonus dice to all skill checks, gain +1 to the roll total if a skilled bonus die in the final result"
      case "Skilled":
        return "Add 1 Skilled bonus dice to all skill checks"
      case "Novice":
        return "Make skill checks without a skilled modifier"
      case "Untrained":
        return "Add 1 Unskilled penalty dice to all skill checks"
      default:
        return
    }
  }

  if (!skillData) return (<div></div>)
  console.log(skillData);

  const proficiencyLevel = calculateProficiency();

  const proficiencyText = getProficiencyLevelText(proficiencyLevel);

  const proficiencyDisplay = (
    <div className="character_sheet__skill__proficiency">
      <div>Proficiency:</div> 
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >{proficiencyLevel}</div>
      {isHovering && <span className="character_sheet_skill__proficiency__hover_text">{proficiencyText}</span>}
    </div>
  )

  return (
    proficiencyDisplay
  );
}

export default CharacterSheetSkillProficiency;