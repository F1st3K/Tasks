internal class Program
{
    private static readonly Dictionary<char, char> Collection = new()
    {
        {'(',')'},
        {'[',']'},
        {'{','}'},
    };
    private static void Main(string[] args)
    {
        Console.WriteLine(IsBalanced("{(dfdfd})"));
    }
    private static bool IsBalanced(string text)
    {
        var CharStack = new Stack<char>();
        foreach (var charct in text)
        {
            if (Collection.ContainsKey(charct))
                CharStack.Push(charct);
            else if (!Collection.ContainsValue(charct))
                continue;
            else if (CharStack.Count == 0)
                return false;
            else if (Collection[CharStack.Pop()] != charct)
                return false;
        }
        return CharStack.Count == 0;
    }
}
