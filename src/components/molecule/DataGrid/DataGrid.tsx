import { useState, useEffect, useContext } from 'react';
import { DataGrid as DataGridMui, ptBR } from '@mui/x-data-grid';
import { Box } from '@/components';
import { Toolbar } from './Toolbar';

export function DataGrid({ tableData, searchTextLabel, initialState = undefined, filterValue = undefined, orderBy = 'desc' }: any) {
  const [searchText, setSearchText] = useState('');

  let filteredRows: any = tableData?.rows?.filter((row: any) => {
    let filter: any = true
    if (searchText.length > 0) {
      filter = false
      tableData?.columns?.map((column: any) => {
        if (row?.[column?.field]) {
          filter |= row?.[column?.field].toString()?.toLowerCase()?.normalize("NFD")?.replace(/[\u0300-\u036f]/g, "")?.includes(searchText.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
        }
      })
    }
    return filter
  })

  return (
    <Box sx={{ height: '100%', width: '100%', flex: 1, px: 3, pt: 3 }}>
      <DataGridMui
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText} style={{ border: 0 }}
        disableColumnMenu
        rows={filteredRows}
        columns={tableData.columns}
        components={{
          Toolbar: Toolbar,
        }}
        initialState={{
          // filter: filter,
          sorting: {
            sortModel: [{
              field: 'label', sort: orderBy
            }],
          },
        }
        }
        isRowSelectable={() => false}
        componentsProps={{
          toolbar: {
            value: searchText,
            onChange: (event: any) => setSearchText(event.target.value),
            clearSearch: () => setSearchText(''),
            searchTextLabel
          }
        }}
      />
    </Box>
  );
}