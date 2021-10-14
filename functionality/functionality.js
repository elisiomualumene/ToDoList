let inputfield = document.getElementById('input2')
// Here Get the INPUT
let addtodo = document.getElementById('addtodo')
// Here Get the Button
let here_ = document.getElementById('nothing')
// And Here Get the Container 

// Here a declare a function, with a addEventListener
addtodo.addEventListener('click', function(){    
    // Here a creat a Element Paragraph, and a declare paragraph too
    var paragraph = document.createElement('li')
        //Here I put the value of input in a variable 'Paragraph with InnerText'
    paragraph.innerText = inputfield.value
        //And Here I add Paragraph to Container 'here_'
    here_.appendChild(paragraph)
    //here a put a paragraph to list " here_ "
    inputfield.value = "";
    //Clean de Input
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = "line-through";
        //this line bottom of me remove the line-through when I click
        paragraph.addEventListener('click', function(){
            paragraph.style.textDecoration = "";
        })
    }) //this function check the list 'wwith a line'

    paragraph.addEventListener('dblclick',function(){
        here_.removeChild(paragraph);
    }) // this function remove a paragraph in a list

        //Finish Here

})
