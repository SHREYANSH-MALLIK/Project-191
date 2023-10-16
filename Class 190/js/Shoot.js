AFRAME.registerComponent("missiles", {
    init: function () {
      this.shootMissile();
    },
    shootMissile: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "w") {
          var missile = document.createElement("a-entity");
  
          missile.setAttribute("gltf-model", "./assets/missile/scene.gltf");;
  
          missile.setAttribute("material", "color", "black");
  
          var cam = document.querySelector("#camera-rig");
          pos = cam.getAttribute("position");
  
          missile.setAttribute("position", {
            x: pos.x,
            y: pos.y + 1,
            z: pos.z - 0.5,
          });
  
          var camera = document.querySelector("#camera").object3D;
  
          //get the camera direction as THREE.js Vector
          var direction = new THREE.Vector3();
          camera.getWorldDirection(direction);
  
          //set the velocity and it's direction
          missile.setAttribute("velocity", direction.multiplyScalar(-50));
  
          var scene = document.querySelector("#scene");
  
          //set the missile as the dynamic entity
          missile.setAttribute("dynamic-body", {
            mass: "50",
          });
  
          //add the collide event listener to the missile
          missile.addEventListener("collide", this.removeMissile);
  
          scene.appendChild(missile);
        }
      });
    },
   removeMissile: function (e) {
      var scene = document.querySelector("#scene");
      
      //missile element
      var element = e.detail.target.el;
  
      //element which is hit
      var elementHit = e.detail.body.el;
  
      if (elementHit.id.includes("enemy")) {
        scene.removeChild(elementHit);
      }
      //remove event listener
      element.removeEventListener("collide", this.removeMissile);
  
      //remove the missiles from the scene   
      scene.removeChild(element);
    },
  });