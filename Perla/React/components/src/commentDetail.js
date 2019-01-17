const React=require ('react');
const faker=require('faker');

const commentDetail=props=>{
	console.log(props);
	const com=(<div className="comment">
		<a href="/" className="avatar">
			<img alt="avatar" src={faker.image.avatar()}/>
		</a>
		<div className="content">
			<a href="/" className="author">
			{props.author}
			</a>
			<div className="metadata">
				<span className="date">{props.time}</span>
			</div>
			<div className="text">{props.comment}</div>
		</div>
	</div>);
	return com;
};

export default commentDetail;
