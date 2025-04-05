document.getElementById("quiz-btn").addEventListener("click", function handleClick() {
    let score = 0;
    const credits = document.querySelector(".credits-container");
    const results = document.querySelector(".result-container");
    const resultsText = document.getElementById("results-text")

    for (let i=1; i<=8; i++){
        const selected = document.querySelector(`input[name="answer${i}"]:checked`); 
        
        //ensures all questions answered
        if (!selected) {
            alert(`Please answer question ${i} before submitting.`);
            return;
        }
        
        //if yes is right answer (for Stoic)
        if (["answer1", "answer2", "answer5", "answer6"].includes(selected.name)){
            if (selected.value === "yes"){
                score += 1;
            } else if (selected.value === "no"){
                score -= 1;
            }
        }
        //if no is right answer (for Stoic)
        else{
            if (selected.value === "yes"){
                score -= 1;
            } else if (selected.value === "no"){
                score += 1;
            }
        }
    }

    if (score >= 3){
        resultsText.innerHTML = `Your Stoicism score is: ${score+8}/16.<br>You embody Stoic principles.`;
    }
    else if (score <= -3){
        resultsText.innerHTML = `Your Stoicism score is: ${score+8}/16.<br>You're not very Stoic… yet. Time to reflect and strengthen your mindset.`;
    }
    else if (score < 3 && score > -3){
        resultsText.innerHTML = `Your Stoicism score is: ${score+8}/16.<br>You're on your way to Stoicism. Keep practicing and refining your perspective.`;
    }

    credits.style.display = "grid";
    results.style.display = "flex";

    window.scrollBy({
        top: window.innerHeight * 0.5
    });

    //disable btn
    this.disabled = true;
});
