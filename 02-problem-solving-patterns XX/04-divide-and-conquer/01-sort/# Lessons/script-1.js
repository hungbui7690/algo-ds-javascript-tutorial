/*
	LINEAR SEARCH >> nên sử dụng trong trường hợp array chưa đc sort

	- seaerch(array, value): array phải đc SORTED >> tìm tới value trong array và trả về index

		> search([1,2,3,4,5,6], 4) = 3 
		> search([1,2,3,4,5,6], 6) = 5
		> search([1,2,3,4,5,6], 11) = -1 (ko có)
*/

///////////////////////////////////////
// O(n)

function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i
  }
  return -1
}

console.log(search([1, 2, 3, 4, 5, 6], 4)) // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)) // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)) // -1
