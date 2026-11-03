class Solution {
    twoSum(nums: number[], target: number): number[] {
        // Map to store: number -> its index
        const seen = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];

            // If we've already seen the number needed to reach the target
            if (seen.has(complement)) {
                return [seen.get(complement)!, i];
            }

            // Otherwise, save the current number and its index
            seen.set(nums[i], i);
        }

        return []; // Return empty if no solution is found
    }
}
