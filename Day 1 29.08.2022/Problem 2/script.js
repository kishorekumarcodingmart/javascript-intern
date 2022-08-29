function stringRotate() 
{
    const element = document.getElementById('target');
    let textNode = element.childNodes[0]; 
    let text = document.getElementById('target').innerHTML;

    setInterval ( () =>
        {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        textNode.data = text;
        }, 500);
}

/* 
Rotate the string 'codingmart' in right direction by periodically removing one letter from 
the end of the string and attaching it to the front.
*/