import CharacterSheetSkill from "./skill";

function CharacterSheetSkills(params) {
  const {characterData} = params;
  console.log(characterData);

  if (!characterData.resources) return (<div></div>)

  const skills = ['animalHandling', 'awareness', 'legerdemain', 'legerdemain'];

  const skillsDisplay = skills.map(skill => (
    <CharacterSheetSkill skillData={characterData.skills[skill]} />
  ))

  return (
    <div className="character_sheet__skills">
      <b style={{textDecoration: 'underline'}} >Skills</b>
      <div className="character_sheet__resources_groups">
        {skillsDisplay}
      </div>
    </div>
  );
}

export default CharacterSheetSkills;