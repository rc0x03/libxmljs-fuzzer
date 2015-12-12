module.exports = function(libxmljs, docs, nodes, log) {
    var node = nodes.random();
    if (!node || node.type() !== 'element') return false;
    var children = node.childNodes();
    if (children.length === 0) return false;
    children.random().remove();
}
