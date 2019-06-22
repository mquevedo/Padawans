//Import the React and ReactDOM libraries
const React=require ('react');
const ReactDOM=require('react-dom');

function getButtonText(){
	return 'Click me';
}

//Create a react component
const App =()=>{
	//const textButton='click me';
	const labelText='Enter name:';

	return (
		<div>
		  <label htmlFor="name">
		  {labelText}
		  </label>
		  <input type="text" id="name"/>
		  <button style={{backgroundColor:'blue', color:'white'}}>
		  {getButtonText()}
		  </button>
		</div>
	);
};

//take the real component and show it on the screen
ReactDOM.render(
	<App />,
	document.querySelector('#root')
);