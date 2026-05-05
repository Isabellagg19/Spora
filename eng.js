function checkAnswer(answer) {
    const result = document.getElementById("result1");
    const correctanswer = "true";
    if (answer === correctanswer) {
        result.textContent = "You are right yeyy, it was in tokio, nice work"
    } else {
        result.textContent ="Nice try!, but no, it was actually in Tokio, keep reading to find out how"
    }

}