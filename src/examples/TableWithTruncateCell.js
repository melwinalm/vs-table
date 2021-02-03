import React from 'react';
import Versatiletable, { Formatters } from './../VersatileTable';
import SampleData1 from './SampleData1';

function TableWithTruncateCell() {
  return (
    <>
      <h3>Table with truncated cell</h3>
      <Versatiletable
        data={SampleData1}
        columns={[
          {
            key: 'id',
            headerRender: 'ID',
            width: '50px',
            headerStyle: {
              fontWeight: 'bold',
            },
          },
          {
            key: 'first_name',
            headerRender: 'First Name',
            width: '100px',
            headerStyle: {
              fontWeight: 'bold',
            },
          },
          {
            key: 'last_name',
            headerRender: 'Last Name',
            width: '100px',
            headerStyle: {
              fontWeight: 'bold',
            },
          },
          {
            key: 'gender',
            headerRender: 'Gender',
            width: '100px',
            headerStyle: {
              fontWeight: 'bold',
            },
          },
          {
            key: 'email',
            headerRender: 'Email ID',
            width: '200px',
            headerStyle: {
              fontWeight: 'bold',
            },
            cellRender: (val) => new Formatters(val).Truncate(10, '...').value,
          },
          {
            key: 'phone',
            headerRender: 'Phone',
            width: '150px',
            headerStyle: {
              fontWeight: 'bold',
            },
          },
          {
            key: 'salary',
            headerRender: 'Salary',
            width: '100px',
            headerStyle: {
              fontWeight: 'bold',
            },
          },
          {
            key: 'date_of_joining',
            headerRender: 'DoJ',
            width: '100px',
            headerStyle: {
              fontWeight: 'bold',
            },
          },
        ]}
      />
    </>
  );
}

export default TableWithTruncateCell;
