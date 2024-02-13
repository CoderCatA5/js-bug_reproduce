// Import stylesheets
import './style.css';
import '@ui5/webcomponents/dist/Avatar.js';
import '@ui5/webcomponents/dist/Link.js';
import '@ui5/webcomponents/dist/Label.js';
import '@ui5/webcomponents/dist/Button.js';
import '@ui5/webcomponents/dist/Dialog.js';
import '@ui5/webcomponents/dist/MessageStrip.js';
import '@ui5/webcomponents/dist/Input.js';
import '@ui5/webcomponents/dist/Select.js';
import '@ui5/webcomponents/dist/Option.js';
import '@ui5/webcomponents/dist/DatePicker.js';
import '@ui5/webcomponents/dist/List.js';
import '@ui5/webcomponents/dist/StandardListItem.js';
import '@ui5/webcomponents/dist/Title.js';
import '@ui5/webcomponents/dist/Table.js';
import '@ui5/webcomponents/dist/TableColumn.js';
import '@ui5/webcomponents/dist/TableRow.js';
import '@ui5/webcomponents/dist/TableCell.js';
import '@ui5/webcomponents/dist/Combobox.js';

const btn = document.getElementById('opener');
const dialog = document.getElementById('dialog');
btn.addEventListener('click', () => {
  dialog.show();
});
