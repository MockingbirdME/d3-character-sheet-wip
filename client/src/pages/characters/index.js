import React from "react";
import CharacterSheet from "../character-sheet";
import "./Characters.css";

function Characters() {
  const [characterList, setCharacterList] = React.useState([]);
  
  const [selectedCharacter, setSelectedCharacter] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/characterList")
      .then(async (res) => {
        const data = await res.json()
        setCharacterList(data)
      })
  }, []);

  const characterListItems = characterList.map((data) => (
    <li key={data.name} onClick={() => setSelectedCharacter(data)}>{data.name}</li>
  ))

  const characterListContent = (
    <ul>
      {characterListItems}
    </ul>
  )

  const content = selectedCharacter
    ? <CharacterSheet selectedCharacter={selectedCharacter}/>
    : characterListContent
  return (
    <div className="characters__container">
      {content}
    </div>
  );
}

export default Characters;