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
  teamDiv.style.marginBottom = "20px";
  teamDiv.style.border = "1px solid #ccc";
  teamDiv.style.padding = "10px";
  teamDiv.style.borderRadius = "8px";
  teamDiv.style.display = "inline-block";
  teamDiv.style.verticalAlign = "top";
  teamDiv.style.textAlign = "center";
  teamDiv.style.width = "200px";

  // Character name
  const name = document.createElement("div");
  name.textContent = char.name;
  name.style.fontWeight = "bold";
  name.style.marginBottom = "5px";

  // Class dropdown
  const classSelect = document.createElement("select");
  classSelect.style.marginBottom = "10px";
  char.available_classes.forEach(cls => {
    const option = document.createElement("option");
    option.value = cls;
    option.textContent = cls;
    classSelect.appendChild(option);
  });

  // Skill dropdowns (5 selects)
  const skillSelects = [];
  for (let i = 0; i < 5; i++) {
    const skillSelect = document.createElement("select");
    skillSelect.style.marginBottom = "5px";
    skillSelect.style.width = "100%";

    // Populate with all skills from class_skills
    Object.values(class_skills).forEach(skillsArray => {
      skillsArray.forEach(skill => {
        if (![...skillSelect.options].some(opt => opt.value === skill)) {
          const option = document.createElement("option");
          option.value = skill;
          option.textContent = skill;
          skillSelect.appendChild(option);
        }
      });
    });

    teamDiv.appendChild(skillSelect);
    skillSelects.push(skillSelect);
  }

  teamDiv.appendChild(name);
  teamDiv.appendChild(classSelect);
  teamContainer.appendChild(teamDiv);
}

                                  
