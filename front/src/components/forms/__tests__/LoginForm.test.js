import React from "react";
import ReactDOM from "react-dom";
import { unmountComponentAtNode } from "react-dom";
import LoginForm from "../LoginForm";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LoginForm />, div);
});

it("mock localstorage", () => {
  const spy = jest.spyOn(Storage.prototype, "setItem");
  localStorage.setItem = spy;
  localStorage.setItem("foo", "bar");
  expect(spy).toHaveBeenCalledTimes(1);
});
