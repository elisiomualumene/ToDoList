let inputfield = document.getElementById('input')
// Here Get the INPUT
let addtodo = document.getElementById('addtodo')
// Here Get the Button
let here_ = document.getElementById('nothing')
// And Here Get the Container 

// Here a declare a function, with a addEventListener
addtodo.addEventListener('click', function(){
        // Here a creat a Element Paragraph, and a declare paragraph too
    var paragraph = document.createElement('p')
        //Here I put the value of input in a variable 'Paragraph with InnerText'
    paragraph.innerText = inputfield.value
        //And Here I add Paragraph to Container 'here_'
    here_.appendChild(paragraph)
        //Finish Here
})
