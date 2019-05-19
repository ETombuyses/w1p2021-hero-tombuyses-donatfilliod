class Leveling {
  
  constructor() {
    this.chapter = localStorage.getItem('chapter') ? JSON.parse(localStorage.getItem('chapter')) : undefined;
    this.level = localStorage.getItem('level') ? JSON.parse(localStorage.getItem('level')) : undefined;
  }

  updateChapter(chapter) {
    this.chapter = chapter;
    localStorage.setItem('chapter', this.chapter);
    this.level = undefined;
    localStorage.removeItem('level');
  }

  updateLevel(level) {
    this.level = level;
    localStorage.setItem('level', this.level);
  }
}

export default new Leveling();
