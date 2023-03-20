import React, { useState} from "react";
import { DataGrid as DataGridMui, ptBR } from "@mui/x-data-grid";
import { Box } from "../..";

export function DataGrid({
  tableData,
  searchTextLabel,
  initialState = undefined,
  filterValue = undefined,
  orderBy = "desc",
}) {
  const [searchText, setSearchText] = useState("");

  let filteredRows = tableData?.rows?.filter((row) => {
    let filter = true;
    if (searchText.length > 0) {
      filter = false;
      tableData?.columns?.map((column) => {
        if (row?.[column?.field]) {
          filter |= row?.[column?.field]
            .toString()
            ?.toLowerCase()
            ?.normalize("NFD")
            ?.replace(/[\u0300-\u036f]/g, "")
            ?.includes(
              searchText
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
            );
        }
      });
    }
    return filter;
  });

  return (
    <Box sx={{ height: "100%", width: "100%", flex: 1, px: 3, pt: 3 }}>
      <DataGridMui
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
        style={{ border: 0 }}
        disableColumnMenu
        rows={filteredRows}
        columns={tableData.columns}
        components={{}}
        initialState={{
          // filter: filter,
          sorting: {
            sortModel: [
              {
                field: "label",
                sort: orderBy,
              },
            ],
          },
        }}
        isRowSelectable={() => false}
        componentsProps={{
          toolbar: {
            value: searchText,
            onChange: (event) => setSearchText(event.target.value),
            clearSearch: () => setSearchText(""),
            searchTextLabel,
          },
        }}
      />
    </Box>
  );
}
