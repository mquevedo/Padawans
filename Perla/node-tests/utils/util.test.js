const expect=require('expect');
const utils=require('./util');

describe('Utils',()=>{
	it('should add two numbers',()=>{
		var res=utils.add(33,11);

		expect(res).toBe(44).toBeA('number');
		//if(res!==44){
		//	throw new Error(`Expected 44, but got ${res}`);
		//}
	});

	it('should async add two numbers',(done)=>{
		utils.asyncAdd(4,3,(sum)=>{
			expect(sum).toBe(7).toBeA('number');
			done();
		});
	});

	it('should async square a number',(done)=>{
		utils.asyncSquare(2,(tot)=>{
			expect(tot).toBe(4).toBeA('number');
			done();
		});
	});

	it('should add one number',()=>{
		var res=utils.square(2);

		expect(res).toBe(4).toBeA('number');
		//if(res!==4){
		//	throw new Error(`Expected 4, but got ${res}`);
		//}
	});
});

it('should set FirstName and LastName',()=>{
	var user={location:'El Salvador',age:19};
	var res=utils.setName(user,'Perla Rivas');

	expect(res).toInclude({
		firstName: 'Perla',
		lastName: 'Rivas'
	});
});
/*it('should expect some values',()=>{
	//expect(12).toNotBe(12);
	//expect({name: 'Perla'}).toBe({name: 'Perla'});
	//expect([2,3,4]).toExclude(5);
	expect({
		name:'Andrew',
		age:25,
		location:'Philadelphia'
	}).toExclude({
		age:23
	})
});*/