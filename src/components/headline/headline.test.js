import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";
import { findByTestAttr, checkProps } from "../../../Utils/index";

const setUp = (props = {}) => {
	const component = shallow(<Headline {...props} />);
	return component;
};

describe("Headline Component", () => {
	describe("Checking PropTypes", () => {
		it("Should not throw a warning", () => {
			const expectedProps = {
				header: "Test header",
				desc: "Test desc",
				tempArr: [
					{
						fName: "Test name",
						lName: "Test name",
						age: 26,
						availableOnline: false
					}
				]
			};
			// returns an error string if the props do not match the expected result, returns undefined otherwise
			const propsErr = checkProps(Headline, expectedProps);

			expect(propsErr).toBeUndefined();
		});
	});

	describe("Have props", () => {
		let wrapper;
		beforeEach(() => {
			const props = {
				header: "Test Header",
				desc: "Test Desc"
			};
			wrapper = setUp(props);
		});

		it("should render without errors", () => {
			const component = findByTestAttr(wrapper, "HeadlineComponent");
			expect(component.length).toBe(1);
		});

		it("Should render an H1", () => {
			const h1 = findByTestAttr(wrapper, "header");
			expect(h1.length).toBe(1);
		});

		it("Should render a description", () => {
			const desc = findByTestAttr(wrapper, "desc");
			expect(desc.length).toBe(1);
		});
	});

	describe("Have no props", () => {
		let wrapper;
		beforeEach(() => {
			wrapper = setUp();
		});

		it("Should not render", () => {
			const component = findByTestAttr(wrapper, "HeadlineComponent");
			expect(component.length).toBe(0);
		});
	});
});
