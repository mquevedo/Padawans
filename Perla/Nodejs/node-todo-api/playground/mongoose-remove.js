const {ObjectID}=require('mongodb');

const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {Users}=require('./../server/models/user');

/*Todo.remove({}).then((result)=>{
	console.log(result);
});*/

Todo.findOneAndRemove({_id: ''}).then((todo)=>{

});
//Todo.findById()

Todo.findByIdAndRemove().then((todo)=>{
	console.log(todo);
});