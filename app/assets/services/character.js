class Character {
  constructor() {
    //if we have already picked a characer, takes the stored data in localStorage. Otherwhise character is undefined
    this.character = localStorage.getItem('character') ? JSON.parse(localStorage.getItem('character')) : undefined;
    this.skills = localStorage.getItem('character') ? this.character.skills : undefined;
    this.force = localStorage.getItem('character') ? this.skills.force : undefined;
    this.social = localStorage.getItem('character') ? this.skills.social : undefined;
    this.ruse = localStorage.getItem('character') ? this.skills.ruse : undefined;
    this.benediction = localStorage.getItem('character') ? this.skills.benediction : undefined;
  }

  //save the character and his skills in localstorage
  save(chosedCharacter) {
    this.character = chosedCharacter;
    this.skills = this.character.skills;
    this.force = this.skills.force;
    this.social = this.skills.social;
    this.ruse = this.skills.ruse;
    this.benediction = this.skills.benediction;
    localStorage.setItem('character', JSON.stringify(this.character));
  }

  // update the character skills after choosing an action
  updateSkills(action) {
    console.log(JSON.parse(localStorage.getItem('character')));
    if (action.social) {
      this.social += action.social;
      this.character.skills.social = this.social;
    }

    if (action.ruse) {
      this.ruse += action.ruse;
      this.character.skills.ruse = this.ruse;
    }

    if (action.force) {
      this.force += action.force;
      this.character.skills.force = this.force;
    }

    if (action.benediction) {
      this.benediction += action.benediction;
      this.character.skills.benediction = this.benediction;
    }
    //update the character in the local storage
    console.log(JSON.parse(localStorage.getItem('character')));
    localStorage.setItem('character', JSON.stringify(this.character));
  }
}

export default new Character();
