const lastDate = "20st july 2023 12: 00 AM";
document.getElementById("date").innerText = lastDate;
// console.log(lastDate);

// all inputs select
const inputs = document.querySelectorAll("input");
// console.log(inputs);
function clock ()  {
    const last = new Date("lastDate");
    const now = new Date();
    const diff = (lastDate - now) / 1000;
    console.log(diff);
    if (diff < 0) return;

    // convert inTo Days, hours, minuts, and seconds
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600 / 24) % 60;
    inputs[2].value = Math.floor(diff / 3600) % 60;
    inputs[3].value = Math.floor(diff) % 60;

};

clock();
