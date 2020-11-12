let coffeeMaker = {
	state: "Apagada", //Estado inicial por defecto
	coffee: false,	//Estado inicial por defecto
	water: false,	//Estado inicial por defecto
	grinder: function(grind){ // Molino y su respectiva función.
		setTimeout(()=>{
			console.log("...")
			grind(this.coffee)
		}, 3000)
	},
	boiler: function(boil){ // Tanque de agua y caldera.
		setTimeout(()=>{
			console.log("...")
			boil(this.water)
		}, 3000)
	},
	brewer: function(brew){ //Cabeza de grupo, donde se vierten los materiales y se sirve el café.
		setTimeout(()=>{
			console.log("...")
			brew(this.coffee, this.water)
		}, 3000)
	}
}

let cup = {
	state: "Vacía"
}

function onOff(state){
	if (state === "Apagada"){
		console.log("La máquina está: " + state + ", se encenderá pronto")
		setTimeout(()=>{
			console.log("...")
			on(onOff)
		}, 3000)
	}else if(state === "Encendida"){
		console.log("La máquina está: " + state)
	}
}

// ----------------------------------
function on(onOff){
	let state = "Encendida"
	onOff(state)
	coffeeMaker.grinder(grind)
	coffeeMaker.boiler(boil)
	coffeeMaker.brewer(brew)
}
// ----------------------------------

function grind(coffee){
	if (coffee === false){
		let i = 0
		while(i < 1){
			let gramos = prompt("Ingresa la cantidad de gramos de café a moler")
			if (Number(gramos)){
				console.log("Se han molido: " + gramos + "g de café")
				let coffee = true
				i++
			}else{
				console.log("No se ha ingresado el café")
			}
		}
	}else if(coffee === true){
		console.log("Se ha molido el café")
	}
}

function boil(water){
	if (water === false){
		let i = 0
		while(i < 1){
			let miliL = prompt("Ingresa la cantidad de agua a hervir")  
			if (Number(miliL)){
				console.log("Se han hervido: " + miliL + "mL de agua")
				let water = true
				i++
			}else{
				console.log("No se ha ingresado el agua")
			}
		}
	}else if(water === true){
		console.log("Se ha hervido el agua")
	}
}

function brew(coffee, water){
	let taza = cup.state
	let i = 0
	while (i < 2){
		if (taza === "Vacía"){
			console.log("¡Su café está listo para servir!")
			taza = "Llena"
			i++
		}else if(taza === "Llena"){
			console.log("¡Disfrute su bebida!")
			i++
		}
	}
}

// Puesta en marcha del funcionamiento de la máquina de café.
onOff(coffeeMaker.state)
