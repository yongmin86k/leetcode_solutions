/**
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 * You may assume nums1 and nums2 cannot be both empty.
 *
 * example 1
 * nums1 = [1, 3]
 * nums2 = [2]
 * The median is 2.0
 *
 * example 2
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * The median is (2 + 3)/2 = 2.5
 */

const findMedianSortedArrays = function(nums1, nums2) {
  const concatArray = nums1.concat(nums2).sort((a, b) => a - b);
  const count = concatArray.length;
  const median =
    count % 2 === 1
      ? concatArray[Math.floor(count / 2)]
      : (concatArray[count / 2 - 1] + concatArray[count / 2]) / 2;
  return median;
};

module.exports = findMedianSortedArrays;
