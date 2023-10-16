AFRAME.registerComponent("target-ammunition", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `ammunition${i}`;
  
        //position variables
        var posX = Math.random() * 3000 + -1000;
        var posY = Math.random() * 2 + -1;
        var posZ = Math.random() * 3000 + -1000;
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createAmmunitions(id, position);
      }
    },
  
    createAmmunitions: function (id, position) {
      var terrainEl = document.querySelector("#terrain");
      var ammunitionEl = document.createElement("a-entity");
  
      ammunitionEl.setAttribute("id", id);
      ammunitionEl.setAttribute("material", "color", "#ff9100");
      ammunitionEl.setAttribute("position", position);
  
      //set the static body attribute of physics system
      ammunitionEl.setAttribute("gltf-model", "./assets/ammunition_box/scene.gltf");
  
      ammunitionEl.setAttribute("game-play", {
        elementId: `#${id}`,
      });
  
      terrainEl.appendChild(ammunitionEl);
    },
  });