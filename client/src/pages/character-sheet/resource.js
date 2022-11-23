import { useState } from "react";

function CharacterSheetResource(params) {  
  const { resourceName, resourceData } = params;
  console.log(resourceName);
  console.log(resourceData);

  const [currentValue, setCurrentValue] = useState(resourceData.current)
  const [currentMaxValue, setCurrentMaxValue] = useState(resourceData.currentMax)

  const slider = [...Array(resourceData.max + 1).keys()].map(index => {
    console.log(index);
    const className = `character_sheet__resource_slider_value ${index === currentValue ? 'character_sheet__resource_slider__current_value' : ''} ${index > currentMaxValue ? 'character_sheet__resource_slider__above_max_value' : ''}`
    return (<span key={index} className={className} >{index}</span>)
  })

  const sliderDownButton = (type) => (
    <span onClick={() => resourceData[type] = resourceData[type] === 0 ? 0 : resourceData[type] - 1}>test </span>
  );

  console.log(sliderDownButton('current'));

  const currentSliderControls = (
    <div>
      <span onClick={() => {
        console.log('decrementing current');
        if (currentValue === 0) return;
        setCurrentValue(currentValue - 1)
      }}>&lt;</span>
      current
      <span onClick={() => {
        console.log('incrementing current');
        if (currentValue === currentMaxValue) return;
        setCurrentValue(currentValue + 1)
      }}>&gt;  </span>
      <span onClick={() => {
        console.log('decrementing max');
        if (currentMaxValue === 0) return;
        setCurrentMaxValue(currentMaxValue - 1)
      }}> &lt;</span>
      max
      <span onClick={() => {
        console.log('incrementing max');
        if (currentMaxValue === resourceData.max) return;
        setCurrentMaxValue(currentMaxValue + 1)
      }}>&gt;</span>
    </div>
  )

  const sliderControls = (
    <div>
      {currentSliderControls}
    </div>
  )

  return (
    <div className="character_sheet__resource">
      <b className="character_sheet__resource__name">{resourceName[0].toUpperCase() + resourceName.substring(1)}</b>
      <div className="character_sheet__resource_slider">
        {slider}
      </div>
      <div>
        {sliderControls}
      </div>
    </div>
  );
}

export default CharacterSheetResource;