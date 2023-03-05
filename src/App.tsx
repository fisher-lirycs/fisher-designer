import React from "react";
import Menu from "./components/Menu/Menu";
import MenuItem from "./components/Menu/MenuItem";
import SubMenu from "./components/Menu/SubMenu";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex={"0"} mode="vertical">
          <MenuItem>cool link1</MenuItem>
          <MenuItem>cool link2</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>dropdown link1</MenuItem>
            <MenuItem>dropdown link2</MenuItem>
            <MenuItem>dropdown link3</MenuItem>
          </SubMenu>
          <MenuItem>cool link3</MenuItem>
        </Menu>
      </header>
    </div>
  );
}

export default App;
