function takeANumber(currentLine,newName)
{
  currentLine.push(newName);
  
  return console.log("Welcome, " + newName+ ". You are number "+currentLine.length+ " in line.");
  
}