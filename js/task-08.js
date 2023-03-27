const form = document.querySelector(`.login-form`);
form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    formData.forEach((value, name) =>{
        if (value.trim() === "") {
            return alert ("Всі поля мають бути заповнені!")
        }
        
    const dataObj = {};
    dataObj.name = name;
    dataObj[name] = value;
    
    console.log(dataObj);
    event.currentTarget.reset();
    })

    
}
