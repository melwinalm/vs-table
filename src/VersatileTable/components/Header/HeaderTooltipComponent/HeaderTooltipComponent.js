import React, { useState } from 'react';
import { TOOLTIP_POSITIONS } from '../../../utils/enums';
import './HeaderTooltipComponent.scss';

function HeaderTooltipComponent({ header }) {
  const [tooltipPosition, setTooltipPosition] = useState(
    header.headerTooltipPosition
      ? header.headerTooltipPosition
      : TOOLTIP_POSITIONS.RIGHT
  );

  const [tooltipClasses, setTooltipClasses] = useState(
    `vt-tooltip-content vt-tooltip-${tooltipPosition}`
  );

  if (
    header &&
    header.headerTooltipRender &&
    typeof header.headerTooltipRender === 'boolean'
  ) {
    return (
      <div className="vt-tooltip">
        {header.headerRender}
        <span className={tooltipClasses}>{header.headerRender}</span>
      </div>
    );
  } else if (
    header &&
    header.headerTooltipRender &&
    typeof header.headerTooltipRender === 'function'
  ) {
    return (
      <div className="vt-tooltip">
        {header.headerRender}
        <span className={tooltipClasses}>
          {header.headerTooltipRender(header.headerRender)}
        </span>
      </div>
    );
  } else {
    return header.headerRender || null;
  }
}

export default HeaderTooltipComponent;
