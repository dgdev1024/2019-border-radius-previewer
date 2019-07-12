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
          <label>Top Left X: </label>
          <input
            type="number"
            value={ctx.topLeftX.mag}
            onChange={e =>
              ctx.setTopLeftX({ ...ctx.topLeftX, mag: e.target.value })
            }
          />
          <UnitSelector
            onChange={e =>
              ctx.setTopLeftX({ ...ctx.topLeftX, unit: e.target.value })
            }
          />
        </div>
        <div className="brp-control-element">
          <label>Top Right X: </label>
          <input
            type="number"
            value={ctx.topRightX.mag}
            onChange={e =>
              ctx.setTopRightX({ ...ctx.topRightX, mag: e.target.value })
            }
          />
          <UnitSelector
            onChange={e =>
              ctx.setTopRightX({ ...ctx.topRightX, unit: e.target.value })
            }
          />
        </div>
        <div className="brp-control-element">
          <label>Bottom Right X: </label>
          <input
            type="number"
            value={ctx.bottomRightX.mag}
            onChange={e =>
              ctx.setBottomRightX({ ...ctx.bottomRightX, mag: e.target.value })
            }
          />
          <UnitSelector
            onChange={e =>
              ctx.setBottomRightX({ ...ctx.bottomRightX, unit: e.target.value })
            }
          />
        </div>
        <div className="brp-control-element">
          <label>Bottom Left X: </label>
          <input
            type="number"
            value={ctx.bottomLeftX.mag}
            onChange={e =>
              ctx.setBottomLeftX({ ...ctx.bottomLeftX, mag: e.target.value })
            }
          />
          <UnitSelector
            onChange={e =>
              ctx.setBottomLeftX({ ...ctx.bottomLeftX, unit: e.target.value })
            }
          />
        </div>

        <div className="brp-control-element">
          <label>Top Left Y: </label>
          <input
            type="number"
            value={ctx.topLeftY.mag}
            onChange={e =>
              ctx.setTopLeftY({ ...ctx.topLeftY, mag: e.target.value })
            }
          />
          <UnitSelector
            onChange={e =>
              ctx.setTopLeftY({ ...ctx.topLeftY, unit: e.target.value })
            }
          />
        </div>
        <div className="brp-control-element">
          <label>Top Right Y: </label>
          <input
            type="number"
            value={ctx.topRightY.mag}
            onChange={e =>
              ctx.setTopRightY({ ...ctx.topRightY, mag: e.target.value })
            }
          />
          <UnitSelector
            onChange={e =>
              ctx.setTopRightY({ ...ctx.topRightY, unit: e.target.value })
            }
          />
        </div>
        <div className="brp-control-element">
          <label>Bottom Right Y: </label>
          <input
            type="number"
            value={ctx.bottomRightY.mag}
            onChange={e =>
              ctx.setBottomRightY({ ...ctx.bottomRightY, mag: e.target.value })
            }
          />
          <UnitSelector
            onChange={e =>
              ctx.setBottomRightY({ ...ctx.bottomRightY, unit: e.target.value })
            }
          />
        </div>
        <div className="brp-control-element">
          <label>Bottom Left Y: </label>
          <input
            type="number"
            value={ctx.bottomLeftY.mag}
            onChange={e =>
              ctx.setBottomLeftY({ ...ctx.bottomLeftY, mag: e.target.value })
            }
          />
          <UnitSelector
            onChange={e =>
              ctx.setBottomLeftY({ ...ctx.bottomLeftY, unit: e.target.value })
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
