

//модалка с Лялей
const openBtn = document.querySelector ('#openLala');
const dialog = document.querySelector ('dialog');
openBtn.onclick = () => dialog.showModal();

const myDialog = document.getElementById('LalaDialog');
myDialog.addEventListener('click', () => myDialog.close());

const myDiv = document.getElementById('modalLalaBox');
myDiv.addEventListener('click', (event) => event.stopPropagation());


// Настраиваем дроп для таблицы
const dropDownArrow = document.querySelector('.drop-down-arrow');
dropDownArrow.onclick = () => {
    
    const lastRows = document.querySelectorAll ('.table tr:nth-child(n+6)');
    const halfTransparentRow1 = document.querySelector('#half-transp-1')
    const halfTransparentRow2 = document.querySelector('#half-transp-2')
    
    if (checkIfAllHidden ( lastRows )) {
        showRows ( lastRows );
        halfTransparentRow1.classList.remove('half-transp-1');
        halfTransparentRow2.classList.remove('half-transp-2');
        dropDownArrow.parentElement.style.transform = 'rotate(180deg)';
    } else {
        hideRows (lastRows);
        halfTransparentRow1.classList.add('half-transp-1');
        halfTransparentRow2.classList.add('half-transp-2');
        dropDownArrow.parentElement.style.transform = 'rotate(0deg)';
    }

}

//Описываем внутрнние функции
const showRows = (array) => {
    array.forEach(tr => tr.style.display='table-row');
}

const checkIfAllHidden =(array)=>{
    let bool;
    array.forEach(tr => {
        if (tr.style.display==='') {bool=true}
    })
    return bool
}

const hideRows = (array) => {
    array.forEach(tr => tr.style.display='');
}




