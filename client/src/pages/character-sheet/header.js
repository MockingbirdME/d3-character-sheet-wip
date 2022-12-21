
function CharacterSheetHeader(params) {
  const {name, advancementPoints} = params.characterData
  return (
    <div className="character_sheet__header row">
      <p className="col-sm-8">NAME: {name}</p>
      <p className="col-sm-4">Advancement Points: {advancementPoints}</p>
    </div>
  );
}

export default CharacterSheetHeader;