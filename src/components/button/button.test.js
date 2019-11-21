import React from "react";
import { shallow } from "enzyme";
import { checkProps, findByTestAttr } from "../../../Utils/index";
import SharedButton from "./index";

describe("SharedButton Component", () => {
	describe("Checking proptypes", () => {
		it("Should not throw a warning", () => {
			const expectedProps = {
				buttonText: "Example text",
				emitEvent: () => {}
			};
			const propsErr = checkProps(SharedButton, expectedProps);
			expect(propsErr).toBeUndefined();
		});
	});

	describe("Renders the button", () => {
		let wrapper;
		beforeEach(() => {
			const props = {
				buttonText: "Example text",
				emitEvent: () => {}
			};
			wrapper = shallow(<SharedButton {...props} />);
		});
		it("Should render a button", () => {
			const button = findByTestAttr(wrapper, "buttonComponent");
			expect(button.length).toBe(1);
		});
	});
});
