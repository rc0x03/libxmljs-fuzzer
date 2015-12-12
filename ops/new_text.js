module.exports = function(libxmljs, docs, nodes, log) {
    var doc = docs.random();
    if (!doc) return false;
    var name = 'text_'+Math.floor(Math.random()*10);
    log(name);
    nodes.push(new libxmljs.Text(doc, name))

}
