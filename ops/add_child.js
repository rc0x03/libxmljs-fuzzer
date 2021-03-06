module.exports = function(libxmljs, docs, nodes, log) {
    var child = nodes.random();
    var parent = nodes.random();
    if (!child || !parent ||  parent === child) return false;
    if (parent.type() !== 'element')
        return false;
    if (child.parent() && child.parent() == parent) return false;
    log(child.name()+" to "+parent.name())
    parent.addChild(child);
}
