function getCommonElements(array1, array2) {
  // Change code below this line
let arrayNew = [];

  for (let i = 0; i < array1.length; i +=1) {
    if(array2.inclides(array1[i])) {
      arrayNew.push(array1[i]);
    }
  }
return arrayNew;

 // Change code above this line
}