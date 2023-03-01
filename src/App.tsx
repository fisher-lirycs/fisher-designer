import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";

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
      </header>
    </div>
  );
}

export default App;
