const spellButton = document.querySelector('#js-new-spell');
const spellTextDiv = document.querySelector('#js-spell');
const dialogueBox = document.querySelector('#js-dialogue p');

spellButton.addEventListener('click', newSpell);


async function newSpell(){
    console.log("function here");
    try{
        const response = await fetch('https://potterapi-fedeperin.vercel.app/en/spells/random');
        const spell = await response.json();
        console.log("API Response:", spell);

        const spellname = spell.spell;
        spellTextDiv.textContent = "You cast " + spellname + "!";
        const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 90%, 50%)`;
        spellTextDiv.style.color = randomColor;

        if(!response.ok){
            throw Error(response.statusText);
        }

    
        const outcomes = [
            "Your spell was devastating! Maybe cast another to make sure business is done tho.",
            "Your spell grazed the enemy! You can do better than that!",
            "Your spell missed! Go back to academy and train some more!",
            "Your enemy absorbed the spell! Get your magic up plebian!!!",
            "Your spell caused a magical backfire! Watch it! You know how many good wizards have had their limbs blown off because of stupid mistakes like that?",
            "Your spell was absolutely pitiful. You're an embarrassment to the wizarding world. Goofy muggle looking ahh. Try again?",
            "Your enemy is now running in the opposite direction! Don't let them escape unscathed!",
            "Your spell was potent. The enemy is now seriously regretting their decisions.",
            "Your spell has completely annihilated the enemy. Good stuff!",
            "Your spell was intercepted by the enemy! Cast another!",
            "Your spell missed and has done extensive damage to the local area. Better get your lawyers ready. "
        ];

        const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];
        dialogueBox.textContent = randomOutcome;

    } catch (err){
        console.log(err);
        alert('Your wand exploded, maybe reload the page and try again');
    }
} 

