const {ObjectID}=require('mongodb');

const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {Users}=require('./../server/models/user');

var idTodo='5c39120a60d92f050c91ac2d';
var idUser='5c38b67ed3e5172c2c4bc72f';

if(!ObjectID.isValid(idTodo)){
	console.log('ID not valid for a todo');
}

if(!ObjectID.isValid(idUser)){
	console.log('ID not valid for a User');
}

//busqueda todo
Todo.find({
	_id:idTodo
}).then((todos)=>{
	console.log('Todos', todos);
});

Todo.findOne({
	_id:idTodo
}).then((todo)=>{
	console.log('Todo', todo);
});

Todo.findById(idTodo).then((todo)=>{
	if(!todo){
		return console.log('Id not found for a todo');
	}
	console.log('Todo by id', todo);
}).catch((e)=>console.log(e));

//busqueda users
Users.find({
	_id:idUser
}).then((users)=>{
	console.log('Users', users);
});

Users.findOne({
	_id:idUser
}).then((user)=>{
	console.log('User', user);
});

Users.findById(idUser).then((user)=>{
	if(!user){
		return console.log('Id not found for a User');
	}
	console.log('User by id', user);
}).catch((e)=>console.log(e));
