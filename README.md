# Build a command line app with Node.js
## Create a node project
Make a project/package directory and run ```npm init```
in the directory.

## Create an executable JS file
* add the [shebang](http://unix.stackexchange.com/a/87600) line
```
#!/usr/bin/env node
```
* make the file executable with ```chmod +x file.js```
* install "commander" with ```npm install commander --save```
* write the code
## Make it a shell command
* add 'bin' field in ```package.json``` to map a command
  name to a command file, e.g.
```
"bin":{
  "command-name": "command-file.js"
}
```
* create a symbolic link to the command globally by
  running the following command in the project folder:
```
npm link
```

# Sources
* https://medium.freecodecamp.org/writing-command-line-applications-in-nodejs-2cf8327eee2
* https://shapeshed.com/command-line-utilities-with-nodejs/
* https://www.smashingmagazine.com/2017/03/interactive-command-line-application-node-js/#hello-world
* https://x-team.com/blog/a-guide-to-creating-a-nodejs-command/
