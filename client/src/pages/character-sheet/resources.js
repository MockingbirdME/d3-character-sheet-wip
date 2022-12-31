import { useContext } from "react";

import CharacterSheetRecoveryPeriod from "./recoveryPeriod";
import CharacterSheetResource from "./resource";
import CharacterContext from "../../contexts/characters";


function CharacterSheetResources(params) {
  const characterContext = useContext(CharacterContext);
  const characterAttributeData = characterContext.loadedCharacter?.character?.attributes;

  const {resources} = params;

  if (!resources) return (<div></div>)
  console.log(resources);
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
      text: 'Take a few minutes to catch your breath and let your heart slow back to a resting pace, recover all temp Stamina and defense, as well as 1 temp willpower',
      onClick: () => {
        const {defense, stamina, willpower} = {...characterAttributeData}

        for (const value of [defense, stamina]) {
          value.current = value.max;
        }

        for (const value of [willpower]) {
          value.current = value.current + 1;
        }

        characterContext.setAttributes({...characterAttributeData, defense, stamina, willpower});
      }
    },
    {
      name: 'Break',
      text: 'Take half an hour or more to rest and relax, recover all temp Stamina, Defense, and willpower, as well as 1 temp luck and 1 max Stamina and Defense',
      onClick: () => {
        const {defense, stamina, willpower, luck} = {...characterAttributeData}

        for (const value of [defense, stamina]) {
          value.max = value.max + 1;
        }

        for (const value of [defense, stamina, willpower]) {
          value.current = value.max;
        }

        for (const value of [luck]) {
          value.current = value.current + 1;
        }

        characterContext.setAttributes({...characterAttributeData, defense, stamina, willpower, luck});
      }
    },
    {
      name: 'Reprieve',
      text: 'Spend several hours resting or sleeping, recover all temp Stamina, Defense, willpower, and luck, all max Stamina and Defense, and 1 max willpower',
      onClick: () => {
        const { defense, stamina, willpower, luck } = { ...characterAttributeData };

        for (const value of [defense, stamina]) {
          value.max = value.value;
        }

        for (const value of [willpower]) {
          value.max = value.max + 1;
        }

        for (const value of [defense, stamina, willpower, luck]) {
          value.current = value.max;
        }

        characterContext.setAttributes({...characterAttributeData, defense, stamina, willpower, luck});
      }
    },
    {
      name: 'Down Time',
      text: 'Spend several days of well deserved R&R, recover all temp and max Stamina, Defense, willpower, and luck, and 1 temp wound,',
      onClick: () => {
        const {defense, stamina, willpower, luck, wounds} = {...characterAttributeData}

        for (const value of [defense, stamina, willpower, luck]) {
          value.max = value.value;
          value.current = value.max;
        }

        for (const value of [wounds]) {
          value.current = value.current + 1;
        }

        characterContext.setAttributes({...characterAttributeData, defense, stamina, willpower, luck, wounds});
      }
    }
  ]

  const recoveryDisplay = (
    <div className="character_sheet__recovery">
      <b style={{textDecoration: 'underline'}} >Recovery Periods</b>
      <ul className="character_sheet__recovery_groups">
        {recoveryPeriods.map((recoveryPeriod) => <CharacterSheetRecoveryPeriod key={recoveryPeriod.name} recoveryPeriod={recoveryPeriod} />)}
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