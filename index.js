function takeANumber(currentLine,newName)
{
  currentLine.push(newName);
  
  return ("Welcome, " + newName+ ". You are number "+currentLine.length+ " in line.");
  
}

function nowServing(currentLine)
{
  
  if(currentLine.length > 0)
    return ("Currently serving "+ currentLine.shift() + ".");
  else
    return ("There is nobody waiting to be served!");
}

function currentLine(currentLine)
{
  var output = "The line is currently";
  
}