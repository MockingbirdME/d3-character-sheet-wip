import { useContext, useState } from "react";
import CharacterContext from "../../contexts/characters";

function CharacterSheetResource(params) {  
  const characterContext = useContext(CharacterContext);
  const { resource } = params;
  const { current: currentValue, max: maxValue } = resource;

  // const [currentValue, setCurrentValue] = useState(resource.current)
  // const [maxValue, setMaxValue] = useState(resource.max)

  const slider = [...Array(resource.value + 1).keys()].map(index => {
    const className = `character_sheet__resource_slider_value ${index === currentValue ? 'character_sheet__resource_slider__current_value' : ''} ${index > maxValue ? 'character_sheet__resource_slider__above_max_value' : ''}`
    return (<span key={index} className={className} >{index}</span>)
  })

  const sliderLeftControls = (
    <div className="character_sheet__resource_slider_controls">
      <span onClick={() => {
        console.log('decrementing max');
        if (maxValue === 0) return;
        characterContext.setAttributeValues({...resource, max: maxValue - 1})
      }} className="character_sheet__resource_slider_controls_max"> &lt;&lt;</span>
      <span onClick={() => {
        console.log('decrementing current');
        if (currentValue === 0) return;
        characterContext.setAttributeValues({...resource, current: currentValue - 1})
      }} className="character_sheet__resource_slider_controls_current">&lt;</span>
    </div>
  )

  const sliderRightControls = (
    <div className="character_sheet__resource_slider_controls">
      <span onClick={() => {
        console.log('incrementing current');
        if (currentValue === maxValue) return;
        characterContext.setAttributeValues({...resource, current: currentValue + 1})
      }} className="character_sheet__resource_slider_controls_current">&gt;  </span>
      <span onClick={() => {
        console.log('incrementing max');
        if (maxValue === resource.value) return;
        characterContext.setAttributeValues({...resource, max: maxValue + 1})
      }} className="character_sheet__resource_slider_controls_max">&gt;&gt;</span>
    </div>
  )

  return (
    <div className="character_sheet__resource">
      <b className="character_sheet__resource__name">{resource.name}</b>
      <div className="character_sheet__resource_slider_container">
        {sliderLeftControls}
        <div className="character_sheet__resource_slider">
          
          {slider}
        </div>

        {sliderRightControls}
      </div>
      
      {/* <div>
        {sliderControls}
      </div> */}
    </div>
  );
}

export default CharacterSheetResource;