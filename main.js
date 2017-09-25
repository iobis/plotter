import L from "leaflet"
let CSV = require("csv-string")
//let csv = require("csvtojson")

let map = L.map("map").setView([20, 0], 2)
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png", {}).addTo(map)

$("#csv").text(data)

let parse = function() {
	let separator = $("#separator").val()
	console.log(separator)
	let input = $("#csv").text()

	//let arr = CSV.parse(input, separator)
	//console.log(arr)

	window.csvtojson({
		delimiter: "\t"
	})
		.fromString(input)
		.on("csv", (row) => {
			console.log(row)
		})
		.on("done", () => {
		})

}

window.plot = function() {
	console.log("plot")
	parse()
}
