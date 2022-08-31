import React from "react";
import { render, screen } from "@testing-library/react";
import Details from "./Details";

describe("Details component", () => {
  it("renders with good data", async () => {
    await render(
      <Details
        first_name="Maruan"
        last_name="Alush"
        email="21maruan@gmail.com"
      />
    );

    expect(screen.getByText("Maruan Alush")).toBeTruthy();
  });

  it("renders with empty data", async () => {
    await render(<Details first_name="" last_name="" email="" />);

    expect(screen.getByLabelText("Grouped details of the user")).toBeTruthy();
  });
});
