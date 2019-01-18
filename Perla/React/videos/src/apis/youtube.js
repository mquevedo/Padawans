import axios from 'axios';

const KEY='AIzaSyDYjmj6MzO-LpiX-1W6OUYjC1lzZkO1bpI';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params:{
		part:'snippet',
		maxResult: 10,
		key:KEY
	}
});

