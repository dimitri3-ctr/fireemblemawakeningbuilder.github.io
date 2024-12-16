import characterData from './characters.js';
import skillData from './skills.js';
document.addEventListener('DOMContentLoaded', () => {

    const characters = [
        { name: 'Chrom', class: 'Lord', stats: { HP: 20, Strength: 7, Magic: 1 } },
        { name: 'Lucina', class: 'Lord', stats: { HP: 18, Strength: 6, Magic: 2 } }
    ];
    const availableSkills = ['Aether', 'Luna', 'Sol', 'Ignis', 'Astra'];
    const availableClasses = ['Lord', 'Paladin', 'Sniper', 'Sorcerer', 'Hero'];

    // Populate character options
    const characterOptions = document.querySelectorAll('.character-option');
    characterOptions.forEach(option => {
        option.addEventListener('click', () => {
            const charName = option.dataset.name;
            const selectedChar = characters.find(char => char.name === charName);
            if (selectedChar) {
                addToTeam(selectedChar);
            }
        });
    });

    // Add character to the team
    function addToTeam(character) {
        const teamList = document.getElementById('team-list');

        // Check if character is already in the team
        if (teamList.querySelector(`[data-name="${character.name}"]`)) {
            alert(`${character.name} is already in your team!`);
            return;
        }

        // Create a new team member element
        const member = document.createElement('div');
        member.dataset.name = character.name;
        member.innerHTML = `<strong>${character.name}</strong> - ${character.class}`;

        // Create dropdown for class selection
        const classDropdown = document.createElement('select');
        classDropdown.className = 'class-selection';
        availableClasses.forEach(cls => {
            const option = document.createElement('option');
            option.value = cls;
            option.textContent = cls;
            if (cls === character.class) option.selected = true;
            classDropdown.appendChild(option);
        });

        member.appendChild(classDropdown);
      
        // Create skill selection dropdowns (up to 5)

        for (let i = 0; i < 5; i++) {
            const skillDropdown = document.createElement('select');
            skillDropdown.className = 'skill-selection';
            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.textContent = 'Select Skill';
            defaultOption.selected = true;
            skillDropdown.appendChild(defaultOption);

            availableSkills.forEach(skill => {
                const option = document.createElement('option');
                option.value = skill;
                option.textContent = skill;
                skillDropdown.appendChild(option);
            });
            member.appendChild(skillDropdown);
        }

        teamList.appendChild(member);

        // Update team stats display
        updateTeamStats();
    }

    // Update the team stats display table
    function updateTeamStats() {
        const teamList = document.getElementById('team-list').children;
        const statsTableBody = document.querySelector('#stats-table tbody');
        statsTableBody.innerHTML = ''; // Clear previous stats

        Array.from(teamList).forEach(member => {
            const character = characters.find(char => char.name === member.dataset.name);
            if (character) {
                const classSelected = member.querySelector('.class-selection').value;
                const selectedSkills = Array.from(member.querySelectorAll('.skill-selection'))
                    .map(dropdown => dropdown.value)
                    .filter(skill => skill !== '');

                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${character.name}</td>
                    <td>${classSelected}</td>
                    <td>${selectedSkills.join(', ')}</td>
                `;
                statsTableBody.appendChild(row);
            }
        });
    }
});



