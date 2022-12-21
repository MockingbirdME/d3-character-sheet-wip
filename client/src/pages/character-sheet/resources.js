import CharacterSheetRecoveryPeriod from "./recoveryPeriod";
import CharacterSheetResource from "./resource";

function CharacterSheetResources(params) {
  const {resources} = params;

  if (!resources) return (<div></div>)

  const resourceDisplays = resources.map(resource => (
    <CharacterSheetResource 
      key={resource.name.toLowerCase()}
      resource={resource}
      />
  ))

  const resourceDisplay = (
    <div className="character_sheet__resources">
        <b style={{textDecoration: 'underline'}} >Resources</b>
        <div className="character_sheet__resources_groups">
          {resourceDisplays}
        </div>
      </div>
  )

  const recoveryPeriods = [
    {
      name: 'Breather',
      text: 'Take a few minutes to catch your breath and let your heart slow back to a resting pace, recover all temp Stamina and defense, as well as 1 temp willpower and vigilance'
    },
    {
      name: 'Break',
      text: 'Take half an hour or more to rest and relax, recover all temp Stamina, Defense, willpower, and vigilance, as well as 1 temp luck and 1 max Stamina and Defense'
    },
    {
      name: 'Reprieve',
      text: 'Spend several hours resting or sleeping, recover all temp Stamina, Defense, willpower, vigilance, and luck, 1 temp wound, all max Stamina and Defense, and 1 max willpower and vigilance'
    },
    {
      name: 'Down Time',
      text: 'Spend several days of well deserved R&R, recover all temp resources, all max Stamina, Defense, willpower, vigilance, and luck'
    }
  ]

  const recoveryDisplay = (
    <div className="character_sheet__recovery">
      <b style={{textDecoration: 'underline'}} >Recovery Periods</b>
      <ul className="character_sheet__recovery_groups">
        {recoveryPeriods.map((recoveryPeriod) => <CharacterSheetRecoveryPeriod recoveryPeriod={recoveryPeriod} />)}
      </ul>
    </div>
  )

  return (
    <div className="character_sheet__resource_recovery_row">
      {resourceDisplay}
      {recoveryDisplay}
    </div>
    
  );
}

export default CharacterSheetResources;