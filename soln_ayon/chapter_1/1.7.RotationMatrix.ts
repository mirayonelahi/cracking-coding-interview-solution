/**
 * Rotate Matrix: 

Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, 
write a method to rotate the image by 90 degrees. Can you do this in place? 

I: nxn matrix
O: rotated matrix - 90 deg, clockwise
C: rotate matrix in place, optimize
E: empty matrix, even and odd values for n

time complexity: O(n^2) - quadratic
space complexity: O(2) - constant
*! 1.Traverse matrix  2.Flip horizontally

 */

let RotateImage = (matrix) => {
    console.log(matrix.length);
    let n = matrix.length;
    // *! 1.Traverse matrix 
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }

    }
    //*! 2.Flip horizontally
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < n / 2; j++) {
            [matrix[i][j], matrix[i][n - 1 - j]] = [matrix[i][n - 1 - j], matrix[i][j]];
        }

    }

    return matrix
}

console.log(RotateImage
    ([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]));
//[[13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3], [16, 12, 8, 4]]),

//, [[7, 4, 1], [8, 5, 2], [9, 6, 3]]