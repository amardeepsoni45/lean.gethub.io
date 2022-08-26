function loginform(){
    const name=document.getElementById('name').value;
    const email=document.getElementById('name').value;

    localStorage.setItem('Name',name);
    localStorage.setItem('Email',email);
    return;
}