document.addEventListener("DOMContentLoaded", function () {
    // Вибираємо восьмий елемент за допомогою getElementById
    let target8Clicked = false;
    let eighthElement = document.getElementById("target8");

    eighthElement.addEventListener("click", function () {
        // Перевіряємо, чи було вже клікнуто
        target8Clicked = !target8Clicked;

        // Змінюємо колір тексту і фону
        if (target8Clicked) {
            this.style.backgroundColor = "yellow";
            this.style.color = "red";
        } else {
            this.style.backgroundColor = "lightblue";
            this.style.color = "green";
        }
    });

    // Вибираємо дев'ятий елемент за допомогою querySelector
    let nextElementClicked = false;
    let ninthElement = document.querySelector("body > p:nth-of-type(5)"); // Вибираємо 9-й елемент на сторінці

    ninthElement.addEventListener("click", function () {
        // Перевіряємо, чи було вже клікнуто
        nextElementClicked = !nextElementClicked;

        // Змінюємо колір тексту і фону
        if (nextElementClicked) {
            this.style.backgroundColor = "lightblue";
            this.style.color = "green";
        } else {
            this.style.backgroundColor = "yellow";
            this.style.color = "red";
        }
    });

    // Додаємо функціонал для кнопок
    let imageContainer = document.querySelector("a");
    let image = document.getElementById("myImage");

    // Кнопка "Додати"
    document.getElementById("addButton").addEventListener("click", function () {
        const newImage = document.createElement("img");
        newImage.src = image.src; // Використовуємо ту ж картинку
        newImage.alt = image.alt;
        newImage.width = image.width; // Копіюємо ширину
        imageContainer.appendChild(newImage); // Додаємо нове зображення
    });

    // Кнопка "Збільшити"
    document.getElementById("increaseButton").addEventListener("click", function () {
        image.width += 50; // Збільшуємо ширину зображення на 50px
    });

    // Кнопка "Зменшити"
    document.getElementById("decreaseButton").addEventListener("click", function () {
        image.width = Math.max(50, image.width - 50); // Зменшуємо ширину зображення на 50px, не менше ніж 50
    });

    // Кнопка "Видалити"
    document.getElementById("removeButton").addEventListener("click", function () {
        imageContainer.removeChild(image); // Видаляємо зображення
    });
});

