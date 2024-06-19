import { useState, useEffect } from "react";
import Form from "./components/Form";
import Grids from "./components/Grids";
import {
  FormProvider,
  GridProvider,
  TableProvider
} from "./context/context";

//import "./styles.css";

const App = () => {
  const [formButtonClicked, setFormButtonClicked] = useState(false);
  const form = {
    rows: [],
    columns: [],
    isPathAvailable: true,
  };
  const table = {
    table: {
      idx: 1,
      rows: [],
      columns: [],
      top: true,
      div: -1
    }
  };
  const [ gridList, setGridList ] = useState({
        count: 0,
        isPathAvailable: true,
        grids: [],
  });

  useEffect((() => {
    console.log(gridList);
  }))

  return (
    <TableProvider value={table}>
      <FormProvider value={form}>
        <GridProvider value={gridList}>
            <div className="App">
              <h1>Graph</h1>
              <h2>Generate a Grid</h2>
            <Form
              setFormButtonClicked={setFormButtonClicked}
              gridList={gridList}
            />
            <Grids
              formButtonClicked={formButtonClicked}
              setFormButtonClicked={setFormButtonClicked}
              gridList={gridList}
              setGridList={setGridList}
            />
              <br />
            </div>
        </GridProvider>
      </FormProvider>
    </TableProvider>
  );
};

export default App;
