document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("quiz-form");
    const result = document.getElementById("quiz-result");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const selected = document.querySelector('input[name="goal"]:checked');
        if (!selected) {
            result.textContent = "Please select an answer!";
            result.style.color = "red";
            return;
        }

        if (selected.value === "penetration") {
            result.textContent = "Correct! Red Teams focus on penetration testing to identify vulnerabilities.";
            result.style.color = "green";
        } else {
            result.textContent = "Incorrect! Red Teams primarily test for vulnerabilities, not defend systems.";
            result.style.color = "red";
        }
    });
});
