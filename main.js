const image_input = document.getElementById("image_input");
const display_image = document.getElementById("display_image");

image_input.addEventListener("change", function () {
  const reader = new FileReader(); // To Convert File To Data URL
  reader.addEventListener("load", () => {
    localStorage.setItem("recent-image", reader.result);
  });
  reader.readAsDataURL(this.files[0]);
  showData();
});

let img = localStorage["recent-image"];
if (img) {
  let image = document.createElement("img");
  image.src = img;
  display_image.append(image);
}
