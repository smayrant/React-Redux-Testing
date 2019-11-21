import React, { Component } from "react";
import Header from "./components/header/index";
import Headline from "./components/headline/index";
import SharedButton from "./components/button/index";
import ListItem from "./components/listItem/index";
import { connect } from "react-redux";
import { fetchPosts } from "./actions/index";
import "./app.scss";

/* Array used simply as an example for testing PropTypes. 
This array is not actually used within the app */
const tempArr = [
	{
		fName: "Joe",
		lName: "Johnson",
		age: 30,
		email: "joej@gmail.com",
		availableOnline: true
	}
];

class App extends Component {
	fetch = () => {
		this.props.fetchPosts();
	};
	render () {
		const { posts } = this.props;
		const configButton = {
			buttonText: "Get posts",
			emitEvent: this.fetch
		};

		return (
			<div className="App" data-test="appComponent">
				<Header />
				<section className="main">
					<Headline header={"Posts"} desc={"Click the button to render posts!"} tempArr={tempArr} />
					<SharedButton {...configButton} />
					{posts.length > 0 && (
						<div>
							{posts.map(post => {
								const { title, body, id } = post;
								const configListItem = {
									title,
									desc: body
								};
								return <ListItem key={id} {...configListItem} />;
							})}
						</div>
					)}
				</section>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		posts: state.posts
	};
};

export default connect(mapStateToProps, { fetchPosts })(App);
