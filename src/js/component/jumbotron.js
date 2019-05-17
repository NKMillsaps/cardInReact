import React from "react";
import PropTypes from "prop-types";

export const Jumbotron = props => {
	return (
		<div className="jumbotron">
			<h1 className="display-4"> {props.title}</h1>
			<p className="lead">{props.lead}</p>
			<hr className="my-4" />
			<p>
				It uses utility classes for typography and spacing to space
				content out within the larger container.
			</p>
			<a
				className="btn btn-primary btn-lg text-left"
				href="#"
				role="button">
				Call to action!
			</a>
		</div>
	);
};
Jumbotron.propTypes = {
	title: PropTypes.string,
	lead: PropTypes.string
};
