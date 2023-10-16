AFRAME.registerComponent("flying-dragons", {
    init: function () {
      for (var i = 1; i <= 20; i++) {

        var id = `hurdle${i}`;
        var posX = Math.random() * 3000 + -1000;
        var posY = Math.random() * 2 + -2;
        var posZ = Math.random() * 3000 + -1000;
  
        var position = { x: posX, y: posY, z: posZ };

        this.flyingDragons(id, position);
      }
    },
    flyingDragons: (id, position) => {

      var terrainEl = document.querySelector("#terrain");

      var dragonEl = document.createElement("a-entity");

      dragonEl.setAttribute("id", id);
  
      dragonEl.setAttribute("position", position);
      dragonEl.setAttribute("scale", { x: 50, y: 50, z: 50 });

      dragonEl.setAttribute("gltf-model", "./assets/dragon_animation_flying/scene.gltf");

      dragonEl.setAttribute("animation-mixer", {});

      dragonEl.setAttribute("game-play", {
        elementId: `#${id}`,
      });

      terrainEl.appendChild(dragonEl);
    },
  });