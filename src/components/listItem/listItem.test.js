import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../../Utils/index";
import ListItem from "./index";

describe("ListItem Component", () => {
	describe("Check proptypes", () => {
		it("Should not throw a warning", () => {
			const expectedProps = {
				title: "Example title",
				desc: "Example description"
			};
			const propsErr = checkProps(ListItem, expectedProps);
			expect(propsErr).toBeUndefined();
		});
	});

	describe("Component renders", () => {
		let wrapper;
		beforeEach(() => {
			const props = {
				title: "Example title",
				desc: "Example description"
			};
			wrapper = shallow(<ListItem {...props} />);
		});
		it("Should render without error", () => {
			const component = findByTestAttr(wrapper, "listItemComponent");
			expect(component.length).toBe(1);
		});

		it("Should render a title", () => {
			const title = findByTestAttr(wrapper, "componentTitle");
			expect(title.length).toBe(1);
		});

		it("Should render a desc", () => {
			const desc = findByTestAttr(wrapper, "componentDesc");
			expect(desc.length).toBe(1);
		});
	});

	describe("Component should not render", () => {
		let wrapper;
		beforeEach(() => {
			const props = {
				desc: "Example desc"
			};
			wrapper = shallow(<ListItem {...props} />);
		});
		it("Is not rendered", () => {
			const component = findByTestAttr(wrapper, "listItemComponent");
			expect(component.length).toBe(0);
		});
	});
});
