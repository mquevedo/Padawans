//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
	if(err){
		console.log('Unabled to connect to mongodb server');
	}

	console.log('Connected to mongodb server');

	const db=client.db('TodoApp');

	db.collection('Users').deleteMany({name:'Perla'}).then((result)=>{
		console.log(result);
	});

	db.collection('Users').findOneAndDelete({name: 'Perla'}).then((result)=>{
		console.log(result);
	});

	/*db.collection('Todos').deleteMany({text:'eat lunch'}).then((result)=>{
		console.log(result);
	});

	db.collection('Todos').deleteOne({text:'eat lunch'}).then((result)=>{
		console.log(result);
	});*/

	db.collection('Todos').findOneAndDelete({completed: true}).then((result)=>{
		console.log(result);
	});

	//client.close();
});
