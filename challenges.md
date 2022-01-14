## Faced the following error:
1. error TS6054: File 'dist/server.js'' has an unsupported extension. The only supported extensions are '.ts', '.tsx', '.d.ts', '.cts', '.d.cts', '.mts', '.d.mts'.
it is solved byt 
```sh


The error was due to the use of single quotes in the npm script "watch": "tsc-watch --onSuccess 'node ./dist/server.js' ", .

Solved the issue by escaping double quotes. Don't know if its an OS thing. Am using VSCode editor on Windows 10.

"watch": "tsc-watch --onSuccess \"node ./dist/server.js\"",

```

2. SyntaxError: Cannot use import statement outside a module
that was as a result of trying to node run up the server.ts not server.js the solution was one of two 
- change the path in the script in package.json to run node on js file on dist folder
### or 
- change the no to ts-node in the script

3. error  Environment(s) 'dev, development' not found.
- solution
edit file database.json develop_mode to be dev
and test_mode to be test