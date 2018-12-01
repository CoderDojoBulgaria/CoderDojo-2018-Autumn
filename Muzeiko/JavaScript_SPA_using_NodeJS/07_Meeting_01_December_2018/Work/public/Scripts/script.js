window.onload = function () {
    // Четем първоначалния hash
    var currentPath = parent.location.hash;
    if (currentPath.length == 0) {
        currentPath = '#home';
    }

    // Създаваме функция за промяна на текущия hash
    // Скриваме всички div елементи (страници), които не завършват със селектирания hash
    function reloadPage() {
        parent.location.hash = currentPath;
        document.querySelectorAll('.page:not(' + currentPath + ')')
            .forEach(function(innerPage) {
                innerPage.style.display = 'none';
            });
    };

    // Извикваме функцията reloadPage при първото зареждане на страницата
    reloadPage();

    /*
        Закачаме по едно onclick събитие на бутоните в тагът nav
        Когато кликнем на някой от бутоните: 
            - променяме текущия currentPath
            - извикваме функцията reloadPage
            - променяме текущата страница да бъде видима
    */
    document.querySelectorAll('nav button')
        .forEach(function (innerButton) {
            innerButton.addEventListener('click', function (event) {
                currentPath = '#' + this.innerText.toLowerCase();
                reloadPage();
                document.querySelector('.page' + currentPath).style.display = 'block';
            });
        });
    
    // Променяме стойността на първия span елемент във footer-а на страницата на текущата година
    document.querySelector('footer span').textContent = new Date().getFullYear();
}