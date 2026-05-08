function checkAnswer1(answer) {
    const result1 = document.getElementById("result1");
    const correctanswer1 = "right";
    if (answer === correctanswer1) {
        result1.textContent = "Incredible guess!!, good job"
    } else {
        result1.textContent ="Nice try!, but this is not the answer"
    }
}
