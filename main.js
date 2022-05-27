"use strict";

const shareBtn = document.getElementById("share-btn");
let userText = document.querySelector("body").innerText;

shareBtn.onclick = () => {
    var sharing = new MozActivity({
        name: "share",
        data: {
            type: "text/plain",
            blobs: [userText],
        },
    });
    // if image successfully shared
    sharing.onsuccess = function () {
        msg.innerText = "Shared image successfully";
    };
    // if error in sharing image
    sharing.onerror = function () {
        msg.innerText = "SHARING \n" + this.error;
    };
};