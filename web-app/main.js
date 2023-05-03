// Javascript modules are imported at the top like this.
// This one is for a function to exchange messages with a server.
import Reverse from "./Reverse.js";

// Get references to the html elements that we are going to be manipulating.
const input_pane = document.getElementById("input_pane");
const output_pane = document.getElementById("output_pane");
const send_button = document.getElementById("send_button");

// Define what happens when you click the send button.
send_button.onclick = function () {
    const text_to_reverse = input_pane.value;

    // Call the reverse function and update the display.
    const reversed_text = Reverse.reverse(text_to_reverse);
    output_pane.value = reversed_text;
};
