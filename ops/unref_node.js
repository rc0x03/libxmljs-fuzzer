module.exports = function(libxmljs, docs, nodes, log) {
    if (nodes.length === 0) return false;
    var index = Math.floor(Math.random()*nodes.length);
    if (!nodes[index])
        return false;
    log(nodes[index].name())
    nodes.splice(index, 1);
}
