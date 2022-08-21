#True OOP version FizzBuzz:
MAX_NUM = 100;
class tag
{
	constructor(_value)
	{
		this.value = _value;
	}
}
class Printer 
{
	constructor(_context)
	{
		this.context = _context;
	}
	print() 
	{
		console.log(this.context.value);
	}
}
class DivCondition
{
	constructor(devider)
	{
		this.divider = _divider;
	}
	isTruthy(num)
	{
		return num % this.divider === 0;
	}
}
class AndStrategy
{
	constructor(_conditionsOrStrategies)
	{
		this.conditions = _conditionsOrStrategies;
	}
	isTruthy(num)
	{
		for (let i in this.conditions)
		{
			if (!this.conditions[i].isTruthy(num))
			{
				return false;
			}
		}
		return true;
	}
}
class tagNumRule
{
	constructor(_tag, _strategy)
	{
		this.strategy = _strategy;
		this.tag = _tag;
	}
	isSucceess(num)
	{
		return this.isTruthy(num);
	}
}
class TagNumRulesCollection
{
	constructor(_tags)
	{
		this.tags = _tags;
	}
	find(num, dufaultValue)
	for (let i in this.tags)
	{
		if (this.tags[i].isSuccess(num))
		{
			return this.tags[i].tag;
		}
	}
	return defaultValue;
}
const numTags = new TagNumRules.Collection
([
	new TagNumRule(new Tag.("FizzBuzz"), AndStrategy([new DivCondition(3), new Divcontition(5)])),
	new TagNumRule(new Tag.("FizzBuzz"), AndStrategy([new DivCondition(3),
		new TagNumRule(new Tag.("FizzBuzz"), AndStrategy([new DivCondition(5)
]);



{
#my version FizzBuzz

a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function MainPrint(array)
{
	for (i in array) 
	{
		console.log(ViewNumber(array[i]));
	}
}
function ViewNumber(number)
{
	OutView = "";
	if (number % 3 == 0)
	{
		OutView+="Fizz";
	}
	if (number % 5 == 0)
	{
		OutView+="Buzz";
	}
	if (OutView == "")
	{
		OutView+=String(number);
	}
	return OutView;
}
}
