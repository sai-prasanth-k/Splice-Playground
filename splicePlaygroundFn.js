let arr = [1, 7, 3, 1, 0, 20, 77];

let startIndexInputElement = document.getElementById("startIndexInput");
let deleteCountInputElement = document.getElementById("deleteCountInput");
let itemToAddInputElement = document.getElementById("itemToAddInput");
let updatedArrayElement = document.getElementById("updatedArray");

function createAndAppendStringifedArray() {
    let stringifiedArray = JSON.stringify(arr);
    updatedArrayElement.textContent = stringifiedArray;
}

createAndAppendStringifedArray(); 

function splic() {
    let startIndex = startIndexInputElement.value;
    let deleteCount = deleteCountInputElement.value;
    let itemToAdd = itemToAddInputElement.value;
    
    if (startIndex === "") {
        alert("Please enter the start index");
        return;
    }
    if (deleteCount === "") {
        deleteCount = 0;
    }
    if (itemToAdd === "") {
        arr.splice(parseInt(startIndex). parseInt(deleteCount));
    }else {
        arr.splice(parseInt(startIndex), parseInt(deleteCount), itemToAdd);
    }
    
    startIndexInputElement.value = "";
    deleteCountInputElement.value = "";
    itemToAddInputElement.value = "";
    
    createAndAppendStringifedArray();
}