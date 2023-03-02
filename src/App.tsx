import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/Button";
import Alert, { AlertType } from "./components/Alert/Alert";

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <Alert title="THIS IS AN ALERT" />
        <Alert title="THIS IS AN DANGET ALERT" type={AlertType.Danger} />
        <Alert title="THIS IS AN SUCCESS ALERT" type={AlertType.Success} />
        <Alert title="THIS IS AN WARNING ALERT" type={AlertType.Warning} />
        <Alert title="THIS IS AN ALERT" descriptions={['aaaaaaaaaaaaaaaa', 'bbbbbbbbbbbbbbbbb']} />
      </header>
    </div>
  );
}

export default App;
