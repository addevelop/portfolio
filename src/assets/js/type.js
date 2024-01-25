export function writeText(id, second, pause, secondDelete, textMany)
{
  var add = true;
  var element = document.getElementById(id);
  var i = 0;
  setInterval(() =>{
  
  
    addText(element, second, pause, secondDelete, textMany[i]);
    i = i >= textMany.length - 1 ? 0 : i + 1;
  
    }, second + secondDelete + pause)
}

function addText(element, second, pause, secondDelete, text)
{

   var time = second / text.length;
  var i = 0;

  element.innerHTML = '';
  var textIntervalFunction = setInterval(() => {
    element.innerHTML = element.innerHTML + text[i];
    i++;
    if(i >= text.length)
      {
        clearInterval(textIntervalFunction);
        setTimeout( () => {
          deleteText(element, secondDelete)
        }, pause)

      }
  }, time)
}

function deleteText(element, second)
{

  var text = element.innerText;
  var time = second / text.length
  var i = text.length - 1;

  var textIntervalFunctionDelete = setInterval(() => {
    text = text.substring(0, i);
    element.innerText = text;
    i--;
    if(i < 0)
      {
        clearInterval(textIntervalFunctionDelete)
      }
  }, time)
}

 