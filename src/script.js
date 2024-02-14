document.getElementById('button_1').addEventListener('click', function() {
    var columnasTexto = document.querySelector('.column-hidden');
    columnasTexto.classList.toggle('show');

    
    if (columnasTexto.classList.contains('show')) {
        scrollToBottom();
    }
});

function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}
