function toggleChecked(clickedRadio) {
    const radioButtons = document.getElementsByName("Radio");
    radioButtons.forEach(function(radioButton) {
        if (radioButton != clickedRadio) {
            radioButton.checked = false;
        }
    });
}