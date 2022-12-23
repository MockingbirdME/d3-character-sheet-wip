import { useState } from "react";

function CharacterSheetRecoveryPeriod(params) {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const {recoveryPeriod} = params;

  if (!recoveryPeriod) return (<div></div>)

  const recoveryPeriodDisplay = (
    <li className="character_sheet__recovery__item">
      <button 
        key={recoveryPeriod.name}
        className="character_sheet__recovery__item_button"
        onMouseOver={handleMouseOver} 
        onMouseOut={handleMouseOut} 
        onClick={recoveryPeriod.onClick}
      >{recoveryPeriod.name}</button>
      {isHovering && <span className="character_sheet_recovery__item__hover_text">{recoveryPeriod.text}</span>}
    </li>
  )

  return (
    recoveryPeriodDisplay
  );
}

export default CharacterSheetRecoveryPeriod;