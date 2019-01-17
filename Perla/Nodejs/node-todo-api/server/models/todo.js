var mongoose=require('mongoose');

/* ya no será necesario utilizar collection para 
la creacion de una coleccion dentro de la base de datos*/
var Todo=mongoose.model('Todo',{
	text:{
		type: String,
		required: true,
		minlength:1,
		trim: true
	},
	completed:{
		type:Boolean,
		default:false
	},
	completedAt:{
		type: Number,
		default: null
	}
});

module.exports={Todo};