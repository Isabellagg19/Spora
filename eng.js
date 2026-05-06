function checkAnswer1(answer) {
    const result1 = document.getElementById("result1");
    const correctanswer1 = "true";
    if (answer === correctanswer1) {
        result1.textContent = "You are right yeyy, it was in tokio, nice work"
    } else {
        result1.textContent ="Nice try!, but no, it was actually in Tokio, keep reading to find out how"
    }
}

function checkAnswer2(answer) {
    const result2 = document.getElementById("result2");
    const correctanswer2 = "right";
    if (answer === correctanswer2) {
        result2.textContent = "That's... correct, good job, keep reading to find out how this is possible!!"
    } else {
        result2.textContent ="That's... Incorrect, I'm sorry, but keep reading if you want to keep learning the amazing world of fungi"
    }
}