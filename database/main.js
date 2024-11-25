import characters from "./characters.js";
import skills from "./classes.js";
window.onload = () => {
  const availableCharactersDiv = document.getElementById('availableCharacters');
  const selectedCharactersDiv = document.getElementById('selectedCharacters');
  Object.keys(characters).forEach(characterKey => {
    const character = characters[characterKey];
    const characterButton = document.createElement('button');
    characterButton.className = 'character-button';
    characterButton.textContent = character.name;
    characterButton.addEventListener('click', () => {
      addCharacterToSelected(characterKey);
    });
    availableCharacterDiv.appendChild(characterButton);
  });
  function addCharacterToSelected(characterKey) {
    const character = characters[characterKey];
    const selectedCharacterDiv = document.createElement('div');
    selectedCharacterDiv.className = 'selected-character';
    const characterName = document.createElement('h3');
    characterName.textContent = character.name;
    selectedCharacterDiv.appendChild(characterName);
    const classLabel = document.createElement('label');
    classLabel.textContent = 'Select Class: ';
    const classDropdown = document.createElement('select');
    character.available_classes.forEach(cls => {
      const option = document.createElement('option');
      option.value = cls;
      option.textContent = cls;
      classDropdown.appendChild(option);
    });
    classDropdown.addEventListener('change', () => {
      updateSkillsDropdown(classDropdown.value, skillsDropdown);
    });
    selectedCharacterDiv.appendChild(classLabel);
    selectedCharacterDiv.appendChild(classDropdown);
    const skillsLabel = document.createElement('label');
    skillsLabel.textContent = ' Select Skill: ';
    const skillsDropdown = document.createElement('select');
    skillsDropdown.innerHTML = '<option value="" disabled selected>Choose a skill</option>';
    selectedCharacterDiv.appendChild(skillsLabel);
    selectedCharacterDiv.appendChild(skillsDropdown);
    selectedCharactersDiv.appendChild(selectedCharacterDiv);
  }
  function updateSkillsDropdown(selectedClass, skillsDropdown) {
    skillsDropdown.innerHTML = '<option value="" disabled selected>Choose a skill</option>';
    if (skills[selectedClass]) {
      skills[selectedClass].forEach(skill => {
        const option = document.createElement('option');
        option.value = skill;
        option.textContent = skill;
        skillsDropdown.appendChild(option);
      });
    }
  }
};
  

