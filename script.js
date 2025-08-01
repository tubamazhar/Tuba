
    $(document).ready(function () {
      // Toggle message
      $("#toggleBtn").click(function () {
        $("#message").slideToggle();
      });

      // Hide message
      $("#hideBtn").click(function () {
        $("#message").fadeOut();
      });
      // Show message
      $("#showBtn").click(function () {
        $("#message").fadeIn();
      });
    })
    