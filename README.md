#react-ts-boiler

The goal: An easy template to spin up new front end projects, 
with the following base:

- TypeScript
    - Catch as many errors as possible at compile vs runtime
    - Scale to full teams of developers
- React + Redux
- Webpack


### How to start a new project ###

Create a new empty repo on github. Remember the name of it.

Locally, clone this repository as a mirror.

```bash
$ git clone --mirror https://github.com/redarrowlabs/react-ts-boiler
$ cd react-ts-boiler
```

Change the origin to your new repo.

```bash
$ git remote set-url --push origin https://github.com/exampleuser/mirrored
```

Fetch from the new origin.

```bash
$ git fetch -p origin
```

Because no changes have actually been made to these files, the next time you push, 
push as a mirror:

```bash
$ git push --mirror
```

From this point on, you can push normally and still recieve updates from react-ts-boiler.