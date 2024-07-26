/*
	BINARY SEARCH: đây là 1 ví dụ về Divide & Conquer >> O(logN)

	seaerch(array, value): array phải đc SORTED >> tìm tới value trong array và trả về index

	> search([1,2,3,4,5,6], 4) = 3 
	> search([1,2,3,4,5,6], 6) = 5
	> search([1,2,3,4,5,6], 11) = -1 (ko có)

//////////////////////////////////////////////////////////////////////////////

	Ví dụ: search 21
			[1,2,3,4,5,7,9,16,21,27] 
			
	- nếu đi từ đầu tới cuối sẽ rất lâu 
	- thay vì vậy chúng ta sẽ chia đôi array ra 
		[1,2,3,4,5 / 7,9,16,21,27] 

	- check xem bên trái hay bên phải bằng cách so sánh 5 với 21 >> 5 nhỏ hơn 21 >> vậy là nằm bên phải 
		[7,9,16,21,27]

	- lại tiếp tục chia đôi phần bên phải 
		[7,9 / 16,21,27]
	
	- so sánh 9 với 21 >> bên phải 
		[16,21,27] 

	- tiếp tục chia đôi 
		[16 / 21, 27]
	
	- so sánh >> bên phải 
		[21,27]
	
	- chia đôi
		[21 / 27] 

	> bên trái >> tìm ra 
*/

//////////////////////////////////////////////////////////////////////////////
// O(logN)

function search(arr, val) {
  // (a)
  let min = 0
  let max = arr.length - 1

  // (b)
  while (min <= max) {
    // (i)
    let mid = Math.floor((min + max) / 2)

    // (ii)
    if (arr[mid] < val) {
      min = mid + 1
    } else if (arr[mid] > val) {
      max = mid - 1
    } else {
      return mid
    }
  }

  // (c)
  return -1
}

console.log(search([1, 2, 3, 4, 5, 6], 4)) // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)) // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)) // -1
