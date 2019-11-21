import React, { Component } from "react";
import PropTypes from "prop-types";

class ListItem extends Component {
	render () {
		const { title, desc } = this.props;
		if (!title) {
			return null;
		}
		return (
			<div data-test="listItemComponent">
				<h2 data-test="componentTitle">{title}</h2>
				<p data-test="componentDesc">{desc}</p>
			</div>
		);
	}
}

ListItem.propTypes = {
	title: PropTypes.string,
	desc: PropTypes.string
};

export default ListItem;
