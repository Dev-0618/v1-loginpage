document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulating authentication (replace with actual authentication logic)
    if (username === 'admin' && password === 'password') {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('commit-container').style.display = 'block';
    } else {
        alert('Invalid credentials');
    }
});

document.getElementById('commit-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const commitId = document.getElementById('commit-id').value;
    const commitMessage = document.getElementById('commit-message').value;
    const branchName = document.getElementById('branch-name').value;

    // Simulating form submission (replace with actual form submission logic)
    console.log('Name:', name);
    console.log('Commit ID:', commitId);
    console.log('Commit Message:', commitMessage);
    console.log('Branch Name:', branchName);

    alert('Commit created successfully!');
    document.getElementById('commit-form').reset();
});
