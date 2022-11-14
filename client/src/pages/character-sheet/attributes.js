
function CharacterSheetAttributes(params) {
  const {characterData} = params;
  console.log(characterData);

  const getAttributeBox = (attribute) => {
    const value = characterData.attributes?.[attribute] || 0;
    return (
    <div className="character_sheet__attribute_box" >
      <p className="character_sheet__attribute_name">{attribute[0].toUpperCase() + attribute.substring(1)}</p>
      <p className="character_sheet__attribute_value">{ value }</p>
    </div>
  )}

  const getAttributeRow = (attribute) => {
    const value = characterData.attributes?.[attribute] || 0;
    return (
    <div className="character_sheet__attribute_row" >
      <p className="character_sheet__attribute_name">{attribute[0].toUpperCase() + attribute.substring(1)}</p>
      <p className="character_sheet__attribute_value">{ value }</p>
    </div>
  )}

  const primaryAttributeOrderedList = ['body', 'mind', 'perception', 'reflexes']
  const primaryAttributes = primaryAttributeOrderedList.map(attribute => getAttributeBox(attribute))

  const secondaryAttributeOrderedList = [
    'Armor Value',
    'Defense Bonus, Mental',
    'Defense Bonus, Melee',
    'Defense Bonus, Ranged',
    'Initiative',
    'Reach'
  ]
  const secondaryAttributes = (secondaryAttributeOrderedList.map(attribute => getAttributeRow(attribute)))

  return (
    <div className="character_sheet__attributes">
      <div className="character_sheet__attribute_group">
        <h6 className="character_sheet__attribute_group_header">
          Primary Attributes
          </h6>
        {primaryAttributes}
      </div>
      <div className="character_sheet__attribute_group">
      <h6 className="character_sheet__attribute_group_header">
        Secondary Attributes
        </h6>
        {secondaryAttributes}
      </div>
      
    </div>
  );
}

export default CharacterSheetAttributes;