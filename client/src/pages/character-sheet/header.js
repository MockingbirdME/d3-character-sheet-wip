
function CharacterSheet(params) {
  console.log(params.characterdata);
  const {name, advancementPoints} = params.characterdata
  return (
    <div className="character_sheet__header row">
      <p className="col-sm-8">NAME: {name}</p>
      <p className="col-sm-4">Advancement Points: {advancementPoints}</p>
    </div>
  );
}

export default CharacterSheet;