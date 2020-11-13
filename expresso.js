let coffeeMakerNR = {
	state: false, //Estado inicial por defecto
	coffee: false,	//Estado inicial por defecto
	water: false,	//Estado inicial por defecto
	grinder: function(grind){ // Molino y su respectiva función.
		setTimeout(()=>{
			console.log("...")
			grind(this.coffee, this.state) // Callback de la función "moler"
		}, 3000)
	},
	boiler: function(boil){ // Tanque de agua y caldera.
		setTimeout(()=>{
			console.log("...")
			boil(this.water, this.state) // Callback de la función "hervir"
		}, 3000)
	},
	brewer: function(brew){ //Cabeza de grupo, donde se vierten los materiales y se sirve el café.
		setTimeout(()=>{
			console.log("...")
			brew(this.coffee, this.water) // Callback de la función "brew"
		}, 4000)
	}
}

let coffeeMakerR = Object.create(coffeeMakerNR) // Objeto que define a la máquina, cuando ya está casi lista para servir el café.

function onOff(state){
	if (state === false){
		console.log("La máquina está: Apagada, se encenderá pronto") // Se muestra el estado por defecto.
		setTimeout(()=>{
			console.log("...") ; coffeeMakerR.state = true
			on(onOff) // Se llama la función para ejecutarla en caso de que esté Apagada.
		}, 3000)
	}else if(state === true){
		console.log("La máquina está: Encendida")
		coffeeMakerR.grinder(grind) // Se pone en acción el molino.
		coffeeMakerR.boiler(boil) // Se pone en acción el tanque de agua y la caldera.
		coffeeMakerR.brewer(brew) // Se pone en acción el "brewer", luego de los anteriores procesos.
	}
}

function on(onOff){
	let state = true // Se cambia el estado de la máquina a encendido.
	onOff(state)
}

function grind(coffee, state){
	if (coffee === false && state === true){
		let i = 0
		while(i < 1){
			let gramos = prompt("Ingresa la cantidad de gramos de café a moler") // Recarga de granos de café.
			if (Number(gramos)){
				console.log("Se han molido: " + gramos + "g de café")
				coffeeMakerR.coffee = true // Se almacena en el nuevo objeto, que el café molido ya está listo.
				i++
			}else{
				console.log("No se ha ingresado el café")
			}
		}
	}else if(coffee === true){
		console.log("Se ha molido el café")
	}
}

function boil(water, state){
	if (water === false && state === true){
		let i = 0
		while(i < 1){
			let miliL = prompt("Ingresa la cantidad de agua a hervir") // Recarga de agua en el tanque.
			if (Number(miliL)){
				console.log("Se han hervido: " + miliL + "mL de agua")
				coffeeMakerR.water = true // Se almacena en el nuevo objeto, que el agua hervida ya está lista.
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
	let taza = "Vacía" ; let i = 0
	while (i < 2){
		if (taza === "Vacía" && coffee === true && water === true){ // Solo se ejecuta, siempre y cuando los demás procesos se hayan realizado.
			console.log("¡Su café está listo para servir!")
			taza = "Llena" // Se llena la taza.
			i++
		}else if(taza === "Llena"){
			console.log("Se ha servido. ¡Disfrute su bebida!")
			i++
		}else{
			console.log("No se puede servir el café debido a que no están listos los ingredientes...")
		}
	}
}

onOff(coffeeMakerNR.state) // Puesta en marcha, del funcionamiento de la máquina.
