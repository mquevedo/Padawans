//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

//var obj=new ObjectID();
//console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
	if(err){
		console.log('Unabled to connect to mongodb server');
	}

	console.log('Connected to mongodb server');

	const db=client.db('TodoApp');

	db.collection('Users').find({name:'Perla'}).count().then((count)=>{
		console.log(`Todos count: ${count}`);
	},(err)=>{
		return console.log('Unable to insert todo',err);
	});

	/*db.collection('Todos').find({
		_id: new ObjectID();
	}).toArray().then((docs)=>{
		console.log('Todos');
		console.log(JSON.stringify(docs,undefined,2));
	},(err)=>{
		return console.log('Unable to insert todo',err);
	});

	
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

	//client.close();
});