window.onload = function() {

  document.getElementById('exercises').addEventListener("click", mouseClickHandler);

  function mouseClickHandler() {
    let presentation = document.getElementById('presentation');
    let reflections = document.getElementById('reflections');
    let project = document.getElementById('project');

    if (presentation.style.display === "none") {
      presentation.style.display = "block";
      reflections.style.display = "block";
      project.style.display = "block";
    } else {
      presentation.style.display = "none";
      reflections.style.display = "none";
      project.style.display = "none";
    }
  }
}
