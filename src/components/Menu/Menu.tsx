import React from "react";
import classNames from "classnames";

type MenuMode = "horizontal" | "vertical";
export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  children: React.ReactNode;
  onSelect?: (index: number) => void;
}

const Menu: React.FC<MenuProps> = (props) => {
  const { defaultIndex, className, mode, style, children, onSelect } = props;
  const classes = classNames("fisher-menu", className, {
    "menu-vertical": mode === "vertical",
  });
  return (
    <ul className={classes} style={style}>
      {children}
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: 0,
  mode: "horizontal",
};

export default Menu;
