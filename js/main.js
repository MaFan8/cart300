window.onload = function() {

let exercises = document.getElementById('exercises');
let presentation = document.getElementById('presentation');
let reflections = document.getElementById('reflections');
let project = document.getElementById('project');


document.getElementById('exercises').addEventListener('click', function() {
  presentation.style.visibility = "hidden";
  reflections.style.visibility = "hidden";
  project.style.visibility = "hidden";
  //remove hover in css
  exercises.style.pointerEvents = "none";
  //unhide lists
  document.getElementById('ex_links').style.display = "block";
  //show dots
  // document.getElementById('dots').style.display = "block";
});

document.getElementById('presentation').addEventListener('click', function() {
  exercises.style.visibility = "hidden";
  reflections.style.visibility = "hidden";
  project.style.visibility = "hidden";
  //remove hover in css
  presentation.style.pointerEvents = "none";
  //unhide lists
  document.getElementById('slides_link').style.display = "block";
  document.getElementById('presentation_links').style.display = "block";
});

document.getElementById('reflections').addEventListener('click', function() {
  presentation.style.visibility = "hidden";
  exercises.style.visibility = "hidden";
  project.style.visibility = "hidden";
  //remove hover in css
  reflections.style.pointerEvents = "none";
  //unhide lists
  document.getElementById('ref_links1').style.display = "block";
  document.getElementById('ref_links2').style.display = "block";
});

document.getElementById('project').addEventListener('click', function() {
  exercises.style.visibility = "hidden";
  reflections.style.visibility = "hidden";
  presentation.style.visibility = "hidden";
  //remove hover in css
  project.style.pointerEvents = "none";
  //unhide lists
  document.getElementById('proposal_link').style.display = "block";
  document.getElementById('middle_links').style.display = "block";
  document.getElementById('final_link').style.display = "block";
});


}
