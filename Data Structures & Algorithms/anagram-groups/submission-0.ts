class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const answer = {}
        const sortedArr=strs.map(str=>str.split('').sort().join(''))

        strs.forEach(str=>{
            const sorted = str.split('').sort().join()
            const values = answer[sorted] || []
            answer[sorted]=[...values,str]
        })

        return Object.values(answer)
    }
}
