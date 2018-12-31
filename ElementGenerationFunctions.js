function generateLabelAndTextInput(elementId, elementClass, labelText, inputType) {
        return (
          <div className={elementClass}>
            <label htmlFor={elementId} className={inputLabel}>
              {labelText}
            </label>
            <input name={elementId} id={elementId} type={inputType} />
          </div>
      )
    }

    function generateApplicableDropdown(optionsObject) {
      let optionsArray = [];
      for (let i = 0; i < Object.keys(optionsObject).length; i++) {
        optionsArray.push(<option key={i} value={i}>{optionsObject[i]}</option>)
      }
      return optionsArray;
    }

    function renderApplicableComponents(otherSelected, selectHandlingFunction, labelStyleState) {
      if (otherSelected) {
        return (
                <span className={`${middleColumnStyle} ${leftPadded}`}>
                  <span className={labelStyleState}>Reason for not applicable: </span>
                  <select onChange={selectHandlingFunction}>
                    {generateApplicableDropdown(notApplicableSelections)}
                  </select>
                  {generateLabelAndTextInput('otherReasonText', `${middleColumnStyle} ${invalidSelection}`, 'Reason:', 'text')}
                </span>
              )
      }
      return (
                <span className={`${middleColumnStyle} ${leftPadded}`}>
                  <span className={labelStyleState}>Reason for not applicable: </span>
                 <select onChange={selectHandlingFunction}>
                    {generateApplicableDropdown(notApplicableSelections)}
                  </select>
                </span>
              )
              
    }