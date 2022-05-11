function determineWhoCursedTheMost(obj) {
  let meCurses = 0;
  let spouseCurses = 0;
  
  for (let roundKey in obj) {
    let { me, spouse } = obj[roundKey];
    meCurses += me;
    spouseCurses += spouse;
  }
  
  if (meCurses > spouseCurses) return "ME!"
  if (meCurses< spouseCurses) return "SPOUSE!"
  return "DRAW!";
}