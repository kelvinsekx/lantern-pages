If you have Node installed on your computer, you should have the commands `node` and `npm` available in a terminal. Make sure the Node version is a recent one (20.x or higher). You can verify that by opening a terminal and running the command `node -v`.

If you don’t have the node command, you’ll need to download it.

## Your First Node in a REPL

Once you have node ready, open a terminal and run the command on its without any argument.

REPL stands for Read-Eval-Print-Loop. It is a convenient way to quickly test javascript and node code.

```bash
$ node
>
> Math.random()
> 0.0893322323219892
>
>
```

Node will read the line, evaluate it ad print the result, and loop over these three things for everything you type until you exit the session (which you can do with `Ctrl + D`). Note how the Print step happened automatically. This is not the case when you execute the code in a Node script. Let's do that next.

## Your First Node in a Script

Create a new directory and then `cd` into it:

```bash
$ mkdir node-example-1
$ cd node-example-1
```

Open up your code editor and create a file name test.js. Put the same `Math.random()` line into it:

```bash
//file: node-example-1/test.js

Math.random()
```

To execute that script, in the terminal, type the following command:

```bash
$ node test.js
```

You will notice the command will basically do nothing because we did not output anything in that script. To output something, you can use the global `console` object, which is similar to the one available in browsers.

```bash
//file: node-example-1/test.js

console.log(
    Math.random()
)
```

Executing node-example-1/test.js will output a random number. We're using both Javascript (`Math` object) and an object from the Node API (`console`). The `console.log` method is a mask that writes the value of its arguments to the default standard output stream, (stdout) of the running process.

The console object is one of many top-level global scope objects that we can access in Node without needing to declare any dependencies. Similar to how the global windows object in browsers can be accessed with the globalThis property, in Node, the globalThis property is the global object and the console object is part of it. All properties of globalThis can be accessed directly: for example, `console.log` instead of `globalThis.console.log` which also works.
