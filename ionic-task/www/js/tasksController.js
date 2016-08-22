function getTasks() {

  this.items = [];

  var lists = localStorage.getItem("taskList");

  if(lists !== null){
    this.items = angular.fromJson(lists);
  }

  this.save = function () {
    var list = angular.toJson(this.items);
    localStorage.setItem("taskList", list);
  }

  this.add = function (item) {
    this.items.push(item);
  }

  this.remove = function(item){
    var pos = this.items.indexOf(item);

  this.items.splice(pos, 1);
  }
}
