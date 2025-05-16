body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

.hidden {
    display: none;
}

/* Password Screen */
#auth-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #f0f0f0;
}

.auth-box {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    text-align: center;
}

.auth-box input, .auth-box button {
    padding: 8px;
    margin: 5px;
}

/* Main Website */
header {
    background: #333;
    color: white;
    padding: 10px;
    text-align: center;
}

nav a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
}

nav a.active {
    font-weight: bold;
}

.tab-content {
    padding: 20px;
    display: none;
}

.tab-content.active {
    display: block;
}

[contenteditable="true"] {
    border: 1px solid #ccc;
    padding: 10px;
    min-height: 100px;
    margin: 10px 0;
}
