var fs          = require('fs');
var libxmljs    = require('libxmljs');

var maxCycles = 500;
var maxOps = 10;

if (!global.gc) {
    console.log("Must be run with --expose-gc");
    process.exit();
}

Array.prototype.random = function() {
    return this[Math.floor(Math.random()*this.length)]
}

libxmljs.Comment.prototype.name = function() {
    return this.toString();
}

libxmljs.Text.prototype.name = function() {
    return this.toString();
}

var ops = [];
Object.defineProperty(ops, 'length', { value: 0, writable: true })
fs.readdirSync(__dirname+'/ops').forEach(function(file) {
    var name = file.replace('.js', '');
    ops.push(name);
    ops[name] = require('./ops/'+file);
})

function log(msg) {
    process.stdout.write(' - '+msg);
}

var cycles = 0;
while (cycles++ < maxCycles) {
    process.stdout.write('\033[2J\033[1;1H'); // reset console
    console.log('Cycle '+cycles);
    var docs = [new libxmljs.Document];
    var nodes = [new libxmljs.Element(docs[0], 'a1')];
    for (var op = 1; op <= maxOps; op++) {
        if (random_operation(libxmljs, docs, nodes, log) === false) {
            op--;
            continue;
        }else{
            process.stdout.write('\n');
        }
        global.gc();
    }
    docs = null;
    nodes = null;
    global.gc();
    // TODO: detect leaks
}

function random_operation() {
    var name = ops.random();
    process.stdout.write('\r'+op+': '+name+'\t');
    return ops[name].apply(null, arguments);
}
