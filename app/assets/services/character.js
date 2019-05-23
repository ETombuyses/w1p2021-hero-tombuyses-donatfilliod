class Character {
  constructor() {
    //if we have already picked a characer, takes the stored data in localStorage. Otherwhise character is undefined
    this.character = localStorage.getItem('character') ? JSON.parse(localStorage.getItem('character')) : undefined;
  }

  //save the character
  save(chosedCharacter) {
    this.character = chosedCharacter;
    localStorage.setItem('character', JSON.stringify(this.character));
  }

  // update the character skills after choosing an action
  updateSkills(action) {
    if (action.social) {
      this.character.skills.find(skill => skill.name === 'social').value += action.social;
    }

    if (action.ruse) {
      this.character.skills.find(skill => skill.name === 'ruse').value += action.ruse;
    }

    if (action.force) {
      this.character.skills.find(skill => skill.name === 'force').value += action.force;
    }

    if (action.piété) {
      this.character.skills.find(skill => skill.name === 'piété').value += action.piété;
    }

    //update the character in the local storage
    localStorage.setItem('character', JSON.stringify(this.character));
  }
}

export default new Character();
