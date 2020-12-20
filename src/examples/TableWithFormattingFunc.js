import React from 'react';
import Versatiletable, { Formatters } from './../VersatileTable';

import SampleData3 from './SampleData3';

function BasicTable(){
	return (
		<>
		  <h3>Table with Formatting Function</h3>
      <Versatiletable
        data={SampleData3}
        columns={[
          {
            key: "first_name",
            headerRender: "First Name",
            width: "100px",
            headerStyle: {
              fontWeight: "bold",
            },
          },
          {
            key: "last_name",
            headerRender: "Last Name",
            width: "100px",
            headerStyle: {
              fontWeight: "bold",
            },
          },
          {
            key: "salary",
            headerRender: "Salary",
            width: "100px",
            headerStyle: {
              fontWeight: "bold",
						},
						cellRender: val => Formatters.Currency(val, '₹')
          }
        ]}
      />
		</>
	)
}

export default BasicTable;
