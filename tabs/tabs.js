(function() {

  $.Tabs = function (el) {
  this.$el = $(el);
  this.$contentTabs = $($("ul.tabs").data("content-tabs"));
  this.$activeContent = $(this.$contentTabs.find(".active"));
  this.$activeTab = $($("ul.tabs").find(".active"));
  // console.log(this.$activeTab);
  this.$el.on("click", "a", this.clickTab.bind(this));
  // console.log(this); //tabs object
  };
  //constructor function
  //call it V to make a new one

  $.fn.tabs = function () {
    return this.each(function () {
      new $.Tabs(this);
    });
  };

  $.Tabs.prototype.clickTab = function (e) {

    e.preventDefault();
    // this.$activeTab.removeClass("active");
    // this.$activeContent.removeClass("active");
    this.$activeContent.addClass("transitioning");

    $(".active").removeClass("active");
    var toggle = $(e.currentTarget)
    //
    this.$activeContent.one("transitionend", function (e) {
      $(".transitioning").removeClass("transitioning");

      toggle.addClass("active");
      this.$activeTab = $($("ul.tabs").find(".active"));

      var id = this.$activeTab.attr("href");

      this.$activeContent = $(this.$contentTabs.find(id));
      this.$activeContent.addClass("active");
      // debugger

    }.bind(this));
  }

})();
