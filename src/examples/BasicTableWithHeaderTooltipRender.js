import React from 'react';
import Versatiletable from './../VersatileTable';

import SampleData3 from './SampleData3';

function BasicTableWithHeaderTooltipRender(){
	return (
		<>
		  <h3>Basic Table with Header Tooltip Render</h3>
      <Versatiletable
        data={SampleData3}
        columns={[
          {
            key: "first_name",
            headerRender: "First Name",
            headerTooltipRender: true,
            headerTooltipPosition: "top",
            width: "100px",
            headerStyle: {
              fontWeight: "bold",
            },
          },
          {
            key: "last_name",
            headerRender: "Last Name",
            headerTooltipRender: true,
            headerTooltipPosition: "bottom",
            width: "100px",
            headerStyle: {
              fontWeight: "bold",
            },
          },
          {
            key: "salary",
            headerRender: "Salary",
            headerTooltipPosition: "left",
            headerTooltipRender: (val) => {
              return (
                <div>
                  This is a custom tooltip <br />
                  Value: {val}
                </div>
              );
            },
            width: "100px",
            headerStyle: {
              fontWeight: "bold",
						},
          }
        ]}
      />
		</>
	)
}

export default BasicTableWithHeaderTooltipRender;
