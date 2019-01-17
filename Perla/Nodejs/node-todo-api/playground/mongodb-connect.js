//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

//var obj=new ObjectID();
//console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
	if(err){
		console.log('Unabled to connect to mongodb server');
	}

	console.log('Connected to mongodb server');

	const db=client.db('TodoApp')

	db.collection('Users').insertOne({
		name:'Perla',
		age: 19,
		location: 'El Salvador'
	},(err,result)=>{
		if(err){
			return console.log('Unable to insert users',err);
		}

		console.log(result.ops[0]._id.getTimestamp());
	});

	/*
	const db=client.db('TodoApp')

	db.collection('Todos').insertOne({
		text:'something to do',
		completed: false
	},(err,result)=>{
		if(err){
			return console.log('Unable to insert todo',err);
		}

		console.log(JSON.stringify(result.ops,undefined,2));
	});*/

	client.close();
});