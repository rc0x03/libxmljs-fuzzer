module.exports = function(libxmljs, docs, nodes, log) {
    var doc = docs.random();
    if (!doc) return false;
    var node = new libxmljs.Element(doc, types[Math.floor(nodes.length/9)]+Math.round(((nodes.length+1)/9)*10));
    if (!doc.root())
        doc.root(node)
    log(node.name())
    nodes.push(node)
}

var types = [
    'a',
    'b',
    'c'
]
