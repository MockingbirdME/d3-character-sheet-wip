import React from "react";
import CharacterSheet from "../character-sheet";
import "./Characters.css";

function Characters() {
  const [characterList, setCharacterList] = React.useState([]);
  
  const [selectedCharacter, setSelectedCharacter] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/characterList")
      .then(async (res) => {
        console.log(res);
        const data = await res.json()
        console.log(data);
        setCharacterList(data)
      })
  }, []);

  const characterListItems = characterList.map((data) => (
    <li key={data.name} onClick={() => setSelectedCharacter(data.name)}>{data.name}</li>
  ))

  const characterListContent = (
    <ul>
      {characterListItems}
    </ul>
  )

  const content = selectedCharacter
    ? <CharacterSheet characterName={selectedCharacter}/>
    : characterListContent
  return (
    <div className="characters__container">
      {content}
    </div>
  );
}

export default Characters;