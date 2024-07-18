/*
  - Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

	- Examples: ko nhất thiết phải giống chữ chang >> chỉ cần đủ chữ và đúng sequence là đc
    > isSubsequence('hello', 'subhello world'); // true
    > isSubsequence('sing', 'sting'); // true
    > isSubsequence('abc', 'abracadabra'); // true
    > isSubsequence('abc', 'acb'); // false (order matters)
		> isSubsequence('', 'acb') // true

	- Your solution MUST have AT LEAST the following complexities:
		> Time Complexity - O(N + M)
		> Space Complexity - O(1)

//////////////////////////////////////////////////////////////////////////////
	 i
	[a,b,c] 		[a,b,r,a,c,a,d,a,b,r,a]
							 j
	- value ở i và value ở j giống nhau	

	   i
	[a,b,c] 		[a,b,r,a,c,a,d,a,b,r,a]
							   j
	- i++, j++ 
	- value ở i và value ở j giống nhau: i++ và j++	

	     i
	[a,b,c] 		[a,b,r,a,c,a,d,a,b,r,a]
							     j
	- value ở i và j khác nhau: j++

	       i
	[a,b,c] 		[a,b,r,a,c,a,d,a,b,r,a]
							         j
	- giống nhau: i++

	>> Nếu i === str.length >> true

*/

///////////////////////////////////////
// O(n)

const isSubsequence = (str1, str2) => {
  let i = 0
  let j = 0

  if (!str1) return true

  while (j < str2.length) {
    if (str1[i] === str2[j]) {
      i++
    }
    if (i === str1.length) return true
    j++
  }

  return false
}

console.log(isSubsequence('hello', 'hell world')) // true
console.log(isSubsequence('sing', 'sting')) // true
console.log(isSubsequence('abc', 'abracadabra')) // true
console.log(isSubsequence('abc', 'acb')) // false: wrong order
console.log(isSubsequence('', 'acb')) // true
