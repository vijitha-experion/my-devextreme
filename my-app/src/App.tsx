import React from "react";
import {
  DataGrid,
  Column,
  Editing,
  Paging,
  Pager,
  Sorting,
  FilterRow,
  GroupPanel,
  Grouping,
} from "devextreme-react/data-grid";

const dataSource = [
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Smith", age: 25 },
  { id: 3, name: "Bob Johnson", age: 35 },
];

const App: React.FC = () => {
  return (
    <div>
      <h1>Custom DevExtreme DataGrid</h1>
      <DataGrid
        dataSource={dataSource}
        showBorders={true}
        columnAutoWidth={true}
      >
        <Sorting mode="multiple" />
        <FilterRow visible={true} />
        <GroupPanel visible={true} />
        <Grouping autoExpandAll={false} />
        <Paging defaultPageSize={10} />
        <Pager
          showPageSizeSelector={true}
          allowedPageSizes={[5, 10, 20]}
          showInfo={true}
        />
        <Editing
          mode="row"
          allowUpdating={true}
          allowAdding={true}
          allowDeleting={true}
        />
        <Column dataField="id" caption="ID" allowEditing={false} />
        <Column dataField="name" caption="Name" />
        <Column dataField="age" caption="Age" />
      </DataGrid>
    </div>
  );
};

export default App;
