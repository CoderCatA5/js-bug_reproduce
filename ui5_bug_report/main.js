import './style.css'
// src/main.js
import "@ui5/webcomponents/dist/MultiComboBox.js";
document.querySelector('#app').innerHTML = `
  <div>
    <ui5-multi-combobox id="mycombobox" allow-custom-values="true" no-typeahead="true" accessible-name-ref="edit-pane-value-label" filter="StartsWithPerTerm" placeholder="Select Value" value-state="None">

      <ui5-mcb-item text="Fortune"></ui5-mcb-item>
      <ui5-mcb-item text="Luck"></ui5-mcb-item>
      <ui5-mcb-item text="Success"></ui5-mcb-item>
      <ui5-mcb-item text="Attention"></ui5-mcb-item>
      <ui5-mcb-item text="Caution"></ui5-mcb-item>
      <ui5-mcb-item text="Warning"></ui5-mcb-item>
      <ui5-mcb-item text="Fault"></ui5-mcb-item>
      <ui5-mcb-item text="Error"></ui5-mcb-item>
      <ui5-mcb-item text="Mistake"></ui5-mcb-item>
      <ui5-mcb-item text="LuckLuck"></ui5-mcb-item>
    
      </ui5-multi-combobox>
  </div>
`

document.getElementById('mycombobox').addEventListener('input', function(event) {
  console.log(event,"oninput Fired");
});

document.getElementById('mycombobox').addEventListener('selection-change', function(event) {
  console.log(event,"onSelectionChange Fired");
});

document.getElementById('mycombobox').addEventListener('change', function(event) {
  console.log(event,"onChange Fired");
});

//event for checking if ENTER key is pressed
document.getElementById('mycombobox').addEventListener('keypress', function(event) {
  console.log(event,"onKeypress Fired");
  if(event.key === 'Enter'){
    console.log("Enter key pressed");
  }
});

//event for checking if Paste event is fired
document.getElementById('mycombobox').addEventListener('paste', function(event) {
  console.log(event,"onpaste Fired");
});



//add a new item to the combo box if not present in the list
// document.getElementById('mycombobox').addEventListener('input', function(event) {
//   console.log(event,"oninput Fired");
//   let item = event.detail.item;
//   let value = event.detail.value;
//   if(item === null && value !== null){
//     console.log("Adding new item to the list");
//     let newitem = document.createElement('ui5-mcb-item');
//     newitem.setAttribute('text',value);
//     document.getElementById('mycombobox').appendChild(newitem);
//   }
// });