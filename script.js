fetch('questions.json')
    .then(response => response.json())
    .then(questions => {
        let quizContainer = document.getElementById('quiz-container');
        questions.forEach((q, index) => {
            let div = document.createElement('div');
            div.innerHTML = `<p>${q.question}</p>
                <input type="radio" name="q${index}" value="${q.option1}"> ${q.option1}
                <input type="radio" name="q${index}" value="${q.option2}"> ${q.option2}`;
            quizContainer.appendChild(div);
        });
    });

function submitQuiz() {
    alert("Terima kasih telah mengisi kuisioner!");
}
