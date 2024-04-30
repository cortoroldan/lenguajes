document.getElementById("emailForm").addEventListener("submit", function(event){
    let destinatario = document.getElementById("email").value;

    this.action = "https://formsubmit.co/" + destinatario;

    this.submit();
})