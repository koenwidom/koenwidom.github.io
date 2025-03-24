const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

let insertx = ["Snow", "Bertholt", "Jimmy"]

let inserty = ["America", "Mars", "France"]

let insertz = ["lived happilly ever after", "transformed into a chicken and ran away", "choked on a plum"]

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;

  if(customName.value !== '') {
    const name = customName.value;

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);

  }

  story.textContent = storyText;
  story.style.visibility = 'visible';
}

