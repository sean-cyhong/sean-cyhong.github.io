// Initialize medium zoom.
$(document).ready(function () {
  const getMediumZoomMargin = () => (window.matchMedia("(max-width: 575.98px)").matches ? 24 : 72);

  medium_zoom = mediumZoom("[data-zoomable]", {
    background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee", // + 'ee' for trasparency.
    margin: getMediumZoomMargin(),
  });

  const setMediumZoomActive = () => document.body.classList.add("medium-zoom-active");
  const clearMediumZoomActive = () => document.body.classList.remove("medium-zoom-active");

  medium_zoom.on("open", setMediumZoomActive);
  medium_zoom.on("closed", clearMediumZoomActive);
  medium_zoom.on("detach", clearMediumZoomActive);

  $(window).on("resize", function () {
    medium_zoom.update({ margin: getMediumZoomMargin() });
  });
});
