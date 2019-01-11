//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
	if(err){
		console.log('Unabled to connect to mongodb server');
	}

	console.log('Connected to mongodb server');

	const db=client.db('TodoApp');

	db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID('5c3773e6f6b7b936d0393e2d')
	},{
		$set:{//editar una de las propiedades 
			text: 'There is nothing to do'
		}
	},{
		returnOriginal:false
	}).then((result)=>{
		console.log(result);
	});

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5c3776324939e20e181dbdd3')
	},{
		$set:{
			name: 'Paty'
		},
		$inc:{ //incrementar una de las propiedades
			age:1  //valor que se incrementará
		}
	},{
		returnOriginal:false
	}).then((result)=>{
		console.log(result);
	});

	

	//client.close();
});
