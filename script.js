const imageContainer = document.querySelector(".image-container");
const loaderContainer = document.getElementById("loader-container");
const blueThemeButton = document.getElementById("blue-theme");
const yellowThemeButton = document.getElementById("yellow-theme");
const pinkThemeButton = document.getElementById("pink-theme");
const umbrellaImage = document.getElementById("umbrella-image");
const uploadedLogo = document.getElementById("uploaded-logo");

const logoUploadButton = document.getElementById("logo-upload-button");
const logoUploadInput = document.createElement("input");

logoUploadInput.setAttribute("type", "file");
logoUploadInput.setAttribute("accept", ".jpg,.png");
logoUploadInput.style.display = "none";

function showLoader() {
  loaderContainer.style.opacity = "1";
  uploadedLogo.style.display = "none";
}

function hideLoader() {
  loaderContainer.style.opacity = "0";
  uploadedLogo.style.display = "block";
}

function handleLogoUpload(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    const uploadedLogo = document.getElementById("uploaded-logo");
    uploadedLogo.src = reader.result;
    uploadedLogo.style.display = "block";
    umbrellaImage.style.zIndex = "-1";
  };
}
logoUploadButton.addEventListener("click", () => {
  logoUploadInput.click();
});

logoUploadInput.addEventListener("change", handleLogoUpload);

blueThemeButton.addEventListener("click", () => {
  showLoader();
  setTimeout(() => {
    umbrellaImage.style.display = "none";
    document.body.style.backgroundColor = "#FFF";
    logoUploadButton.style.backgroundColor = "#0000FF";
    setTimeout(() => {
      umbrellaImage.src = "./assets/Blue.png";
      umbrellaImage.style.display = "block";
      hideLoader();
    }, 2500);
  });
});

yellowThemeButton.addEventListener("click", () => {
  showLoader();
  setTimeout(() => {
    umbrellaImage.style.display = "none";
    document.body.style.backgroundColor = "#FFF";
    logoUploadButton.style.backgroundColor = "#FFA500";
    setTimeout(() => {
      umbrellaImage.src = "./assets/Yello.png";
      umbrellaImage.style.display = "block";
      hideLoader();
    }, 2000);
  }, 0);
});

pinkThemeButton.addEventListener("click", () => {
  showLoader();
  setTimeout(() => {
    umbrellaImage.style.display = "none";
    document.body.style.backgroundColor = "#FFF";
    logoUploadButton.style.backgroundColor = "#FF00FF";
    setTimeout(() => {
      umbrellaImage.src = "./assets/Pink.png";
      umbrellaImage.style.display = "block";
      hideLoader();
    }, 2000);
  }, 0);
});
