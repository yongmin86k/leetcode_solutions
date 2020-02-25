/**
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
 *
 * example 1
 * Input:
 * 11110
 * 11010
 * 11000
 * 00000
 * Output: 1
 *
 * example 2
 * Input:
 * 11000
 * 11000
 * 00100
 * 00011
 * Output: 3
 */

const numIslands = function(grid) {
  if (!grid || grid.length === 0) {
    return 0;
  }

  const flatArr = grid.flat();

  let i = 0,
    answer = 0;

  while (i < flatArr.length && flatArr.indexOf("1") > -1) {
    const found = flatArr.indexOf("1");
    i = found;
    let row, column;

    answer++;
    row = Math.floor(i / grid[0].length);
    column = i % grid[0].length;

    DepthFirstSearch(grid, flatArr, row, column);

    i++;
  }

  return answer;
};

const DepthFirstSearch = (grid, flatArr, row, column) => {
  let maxRow, maxColumn, index;

  maxRow = grid.length;
  maxColumn = grid[0].length;
  index = row * maxColumn + column;

  if (
    row < 0 ||
    column < 0 ||
    row >= maxRow ||
    column >= maxColumn ||
    grid[row][column] === "0"
  ) {
    return;
  }

  grid[row][column] = "0";
  flatArr[index] = "0";

  DepthFirstSearch(grid, flatArr, row + 1, column);
  DepthFirstSearch(grid, flatArr, row - 1, column);
  DepthFirstSearch(grid, flatArr, row, column + 1);
  DepthFirstSearch(grid, flatArr, row, column - 1);
};

module.exports = numIslands;
