import Versatiletable from "./VersatileTable/VersatileTable";

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

const SAMPLEDATA = [
  {
    id: 1,
    first_name: "L;urette",
    last_name: "Humbie",
    email: "lhumbie0@amazon.com",
    gender: "Female",
    phone: "762-904-2274",
    salary: 329095,
    date_of_joining: "02/13/2018",
  },
  {
    id: 2,
    first_name: "Darin",
    last_name: "Blackborne",
    email: "dblackborne1@mozilla.com",
    gender: "Male",
    phone: "103-620-5648",
    salary: 2668137,
    date_of_joining: "02/01/2016",
  },
  {
    id: 3,
    first_name: "Wendel",
    last_name: "Sculpher",
    email: "wsculpher2@bravesites.com",
    gender: "Male",
    phone: "207-306-1123",
    salary: 508661,
    date_of_joining: "04/07/2015",
  },
  {
    id: 4,
    first_name: "Collette",
    last_name: "Mizzen",
    email: "cmizzen3@businesswire.com",
    gender: "Female",
    phone: "639-302-9156",
    salary: 1223609,
    date_of_joining: "09/22/2020",
  },
  {
    id: 5,
    first_name: "Robbi",
    last_name: "O'Donovan",
    email: "rodonovan4@meetup.com",
    gender: "Female",
    phone: "572-512-3286",
    salary: 2578362,
    date_of_joining: "09/28/2020",
  },
  {
    id: 6,
    first_name: "Clo",
    last_name: "Raffeorty",
    email: "craffeorty5@issuu.com",
    gender: "Female",
    phone: "218-510-7714",
    salary: 2739419,
    date_of_joining: "05/26/2020",
  },
  {
    id: 7,
    first_name: "Tersina",
    last_name: "Dwyr",
    email: "tdwyr6@mit.edu",
    gender: "Female",
    phone: "607-180-8488",
    salary: 1869945,
    date_of_joining: "09/30/2015",
  },
  {
    id: 8,
    first_name: "Ebeneser",
    last_name: "Matzke",
    email: "ematzke7@lulu.com",
    gender: "Male",
    phone: "981-482-7731",
    salary: 2033521,
    date_of_joining: "02/14/2020",
  },
  {
    id: 9,
    first_name: "Siouxie",
    last_name: "Dundin",
    email: "sdundin8@time.com",
    gender: "Female",
    phone: "454-399-6116",
    salary: 1819026,
    date_of_joining: "07/12/2020",
  },
  {
    id: 10,
    first_name: "Krisha",
    last_name: "Marsay",
    email: "kmarsay9@berkeley.edu",
    gender: "Male",
    phone: "938-586-7822",
    salary: 1079852,
    date_of_joining: "11/18/2019",
  },
];

function App() {
  return (
    <>
      <div>
        <h3>Basic Table</h3>
        <Versatiletable
          data={SAMPLEDATA}
          columns={[
            {
              key: "id",
              headerTitle: "ID",
              width: "50px",
              headerStyle: {
                fontWeight: "bold",
              },
            },
            {
              key: "first_name",
              headerTitle: "First Name",
              width: "100px",
              headerStyle: {
                fontWeight: "bold",
              },
            },
            {
              key: "last_name",
              headerTitle: "Last Name",
              width: "100px",
              headerStyle: {
                fontWeight: "bold",
              },
            },
            {
              key: "gender",
              headerTitle: "Gender",
              width: "100px",
              headerStyle: {
                fontWeight: "bold",
              },
            },
            {
              key: "email",
              headerTitle: "Email ID",
              width: "200px",
              headerStyle: {
                fontWeight: "bold",
              },
            },
            {
              key: "phone",
              headerTitle: "Phone",
              width: "150px",
              headerStyle: {
                fontWeight: "bold",
              },
            },
            {
              key: "salary",
              headerTitle: "Salary",
              width: "100px",
              headerStyle: {
                fontWeight: "bold",
              },
            },
            {
              key: "date_of_joining",
              headerTitle: "DoJ",
              width: "100px",
              headerStyle: {
                fontWeight: "bold",
              },
            },
          ]}
        />
      </div>
      <div>
        <h3>Basic Static Table (with row hover effect)</h3>
        <Versatiletable
          className="vt-table-hover"
          data={DATA}
          options={{
            defaultSort: {
              sortField: "id",
              sortOrder: "desc",
              sortType: "number",
            }
          }}
          columns={[
            {
              key: "id",
              headerTitle: "ID",
              headerStyle: {
                fontWeight: "bold",
              },
            },
            {
              key: "first_name",
              headerTitle: "First Name",
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
              headerTitle: "Last Name",
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
              headerTitle: "Gender",
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
      </div>
      <div>
        <h3>Static Table with Custom Cell Rendering (with striped rows)</h3>
        <Versatiletable
          className="vt-table-striped"
          data={DATA}
          columns={[
            {
              key: "id",
              headerTitle: "ID",
              headerStyle: {
                fontWeight: "bold",
              },
            },
            {
              key: "first_name",
              headerTitle: "First Name",
              width: "300px",
              headerStyle: {
                fontWeight: "bold",
              },
            },
            {
              key: "last_name",
              headerTitle: "Last Name",
              width: "300px",
              headerStyle: {
                fontWeight: "bold",
              },
            },
            {
              key: "gender",
              headerTitle: "Gender",
              width: "150px",
              cellRender: (val) => (val === "Male" ? "M" : "F"),
              customHeader: (val) => {
                return <strong title="I'm tooltip">{val}</strong>;
              },
            },
          ]}
        />
      </div>
      <div>
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
              headerTitle: "ID",
              headerStyle: {
                fontWeight: "bold",
              },
            },
            {
              key: "first_name",
              headerTitle: "First Name",
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
              headerTitle: "Last Name",
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
              headerTitle: "Gender",
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
      </div>
    </>
  );
}

export default App;
