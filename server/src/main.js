import jsonServer from 'json-server';
import path from 'path';
import fs from 'fs';
import bodyParser from 'body-parser';

const server = jsonServer.create();
const dbPath = path.join(process.cwd(), 'src', 'db.json');
const router = jsonServer.router(dbPath);
const middlewares = jsonServer.defaults();
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
const port = process.env.VITE_APP_SERVER_PORT || 9000;
const token = 'UM9a6pZMsbNyPnXn9Ao2e6Z0KEYqZ4spaWH46f4y';

server.use(middlewares);
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.post('/api/login', (req, res) => {
  const user = db.users.find(item => {
    return item.user === req.body.user && item.password === req.body.password;
  });

  if (user) {
    res.json({
      ...user,
      token
    });
  } else {
    res.json(null);
  }
});

server.use('/api', router);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});