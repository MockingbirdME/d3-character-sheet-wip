import {useState} from "react";

function CharacterSheetSkillTrait(params) {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const {traitData} = params;

  if (!traitData) return (<div></div>)

  const traitDisplay = (
    <li className="character_sheet__skill__trait_list_item">
      <div 
        className="character_sheet__skill__list_item__trait"
        onMouseOver={handleMouseOver} 
        onMouseOut={handleMouseOut} 
      >{traitData.name} ({traitData.cost})</div>
      {isHovering && <span className="character_sheet_skill__trait__hover_text">{traitData.text}</span>}
    </li>
  )

  return (
    traitDisplay
  );
}

export default CharacterSheetSkillTrait;