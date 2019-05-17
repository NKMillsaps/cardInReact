import React from "react";
import PropTypes from "prop-types";

export const Cards = props => {
	return (
		<div className="card ">
			<img src="..." className="card-img-top" alt="..." />

			<div className="card-body">
				<h5 className="cardtitle">{props.title}</h5>

				<p className="cardtext">{props.text}</p>
			</div>

			<div className="card-footer">
				<a className="btn btn-primary btn-md" href="#" role="button">
					Find Out More!
				</a>
			</div>
		</div>
	);
};
Cards.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string
};
