module.exports = function(libxmljs, docs, nodes, log) {
    var doc = docs.random();
    if (!doc || doc.root()) return false;
    var node = nodes.random();
    if (!node || node.parent()) return false;
    log(node.name())
    doc.root(node);
}
