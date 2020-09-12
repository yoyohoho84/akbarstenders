import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MenuApp, Table } from "./components";

function App() {
  const [admin, setAdmin] = useState(false);

  return (
    <BrowserRouter basename="/akbarstenders/">
      <Switch>
        <Route path="/" component={MenuApp} exact />
        <Route path="/admin-panel" component={Table} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
