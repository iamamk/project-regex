console.log('hello');

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validUser = false;
let validEmail = false;
let validPhone = false;
$('#success').hide();
$('#Failure').hide();

//console.log(name, email, phone);//

name.addEventListener('blur', () => {
    console.log('name got blurred');
    //validate for name//
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){0,10}/;
    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('is matched');
        name.classList.remove('is-invalid');
        validUser = true;
    }
    else {
        console.log('is not matched');
        name.classList.add('is-invalid');
        validUser = false;
    }
})

email.addEventListener('blur', () => {
    console.log('email got blurred');
    //validate for email//
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+).([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('email is matched');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        console.log('email is not matched');
        email.classList.add('is-invalid');
        validEmail = false;
    }

})

phone.addEventListener('blur', () => {
    console.log('phone got blurred');
    //validate for phone//
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('phone is matched');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        console.log('phone is not matched');
        phone.classList.add('is-invalid');
        validPhone = false;
    }

})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('i got clicked');
    if (validUser && validEmail && validPhone) {
        let Failure = document.getElementById('Failure');

        let success = document.getElementById('success');
        success.classList.add('show');
        $('#Failure').hide();
        $('#success').show();
        
    }
    else {
        let success = document.getElementById('success');
        let Failure = document.getElementById('Failure');
        Failure.classList.add('show');
        $('#success').hide();
        $('#Failure').show();

    }
})