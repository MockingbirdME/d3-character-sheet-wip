import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import "./Characters.css";
import CharacterContext from "../../contexts/characters";

function Characters() {
  const navigate = useNavigate();
  const characterContext = useContext(CharacterContext);

  React.useEffect(() => {
    characterContext.fetchCharacterList()
  }, [characterContext]);

  const characterList = characterContext.characterList || [];

  const characterListItems = characterList.map((data) => (
    <li key={data.name} onClick={() => navigate(`/character/${data.id}`)}>{data.name}</li>
  ))

  const characterListContent = (
    <ul>
      {characterListItems}
    </ul>
  )

  return (
    <div className="characters__container">
      {characterListContent}
    </div>
  );
}

export default Characters;