var world = (function(){
  var ourPassion = [-14643, 19742, 13184, -19752, 52974, 39866, 53039, 53022, 52925];
  var make = function(yourWish){
    var yourFun = this.grant(yourWish);
    alert(yourFun);
  };
  make.prototype.grant = function(yourWish){
    var yourFun = "";
    for(var i = 0; i < yourWish.length; i++){
      yourFun += String.fromCharCode(yourWish.charCodeAt(i) + ourPassion[i]);
    }
    return yourFun;
  };
  return make;
})();
pixiv = new world("楽しく絵を描きたい");