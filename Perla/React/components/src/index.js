import React from 'react';
import ReactDOM from 'react-dom';
import Comment from'./commentDetail.js';
import Card from'./approvalCard.js';


const App =()=>{
	return (
		<div className="ui container comments">
			<Card>
			<Comment author="Alex" time="Yesterday at 4:45pm" comment="Genial este blog"/>
			</Card>
			<Card>
			<Comment author="Paty" time="Yesterday at 6:15pm" comment="Talvez deberian agregar mas informacion"/>
			</Card>
			<Card>
			<Comment author="Dani" time="Today at 9:02am" comment="Me gusta mucho :)"/>
			</Card>

		</div>
	);
};

ReactDOM.render(
	<App />,
	document.querySelector('#root')
);

