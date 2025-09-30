import characters from "./characters.js";
import class_skills from "./skills.js";
const lordSkills = class_skills["lord"];
const greatlordSkills = class_skills["great lord"];
const tacticianSkills = class_skills["tactician"];
const grandmasterSkills = class_skills["grandmaster"];
const avatarMClasses = characters.avatarM.available_classes;
const outputDiv = document.getElementById("output");
outputDiv.textContent = characters.chrom.name;
  
