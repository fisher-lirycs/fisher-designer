import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button, { ButtonProps, ButtonType, ButtonSize } from "./Button";

const defaultProps = {
  onClick: jest.fn(),
};

const testProps: ButtonProps = {
  buttonType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: "jerry-class",
};

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
};

describe("test Button Component", () => {
  test("should render the correct default button", () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>);
    const element = wrapper.getByText("Nice") as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("btn btn-default");
    expect(element.disabled).toBeFalsy();
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  test("should render the correct component based on different props", () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("btn btn-primary btn-lg jerry-class");
  });

  test("should render a link when btnType equals link and href is provided", () => {
    const wrapper = render(
      <Button buttonType={ButtonType.Link} href="http://test.com">
        Link
      </Button>
    );
    const element = wrapper.getByText("Link");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("A");
    expect(element).toHaveClass("btn btn-link");
  });

  test("should render disabled button when disabled is true", () => {
    const wrapper = render(<Button {...disabledProps}>Nice</Button>);
    const element = wrapper.getByText("Nice") as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("btn btn-default");
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
