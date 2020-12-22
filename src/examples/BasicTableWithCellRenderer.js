import React from 'react';
import Versatiletable from './../VersatileTable';
import SampleData2 from './SampleData2';

function BasicTableWithCellRenderer(){
	return (
		<>
			<h3>Static Table with Custom Cell Rendering (with striped rows)</h3>
			<Versatiletable
				className="vt-table-striped"
				data={SampleData2}
				columns={[
					{
						key: "id",
						headerRender: "ID",
						headerStyle: {
							fontWeight: "bold",
						},
					},
					{
						key: "first_name",
						headerRender: "First Name",
						width: "300px",
						headerStyle: {
							fontWeight: "bold",
						},
					},
					{
						key: "last_name",
						headerRender: "Last Name",
						width: "300px",
						headerStyle: {
							fontWeight: "bold",
						},
					},
					{
						key: "gender",
						headerRender: "Gender",
						width: "150px",
						cellRender: (val) => (val === "Male" ? "M" : "F")
					},
				]}
			/>
		</>
	)
}

export default BasicTableWithCellRenderer;
