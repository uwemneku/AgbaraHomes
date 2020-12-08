window.addEventListener('load', () => {
    document.getElementsByClassName('container')[0].style.marginTop = '50px';
    console.log(hhhey);

})
let userValues = {};

let selectButtons = document.getElementsByClassName('select');

function firstChoice()
{
    function resetOptions()
    {   
        userValues = {};
        for (let index = 1; index < selectButtons.length; index++)
        {
            let buttons = selectButtons[index].children

            for (let i = 0; i < buttons.length; i++) {
                buttons[i].style.backgroundColor = 'white';
                buttons[i].children[0].style.color = 'black';
            }

        }  
    }

    function changeOptions(){

        function createDivs(index, start){
            let html='';
            for (let i = 0; i < index; i++) {
                html += '<div><p>' + start + '</p></div>'
                start++;
                
            }
        
            return html;
        }
    
        function hideElement(element)
        {
            document.getElementById(element).style.marginTop = '0px'
            document.getElementById(element).style.height = '0px'
            document.getElementById(element).style.overflow = 'hidden'  
        }
    
        function showElement(element)
        {
            document.getElementById(element).style.marginTop = '25px'
            document.getElementById(element).style.height = '112px'
            document.getElementById(element).style.overflow = 'hidden'  
        }
    
        switch (userValues.type) {
    
            case 'Self Contain':
            document.querySelector('#bathrooms div').innerHTML = createDivs(2, 1);
            hideElement('boysQuaters');
            hideElement('bedrooms');
            hideElement('visitors tiolet');
            showElement('selfConType')
            showElement('tiolet')
            showElement('kitchen')
            clickEvent();
                
                break;
    
            case 'Flat':
            document.querySelector('#bedrooms div').innerHTML = createDivs(4, 2);
            document.querySelector('#bathrooms div').innerHTML = createDivs(4, 1);
            hideElement('tiolet');
            hideElement('kitchen')
            hideElement('boysQuaters')
            hideElement('selfConType')
            showElement('bedrooms')
            showElement('visitors tiolet')
    
            clickEvent();
                
                break;
    
            case 'Duplex':
            document.querySelector('#bedrooms div').innerHTML = createDivs(4, 3);
            document.querySelector('#bathrooms div').innerHTML = createDivs(4, 3);
            hideElement('tiolet');
            hideElement('kitchen')
            hideElement('selfConType')
            hideElement('visitors tiolet')
            showElement('boysQuaters')
            clickEvent();
                
                break;
        
            default:
                break;
        }
    }

    let typeOptions = document.getElementById('type').children[1].children

    for (let i = 0; i < typeOptions.length; i++)
    {
        typeOptions[i].addEventListener('click', () =>{
            submitValue();
            changeOptions();
            resetOptions();
        } );

        function submitValue ()
        {
            userValues.type = typeOptions[i].children[0].innerHTML;
            console.log(userValues);
        }
        
    }
}

firstChoice();


function clickEvent()

{
    for (let index = 0; index < selectButtons.length; index++) {
        let buttons = selectButtons[index].children
        let id = selectButtons[index].parentElement.id;
        // console.log(buttons)

        function defaultColor(){
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].style.backgroundColor = 'white';
                buttons[i].children[0].style.color = 'black';
            }    
        }

        for (let i = 0; i < buttons.length; i++) {
            console.log(buttons[i])
            buttons[i].addEventListener('click', () => {
                changeColor();
                submitValue();
            });

            function changeColor(){
                defaultColor();
                buttons[i].style.backgroundColor ='#7C84D5';
                buttons[i].children[0].style.color = 'white';
            }

            function submitValue(){
                userValues[id] = buttons[i].children[0].innerHTML;
                console.log(userValues);
            }
            
        }
}}

clickEvent();



function checkIncompleteAttributes()
{   let status = ''

    function notification(element)
    {
        element.scrollIntoView();
        // window.scrollBy(0, -60);

        element.style.backgroundColor = 'red';
        setTimeout(() => {
            element.style.backgroundColor = 'white';
        }, 125);
        setTimeout(() => {
            element.style.backgroundColor = 'red';
        }, 250);
        setTimeout(() => {
            element.style.backgroundColor = 'white';
        }, 375);
        setTimeout(() => {
            element.style.backgroundColor = 'white';
        }, 500);
        setTimeout(() => {
            element.style.backgroundColor = 'red';
        }, 625);
        setTimeout(() => {
            element.style.backgroundColor = 'white';
        }, 850);


    }

    function checkAttribute(property)
    {
        if (!userValues.hasOwnProperty(property))
        {
            notification(document.getElementById(property));
            status = 0;
        }

    }

    switch (userValues.type)
    {
        case 'Self Contain':
            status = 1;
            checkAttribute('selfConType');
            checkAttribute('bathrooms');
            checkAttribute('tiolet');
            checkAttribute('kitchen');
            checkAttribute('meter');
            break;
        case 'Flat':
            checkAttribute('bedrooms');
            checkAttribute('bathrooms');
            checkAttribute('visitors tiolet');
            checkAttribute('meter');
            break;
        case 'Duplex':
            checkAttribute('bedrooms');
            checkAttribute('bathrooms');
            checkAttribute('boysQuaters');
            checkAttribute('meter');
            break;
    
        default:
            break;
    }

    return status;
}

function submit()
{
    let submitButton = document.getElementById('submit');
        submitButton.addEventListener('click', () => {
            checkIncompleteAttributes();
        })
}

submit();


