diagrams = {}
raw_svg = {}

elements = {}

$(function() {
	renderSVG("high-level", setup)
})


function setup(svg) {
	elements.all_boxes = svg.select('rect')

	elements.all_boxes.each(function(i) {
		this.fill('lime')
		this.attr('pointer-events', null)
		this.attr('cursor', 'pointer')
		this.click(function() {
			// renderSVG("simple.svg", function() {})
			let id = this.attr("id")
			if (id == undefined)
				promptIDForBox(this)
			else
				console.log("ID is " + id)
		})
	})
}

function renderSVG(svgname, callback) {
	svgContainer = document.getElementById("svg-container")
	svgContainer.innerHTML = "<div id='drawing'></div>"

	$.ajax({
		method: "GET",
		url:  `/svg/${svgname}`,
		dataType: "html",
		success: function(data) {
			raw_svg[svgname] = data
			diagrams[svgname] = SVG('drawing')
			diagrams[svgname].svg(data)
			callback(diagrams[svgname])
		}
	})
}

function promptIDForBox(box) {
	let id = window.prompt("ID for the box", "")
	box.attr("id", id)
}

function setIDForBox(box, id) {
	this.attr('id', id)
}