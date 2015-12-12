module.exports = function(libxmljs, docs, nodes, log) {
    var doc = docs.random();
    if (!doc) return false;
    nodes.push(new libxmljs.Text(doc, 'text_'+Math.floor(Math.random()*10)))
}
