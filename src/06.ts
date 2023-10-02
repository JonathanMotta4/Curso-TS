let nums = [12, 53, 37, 23]
//let nums: Array<number|string> = [12, 53, 37, 23,'Teste']
//let nums:(number|string)[] = [12, 53, 37, 23,'Teste']

nums.push(25)
nums.unshift(27)

nums.pop()
nums.shift()

console.log(nums)

let numsRo: ReadonlyArray<number> = [...nums]
console.log(numsRo);
