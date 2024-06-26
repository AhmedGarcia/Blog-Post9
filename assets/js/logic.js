document.getElementById('modeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    const modeIcon = document.querySelector('#modeToggle i');
    if (document.body.classList.contains('dark-mode')) {
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
    } else {
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
    }
});
