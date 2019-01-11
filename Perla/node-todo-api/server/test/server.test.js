const expect=require('expect');
const request=require('supertest');
const {ObjectID}=require('mongodb');

const {app}=require('./../server');
var {Todo}=require('./../models/todo');
var {Users}=require('./../models/user');

const todos=[{
	_id: new ObjectID(),
	text:'First test todo'
},{
	_id: new ObjectID(),
	text:'Second test todo',
	complete:true,
	completeAt:333
}]

beforeEach((done)=>{
	Todo.remove({}).then(()=>{
		return Todo.insertMany(todos);
	}).then(()=>done());
});

describe('POST /todos',()=>{
	it('should create a new todo',(done)=>{
		var text='Test todo text';

		request(app)
		.post('/todos')
		.send({text})
		.expect(200)
		.expect((res)=>{
			expect(res.body.text).toBe(text);
		})
		.end((err,res)=>{
			if(err){
				return done(err);
			}

			Todo.find({text}).then((todos)=>{
				expect(todos.length).toBe(1);
				expect(todos[0].text).toBe(text);
				done();
			}).catch((err)=>done(err));
		});
	});

	it('Should not create todo with invalid body data',(done)=>{
		var text='Test todo text';

		request(app)
		.post('/todos')
		.send({})
		.expect(400)
		/*.expect((res)=>{
			expect(res.body.text).toBe(text);
		})*/
		.end((err,res)=>{
			if(err){
				return done(err);
			}

			Todo.find().then((todos)=>{
				expect(todos.length).toBe(2);
				done();
			}).catch((err)=>done(err));

		});
	});
});

describe('GET /todos',()=>{
	it('Should get all todos', (done)=>{
		request(app)
		.get('/todos')
		.expect(200)
		.expect((res)=>{
			expect(res.body.todos.length).toBe(2);
		})
		.end(done);
	});
});

describe('GET /todos/:id',()=>{
	it('Should return todo doc',(done)=>{
		request(app)
		.get(`/todos/${todos[0]._id.toHexString()}`)
		.expect(200)
		.expect((res)=>{
			expect(res.body.todos.text).toBe(todos[0].text);
		})
		.end(done);
	});

	it('Should return 404 if todo not found',(done)=>{
		var hexId=new ObjectID().toHexString();

		request(app)
		.get(`/todos/${hexId}`)
		.expect(404)
		.end(done);
	});

	it('Should return 404 for non-object ids',(done)=>{
		request(app)
		.get(`/todos/123abc`)
		.expect(404)
		.end(done);
	});
});

describe('DELETE /todos/:id',()=>{
	it('Should remove a todo', (done)=>{
		var hexId=new todos[1]._id.toHexString();

		request(app)
		.get(`/todos/${hexId}`)
		.expect(200)
		.expect((res)=>{
			expect(res.body.todo._id).toBe(hexId);
		})
		.end((err,res)=>{
			if(err){
				return done(err);
			}

			Todo.findById(hexId).then((todo)=>{
				expect(todos).toNotExist();				
				done();
			}).catch((err)=>done(err));
		});
	});

	it('Should return 404 if todo not found', (done)=>{
		var hexId=new ObjectID().toHexString();

		request(app)
		.delete(`/todos/${hexId}`)
		.expect(404)
		.end(done);
	});

	it('Should return 404 if object id is invalid', (done)=>{
		request(app)
		.delete(`/todos/123abc`)
		.expect(404)
		.end(done);
	});
});

describe('PATCH /todos/:id',()=>{
	it('Should update the todo', (done)=>{
		var hexId=new todos[1]._id.toHexString();
		var text='This should be the new text';

		request(app)
		.patch(`/todos/${hexId}`)
		.send({
			completed: true,
			text
		})
		.expect(200)
		.expect((res)=>{
			expect(res.body.todo.text).toBe(hexId);
			expect(res.body.todo.completed).toBe(true);
			expect(res.body.todo.completeAt).toBe('number');
		})
		.end(done);
	});

	it('Should clear completeAt when todo is not completed', (done)=>{
		var hexId=new todos[1]._id.toHexString();
		var text='This should be the new text!!';

		request(app)
		.patch(`/todos/${hexId}`)
		.send({
			completed: false,
			text
		})
		.expect(200)
		.expect((res)=>{
			expect(res.body.todo.text).toBe(hexId);
			expect(res.body.todo.completed).toBe(false);
			expect(res.body.todo.completeAt).toNotExist();
		})
		.end(done);
	});
});