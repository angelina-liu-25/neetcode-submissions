class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const count = new Map<any, number>()

        nums.forEach(num=>{
            const currCount = count.get(num) || 0 
            count.set(num, currCount+1)
        })

        const answerMap = new Map([...count].sort((a, b) => b[1] - a[1]))

        console.log(answerMap, count)

        const sortedFreq = Array.from(answerMap.keys())

        return sortedFreq.slice(0,k)
    }
}
