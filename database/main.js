import characters from "./characters.js";
import class_skills from "./skills.js";
const lordSkills = class_skills["lord"];
const greatlordSkills = class_skills["great lord"];
const tacticianSkills = class_skills["tactician"];
const grandmasterSkills = class_skills["grandmaster"];
const avatarMClasses = characters.avatarM.available_classes;
const charactersContainer = document.getElementById("characters-container");
const teamContainer = document.getElementById("team-container");
//Shows selectable characters
Object.values(characters).forEach(char => {
  const charDiv = document.createElement("div");
  charDiv.style.display = "inline-block";
  charDiv.style.margin = "10px";
  charDiv.style.textAlign = "center";
//Adds character images
  const img = document.createElement("img");
  img.src = 
  img.alt = char.name;
  img.width = 100;
  img.style.cursor = "pointer";
//Adds character name below image\
  const name = document.createElement("div");
  name.textContent = char.name;

  charDiv.appendChild(img);
  charDiv.appendChild(name);
  charactersContainer.appendChild(charDiv);
//Adds click event to add characters to team
  img.addEventListener("click", () => addToTeam(char));
});
//Function to add character to the team container
function addToTeam(char) {
  // Prevent duplicate additions
  if (document.getElementById(`team-${char.base_id}`)) return;

  const teamDiv = document.createElement("div");
  teamDiv.id = `team-${char.base_id}`;
  teamDiv.style.marginBottom = "15px";

  const name = document.createElement("div");
  name.textContent = char.name;

  // Class dropdown
  const classSelect = document.createElement("select");
  char.available_classes.forEach(cls => {
    const option = document.createElement("option");
    option.value = cls;
    option.textContent = cls;
    classSelect.appendChild(option);
  });

  // Skills dropdown (updates when class changes)
  const skillSelect = document.createElement("select");

  function updateSkills() {
    skillSelect.innerHTML = ""; // clear previous options
    const skills = class_skills[classSelect.value] || [];
    skills.forEach(skill => {
      const option = document.createElement("option");
      option.value = skill;
      option.textContent = skill;
      skillSelect.appendChild(option);
    });
  }

  classSelect.addEventListener("change", updateSkills);
  updateSkills(); // initialize skills for default class

  teamDiv.appendChild(name);
  teamDiv.appendChild(classSelect);
  teamDiv.appendChild(skillSelect);
  teamContainer.appendChild(teamDiv);
}
                                  
