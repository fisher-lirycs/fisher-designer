import React from "react";
import {
  render,
  RenderResult,
  fireEvent,
  cleanup,
  waitFor,
} from "@testing-library/react";
import Menu, { MenuProps } from "./Menu";
import MenuItem from "./MenuItem";
import SubMenu from "./SubMenu";

const testProps: MenuProps = {
  defaultIndex: "0",
  onSelect: jest.fn(),
  className: "test",
};

const testVerProps: MenuProps = {
  mode: "vertical",
  defaultIndex: "0",
};

const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem>active</MenuItem>
      <MenuItem disabled>disabled</MenuItem>
      <MenuItem>xyz</MenuItem>
      <SubMenu title="dropdown">
        <MenuItem>drop1</MenuItem>
      </SubMenu>
    </Menu>
  );
};
const createStyleFile = () => {
  const cssFile = `
    .fisher-submenu {
      display:none;
    }
    .fisher-submenu.menu-opened {
      display:block;
    }
  `;

  const style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = cssFile;
  return style;
};

let wrapper: RenderResult,
  menuElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement;

describe("test Menu Component", () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testProps));
    wrapper.container.append(createStyleFile());
    menuElement = wrapper.getByTestId("test-menu");
    activeElement = wrapper.getByText("active");
    disabledElement = wrapper.getByText("disabled");
  });

  test("should render correct Menu and MenuItem based on default props", () => {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass("fisher-menu test");
    // expect(menuElement.getElementsByTagName("li").length).toEqual(3);
    expect(menuElement.querySelectorAll(":scope > li").length).toEqual(4);
    expect(activeElement).toHaveClass("menu-item is-active");
    expect(disabledElement).toHaveClass("menu-item is-disabled");
  });

  test("click items should change active and call the right callback", () => {
    const thirdItem = wrapper.getByText("xyz");
    fireEvent.click(thirdItem);
    expect(thirdItem).toHaveClass("is-active");
    expect(activeElement).not.toHaveClass("is-active");
    expect(testProps.onSelect).toHaveBeenCalledWith("2");
    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass("is-active");
    expect(testProps.onSelect).not.toHaveBeenCalledWith("1");
  });

  test("should render vertical mode when mode is set to vertical", () => {
    cleanup();
    wrapper = render(generateMenu(testVerProps));
    menuElement = wrapper.getByTestId("test-menu");
    expect(menuElement).toHaveClass("menu-vertical");
  });

  test("should show dropdpwn items when hover on SubMenu", async () => {
    expect(wrapper.queryByText("drop1")).not.toBeVisible();
    const dropdownElement = wrapper.getByText("dropdown");
    fireEvent.mouseEnter(dropdownElement);
    await waitFor(() => {
      expect(wrapper.queryByText("drop1")).toBeVisible();
    });
    fireEvent.click(wrapper.getByText("drop1"));
    expect(testProps.onSelect).toHaveBeenCalledWith("3-0");
    fireEvent.mouseLeave(dropdownElement);
    await waitFor(() => {
      expect(wrapper.queryByText("drop1")).not.toBeVisible();
    });
  });
});
