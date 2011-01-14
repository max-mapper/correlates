$(function(){
  var po = org.polymaps;

  var map = po.map()
      .container($('.map')[0].appendChild(po.svg("svg")))
      .add(po.interact())
      .add(po.hash());

  map.add(po.image()
      .url(po.url("http://{S}tile.cloudmade.com"
      + "/1a1b06b230af4efdbb989ea99e9841af" // http://cloudmade.com/register
      + "/998/256/{Z}/{X}/{Y}.png")
      .repeat(false)
      .hosts(["a.", "b.", "c.", ""])));

  map.add(po.compass()
      .pan("none"));
});