import { render, screen } from "@testing-library/react";
import ProfilePicture from "./ProfilePicture";

describe("Profile picture component", () => {
  it("uses correct src", async () => {
    await render(<ProfilePicture url="www.google.com" />);

    const image = screen.getByAltText("Profile Picture");

    expect(image).toHaveAttribute("src", "www.google.com");
  });
});
