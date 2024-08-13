import { render, screen } from "@testing-library/react";
import MainHeader from "./MainHeader";
import { beforeEach, describe, expect, it } from "vitest";
import React from "react";

const title = /Disc Hockey/;

beforeEach(() => {
	render(<MainHeader />);
});

describe("Display Requirements", () => {
	describe("The title/header should be displayed prominently at the top of the first page", () => {
		it("should be visible on screen", () => {
			const header = screen.getByText(title);
			expect(header).toBeVisible();
		});
	});

	describe("The title/header text should be clear and descriptive", () => {
		it("should have Disc Hockey", () => {
			const header = screen.queryByText(title);
			expect(header).toBeInTheDocument();
		});

		it("should not have disc hockey", () => {
			const header = screen.queryByText(/disc hockey/);

			expect(header).toBeNull();
		});

		it("should render the header with the current font size (40px)", () => {
			const header = screen.queryByText(title);

			expect(header).not.toBeNull();

			if (header) {
				const fontSize = window
					.getComputedStyle(header, null)
					.getPropertyValue("font-size");

				expect(parseFloat(fontSize)).toBeCloseTo(40, 1);
			}
		});

		it("should render the header as bold", () => {
			const header = screen.queryByText(title);

			expect(header).not.toBeNull();

			if (header) {
				const fontWeight = window
					.getComputedStyle(header, null)
					.getPropertyValue("font-weight");

				expect(fontWeight).toBe("700");
			}
		});
	});
});

describe("Accessibility Requirements", () => {
	describe("The title/header should have an appropriate heading level", () => {
		it("should be rendered as an <h1> element", () => {
			const header = screen.queryByText(title);

			const tagName = header?.tagName;

			expect(tagName).toBe("H1");
		});

		it("should only be one <h1> on the page", () => {
			const headers = screen.getAllByRole("heading", { level: 1 });

			expect(headers).toHaveLength(1);
		});
	});

	describe("The title/header should be accessible to screen readers", () => {
		it("should have aria-label 'Main Header'", () => {
			const header = screen.getByRole("heading", { level: 1 });

			expect(header).toHaveAttribute("aria-label", "Main Header");
		});

		it("should be accessible via aria-label", () => {
			const headerElement = screen.getByLabelText("Main Header");

			expect(headerElement).toBeInTheDocument();
		});
	});
});
