/**
 * Duplicate elements of an array based on a multiplier.
 *
 * @param {any[]} originalArray - The original array to duplicate elements from.
 * @param {number} multiplier - The number of times each element should be duplicated.
 * @returns {any[]} - The duplicated array.
 */
export const duplicateArrayElements = (
  originalArray: any[],
  multiplier: number
): any[] => {
  const duplicatedArray: any[] = [];

  for (const element of originalArray) {
    for (let i = 0; i < multiplier; i++) {
      duplicatedArray.push(element);
    }
  }

  return duplicatedArray;
};
