internal class Program
{
    private static void Main(string[] args)
    {
        
    }
}
class Solution
{
    public int numberOfIslands(int[][] grid)
    {
        if (grid == null || grid.Length == 0)
            return 0;
        int numberOfIslands = 0;
        for (int i = 0; i<grid.Length; i++)
        {
            for (int j = 0; j<grid[i].Length; j++)
            {
                numberOfIslands++;
                TakeLook(grid, i, j);
            }
        }
        return numberOfIslands;
    }
    private void TakeLook(int[][] grid, int i, int j)
    {
        if (i < 0 || i > grid.Length || j < 0 || j > grid.Length || grid[i][j] == 0)
        {
            return;
        }
        grid[i][j] = 0;

        TakeLook(grid, i+1, j);
        TakeLook(grid, i-1, j);
        TakeLook(grid, i, j+1);
        TakeLook(grid, i, j-1);
    }
}