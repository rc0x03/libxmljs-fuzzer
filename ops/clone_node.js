module.exports = function(libxmljs, docs, nodes, log) {
    var node = nodes.random();
    if (!node) return false;
    log(node.name())
    var clone = node.clone();
    clone.name(clone.name()+'Clone')
    log(clone.name())
    nodes.push(clone);
}
