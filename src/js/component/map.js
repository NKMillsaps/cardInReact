import React from "react";
import PropTypes from "prop-types";

export const Map = props => [];

const cardMapContentArr = [
	{
		title: "My First Post",
		content: "Some new content",
		cardImage: "https://assets.breatheco.de/apis/img/funny/kids.jpg",
		button: "Find Out More"
	},
	{
		title: "My Second Post",
		content: "Some new content",
		cardImage: "https://assets.breatheco.de/apis/img/happy/bucket.jpeg",
		button: "Find Out More"
	},
	{
		title: "My Third Post",
		content: "Some new content",
		cardImage: "https://assets.breatheco.de/apis/img/funny/rigoberto.jpg",
		button: "Find Out More"
	},
	{
		title: "My Fourth Post",
		content: "Some new content",
		cardImage:
			"https://assets.breatheco.de/apis/img/meme/borat.success.jpg",
		button: "Find Out More"
	},
	{
		title: "My Third Post",
		content: "Some new content",
		cardImage: "https://assets.breatheco.de/apis/img/funny/rigoberto.jpg",
		button: "Find Out More"
	},
	{
		title: "My Third Post",
		content: "Some new content",
		cardImage: "https://assets.breatheco.de/apis/img/funny/rigoberto.jpg",
		button: "Find Out More"
	},
	{
		title: "My Third Post",
		content: "Some new content",
		cardImage: "https://assets.breatheco.de/apis/img/funny/rigoberto.jpg",
		button: "Find Out More"
	},
	{
		title: "My Third Post",
		content: "Some new content",
		cardImage: "https://assets.breatheco.de/apis/img/funny/rigoberto.jpg",
		button: "Find Out More"
	}
];

const CardMap = props => {
	return cardMapContentArr.map(item => {
		return (
			<div className="col-lg-3 col-md-6 mb-4 " key={item.title}>
				<div className="card">
					<img
						className="card-img-top"
						src={item.cardImage}
						alt="Card image cap"
					/>
					<div className="card-body ">
						<h5 className="card-title">{item.title}</h5>
						<p className="card-text">{item.content}</p>
						<a href="#" className="btn btn-primary">
							{item.button}
						</a>
					</div>
				</div>
			</div>
		);
	});
};

CardMap.propTypes = {
	title: PropTypes.string,
	content: PropTypes.string
};
