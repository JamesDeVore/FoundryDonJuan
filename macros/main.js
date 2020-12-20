let d = new Dialog({
  title: "DonJon Dungeon Generator",
  content: `<div>
  <h1>Create your dungeon!</h1>
  <div>
    Name of Dungeon
      <input type="text" id="dj_name">
  </div>
  <div>Number of Rows<input type="number" id="dj_cols"></div>
  <div>Number of Columns<input type="number" id="dj_rows"></div>
  <div>
    <img src="" id="dj_preview" width="250" alt="" />
    <button onclick=window.generatePreview()>Hi</button>
  </div>
</div>`,
  buttons: {
    one: {
      icon: '<i class="fas fa-check"></i>',
      label: "Option One",
      callback: () => {
        let name = document.getElementById("dj_name").value;
        let cols = document.getElementById("dj_cols").value;
        let rows = document.getElementById("dj_rows").value;
        if (!name || !rows || !cols) {
          throw new Error("Please ensure all values are valid");
        }
        if (rows < 5 || cols < 5) {
          throw new Error("Rows and Columns must be greater than 5");
        }
        window.GenerateDungeon(name, rows, cols);
      },
    },
    two: {
      icon: '<i class="fas fa-times"></i>',
      label: "Cancel",
      callback: () => console.log("No Don Juanning here"),
    },
  },
  default: "two",
  render: (html) =>
    console.log("Register interactivity in the rendered dialog"),
  close: (html) =>
    console.log("This always is logged no matter which option is chosen"),
});
d.render(true);
