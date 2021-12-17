const githubBtn = document.querySelector('.githubBtn');

githubBtn?.addEventListener('click', async () => await fetch('http://localhost:3000/auth/github'));
