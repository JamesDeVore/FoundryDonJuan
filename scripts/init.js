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
  await mkdirFoundry("./test");
};

window.gatherInputs = () => {
  let name = document.getElementById("dj_name").value;
  let cols = document.getElementById("dj_cols").value;
  let rows = document.getElementById("dj_rows").value;
  if (!name || !rows || !cols) {
    throw new Error("Please ensure all values are valid");
  }
  if (rows < 5 || cols < 5) {
    throw new Error("Rows and Columns must be greater than 5");
  }
  return [name, cols, rows];
};

window.generatePreview = async () => {
  let [name, cols, rows] = window.gatherInputs();
  let image = await requestDungeon(name, cols, rows);
  //get the image div and clear it
  let container = document.querySelector("#preview_container");
  container.innerHTML = "";

  let preview = document.createElement("img");
  preview.src = URL.createObjectURL(
    new Blob([image], { type: "image/png" } /* (1) */)
  );
  container.appendChild(preview);
};

const requestDungeon = async (name, rows, cols) => {
  //this will be where the python based generator gets invoked
  //through either a server, or magic elsewhere
  return await fetch("https://picsum.photos/200").then((res) =>
    res.arrayBuffer()
  );
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

function _createExampleData(length) {
  let data = [];
  for (let i = 0; i < length; i++) {
    data.push(Math.floor(Math.random() * 25));
  }
  console.log(data);
  return data;
}

function saveDungeonImage() {
  //gather inputs
  let [name, cols, rows] = window.gatherInputs();
  let imageByteArray = requestDungeon();
}

async function mkdirFoundry(filename) {
  return new Promise(async (resolve, reject) => {
    // create new file from the response

    const target = getDataSource(filename);
    try {
      // @ts-ignore
      let result = await FilePicker.createDirectory(
        target.source,
        target.path,
        target.bucket ? { bucket: target.bucket } : {}
      );
      resolve(target.path);
    } catch (error) {
      reject(error);
    }
  });
}

const getDataSource = (val) => {
  let source = "data";
  let path = val;

  // check if we are using the patched settings extender
  let matches = val.trim().match(/\[(.+)\]\s*(.+)/);
  if (matches) {
    // we do
    source = matches[1];
    // get bucket information, if S3 is used
    const [s3Source, bucket] = source.split(":");
    if (bucket !== undefined) {
      return {
        source: s3Source,
        bucket: bucket,
        path: matches[2],
      };
    } else {
      return {
        source: source,
        bucket: null,
        path: matches[2],
      };
    }
  } else {
    return {
      source: source,
      path: path,
    };
  }
};
