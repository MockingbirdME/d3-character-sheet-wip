import React from "react";
import "./CharacterSheet.css";
import CharacterSheetHeader from './header.js';

function CharacterSheet() {
  const [data, setData] = React.useState({});

  // React.useEffect(() => {
  //   fetch("/api/character")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  const primaryTab = (
    <div className="character_sheet__primary_tab">

      <div className="character_sheet__primary_tab__sidebar">
        <div className="character_sheet__attributes" characterdata={data}/>
      </div>
      
      <div className="character_sheet__primary_tab__main_content">
        <div className="character_sheet__resources" characterdata={data}/>
        <div className="character_sheet__skills" characterdata={data}/>
      </div>

    </div>
  )

  return (
    <div className="character_sheet__container">
      <header className="App-header">
        <p>WIP</p>
      </header>
      <CharacterSheetHeader className="character_sheet__header" characterdata={data}/>
      <div className="character_sheet__content">
        <div className="character_sheet__tabs">
          {primaryTab}

        </div>

      </div>
    </div>
  );
}

export default CharacterSheet;