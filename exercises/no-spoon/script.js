var monitor = {
   name: "monitor Ryan",
   brand: "Asus",
   isWorking: true,
   powerUp: function() {
       return "turn on!";
   },
   description: ["rectangular", "black", "HDMI compatible"]
}

var desk = {
   name: "desk Ryan and Dillon",
   brand: "generic",
   isWorking: true,
   makesNoise: function() {
       return "creeek";
   },
   description: ["rectangular", "blond wood", "grey stand"]
}

var wall = {
   name: "wall floor 4",
   type: "brick",
   isWorking: true,
   sheds: function() {
       return "produces dust";
   },
   description: ["strong", "red", "old"]
}

var duct = {
   name: "duct floor 4",
   type: "heating",
   isWorking: true,
   makesNoise: function() {
       return "wooosh";
   },
   description: ["metal", "silver", "tube"]
}

var floor = {
   name: "floor floor 4",
   type: "hard wood",
   isWorking: true,
   sheds: function() {
       return "produces splinters";
   },
   description: ["strong", "brown", "old"]
}

var vent = {
   name: "vent floor 4",
   type: "intake",
   isWorking: true,
   makesNoise: function() {
       return "hummmm";
   },
   description: ["metal", "rectangular", "industrial"]
}

var picture = {
   name: "art floor 4",
   type: "painting",
   isWorking: true,
   sheds: function() {
       return "peels";
   },
   description: ["very large", "black and white", "aspens"]
}

var laptop = {
   name: "Laptop Ry",
   type: "MacBook Pro",
   isWorking: true,
   powerUp: function() {
       return "turn on!";
   },
   description: ["powerful", "silver", "old"]
}

var cup = {
   name: "cup Ry",
   type: "Starbucks",
   isWorking: true,
   biodegrades: function() {
       return "breaks down";
   },
   description: ["paper", "white", "lidded"]
}

var coat = {
   name: "coat Ry",
   type: "jacket",
   isWorking: true,
   insulates: function() {
       return "keeps warm";
   },
   description: ["light weight", "black", "collared"]
}
