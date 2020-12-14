import BasicTable from './VersatileTable/examples/BasicTable';
import BasicTableWithHoverEffect from './VersatileTable/examples/BasicTableWithHoverEffect';
import BasicTableWithCellRenderer from './VersatileTable/examples/BasicTableWithCellRenderer';
import TableWithCustomNoRecordsMessage from './VersatileTable/examples/TableWithCustomNoRecordsMessage';
import TableWithDataSorting from './VersatileTable/examples/TableWithDataSorting';

function App() {
  return (
    <>
      <div>
        <BasicTable/>
      </div>
      <div>
        <BasicTableWithHoverEffect/>
      </div>
      <div>
        <BasicTableWithCellRenderer/>
      </div>
      <div>
        <TableWithCustomNoRecordsMessage/>
      </div>
      <div>
        <TableWithDataSorting/>
      </div>
    </>
  );
}

export default App;
