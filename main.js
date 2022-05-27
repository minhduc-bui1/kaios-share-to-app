"use strict";

const shareBtn = document.getElementById("share-btn");
const userText = document.querySelector("body").textContent;

shareBtn.onclick = () => {
    var sharing = new MozActivity({
        name: "share",
        data: {
            type: "text/*",
            number: 1,
            body: [userText],
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