import React from 'react';
import Versatiletable from './../VersatileTable';
import SampleData1 from './SampleData1';

function CustomPagination({defaultPageSize, currentPage, totalSize, ChangePage }){
  return(
    <div className="vt-pagination">
      <button onClick={() => ChangePage(-1)} disabled={currentPage <= 1}>Previous</button>
      <span>Current Page: <strong>{currentPage}</strong></span>&nbsp;|&nbsp;
      <button onClick={() => ChangePage(1)} disabled={currentPage >= Math.ceil(totalSize/defaultPageSize)}>Next</button>
    </div>
  )
}

function BasicTableWithPagination(){
	return (
		<>
		  <h3>Basic Table with Custom Pagination Component</h3>
      <Versatiletable
        data={SampleData1}
        subComponents={{
          PaginationComponent: CustomPagination
        }}        
				options={{
          pagination: {
            defaultPageSize: 3
          }
				}}
        columns={[
          {
            key: "id",
            headerRender: "ID",
            width: "50px",
            headerStyle: {
              fontWeight: "bold",
            },
          },
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
            key: "gender",
            headerRender: "Gender",
            width: "100px",
            headerStyle: {
              fontWeight: "bold",
            },
          },
          {
            key: "email",
            headerRender: "Email ID",
            width: "200px",
            headerStyle: {
              fontWeight: "bold",
            },
          },
          {
            key: "phone",
            headerRender: "Phone",
            width: "150px",
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
          },
          {
            key: "date_of_joining",
            headerRender: "DoJ",
            width: "100px",
            headerStyle: {
              fontWeight: "bold",
            },
          },
        ]}
      />
		</>
	)
}

export default BasicTableWithPagination;
