## start server
server url https://testoveelifback.vercel.app/api
```
cd server
npm i
npm start
```
or with docker
```
cd server
docker build . -t express-server
docker run -p 3000:5050 -d express-server
```
## start client

```
cd client
npm i
npm start
```
or with docker
```
cd server
docker build . -t express-client
docker run -p 3000:3000 -d express-client
```

