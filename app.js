const inputElement = document.querySelector("input");
const sendBtn = document.querySelector("button");
const errorOutput = document.querySelector(".error-output");
const captionElement = document.querySelector(".caption");
const imgElement = document.querySelector(".img");

sendBtn.addEventListener("click", () => {
  if (
    !isNaN(inputElement.value) &&
    inputElement.value > 0 &&
    inputElement.value < 99
  ) {
    getImage();
  } else {
    errorOutput.innerHTML =
      inputElement.value > 99 || inputElement.value <= 0
        ? "number must be between 0 to 99"
        : "Not A Number";
  }
});

async function getImage() {
  try {
    const res = await fetch("https://api.imgflip.com/get_memes");
    if (!res.ok) {
      throw "response status" + res.status;
    }

    const data = await res.json();
    const { width, height, id, name, url } =
      data.data.memes[inputElement.value];

    captionElement.innerText = name;
    imgElement.src = url;
    imgElement.alt = name;
    imgElement.width = width;
    imgElement.height = height;
    imgElement.id = id;
  } catch (e) {
    alert("error : " + e);
  }
}
