import React, { useState } from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/Button";
import Alert, { AlertType } from "./components/Alert/Alert";
import Menu from "./components/Menu/Menu";
import MenuItem from "./components/Menu/MenuItem";

function App() {
  const [alertStatus, setAlertStatus] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex={0}>
          <MenuItem>cool link1</MenuItem>
          <MenuItem>cool link2</MenuItem>
          <MenuItem>cool link3</MenuItem>
        </Menu>

        <Button>Normal Button</Button>
        <Button buttonType={ButtonType.Primary} size={ButtonSize.Large}>
          Large Button
        </Button>
        <Button buttonType={ButtonType.Danger} size={ButtonSize.small}>
          Small Button
        </Button>
        <Button buttonType={ButtonType.Danger} size={ButtonSize.small} disabled>
          disabled Button
        </Button>
        <Button buttonType={ButtonType.Link} href="http://www.baidu.com">
          Baidu
        </Button>
        <Button
          buttonType={ButtonType.Link}
          href="http://www.baidu.com"
          disabled
        >
          Baidu
        </Button>
        <hr />
        {alertStatus && (
          <Alert title="THIS IS AN ALERT" onClose={setAlertStatus} />
        )}
        <Alert title="THIS IS AN DANGET ALERT" type={AlertType.Danger} />
        <Alert title="THIS IS AN SUCCESS ALERT" type={AlertType.Success} />
        <Alert title="THIS IS AN WARNING ALERT" type={AlertType.Warning} />
        <Alert
          title="THIS IS AN ALERT"
          descriptions={["aaaaaaaaaaaaaaaa", "bbbbbbbbbbbbbbbbb"]}
        />
      </header>
    </div>
  );
}

export default App;
