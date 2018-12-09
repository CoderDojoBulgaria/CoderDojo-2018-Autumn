# JavaScript Single Page Applications(SPA) using NodeJS
## Steps to Deploy NodeJS Application

### Prepare your system to deploy your project using Heroku CLI
* Install Heroku CLI from [this link](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)
* Install Git from [this link](https://git-scm.com/downloads)
* Restart Visual Studio Code if it was opened

### Set the project to be deployable in heroku
* create file "**app.json**"
	* you may find more information in [this link](https://devcenter.heroku.com/articles/app-json-schema)
* create file "**Procfile**"
	* type in the file "**web: node app.js**"
	* you may find more information [here](https://devcenter.heroku.com/articles/procfile)
* update your listening port in your "**app.js**" file to "**(process.env.PORT || 8080)**"

### Create a new project
* click on the button "**Create new app**"
* fill in your project name
* choose the region to be "**Europe**"

### Deploy your app
* Type in the console/terminal in your folder
```
$ heroku login
/press any key and click on the login button in your web browser/

$ heroku git:remote -a [name-of-your-project]
$ git add .
$ git commit -am "message for your commit"
$ git push heroku master

```
