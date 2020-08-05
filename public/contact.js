$(document).ready(function () {
  const formAlert = $("#form-alert");
  const submitButton = $("#submitBtn");
  const message = $("#message");
  const email = $("#email");
  const name = $("#name");

  formAlert.hide();
  submitButton.on("click", (event) => {
    // alert that message was sent //
    event.preventDefault();
    const newMessage = {
      from: email.val().trim(),
      subject: name.val().trim(),
      text: message.val().trim(),
    };
    $.post("/mail", newMessage).then((data) => {
      console.log(data);
      email.val("");
      name.val("");
      message.val("");
      $("#form-alert").show();
      setTimeout(function () {
        $("#form-alert").hide();
      }, 2000);
    });
  });
});
