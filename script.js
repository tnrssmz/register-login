const submit = document.getElementById('submit')
const active = document.getElementById('active')

submit.addEventListener('click', (set)=>{

    const name = document.getElementById('name').value
    localStorage.setItem('userName', name)

    const email = document.getElementById('email').value
    localStorage.setItem('userEmail', email)

    const password = document.getElementById('password').value
    localStorage.setItem('userPassword', password)

    if(name == '' || email == '' || password == ''){
        active.remove('action')

        const alert = document.getElementById('alert')
            alert.classList.add('alert')
            
            const p = document.createElement('p')
            p.textContent = 'Boş alanları doldurunuz'
            alert.append(p)
            
            return alert    
    }
    
})

