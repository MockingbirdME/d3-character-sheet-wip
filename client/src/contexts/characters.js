import React, {useState} from "react";

const CharacterContext = React.createContext();

export default CharacterContext;

const trackers = {
  characterIsLoaded: false,
  isReloading: false,
  nextLoadedCharacterFetchTime: null,
  nextLoadedCharacterSyncTime: null
}

export const CharacterContextProvider = props => {
  const [lastListSyncTime, setLastListSyncTime] = useState();
  const [characterList, setCharacterList] = useState();
  const [loadedCharacter, setLoadedCharacter] = useState();

  const fetchCharacter = async(id, reload = false) => {
    if (!loadedCharacter || loadedCharacter.id.toLowerCase() !== id.toLowerCase() || reload) {
      const res = await fetch(`/api/character/${id}`)
      const data = await res.json();

      setLoadedCharacter(data);
      trackers.nextLoadedCharacterFetchTime = new Date( Date.now() + 10000);
      trackers.characterIsLoaded = data.id;
    }
  }

  const saveCharacter = async(character) => {
    const triggerTime = new Date();
    trackers.latestSaveTriggerTime = triggerTime
    console.log('saving, will continue in 5 seconds', triggerTime);

    setTimeout(async () => {
      if (trackers.latestSaveTriggerTime !== triggerTime) {
        console.log('not the latest save attempt, returning');
        return;
      }

      const body = JSON.stringify(character)
      const options = {
        method: 'PATCH',
        body
      }

      const res = await fetch(`/api/character/${character._id}`, options)
      const data = await res.json();

      setLoadedCharacter(data);
      delete trackers.nextLoadedCharacterSyncTime;
    }, 5000);
  }

  const fetchCharacterList = async () => {
    const now = new Date();
    const oneMinuteAgo = new Date(now - 60000);

    // TODO, make the whole timeout thing work, or remove it.
    console.log(now, oneMinuteAgo, lastListSyncTime, oneMinuteAgo > lastListSyncTime);

    if (!characterList || oneMinuteAgo > lastListSyncTime) {
      const res = await fetch("/api/characters/list")
      const data = await res.json()
      setCharacterList(data);
    }
  }

  const getValidAttribute = (attribute) => {
    if (attribute.max < 0) attribute.max = 0;
    if (attribute.max > attribute.value) attribute.max = attribute.value;

    if (attribute.current < 0) attribute.current = 0;
    if (attribute.current >  attribute.max) attribute.current = attribute.max;

    return attribute;
  }

  const setAttributeValues = (attribute) => {
    console.log(attribute);
    const attributes = {...loadedCharacter.character.attributes};

    attribute = getValidAttribute(attribute);
    console.log(attribute);
    if (
      attribute.current === attributes[attribute.key].current 
      && attribute.max === attributes[attribute.key].max
      ) return;

    attributes[attribute.key] = attribute;

    const character = {...loadedCharacter.character, attributes}

    setLoadedCharacter({...loadedCharacter, character})
    saveCharacter(character);
  }

  const setAttributes = attributes => {
    console.log(attributes);

    for (const [key, value] of Object.entries(attributes)) {
      attributes[key] = getValidAttribute(value)
    }

    // TODO Validate that changes have been made

    const character = {...loadedCharacter.character, attributes}

    setLoadedCharacter({...loadedCharacter, character})
    saveCharacter(character);
  }
  
  return <CharacterContext.Provider value={{
    characterList,
    loadedCharacter,
    fetchCharacter,
    fetchCharacterList,
    setAttributes,
    setAttributeValues
  }}>{props.children}</CharacterContext.Provider>;
};
