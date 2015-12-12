module.exports = function(libxmljs, docs, nodes, log) {
    var node = nodes.random();
    if (!node || node.type() !== 'element') return false;
    node.text('');
}
