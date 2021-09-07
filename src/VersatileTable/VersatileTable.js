import React from 'react';
import './VersatileTable.scss';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { rootPropTypesObject } from './utils/propTypesValidator';

function Versatiletable({
  data = [],
  columns = [],
  style = {},
  className = '',
  options = {},
  subComponents = {},
}) {
  const tableStyles = (styleProp) => {
    if (styleProp) {
      return {
        width: styleProp.width ? styleProp.width : 'auto',
        height: styleProp.height ? styleProp.height : 'auto',
        maxWidth: styleProp.maxWidth ? styleProp.maxWidth : 'fit-content',
        ...styleProp,
      };
    }

    return {};
  };

  const getClassNames = (classes) => {
    if (classes) {
      return `vt-table ${classes}`;
    }
    return 'vt-table';
  };

  return (
    <div className={getClassNames(className)} style={tableStyles(style)}>
      <ErrorBoundary>
        <Header
          columns={columns}
          options={options}
          subComponents={subComponents}
        />

        <Body
          data={data}
          columns={columns}
          options={options}
          subComponents={subComponents}
        />

        <Footer data={data} options={options} subComponents={subComponents} />
      </ErrorBoundary>
    </div>
  );
}

Versatiletable.propTypes = rootPropTypesObject;

export default Versatiletable;
