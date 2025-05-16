function checkSitePassword() {
    const password = document.getElementById('site-password').value;
    
    database.ref('siteSettings/password').once('value').then(snap => {
        const savedPassword = snap.val();
        
        if (!savedPassword || password === savedPassword) {
            document.getElementById('auth-container').classList.add('hidden');
            document.getElementById('main-container').classList.remove('hidden');
            loadContent('news');
            loadContent('laws');
            loadContent('gc');
        } else {
            document.getElementById('auth-message').textContent = "Wrong password!";
        }
    });
}

function changeSitePassword() {
    const newPassword = document.getElementById('new-site-password').value;
    database.ref('siteSettings').update({ password: newPassword })
        .then(() => alert("Password updated!"));
}
