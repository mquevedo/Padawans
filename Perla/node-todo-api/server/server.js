require('./config/config.js');

const _=require('lodash');
const {ObjectID}=require('mongodb');
const express=require('express');
const bodyParser=require('body-parser');

var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {Users}=require('./models/user');

var app=express();
const port=process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos',(req, res)=>{
	var todo=new Todo({
		text:req.body.text
	});
	todo.save().then((doc)=>{
		res.send(doc);
	},(err)=>{
		res.status(400).send(e);
	});
});

app.get('/todos',(req,res)=>{
	Todo.find().then((todos)=>{
		res.send({todos});
	},(e)=>{
		res.status(400).send(e);
	});
});

app.get('/todos/:id',(req, res)=>{
	var id=req.params.id;

	if(!ObjectID.isValid(id)){
		return res.status(404).send();
	}

	Todo.findById(id).then((todo)=>{
		if(!todo){
			return res.status(404).send();
		}
			res.send({todo});
	},(e)=>{
		res.status(400).send(e);
	});
});

app.delete('/todos/:id',(req,res)=>{
	var id=req.params.id;

	if(!ObjectID.isValid(id)){
		return res.status(404).send();
	}

	Todo.findByIdAndRemove(id).then((todo)=>{
		if(!todo){
			return res.status(404).send();
		}
		res.send({todo});
	},(e)=>{
		res.status(400).send(e);
	});
});

app.patch('/todos/:id',(req, res)=>{
	var id=req.params.id;
	var body=_.pick(req.body,['text','completed']);

	if(!ObjectID.isValid(id)){
		return res.status(404).send();
	}

	if(_.isBoolean(body.completed)&&body.completed){
		body.completedAt=new Date().getTime();
	}else{
		body.completed=false;
		body.completedAt=null;
	}

	Todo.findByIdAndUpdate(id,{$set:body},{new: true}).then((todo)=>{//equivalente a returnOriginal: false para la actualizacion
		if(!todo){
			return res.status(404).send();
		}
		res.send({todo});

	}).catch((e)=>{
		res.status(400).send();
	});
});

app.listen(port,()=>{
	console.log(`Started on port ${port}`);
});

module.exports={app};

/*Preparamos los parametros a introducir dentro de la base de datos
var newUser=new Users({
	name: 'Perla   ',
	email:'pati',
	age:19
});

var newTodo=new Todo({
	text:'eat lunch'
});

var otherTodo=new Todo({
	text:'play football',
	completed: true,
	completedAt: 123
});


//se envian los parametros a la base para guardarse
newUser.save().then((doc)=>{
	console.log('Saved todo',doc);
},(err)=>{
	console.log('Unable to save Todo');
});



otherTodo.save().then((doc)=>{
	console.log('Saved todo',doc);
},(err)=>{
	console.log('Unable to save Todo');
});*/