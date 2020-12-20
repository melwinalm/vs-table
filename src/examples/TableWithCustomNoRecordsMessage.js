import React from 'react';
import Versatiletable from './../VersatileTable';

function TableWithCustomNoRecordsMessage(){
	return (
		<>
			<h3>Custom No-Record Example</h3>
			<Versatiletable
				className="vt-table-hover"
				data={[]}
				options={{
					defaultSort: {
						sortField: "id",
						sortOrder: "desc",
						sortType: "number",
					},
					// noRecordsMessageRenderer: () => {
					//   return <div style={{textAlign: "center"}}>Nothing here.</div>;
					// }
				}}
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
							borderLeft: "1px solid rgba(32, 33, 36, .28)",
						},
						columnStyle: {
							borderLeft: "1px solid rgba(32, 33, 36, .28)",
						},
					},
					{
						key: "last_name",
						headerRender: "Last Name",
						width: "300px",
						headerStyle: {
							fontWeight: "bold",
							borderLeft: "1px solid rgba(32, 33, 36, .28)",
						},
						columnStyle: {
							borderLeft: "1px solid rgba(32, 33, 36, .28)",
						},
					},
					{
						key: "gender",
						headerRender: "Gender",
						width: "150px",
						headerStyle: {
							fontWeight: "bold",
							borderLeft: "1px solid rgba(32, 33, 36, .28)",
						},
						columnStyle: {
							borderLeft: "1px solid rgba(32, 33, 36, .28)",
						},
					},
				]}
			/>
	</>
	)
}

export default TableWithCustomNoRecordsMessage;
