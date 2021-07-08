class HashStorageClass {
    constructor() {
        this.obj = {};
    }
    addValue(key, value) {
        this.obj[key] = value;
    }
    getValue(key) {
        return this.obj[key];
    }
    deleteValue(key) {
        if (this.obj[key]) {
            delete this.obj[key];
            return true;
        } else {
            return false;
        }
    }
    getKeys() {
        return Object.keys(this.obj);
    }
}

const drinkStorage = new HashStorageClass();

const addNewDrink = document.querySelector('#add_drink');
const getNewDrink = document.querySelector('#get_drink');
const deleteNewDrink = document.querySelector('#delete_drink');
const evryNewDrink = document.querySelector('#evry_drink');

addNewDrink.addEventListener('click', addDrink); 
getNewDrink.addEventListener('click', getDrink); 
deleteNewDrink.addEventListener('click', deleteDrink);
evryNewDrink.addEventListener('click', evryDrink);

function addDrink() {
    var drink = prompt('Название напитка'),
        alc = prompt('он алкогольный?'),
        rec = prompt('рецепт его приготовления'),
        info = 'напиток ' + drink + ' алкогольный: ' + alc + ' рецепт приготовления: ' + rec;
    drinkStorage.addValue(drink, info);
}

function getDrink() {
    var drink = prompt('Введите название напитка');
    return alert(drinkStorage.getValue(drink));
}

function deleteDrink() {
    var drink = prompt('Введите назваеие удаляемого напитка');
    return alert(drinkStorage.deleteValue(drink));
}

function evryDrink() {
    alert(drinkStorage.getKeys());
}