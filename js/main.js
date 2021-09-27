window.onload = function() {
  //CLICK event for Exercises
  document.getElementById('exercises').addEventListener("click", mouseClickHandler);

  function mouseClickHandler() {
    let presentation = document.getElementById('presentation');
    let reflections = document.getElementById('reflections');
    let project = document.getElementById('project');

    if (presentation.style.visibility === "hidden") {
      presentation.style.visibility = "visible";
      reflections.style.visibility = "visible";
      project.style.visibility = "visible";
    } else {
      presentation.style.visibility = "hidden";
      reflections.style.visibility = "hidden";
      project.style.visibility = "hidden";
    }
    return false;
  }

  //CLICK event for Presenation
  document.getElementById('presentation').addEventListener("click", mouseClickHandler);

  function mouseClickHandler() {
    let exercises = document.getElementById('exercises');
    let reflections = document.getElementById('reflections');
    let project = document.getElementById('project');

    if (exercises.style.visibility === "hidden") {
      exercises.style.visibility = "visible";
      reflections.style.visibility = "visible";
      project.style.visibility = "visible";
    } else {
      exercises.style.visibility = "hidden";
      reflections.style.visibility = "hidden";
      project.style.visibility = "hidden";
    }
  }


  //CLICK event for Reflections
  document.getElementById('reflections').addEventListener("click", mouseClickHandler);

  function mouseClickHandler() {
    let exercises = document.getElementById('exercises');
    let presentation = document.getElementById('presentation');
    let project = document.getElementById('project');

    if (exercises.style.visibility === "hidden") {
      exercises.style.visibility = "visible";
      presentation.style.visibility = "visible";
      project.style.visibility = "visible";
    } else {
      exercises.style.visibility = "hidden";
      presentation.style.visibility = "hidden";
      project.style.visibility = "hidden";
    }
  }


  //CLICK event for Project
  document.getElementById('project').addEventListener("click", mouseClickHandler);

  function mouseClickHandler() {
    let exercises = document.getElementById('exercises');
    let presentation = document.getElementById('presentation');
    let project = document.getElementById('project');

    if (exercises.style.visibility === "hidden") {
      exercises.style.visibility = "visible";
      presentation.style.visibility = "visible";
      reflections.style.visibility = "visible";
    } else {
      exercises.style.visibility = "hidden";
      presentation.style.visibility = "hidden";
      reflections.style.visibility = "hidden";
    }
  }

}
