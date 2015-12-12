module.exports = function(libxmljs, docs, nodes, log) {
    var node = nodes.random();
    if (!node || node.type() !== 'element') return false;
    log(node.name());
    var name = 'attr_'+nodes.length;
    log(name);
    var attr = {};
    attr[name] = 'test';
    node.attr(attr);
    nodes.push(node.attr('attr_'+nodes.length))
}
