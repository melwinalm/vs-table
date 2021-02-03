import React from 'react';
import ___ from '../../../../utils/getter';
import './NoRecordMsgComponent.scss';

function NoRecordMsgComponent() {
  return (
    <div className="vt-body-col vt-no-record">{___('No Records Found.')}</div>
  );
}

export default NoRecordMsgComponent;
