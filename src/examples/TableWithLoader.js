import React, { useEffect, useState } from 'react';
import Versatiletable from './../VersatileTable';
import SampleData from './SampleData1';

function TableWithLoader() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setData(SampleData);
    }, 5000);
  }, []);

  return (
    <>
      <h3>Table with Loader</h3>
      <Versatiletable
        data={data}
        options={{
          defaultLoader: {
            loaderTimeout: 5000,
          },
        }}
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

export default TableWithLoader;
