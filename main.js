var midBox = parseInt(box.style.width) / 2;
var mouse_offset = midBox;

function startDrag(event) {
	mouse_offset = (event.clientX - box.offsetLeft) / tray.offsetWidth * 100;
	console.log(mouse_offset);
	tray.addEventListener("mousemove", moveDrag, false);
}
function rushDrag(event) {
	mouse_offset = midBox;
	var set_perc = (event.clientX - tray.offsetLeft) / tray.offsetWidth * 100;
	set_perc -= mouse_offset;
	if (set_perc + parseInt(box.style.width) < 100)
		box.style.left = set_perc + '%';
	tray.addEventListener("mousemove", moveDrag, false);
}
function moveDrag(event) {
	var set_perc = (event.clientX - tray.offsetLeft) / tray.offsetWidth * 100;
	set_perc -= mouse_offset;
	if (set_perc + parseInt(box.style.width) <= 100 && set_perc >=0)
		box.style.left = set_perc + '%';
}
function stopDrag(event) {
	var set_perc = (event.clientX - tray.offsetLeft) / tray.offsetWidth * 100;
	set_perc -= mouse_offset;
	if (set_perc + parseInt(box.style.width) < 100)
		box.style.left = set_perc + '%';
	tray.removeEventListener("mousemove", moveDrag, false);
}
tray.addEventListener("mousedown", rushDrag, false);
box.addEventListener("mousedown", startDrag, false);
tray.addEventListener("mouseup", stopDrag, false);
