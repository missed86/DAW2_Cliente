// function readTextFile(file, callback) {
// 	var rawFile = new XMLHttpRequest();
// 	rawFile.overrideMimeType("application/json");
// 	rawFile.open("GET", file, true);
// 	rawFile.onreadystatechange = function () {
// 		if (rawFile.readyState === 4 && rawFile.status == "200") {
// 			callback(JSON.parse(rawFile.responseText));
// 		}
// 	};
// 	rawFile.send(null);
// }
// var objetoReordenado = {}
// readTextFile('data/lemario-20101017-defs.json', (data) => {
// 	// console.log(data)
	
// 	for (key in data) {
// 		if (objetoReordenado[key.length.toString()] == undefined) {
// 			objetoReordenado[key.length.toString()] = {}
// 		}
// 		objetoReordenado[key.length.toString()][key] = data[key];
// 	}
// 	console.log(objetoReordenado)
//     document.write(JSON.stringify(objetoReordenado));
// })