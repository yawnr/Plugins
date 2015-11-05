(function () {

  $.Carousel = function (el) {
    this.$el = $(el);
    this.$activeIdx = 0;
    $("ul > li:first-child").addClass("active");
    $(this.$el.find(".slide-left")).on("click", this.slideLeft.bind(this));
    $(this.$el.find(".slide-right")).on("click", this.slideRight.bind(this));
    this.$activeCat = $(this.$el.find(".active"));

  }

  $.fn.carousel = function () {
    return this.each(function () {
      new $.Carousel(this);
    });
  };

  $.Carousel.prototype.slideRight = function (e) {
    $(".active").removeClass("active");
    $("li").removeClass("left");
    $("li").removeClass("right");
    this.$activeCat.addClass("right");
    this.$activeIdx -= 1;
    $("ul > li:nth-child(" + (this.$activeIdx + 1) + ")").addClass("active");
    this.$activeCat = $(this.$el.find(".active"));
  }

  $.Carousel.prototype.slideLeft = function (e) {
    $(".active").removeClass("active");
    $("li").removeClass("right");
    $("li").removeClass("left");
    this.$activeCat.addClass("left");
    this.$activeIdx += 1;
    $("ul > li:nth-child(" + (this.$activeIdx + 1) + ")").addClass("active");
    this.$activeCat = $(this.$el.find(".active"));
  }




})();
