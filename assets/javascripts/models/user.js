var User = LoL.Sivir.extend(function(attributes) {
  this.shelf = "users";
  
  var defaults = {
    name: "",
    email: "",
    password: ""    
  };
  this.setAttributes(defaults, attributes);
});