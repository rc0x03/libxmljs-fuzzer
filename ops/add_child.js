module.exports = function(libxmljs, docs, nodes, log) {
    var child = nodes.random();
    var parent = nodes.random();
    if (!child || !parent || parent.type() === 'text' ||  parent === child) return false;
    if (child.parent() && child.parent() == parent) return false;
    log("adding "+child.name()+" to "+parent.name())
    parent.addChild(child);
}
