import React from "react";
import Versatiletable from "./../VersatileTable";

import SampleData3 from "./SampleData3";

function BasicTableWithCellTooltipRender() {
  return (
    <>
      <h3>Basic Table with Cell Tooltip Render</h3>
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
            }
          },
          {
            key: "last_name",
            headerRender: "Last Name",
            headerTooltipRender: "This is the customers last name",
            width: "100px",
            headerStyle: {
              fontWeight: "bold",
            },
            cellTooltipRender: true,
            cellTooltipPosition: "top"
          },
          {
            key: "salary",
            headerRender: "Salary",
            headerTooltipRender: "This is the customers salary",
            width: "100px",
            headerStyle: {
              fontWeight: "bold",
            },
            cellTooltipRender: (val) => {
              return (
                <div>
                  This is a custom tooltip <br />
                  Value: {val}
                </div>
              );
            },
            cellTooltipPosition: "left"
          },
        ]}
      />
    </>
  );
}

export default BasicTableWithCellTooltipRender;
