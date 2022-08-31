import { render, screen } from "@testing-library/react";
import ListItem from "./ListItem";
import { BrowserRouter } from "react-router-dom";

// jest.mock("react-router-dom");

const user = {
  id: 1,
  avatar: "www.url.com",
  first_name: "Maruan",
  last_name: "Alush",
  email: "21maruan@gmail.com",
};

describe("ListItem component", () => {
  it("renders with good data", async () => {
    await render(<ListItem user={user} />, { wrapper: BrowserRouter });

    expect(screen.getByText("Maruan Alush")).toBeTruthy();
  });
});
