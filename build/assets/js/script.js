$(document).ready(function() {
  // Sidebar Menu
  $("#leftside-navigation .sub-menu > a").click(function(e) {
    $("#leftside-navigation ul ul").slideUp(),
      $(this)
        .next()
        .is(":visible") ||
        $(this)
          .next()
          .slideDown(),
      e.stopPropagation();
  });
});

//# sourceMappingURL=script.js.map
