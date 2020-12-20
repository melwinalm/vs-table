import BasicTable from './examples/BasicTable';
import BasicTableWithHoverEffect from './examples/BasicTableWithHoverEffect';
import BasicTableWithCellRenderer from './examples/BasicTableWithCellRenderer';
import TableWithCustomNoRecordsMessage from './examples/TableWithCustomNoRecordsMessage';
import TableWithDataSorting from './examples/TableWithDataSorting';
import TableWithTruncateCell from './examples/TableWithTruncateCell';
import BasicTableWithPagination from './examples/BasicTableWithPagination';
import BasicTableWithCustomPagination from './examples/BasicTableWithCustomPagination';

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
