/* MIT License

Copyright (c) 2021 Agustin Bassi (github.com/agustinBassi)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.*/

//=======[ Settings & Data ]===================================================

const LOG_MAX_LINES = 50;

//=======[ Show help code ]====================================================

function View_ShowHelp(){
    // Get the modal
    var modal = document.getElementById("help_modal");
    // Get the button that opens the modal
    var btn = document.getElementById("help_link");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

//=======[ Logs code ]=========================================================

function Log_ShowData(server_response) {
    var json_response = JSON.parse(server_response);
    console.log("Data received is: " + server_response);
    document.getElementById("logs_textarea").innerHTML = server_response;
}

function Log_AppendData(server_response) {
    current_value = document.getElementById("logs_textarea").value;
    // clear logs text area when lines superates MAX_LOG_LINES
    if (current_value.split("\n").length - 1 >= LOG_MAX_LINES) {
        Log_ClearData();
        current_value = "";
    }
    document.getElementById("logs_textarea").innerHTML = server_response + "\n" + current_value;
}

function Log_ClearData() {
    console.log("Clearing view data")
    document.getElementById("logs_textarea").innerHTML = "";
}


//=======[ Utils code ]========================================================

function Utils_GetElementValue(element_to_get) {
    // TODO: Evaluate other element types like checkbox, dropdown, etc.
    return document.getElementById(element_to_get).value;
}

function Utils_IsInvalidValue(value) {
    if (value == null || value == "" || value == "undefined") {
        return true;
    }
    return false;
}

//=======[ End of file ]=======================================================
