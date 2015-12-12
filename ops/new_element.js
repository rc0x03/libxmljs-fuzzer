module.exports = function(libxmljs, docs, nodes, log) {
    var doc = docs.random();
    if (!doc) return false;
    var node = new libxmljs.Element(doc, types.random()+Math.floor(Math.random()*10));
    if (!doc.root())
        doc.root(node)
    log(node.name())
    nodes.push(node)
}

var types = [
    'a',
    'b',
]
