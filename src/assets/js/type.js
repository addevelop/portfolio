function addText(id, second, text)
{
    var time = second / text.length;
    var idText = document.getElementById(id);
    console.log(idText);

    var i = 0;
    var intervalT = setInterval(() => {
        if(i < text.length)
        {
            id.innerText = text[i]
            i++;
        }
    }, time)
}

function deleteText(id, second)
{
    var id = document.getElementById(id);
    var text = id.value;
    var time = second / text.length;
    var i = text.length;
    var intervalT = setInterval(() => {
        if(i != 0)
        {
            text.substring(0, text.length - 1);
            i--;
        }
    }, time)
}

export const writeText = (id, second, text) =>
{
    var on = true;

    setInterval(() => {
        if(on)
        {
            addText(id, second, text)
            on = false;
        }
        else
        {
            // deleteText(id, second)
            on = true;
        }
    }, second)
}