// function to set title
function setTitle(newTitle)
{
    const titleElement = document.getElementById('title');
    titleElement.textContent = newTitle;
}

// Function for description.
 function setDescription
(newDescription)
{
    const descriptionElement = document.getElementById('description');
    descriptionElement.textContent = newDescription;
}

// Function to set background color.
function setBackgroundColor(color)
{
 document.body.style.backgroundColor = color;
}

// Function to set font color.
function setFontColor(color)

{
    document.body.style.color = color;
    const allElements = document.querySelectorAll('*')
    allElements.forEach( element => {element.style.color = color});
}
// Funtion to set Theme
function setTheme(theme)
{
    if ( theme === 'dark')
        { document.body.classList.add ('dark-theme');
            document.body.classList.remove(light-color);
        }
    
    
     else if (theme === 'light'){
          document.body.classList.add ('light-theme');
    document.body.classList.remove(dark-color);
}}