
function CharacterSheetSkill(params) {
  const {skillData} = params;
  console.log(skillData);

  if (!skillData) return (<div></div>)
  console.log(skillData);
  const skillChecksDisplay = skillData.checks.map(skillCheck => (
    <div className="character_sheet__skill__check">
      <span>{skillCheck.name}:</span>
      <span>+ {skillCheck.bonus || 0}</span>
    </div>
  ))

  return (
    <div className="character_sheet__skill">
      <b className="character_sheet__skill__name">{skillData.displayName}</b>
      <div className="character_sheet__skill__proficiency">
        <span>Proficiency:</span> <span>{skillData.proficiency}</span>
      </div>
      <div>
        {skillChecksDisplay}
      </div>
      
      {/* <div>
        {sliderControls}
      </div> */}
    </div>
  );
}

export default CharacterSheetSkill;