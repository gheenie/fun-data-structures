// qn 1

/*const spaceShip = {
    name: 'USS Enterprise',
    captain: 'Jean Luc-Picard',
    class: 'NCC-1701-D'
}*/
  
function createSpaceShip() {
    const spaceShip = {
        name: 'USS Enterprise',
        captain: 'Jean Luc-Picard',
        class: 'NCC-1701-D'
    }

    return spaceShip;
}
  
const ship1 = createSpaceShip();
const ship2 = createSpaceShip();
console.log(ship1);
console.log(ship1 === ship2);

// qn 2

function createDataSet(...values) {
    const newDataSet = {
        values: values,
    };
    newDataSet.calculateMean = function () {
        const total = values.reduce((total, item) => total + item, 0);
        // calculate sum of all the values in the list
        return total / values.length;
        // divide the total by sum of all the items in the list
    };
  
    return newDataSet;
}
  
const dataSet1 = createDataSet(1, 2, 3);
console.log(dataSet1);
console.log(dataSet1.calculateMean());
  
const dataSet2 = createDataSet(1, 2, 3, 4, 5);
  
console.log(dataSet1.calculateMean === dataSet2.calculateMean);
console.log( dataSet2.calculateMean() )
