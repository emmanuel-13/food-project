const commandline = require('command-line-args');
const fs = require('fs');

const optionsDefinitions = [
    {name:'name',type:String},
    {name:'order',type:String},
    {name:'payment',type:Number},
	{name:'exit', type:Boolean}
];

const options = commandline(optionsDefinitions)

let getJson = fs.readFileSync('dv.json')
let data = JSON.parse(getJson)


const saveit = (data)=>{
	let ToString = JSON.stringify(data);
	fs.writeFileSync('dv.json', ToString);
}

if(options.name){
	data.name = options.name;

	console.log(`Hello ${options.name}, we are serving Cake, Pizza and HotDog`)
	saveit(data)

} else if(options.order){
	data.order = options.order;

	console.log(`Hello ${data.name} you ordered ${options.order}, please proceed to pay your $25`)
	saveit(data)

} else if(options.payment) {
	data.payment = options.payment;
	
	let newdata = options.payment - 25
	if(newdata > 0){
		console.log(`Hello ${data.name} your payment of $(${options.payment}) has been confired your change is ${newdata}, please type --exit to exit `);
		saveit(data);
	}else if (newdata < 0){
		console.log(`Hello ${data.name}, you transactions amount is too low try again`)
	}
	else{
		console.log(`Hello ${data.name} your payment of $(${options.payment}) has been confired, please type --exit to exit `);
		saveit(data);
	}
	
	

} else if(options.exit) {

	if(data.name === ''|data.order === ''|data.payment ===''){
		console.log('you dont have any item bought yet please buy an item')
		
	} else{
		console.log(data);
		console.log(` thank you for shopping with us ${data.name}`)

		data.name = '';
		data.order = '';
		data.payment = '';
	}

	saveit(data)
} else{

console.log('hello welcome please enter your name, (type  node app.js --name=yourname ?')
}