import React from 'react';

export const DropDown = ({ options, selectValue, onSelectValueChange }) => {
  return (
    <select
      value={selectValue}
      onChange={(event) => { onSelectValueChange(event.target.value)}}>
      {options.map((option, idx) => (
        <option
          key={option.value}
          value={option.value}>{ option.text }</option>
      ))}
    </select>
  )
}
