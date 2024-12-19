import { screen, render } from "@testing-library/react";
import App from "./App";
import { expect } from "vitest";

describe("App tests", () => {
    it("should render the title", () => {
        render(<App />);
        expect(
            screen.getByRole("heading", {
                level: 1,
            })
        ).toHaveTextContent("Vite + React")
    });
});