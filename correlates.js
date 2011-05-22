$(function(){
  $("#filter_select_1").sSelect();
  $("#filter_select_2").sSelect();
  
  var po = org.polymaps;

  var map = po.map()
      .container($('.mapContainer')[0].appendChild(po.svg("svg")))
      .add(po.interact())
      .add(po.hash());

  map.add(po.image()
    .url(po.url("http://{S}tile.cloudmade.com"
    + "/d3394c6c242a4f26bb7dd4f7e132e5ff" // http://cloudmade.com/register
    + "/37608/256/{Z}/{X}/{Y}.png")
      .repeat(false)
      .hosts(["a.", "b.", "c.", ""])));

  map.add(po.compass()
      .pan("none"));
});