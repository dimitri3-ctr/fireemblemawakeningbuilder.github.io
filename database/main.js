import characterData from './characters.js';
import skillData from './skills.js';
function populateTeam( container ) {
  const div = document.createElement( "div" );
  div.classList.add( "head_team" );
  const section = document.createElement( "section" );
  section.classList.add( "team" );
  const h2 = document.createElement( "h2" );
  h2.innerHTML = "Your Units";
  h2.classList.add( "team_heading" );
  const ul = document.createElement( "ul" );
  ul.classList.add( "team_slots" );
  container.append( div );
  div.append( section );
  section.append( h2, ul );
  const template = document.querySelector( "#team-slot" );
  for ( let i = 0 ; i < 55 ; i++ ) {
      const clone = template.content.cloneNode( true );
      clone.querySelectorAll( ".slot_remove-button, .slot_info" ).forEach( div => {
          div.addEventListener( "click", clearTeamSlot );
          div.addEventListener( "mouseenter", ( event ) => {
              event.target.parentNode.classList.add( "slot_hover" );
          });
          div.addEventListener( "mouseleave", ( event ) => {
              event.target.parentNode.classList.remove( "slot_hover" );
          });
      });
    }
  
    var buttonContainer = document.createElement( "div" );
    buttonContainer.classList.add( "team_button" );
    section.append( buttonContainer );
}
  
      
      
