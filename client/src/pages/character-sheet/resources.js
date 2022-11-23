import CharacterSheetResource from "./resource";

function CharacterSheetResources(params) {
  const {characterData} = params;
  console.log(characterData);

  if (!characterData.resources) return (<div></div>)

  const resources = ['defense', 'stamina', 'willpower', 'luck'];

  const resourceDisplays = resources.map(resource => (
    <CharacterSheetResource 
      key={resource}
      resourceName={resource} 
      resourceData={characterData.resources[resource] || {}}  
      />
  ))
  

  return (
    <div className="character_sheet__resources">
      <b style={{textDecoration: 'underline'}} >Resources</b>
      {resourceDisplays}
    </div>
  );
}

export default CharacterSheetResources;