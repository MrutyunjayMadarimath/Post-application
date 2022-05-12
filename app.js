let form = document.getElementById('form');
let input = document.querySelector('#input');
let msg = document.querySelector('#msg');

form.addEventListener('submit', (e)=>{
    console.log('button clicked');
    formValidation();

    e.preventDefault();
});

let formValidation = ()=>{
    if(input.value === ''){
        msg.innerHTML = 'Post cannot be blank';
    console.log('Failed to submit the post')
    } 
    else{
        msg.innerHTML = '';
        console.log('Post submitted successfully')

    }
};


let data = {};

let acceptData = () => {};