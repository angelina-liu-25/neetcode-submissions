class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
            const dictSet = new Set(wordDict)
    const array = s.split('')
    let answer = false
    const failed = new Set()                    // suffix lengths already proven hopeless

    const hasWord=(arr)=>{
        if(answer) return                        // (A) already solved — stop everything
        if(arr.length===0){ answer = true; return }
        if(failed.has(arr.length)) return        // (B) seen this suffix, it led nowhere → skip
        for (let i=0; i<=arr.length; i++){
            const sub1 = arr.slice(0, i)
            const sub2 = arr.slice(i)
            if(dictSet.has(sub1.join(''))){
                hasWord(sub2)
            }
        }
        if(!answer) failed.add(arr.length)       // (C) record this suffix as a dead end
    }
    hasWord(array)

    return answer
    }
}
