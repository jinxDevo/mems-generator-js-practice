const inputElement = document.querySelector("input");
const sendBtn = document.querySelector("button");
const outputElement = document.querySelector(".output")

sendBtn.addEventListener("click", async () => {
  outputElement.innerHTML = isNaN(inputElement.value) ? `<p>Not A Number</p>` : ""
  if(!(inputElement.value > 99 || inputElement.value <= 0)){
    const res = fetch(`https://api.imgflip.com/get_memes`)
    res.then(res => res.json())
        .then(data =>
            { const memes = data.data.memes[inputElement.value]
              outputElement.innerHTML = `
              <p>${memes.name}</p>
              <img src=${memes.url} width=${memes.width} height=${memes.height}/>
            `}
            )
  }else{
    outputElement.innerHTML = `<p>Number must be between 0 to 99</p>`
  }
});
