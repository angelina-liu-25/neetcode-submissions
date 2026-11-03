class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!==t.length) return false
        let count_s = new Map()
        for (const substring_s of s){
            let curr_count = count_s.get(substring_s) || 0
            count_s.set(substring_s, curr_count+1)
        }
        for (const substring_t of t){
            if(!!count_s.get(substring_t)){
                count_s.set(substring_t, count_s.get(substring_t)-1)
            }
            else {
                return false
            }
        }
        return true
    }
}
