## Programming in NODE ##

Go to - https://github.com/thsorens/klepp



Prerequisites

* Go to https://nodejs.org/en/download/current/
* Download Windows Installer (64-bit) and install it

* Go to https://git-scm.com/downloads
* Download for windows and install

* Go to https://code.visualstudio.com/
* Download and install

* Restart your computer (unless you have a mac)

## Let's get started

* Open git bash (click windows button, type git bash and open the application)

* Go to a folder you can put the code-files in
  - Useful commands: 
    - ls : Will show all files and folders at your current folder
    - cd foldername : Will get you into the folder "foldername" if it exists

* When in the correct folder, type: 
```bash
git clone https://github.com/thsorens/klepp.git
```
* hit enter

This will download the programming package, and you are all set.

Type: 
```bash
cd klepp
```
* hit enter

Type: 
```bash
code .
```
* hit enter

This will open the application used to edit your code.

On the top bar, click on view -> terminal, this will open a terminal-window on the bottom, (looks the same as git bash used earlier).

In the terminal type:
```bash
npm install
```

This will install the packages needed. 

When this completes, try to run some tests. Do it by typing:

```bash
npm run test
```

As you see, the tests shows that something is broken.

On the left side, open calculations.js, and try to fix the broken logic. To test if you now fixed it, run the previous command (npm run test). When all is green, you have succeeded

### HINT:
For at least one of the cases, there might be a bad test-case. Have a look at calculations.test.js to see if you can find the error. 