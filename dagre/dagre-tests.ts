namespace DagreTests {
  var gDagre = new dagre.graphlib.Graph();
  gDagre.setGraph({})
    .setDefaultEdgeLabel(function(){ return ; })
    .setNode("a", {})
    .setEdge("b", "c");

  dagre.layout(gDagre);
}
