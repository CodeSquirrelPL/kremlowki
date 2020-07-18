function onSubmit(token) {
    console.log("Submitting form, yay");
    console.log(token);
    const verifyUrl = "https://www.google.com/recaptcha/api/siteverify";
    const secret = "<-snip->"; // Doesn't work, need to do this on the backend

    $.post(verifyUrl, {"secret": secret, "respone": token}, (data, status) => {
        console.log(data);
    })
    // document.getElementById("form-internal").submit();
  }