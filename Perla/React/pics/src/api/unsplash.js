import axios from 'axios';

export default axios.create({
	baseURL:'https://api.unsplash.com',
	headers:{
		Authorization:'Client-ID 4aabcfdde6996c5ca91a80d7ce1de5291640ffb96243f64ee5bbfcb9a527bf11'
	}
});