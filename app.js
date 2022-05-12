let form = document.getElementById('form');
let input = document.querySelector('#input');
let msg = document.querySelector('#msg');
let posts = document.querySelector('#posts');

form.addEventListener('submit', (e) => {
    console.log('button clicked');
    formValidation();

    e.preventDefault();
});

let formValidation = () => {
    if (input.value === '') {
        msg.innerHTML = 'Post cannot be blank';
        console.log('Failed to submit the post')
    }
    else {
        msg.innerHTML = '';
        console.log('Post submitted successfully');
        acceptData();
    }
};


let data = {};

let acceptData = () => {
    data['post'] = input.value;
    console.log(data);
    createPost();
};

let createPost = () => {
    posts.innerHTML +=
        ` <div>
    <p>${data.post}</p>
    <span class="options">
        <i onClick="editPost(this)" class="fa-regular fa-pen-to-square"></i>
        <i onClick="deletePost(this)" class="fa-regular fa-trash-can"></i>
    </span>
</div>`;
input.value = '';
};

let deletePost = (e) => {
     e.parentElement.parentElement.remove();
}

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
}