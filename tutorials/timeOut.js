var hello = setInterval(function () 
{
	console.log("Hello")
	
}, 1000);

setTimeout(function()
{
	clearInterval(hello);
	console.log("..... interval")
}, 6000);
