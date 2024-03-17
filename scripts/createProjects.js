async function fetchData() {
  let response = await fetch("projekts.json");
  const data = await response.json();
  return data;
}

function showProjects(projects) {
  let projectsContainer = document.getElementById("projectsContainer");

  let HTML = "";
  projects.forEach((project) => {
    let imagesHTML = "";
    project.images.forEach((image) => {
      imagesHTML += `<div class="carousel-item"><img src="${image}" alt="image of the application"></div>`;
    });

    HTML +=
      `
       <div class="project">

       <div class="carousel">
         <div class="carousel-content">
         ` +
      imagesHTML +
      `
         </div>
         <button class="carouselbutton prev" onclick="prevSlide(${project.id})"><img src="images/right-arrow-button-svgrepo-com.svg" alt="right-arrow"></button>
         <button class="carouselbutton next" onclick="nextSlide(${project.id})"><img src="images/right-arrow-button-svgrepo-com.svg" alt="right-arrow"></button>
       </div>
       <div>
         <h2>${project.title}</h2>
         <p>
           ${project.description}  
         </p>
       </div>
       <div>
         <p>technologies</p>
         <p class="skillset">${project.skills}</p>
       </div>
       <div class="buttonContainer">
       <button class="btn" onclick="window.open('${project.demoLink}','_blank');"> Demo </button>
       <button class="btn" onclick="window.open('${project.githubLink}','_blank');"> Github </button>
       </div>

       </div>
       `;
  });
  projectsContainer.innerHTML = HTML;
}
