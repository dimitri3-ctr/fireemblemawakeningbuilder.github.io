import characters from "./characters.js";
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
  img.src = "images/" + char.name.toLowerCase().replace(" ", "_") + ".png";
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
  // Prevent adding the same character twice
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
  teamDiv.appendChild(name);

  // Class dropdown
  const classSelect = document.createElement("select");
  classSelect.style.marginBottom = "10px";
  classSelect.style.width = "100%";
  char.available_classes.forEach(cls => {
    const option = document.createElement("option");
    option.value = cls;
    option.textContent = cls;
    classSelect.appendChild(option);
  });
  teamDiv.appendChild(classSelect);

  // 5 skill dropdowns
  for (let i = 0; i < 5; i++) {
  const skillSelect = document.createElement("select");
  skillSelect.style.display = "block";
  skillSelect.style.marginBottom = "5px";
  skillSelect.style.width = "100%";

  // Use only the skills from the unit
  char.available_skills.forEach(skill => {
    const option = document.createElement("option");
    option.value = skill;
    option.textContent = skill;
    skillSelect.appendChild(option);
  });

  teamDiv.appendChild(skillSelect);
}
  // Append the completed card to the team container
  teamContainer.appendChild(teamDiv);
}



                                  
