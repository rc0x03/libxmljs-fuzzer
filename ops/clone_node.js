module.exports = function(libxmljs, docs, nodes, log) {
    var node = nodes.random();
    if (!node) return false;
    log(node.type())
    log(node.name())
    var clone = node.clone();
    clone.name(clone.name()+'_clone')
    log('clone: '+clone.name())
    nodes.push(clone);
}
