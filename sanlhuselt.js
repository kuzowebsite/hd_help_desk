// Хуудас ачааллахад
window.onload = function() {
    const button = document.querySelector('.huselt');

    // sessionStorage-с "buttonClicked" утгыг авна
    const buttonClicked = sessionStorage.getItem('buttonClicked');

    if (buttonClicked === 'true') {
        // Товч текстийг "Баярлалаа" болгож өөрчилнө
        button.textContent = 'Баярлалаа'; 
    }

    // Товчийг дарж байгаа тохиолдолд sessionStorage-д утга хадгална
    button.addEventListener('click', function() {
        this.textContent = 'Санал хүсэлт бөглсөнд баярлалаа'; // Текстийг "Баярлалаа" болгож өөрчилнө
        sessionStorage.setItem('buttonClicked', 'true'); // sessionStorage-д хадгална
    });
}
