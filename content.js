function saveContent(tab) {
    const content = document.getElementById(`${tab}-content`).innerHTML;
    database.ref(`content/${tab}`).set(content)
        .then(() => alert(`${tab} saved!`));
}

function loadContent(tab) {
    database.ref(`content/${tab}`).once('value').then(snap => {
        if (snap.exists()) {
            document.getElementById(`${tab}-content`).innerHTML = snap.val();
        }
    });
}

function savePenName() {
    const penName = document.getElementById('pen-name').value;
    if (!penName) return;
    
    const userId = localStorage.getItem('userId') || 'user_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('userId', userId);
    
    database.ref(`members/${userId}`).set({ penName })
        .then(() => alert('Pen name saved!'));
}
