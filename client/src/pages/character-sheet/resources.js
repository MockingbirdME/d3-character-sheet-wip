import CharacterSheetResource from "./resource";

function CharacterSheetResources(params) {
  const {characterData} = params;
  console.log(characterData);

  if (!characterData.resources) return (<div></div>)

  const largeResources = ['defense', 'stamina', 'vigilance', 'willpower', 'luck', 'wounds'];

  const largeResourceDisplays = largeResources.map(resource => (
    <CharacterSheetResource 
      key={resource}
      resourceName={resource} 
      resourceData={characterData.resources[resource] || {}}
      />
  ))

  return (
    <div className="character_sheet__resources">
      <b style={{textDecoration: 'underline'}} >Resources</b>
      <div className="character_sheet__resources_groups">
        {largeResourceDisplays}
      </div>
    </div>
  );
}

export default CharacterSheetResources;