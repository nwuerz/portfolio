$(document).ready(() => {
  const rainbow = $(".rainbow");
  const rainbowLink = "https://rainbowremodelingroofing.com";
  const charity = $(".charity");
  const charityLink = "https://charity-wowness.herokuapp.com/";
  const instachef = $(".instachef");
  const instachefLink = "https://nwuerz.github.io/InstaChef/";

  openProjectLink = (img, link) => {
    img.on("click", () => {
      window.open(link);
    });
  };

  openProjectLink(rainbow, rainbowLink);
  openProjectLink(charity, charityLink);
  openProjectLink(instachef, instachefLink);
});
