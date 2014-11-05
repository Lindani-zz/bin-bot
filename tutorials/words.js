var words = "I am awsome in many different ways";
var wordSplit = words.split(" ");
var longestWord = "";
for(var i = 0; i<wordSplit.length; i++)
{
		if(wordSplit.length>longestWord.length)
		{
			longestWord  = wordSplit[i];
		}
	console.log(longestWord);
}