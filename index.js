function takeANumber(currentLine,newName)
{
  currentLine.push(newName);
  
  console.log("Welcome, " + newName+ ". You are number "+currentLine.length+ " in line.");
  
}