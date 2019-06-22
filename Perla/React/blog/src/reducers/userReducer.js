export default (state=[],action)=>{
	if(action.type==='FETCH_USERS'){
		return [...state, action.payload];
	}
	return state;
};