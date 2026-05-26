document.addEventListener("DOMContentLoaded", function() {
    
    let toBuyCount = 0;

    const counterElement = document.getElementById('cart-counter');
    const buyButtons = document.querySelectorAll('.buy-btn');

    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.parentElement;
            const katanaName = productCard.querySelector('h3').textContent;

            toBuyCount++;
            counterElement.textContent = toBuyCount;

            // Выводим красивое стандартное уведомление браузера
            alert(`Меч ${katanaName} успешно добавлен в корзину!`);

            this.textContent = "В корзине ✓";
            this.disabled = true; // Деактивация
            this.style.backgroundColor = "#444"; // Шоб пользователь видел деактивацию
        });
    });

});