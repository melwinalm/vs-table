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
            headerTooltipRender: "This is the customers first name",
            width: "100px",
            headerStyle: {
              fontWeight: "bold",
            },
          },
          {
            key: "last_name",
            headerRender: "Last Name",
            headerTooltipRender: "This is the customers last name",
            width: "100px",
            headerStyle: {
              fontWeight: "bold",
            },
          },
          {
            key: "salary",
            headerRender: "Salary",
            headerTooltipRender: "This is the customers salary",
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