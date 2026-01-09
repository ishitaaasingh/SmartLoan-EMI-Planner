function calculateEMI() {

    let P = document.getElementById("loan").value;
    let R = document.getElementById("rate").value;
    let T = document.getElementById("time").value;

    if (P === "" || R === "" || T === "") {
        alert("Please fill all fields");
        return;
    }

    R = R / 12 / 100;

    let EMI = (P * R * Math.pow(1 + R, T)) / (Math.pow(1 + R, T) - 1);

    let totalAmount = EMI * T;
    let interest = totalAmount - P;

    document.getElementById("emi").innerText = EMI.toFixed(2);
    document.getElementById("interest").innerText = interest.toFixed(2);
    document.getElementById("total").innerText = totalAmount.toFixed(2);
}
