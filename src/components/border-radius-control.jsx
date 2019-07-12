/**
 * @file src/components/border-radius-control.jsx
 * Controls for manipulating the shape's border radius.
 */

import React, { useContext } from 'react';
import { BorderRadiusContext } from '../contexts/border-radius';
import UnitSelector from './unit-selector';

const BorderRadiusControl = () => {
  // Context Hooks
  const ctx = useContext(BorderRadiusContext);

  // Component Methods
  const copyCSS = () => {
    navigator.clipboard
      .writeText(`border-radius: ${ctx.getCSS()}`)
      .then(() => {
        alert('The CSS code has been copied successfully.');
      })
      .catch(err => {
        alert(
          'Something went wrong while copying the CSS code. Check the developer console.'
        );
        console.error(err);
      });
  };

  // Render Component
  return (
    <fieldset className="brp-control">
      <legend>Border Radius Control</legend>
      <div className="brp-fieldset-flex-container">
        <div className="brp-control-element">
          <label>Top Left: </label>
          <input
            type="number"
            value={ctx.topLeft.mag}
            onChange={e =>
              ctx.setTopLeft({ ...ctx.topLeft, mag: e.target.value })
            }
          />
          <UnitSelector
            onChange={e =>
              ctx.setTopLeft({ ...ctx.topLeft, unit: e.target.value })
            }
          />
        </div>
        <div className="brp-control-element">
          <label>Top Right: </label>
          <input
            type="number"
            value={ctx.topRight.mag}
            onChange={e =>
              ctx.setTopRight({ ...ctx.topRight, mag: e.target.value })
            }
          />
          <UnitSelector
            onChange={e =>
              ctx.setTopRight({ ...ctx.topRight, unit: e.target.value })
            }
          />
        </div>
        <div className="brp-control-element">
          <label>Bottom Right: </label>
          <input
            type="number"
            value={ctx.bottomRight.mag}
            onChange={e =>
              ctx.setBottomRight({ ...ctx.bottomRight, mag: e.target.value })
            }
          />
          <UnitSelector
            onChange={e =>
              ctx.setBottomRight({ ...ctx.bottomRight, unit: e.target.value })
            }
          />
        </div>
        <div className="brp-control-element">
          <label>Bottom Left: </label>
          <input
            type="number"
            value={ctx.bottomLeft.mag}
            onChange={e =>
              ctx.setBottomLeft({ ...ctx.bottomLeft, mag: e.target.value })
            }
          />
          <UnitSelector
            onChange={e =>
              ctx.setBottomLeft({ ...ctx.bottomLeft, unit: e.target.value })
            }
          />
        </div>
        <div className="brp-control-element" id="css-preview">
          <fieldset onClick={copyCSS} title="Click to Copy CSS Code">
            <legend>CSS Code - Click to Copy</legend>
            <p className="code" id="css-code">
              border-radius: {ctx.getCSS()}
            </p>
          </fieldset>
        </div>
      </div>
    </fieldset>
  );
};

export default BorderRadiusControl;
