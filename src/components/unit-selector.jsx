/**
 * @file src/components/unit-selector.jsx
 * A drop-down box used for determing what unit of measurement a corner
 * should use.
 */

import React from 'react';

const UnitSelector = ({ onChange, ...rest }) => {
  return (
    <select className="brp-unit-selector" onChange={onChange} {...rest}>
      <option value="px">Pixels</option>
      <option value="%">Percent</option>
      <option value="cm">Centimeters</option>
      <option value="mm">Millimeters</option>
      <option value="in">Inches</option>
      <option value="pt">Points</option>
      <option value="pc">Picas</option>
    </select>
  );
};

export default UnitSelector;
