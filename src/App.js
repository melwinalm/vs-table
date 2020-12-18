import BasicTable from './VersatileTable/examples/BasicTable';
import BasicTableWithHoverEffect from './VersatileTable/examples/BasicTableWithHoverEffect';
import BasicTableWithCellRenderer from './VersatileTable/examples/BasicTableWithCellRenderer';
import TableWithCustomNoRecordsMessage from './VersatileTable/examples/TableWithCustomNoRecordsMessage';
import TableWithDataSorting from './VersatileTable/examples/TableWithDataSorting';
import TableWithTruncateCell from './VersatileTable/examples/TableWithTruncateCell';
import BasicTableWithPagination from './VersatileTable/examples/BasicTableWithPagination';
import BasicTableWithCustomPagination from './VersatileTable/examples/BasicTableWithCustomPagination';

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
      <div>
        <TableWithTruncateCell />
      </div>
      <div>
        <BasicTableWithPagination/>
      </div>
      <div>
        <BasicTableWithCustomPagination/>
      </div>
    </>
  );
}

export default App;
