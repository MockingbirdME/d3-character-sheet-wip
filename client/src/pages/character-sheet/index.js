import React, {useContext} from "react";
import {useParams} from "react-router-dom";

import "./CharacterSheet.css";
import CharacterSheetHeader from './header.js';

import CharacterSheetAttributes from './attributes';
import CharacterSheetResources from "./resources";
import CharacterSheetSkills from "./skills";
import CharacterContext from "../../contexts/characters";

function CharacterSheet(params) {
  const { characterId } = useParams()
  const characterContext = useContext(CharacterContext);

  React.useEffect(() => {
    characterContext.fetchCharacter(characterId)
  }, [characterContext.loadedCharacter?.character, characterId]);

  const characterData = characterContext.loadedCharacter?.character

  console.log(characterData);
  if (!characterData) return "";

  const primaryAttributes = [];
  const secondaryAttributes = []
  const resources = [];

  Object.keys(characterData.attributes).forEach(attributeKey => {
    const attribute = {...characterData.attributes[attributeKey], key: attributeKey};
    if (attribute.primaryAttribute) primaryAttributes.push(attribute);
    else if (attribute.resource) resources.push(attribute);
    else secondaryAttributes.push(attribute)
  })

  const primaryTab = (
    <div className="character_sheet__primary_tab">

      <CharacterSheetAttributes primaryAttributes={primaryAttributes} secondaryAttributes={secondaryAttributes} />
      
      <div className="character_sheet__primary_tab__main_content">
        <CharacterSheetResources resources={resources} />
        <CharacterSheetSkills skills={characterData.skills} />
      </div>

    </div>
  )

  return (
    <div className="character_sheet__container">
      <CharacterSheetHeader className="character_sheet__header" characterData={characterData}/>
      <div className="character_sheet__content">
        <div className="character_sheet__tabs">
          {primaryTab}

        </div>

      </div>
    </div>
  );
}

export default CharacterSheet;