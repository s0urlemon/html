function validate(e){
    e.preventDefault();
    const email=document.getElementById('email').value;
    const pass=document.getElementById('password').value;
    const age=document.getElementById('age').value;
    const msgbox=document.getElementById('message').value;
    let message=''
    if (email===''){
        message='please enter an email';
        msgbox.style.color='red';
    }
    else if(pass===''){
        message='Password must be atleast 8 characters';
        msgbox.style.color='red';
    }
    else if(age===''){
        message='Age must be between 12 and 50';
        msgbox.style.color='red';
    }
    else{
        message='Login successful';
        msgbox.style.color='green'
    }
    msgbox.innerText=message;
    }