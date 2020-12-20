const exampleResponse = {
  name: "Yo what up",
  data: [
    [1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1],
    [1, 1, 1, 0, 0],
    [1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1],
    [1, 1, 1, 0, 0],
    [1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1],
    [1, 1, 1, 0, 0],
    [1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1],
    [1, 1, 1, 0, 0],
    [1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1],
    [1, 1, 1, 0, 0],
    [1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1],
    [1, 1, 1, 0, 0],
    [1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1],
    [1, 1, 1, 0, 0],
    [1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1],
    [1, 1, 1, 0, 0],
    [1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1],
  ],
};

window.GenerateDungeon = async (name, rows, cols) => {
  console.log(name, rows, cols);
  console.log(Actor);
};

window.generatePreview = () => {
  let image = document.getElementById("dj_preview");
  image.src = `data:image/png;base64,${window.btoa(
    new Uint8Array(exampleResponse.data.flat()).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ""
    )
  )}`;
  console.log(image.src);
  console.log(
    window.btoa(
      new Uint8Array(exampleResponse.data.flat()).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ""
      )
    )
  );
};

const requestDungeon = async (name, rows, cols) => {
  //this will be where the python based generator gets invoked
  //through either a server, or magic elsewhere
};

const createScene = (imagePath) => {
  //use the foundry API to generate the actual scene item and save it
};

function _arrayBufferToBase64(buffer) {
  var binary = "";
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}
