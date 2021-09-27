
window.onload = function(){

document.getElementById('exercises').addEventListener("click", mouseClickHandler);

function mouseClickHandler() {
  document.getElementById('presentation').hidden = true;
  document.getElementById('reflections').hidden = true;
  document.getElementById('project').hidden = true;
}

}
