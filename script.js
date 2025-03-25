function downloadOS() {
    document.getElementById("loading-message").style.display = "block";
    const osDownloadLink = "BasicOS.iso";
    const a = document.createElement("a");
    a.href = osDownloadLink;
    a.download = "BasicOS.iso";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => {
      document.getElementById("loading-message").style.display = "none";
    }, 2000);
}
