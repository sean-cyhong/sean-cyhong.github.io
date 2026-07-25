// Initialize medium zoom.
$(document).ready(function () {
  const getMediumZoomMargin = () => (window.matchMedia("(max-width: 575.98px)").matches ? 24 : 72);

  medium_zoom = mediumZoom("[data-zoomable]", {
    background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee", // + 'ee' for trasparency.
    margin: getMediumZoomMargin(),
  });

  $(window).on("resize", function () {
    medium_zoom.update({ margin: getMediumZoomMargin() });
  });
});
