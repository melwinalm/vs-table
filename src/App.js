import Versatiletable from "./components/VersatileTable";

const DATA = [
  { id: 1, first_name: "Cleavland", last_name: "Guillot", gender: "Male" },
  { id: 2, first_name: "Izzy", last_name: "Bote", gender: "Male" },
  { id: 3, first_name: "Lilias", last_name: "Curme", gender: "Female" },
  { id: 4, first_name: "Jarib", last_name: "Legen", gender: "Male" },
  { id: 5, first_name: "Pincas", last_name: "Tullis", gender: "Male" },
  { id: 6, first_name: "Babette", last_name: "Thomasson", gender: "Female" },
  { id: 7, first_name: "Corney", last_name: "Highman", gender: "Male" },
  { id: 8, first_name: "Lib", last_name: "Jinkin", gender: "Female" },
  { id: 9, first_name: "Harp", last_name: "Henker", gender: "Male" },
  { id: 10, first_name: "Culley", last_name: "Wilsone", gender: "Male" },
];

function App() {
  return (
    <>
      <div>
        <h3>Basic Static Table</h3>
        <Versatiletable
          className="vt-table-hover"
          data={DATA}
          options={{
            defaultSort: {
              sortField: "id",
              sortOrder: "desc",
              sortType: "number"
            }
          }}
          columns={[
            {
              key: "id",
              headerTitle: "ID",
              headerStyle: {
                fontWeight: "bold"
              }
            },
            {
              key: "first_name",
              headerTitle: "First Name",
              width: "300px",
              headerStyle: {
                fontWeight: "bold",
                borderLeft: "1px solid rgba(32, 33, 36, .28)"
              },
              columnStyle: {
                borderLeft: "1px solid rgba(32, 33, 36, .28)"
              }
            },
            {
              key: "last_name",
              headerTitle: "Last Name",
              width: "300px",
              headerStyle: {
                fontWeight: "bold",
                borderLeft: "1px solid rgba(32, 33, 36, .28)"
              },
              columnStyle: {
                borderLeft: "1px solid rgba(32, 33, 36, .28)"
              }
            },
            {
              key: "gender",
              headerTitle: "Gender",
              width: "150px",
              headerStyle: {
                fontWeight: "bold",
                borderLeft: "1px solid rgba(32, 33, 36, .28)"
              },
              columnStyle: {
                borderLeft: "1px solid rgba(32, 33, 36, .28)"
              }
            },
          ]}
        />
      </div>
      <div>
        <h3>Static Table with Custom Cell Rendering</h3>
        <Versatiletable
          className="vt-table-striped"
          data={DATA}
          columns={[
            {
              key: "id",
              headerTitle: "ID",
              headerStyle: {
                fontWeight: "bold"
              }
            },
            {
              key: "first_name",
              headerTitle: "First Name",
              width: "300px",
              headerStyle: {
                fontWeight: "bold"
              }
            },
            {
              key: "last_name",
              headerTitle: "Last Name",
              width: "300px",
              headerStyle: {
                fontWeight: "bold"
              }
            },
            {
              key: "gender",
              headerTitle: "Gender",
              width: "150px",
              cellRender: (val) => (val === "Male" ? "M" : "F"),
              customHeader: ((val) => {
                return (
                  <strong title="I'm tooltip">{val}</strong>
                )
              })
            },
          ]}
        />
      </div>
    </>
  );
}

export default App;
