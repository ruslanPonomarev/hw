/* задача
1. алгоритм доставания колбасы с холодильника
2. придумать вариации препятствий к доставанию колбасы и варианты действий
3. использовать insertAdjacentHTML для вывода последовательности
 действий в верстку. (раньше это просто в консоль писалось)
 */

const elRoom = document.querySelector('select[name="room"]');
const elFridge = document.querySelector('select[name="fridge"]');
const elStatus = document.querySelector('.status > span');



const run = () => {
    const valueRoom = elRoom.value;
    const valueFridge = elFridge.value;


    if(valueRoom === 'kitchen' && valueFridge != 'open' ) {
        let div = document.createElement('div');
        div.innerHTML = "<strong>Вы зашли в кухню</strong> но холодильник закрыт";
        document.body.after(div);
        setTimeout(() => div.remove(), 3000);
        elStatus.innerHTML = 'Вы в кухне но холодильник закрыт!'
        return;
    }

    if(valueRoom === 'kitchen' && valueFridge === 'open' ) {
        let div = document.createElement('div');
        div.innerHTML = "<strong>Вы зашли в кухню</strong> и отркыли холодильник";
        document.body.after(div);
        setTimeout(() => div.remove(), 3000);
        elStatus.innerHTML = 'Вы открыли холодильник и можете достать колбасу!'
        document.body.insertAdjacentHTML("afterbegin", `<div class="alert">
        <strong>Бери и беги!</strong> пока кот не учуял запах колбасы.
        </div>`);
        return;
    }

    if(valueRoom === 'bedroom') {
        let div = document.createElement('div');
        div.innerHTML = "<strong>Вы зашли в спальню</strong> ";
        document.body.after(div);
        setTimeout(() => div.remove(), 2000);
        elStatus.innerHTML = 'Вы в спальне и далеко от холодильника!'
        return;
    }

    if(valueRoom === 'bathroom') {
        let div = document.createElement('div');
        div.innerHTML = "<strong>Вы зашли в ванну</strong> ";
        document.body.after(div);
        setTimeout(() => div.remove(), 2000);
        elStatus.innerHTML = 'Вы в ванной и далеко от холодильника!'
        return;
    }

}

run();
elRoom.addEventListener('change', run);
elFridge.addEventListener('change', run);

