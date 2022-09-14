import React from "react";
import { mount } from "enzyme";
import App from "./App";

describe("Counter Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test("render the title of counter", () => {
    expect(wrapper.find("h1").text()).toContain("This is counter app");
  });
  test("render the initional value of state in the div", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });
  test("render the cleck event of increment button and increment counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });
  test("render the cleck event of decrement button and decrement counter value", () => {
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("-1");
  });

  
});
