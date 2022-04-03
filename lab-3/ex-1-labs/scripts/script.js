'strick mode';
let expect = chai.expect;



function updateStorageTest(val) {
    document.querySelector(".text-area").value = val;

    if (val.length > 0){
        const newData = document.querySelector(".text-area").value.split(" ");
        const dbJSON = localStorage.getItem("db");
        const db = JSON.parse(dbJSON);
        const index = findInDB(db, newData);

        // c
        if( val[0] === "c") {
            const storageCRUD = LocalStorageCRUD();
            const added = findInDB(JSON.parse(dbJSON), newData);
            return index === -1 && added === -1 && storageCRUD === 1;
        }
        else if( val[0] === "d") {
            const storageCRUD = LocalStorageCRUD();
            const added = findInDB(JSON.parse(dbJSON), newData);
            return index === 1 && added === -1 && storageCRUD === 1;
        }
        else if( val[0] === "u") {
            const storageCRUD = LocalStorageCRUD();
            const added = findInDB(JSON.parse(dbJSON), newData);
            return index === 1 && added === 1 && storageCRUD === 1;
        }
    }
    return false;
}

describe('TESTING', function () {
    // zealand
    it('c Zeland 10 20', function () {
        expect(updateStorageTest("c Zeland 10 20")).to.equal(true);

    });
    it('u Zeland 10 20', function () {
        expect(updateStorageTest("u Zeland 10 20")).to.equal(true);
    });
    it('d Zeland 10 20', function () {
        expect(updateStorageTest("d Zeland 10 20")).to.equal(true);
    });
});


function loadThis() {
    const dbData = [
        ["Poland", 10, 50],
        ["Slovakia", 10, 50],
    ];

    // adding data to local storage
    localStorage.setItem("db", JSON.stringify(dbData));
    loadData();
}


function loadData() {
    tbody = document.querySelector('tbody');
    const dbJSON = localStorage.getItem("db");
    const db = JSON.parse(dbJSON);
    // reseting previous data from html
    tbody.innerHTML = "";

    for (row of db) {
        const tr = document.createElement("tr");
        for (let i = 0; i < 3; i++) {
            const td = document.createElement("td");
            td.innerText = row[i];
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
}


function LocalStorageCRUD() {
    const newData = document.querySelector(".text-area").value.split(" ");
    if (newData.length !== 4) {
        window.alert("insert data with 4 spaces");
        return -1;
    }
    else if (["c", "r", "u", "d"].findIndex(arr => arr[0] === newData[0]) === -1) {
        window.alert("unknown operation");
        return -1;
    }

    // create
    const dbJSON = localStorage.getItem("db");
    const db = JSON.parse(dbJSON);

    const index = findInDB(db, newData);
    if (newData[0] === "c") {
        // check if already exists Country in DB
        if (index != -1) {
            window.alert("country already exists");
            return -1;
        }
        else {
            // adding new data to array
            newData.splice(0, 1);
            db.push(newData);
        }
    }
    // delete
    else if (newData[0] === "d") {
        // data d
        if (index !== -1) {
            db.splice(index, 1);
        }
        else {
            window.alert("country doesn't exists");
            return -1;
        }
    }
    // update
    else if (newData[0] === "u") {
        // data d
        if (index !== -1) {
            newData.splice(0, 1);
            db[index] = newData;
        }
        else {
            window.alert("country doesn't exists");
            return -1;
        }
    }
    else {
        if (index == -1) {
            window.alert("country doesn't exists");
            return -1;
        }
        else {
            window.alert(db[index]);
        }
    }
    localStorage.setItem("db", JSON.stringify(db));
    loadData();

    // CRUD SUCCESFULL
    return 1;
}

function findInDB(dbData, newData) {
    return dbData.findIndex(arr => arr[0] === newData[1])
}

window.onload = loadThis;
