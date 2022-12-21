
function CharacterSheetAttributes(params) {
  const {primaryAttributes, secondaryAttributes} = params;

  const getAttributeBox = (attributeData) => {
    return (
    <div key={attributeData.name.toLowerCase()} className="character_sheet__attribute_box" >
      <p className="character_sheet__attribute_name">{attributeData.name}</p>
      <p className="character_sheet__attribute_value">{ attributeData.value || 0 }</p>
    </div>
  )}

  const getAttributeRow = (attributeData) => {
    return (
    <div key={attributeData.name.toLowerCase()} className="character_sheet__attribute_row" >
      <p className="character_sheet__attribute_name">{attributeData.name}</p>
      <p className="character_sheet__attribute_value">{ attributeData.value }</p>
    </div>
  )}

  const primaryAttributesDisplay = primaryAttributes.map(attribute => getAttributeBox(attribute))

  const secondaryAttributesDisplay = (secondaryAttributes.map(attribute => getAttributeRow(attribute)))

  return (
    <div className="character_sheet__attributes">
      <div className="character_sheet__attribute_group">
        <h6 className="character_sheet__attribute_group_header">
          Primary Attributes
          </h6>
        {primaryAttributesDisplay}
      </div>
      <div className="character_sheet__attribute_group">
      <h6 className="character_sheet__attribute_group_header">
        Secondary Attributes
        </h6>
        {secondaryAttributesDisplay}
      </div>
      
    </div>
  );
}

export default CharacterSheetAttributes;