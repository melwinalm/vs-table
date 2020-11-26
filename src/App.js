import Versatiletable from './components/VersatileTable';

const DATA = [{ "id": 1, "first_name": "Cleavland", "last_name": "Guillot", "gender": "Male" },
{ "id": 2, "first_name": "Izzy", "last_name": "Bote", "gender": "Male" },
{ "id": 3, "first_name": "Lilias", "last_name": "Curme", "gender": "Female" },
{ "id": 4, "first_name": "Jarib", "last_name": "Legen", "gender": "Male" },
{ "id": 5, "first_name": "Pincas", "last_name": "Tullis", "gender": "Male" },
{ "id": 6, "first_name": "Babette", "last_name": "Thomasson", "gender": "Female" },
{ "id": 7, "first_name": "Corney", "last_name": "Highman", "gender": "Male" },
{ "id": 8, "first_name": "Lib", "last_name": "Jinkin", "gender": "Female" },
{ "id": 9, "first_name": "Harp", "last_name": "Henker", "gender": "Male" },
{ "id": 10, "first_name": "Culley", "last_name": "Wilsone", "gender": "Male" }
];

const COLUMNS = [
  {
    key: "id",
    headerTitle: "ID",
  },
  {
    key: "first_name",
    headerTitle: "First Name",
  },
  {
    key: "last_name",
    headerTitle: "Last Name",
  },
  {
    key: "gender",
    headerTitle: "Gender",
  },
]

function App() {
  return (
    <div>
      <h3>Basic Static Table</h3>
      <Versatiletable data={DATA} columns={COLUMNS} />
    </div>
  );
}

export default App;
