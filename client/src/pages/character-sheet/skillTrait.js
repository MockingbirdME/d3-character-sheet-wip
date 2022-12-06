import {useState} from "react";

function CharacterSheetSkillTrait(params) {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    console.log('hovering');
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    console.log('nto hovering');
    setIsHovering(false);
  };


  const {traitData} = params;

  if (!traitData) return (<div></div>)
  console.log(traitData);


  const traitDisplay = (
    <li className="character_sheet__skill__trait_list_item">
      <div 
        className="character_sheet__skill__list_item__trait"
        onMouseOver={handleMouseOver} 
        onMouseOut={handleMouseOut} 
      >{traitData.name} ({traitData.cost})</div>
      {isHovering && <span className="character_sheet_skill__trait__hover_text">{traitData.effect}</span>}
    </li>
  )

  return (
    traitDisplay
  );
}

export default CharacterSheetSkillTrait;