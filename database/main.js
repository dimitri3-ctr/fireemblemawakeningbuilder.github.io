import characters from './characters.js';
import skills from './skills.js';

window.onload = () => {
    const availableCharactersDiv = document.getElementById('availableCharacters');
    const selectedCharactersDiv = document.getElementById('selectedCharacters');

    // Populate available characters
    Object.keys(characters).forEach(characterKey => {
        const character = characters[characterKey];

        const characterButton = document.createElement('button');
        characterButton.className = 'character-button';
        characterButton.textContent = character.name;

        // Add character to selected list on click
        characterButton.addEventListener('click', () => {
            addCharacterToSelected(characterKey);
        });

        availableCharactersDiv.appendChild(characterButton);
    });

    // Add character to the "Selected Characters" section
    function addCharacterToSelected(characterKey) {
        const character = characters[characterKey];

        const selectedCharacterDiv = document.createElement('div');
        selectedCharacterDiv.className = 'selected-character';

        const characterName = document.createElement('h3');
        characterName.textContent = character.name;
        selectedCharacterDiv.appendChild(characterName);

        const classDropdown = document.createElement('select');
        character.available_classes.forEach(cls => {
            const option = document.createElement('option');
            option.value = cls;
            option.textContent = cls;
            classDropdown.appendChild(option);
        });

        const skillsDropdown = document.createElement('select');
        classDropdown.addEventListener('change', () => {
            updateSkillsDropdown(classDropdown.value, skillsDropdown);
        });

        selectedCharacterDiv.appendChild(classDropdown);
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
