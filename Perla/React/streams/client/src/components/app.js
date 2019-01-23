import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import StreamCreate from './streams/streamCreate';
import StreamEdit from './streams/streamEdit';
import StreamList from './streams/streamList';
import StreamShow from './streams/streamShow';
import StreamDelete from './streams/streamDelete';
import Header from './header';
import history from '../history';

const App=()=>{
	return (
		<div className="ui container">
			<BrowserRouter route={history}>
				<div>
					<Header/>
					<Route path="/" exact component={StreamList}/>
					<Route path="/streams/new" exact component={StreamCreate}/>
					<Route path="/streams/show" exact component={StreamShow}/>
					<Route path="/streams/edit/:id" exact component={StreamEdit}/>
					<Route path="/streams/delete" exact component={StreamDelete}/>
				</div>
			</BrowserRouter>
		</div>);
};

export default App;