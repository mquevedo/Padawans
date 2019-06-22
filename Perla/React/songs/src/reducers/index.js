import {combineReducers} from 'redux';

const listSongs=()=>{
	return [
	{title:'Waiting for love', duration: '3:25'},
	{title:'Photograph', duration: '4:05'},
	{title:'Countings stars', duration: '3:56'},
	{title:'Hot and Cold', duration: '4:13'}
	]
};

const selectedSong=(selectSong=null,action)=>{
	if(action.type==='SONG_SELECTED'){
		return action.payload;
	}

	return selectSong;
};

export default combineReducers({
	songs: listSongs,
	selectedSong:selectedSong
});