const userDB = [
  {
    username: 'a',
    password: '1',
  },
  {
    username: 'b',
    password: '2',
  },
  {
    username: 'c',
    password: '3',
  },
  {
    username: 'd',
    password: '4',
  },
  { username: 'wonju-dev' },
];

const getUser = (username: string) => userDB.find((user) => user.username === username);

interface Iuser {
  username: string;
  password: string;
}

export { getUser, Iuser };
