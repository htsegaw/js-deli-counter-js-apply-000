
function takeANumber(line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length}.`;
}

function nowServing(line){
  var message = ''
  if(line.length > 0){
    message = `Now serving ${line.shift(line)}.`;
  } else {
    message = 'There is nobody waiting to be served!';
  }
  return message;
}


function currentLine(line){
  var status = '';
  if(line.length > 0){
    for(var i = 0; i < line.length; i++){
      status += `${i+1}. ${line[i]}`;
    }
  } else {
      status += 'empty.';
  }
  return `The line is currently:  ${status}`;
}
