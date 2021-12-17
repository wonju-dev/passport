const boardElement = document.querySelector('.board') as HTMLTextAreaElement;
const nameInput = document.querySelector('.username') as HTMLInputElement;
const passwordInput = document.querySelector('.password') as HTMLInputElement;

const githubBtn = document.querySelector('.githubBtn');
const localBtn = document.querySelector('.localBtn');

githubBtn?.addEventListener('click', async () => await fetch('http://localhost:3000/auth/github'));

localBtn?.addEventListener('click', async () => {
  const username = nameInput.value;
  const password = passwordInput.value;
  const response = await fetch('http://localhost:3000/auth/local', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  let msg = '';
  if (response.status === 401) {
    msg = 'fail to authenticate!';
  } else {
    const json = await response.json();
    msg = `hello ${json.username}`;
  }
  boardElement.value = msg;
});
