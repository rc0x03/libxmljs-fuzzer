module.exports = function(libxmljs, docs, nodes, log) {
    var node = nodes.random();
    if (!node || node.parent()) return false;
    log('removing '+node.name())
    node.remove();
}
