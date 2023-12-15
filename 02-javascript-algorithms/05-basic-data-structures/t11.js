//Iterate Through All an Array's Items Using For Loops

function filteredArray(arr, elem) {
		let newArr = [];
		for (let i = 0; i < arr.length; i++){
				for (let j = 0; j < arr[i].length; j++){
						if (arr[i][j] == elem){
								j = arr[i][j].length;
								newArr.push(arr.slice(arr[i], arr[i] + 1));
						}
				}
		}
		return newArr;
}

console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));