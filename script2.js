const submit = document.getElementById('submit')
const ind = document.getElementById('ind')
submit.addEventListener('click', (get)=>{
    
    const email2 = document.getElementById('email').value
    const getUserMail = localStorage.getItem('userEmail')

    const password2 = document.getElementById('password').value
    const getUserPassword = localStorage.getItem('userPassword')



    if(email2 == '' || password2 == ''){
        ind.remove('action')

        const alert = document.getElementById('alert')
            alert.classList.add('alert')
            
            const p = document.createElement('p')
            p.textContent = 'Boş alanları doldurunuz'
            alert.append(p)
            
            return alert    
    }

    else if(getUserMail == email2 && getUserPassword == password2){
            ind.remove('action')
            const alert = document.getElementById('alert')
            alert.classList.add('alert')
            
            const p = document.createElement('p')
            p.textContent = 'Giriş Başarılı'
            alert.append(p)
            
            return alert     
        }
        
        
    else{
            ind.remove('action')
            const alert = document.getElementById('alert')
            alert.classList.add('alert')
            
            const p = document.createElement('p')
            p.textContent = 'Giriş Başarısız'
            alert.append(p)
            
            return alert    
        }       
})




