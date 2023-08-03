import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { DataTable } from './DataTable';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 200,
    type: 'text',
    editable: true,
  },
  {
    field: 'manufacturer',
    headerName: 'Manufacturer',
    width: 200,
    type: 'text',
    editable: true,
  },
  {
    field: 'year',
    headerName: 'Year',
    width: 200,
    type: 'text',
    align: 'right',
    editable: true,
  },
  {
    field: 'max_speed',
    headerName: 'Max Speed (km/h)',
    width: 200,
    type: 'number',
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Price ($)',
    type: 'text',
    align: 'right',
    width: 200,
    editable: true,
  }
];

const rows = DataTable

export default function DataGridDemo() {
  return (
    <Box sx={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 25,
            },
          },
        }}
        pageSizeOptions={[25]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}