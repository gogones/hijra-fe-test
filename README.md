# How to deploy
## Github Pages
- Clone the project to your github repository.

- Change homepage in `package.json` , like this:
```
https://myusername.github.io/my-app
```
`myusername` is your Github username and `my-app` is your repository name.

- Then, run the following command to deploy:

```
npm run deploy
```

## Docker
If you want to deploy with docker, you can use the following step:
- Clone the project to your github repository.
- Remove homepage from `package.json`
- Then run the following command to deploy:

```
docker-compose -f docker-compose.yml up -d
```