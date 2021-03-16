
let PersonModel = require('./model/person')


const mongoose = require('mongoose'); 

// Database Connection 
mongoose.connect('mongodb+srv://majdi:mokrozan7775@cluster0.xqxlx.mongodb.net/conorDatabase?retryWrites=true&w=majority' ,{ 
	useNewUrlParser: true, 
	useCreateIndex: true, 
	useUnifiedTopology: true
}); 

let arrayOfPeople = [ 
	{ name : "bilel ibn le a7ad" , age : 14450 , favoriteFood : [ "kabsa" , "just food man"]},
	{name :"rasoul", age :14078, favoriteFood : ["zaket express" , " 5obz"]},
	{name : "morad" , age : 2, favoriteFood : ['just likes to eat', "rouz"]}
]

PersonModel.create(arrayOfPeople , (err , data) =>{
	!err ? console.log(`this is the data${data}`): console.log(err)
})

PersonModel.find({name : "bilel ibn le a7ad"} , (err , data) => {
	!err ? console.log(`this is the one dawg${data}`) : console.log(err)
})

PersonModel.find({name :"bilel ibn le a7ad" } ,(err , data) =>{
	if(err) {
		console.log(err)
	}else {
		data.favoriteFood.push('humberger')
	    data.save( (err, updated) =>{
			!err ? console.log(updated) :
			console.log(err)
		})
	}
	console.log(data)
})

PersonModel.findOneAndUpdate({name : 'rasoul'} , { name : "bullshiter", age : 20} , (err , data) =>{
	!err ? console.log(data) : console.log(err)
})


PersonModel.findOneAndRemove({ name : "morad"}, (err , data) => {
	!err ? console.log(data) : console.log(err)
} )

PersonModel.find( { favoriteFood : {$all :["5obz"] }})
.sort({ age :'asc'})
.limit(3)
.select(favoriteFood)
.exec(( err , data) => {
	!err ? console.log(data) : console.log(err)
})
PersonModel.findOne( { favoriteFood : "walima"} , (err , ali) =>{
	!err ? console.log(`heres the miracle${ali}`) : console.log(err)
})
var id = '6050f2c2ec00ec1eb45d33ed'
PersonModel.findById(id ,(err , data)=>{
	!error ? console.log(`this is ${data}`) : console.log(err)
} )


let new_person = new PersonModel ({
	name : "9a9a3 ibn azzobair",
	age : 14000, 
	favoriteFood : ["walima" , "chakchoukah", "3osben"]
})


new_person.save( function(err , res ) {
	if (err) {
		console.log(err)

	}
	else {
		console.log(`this is the result ${res}`)
	}
}) 