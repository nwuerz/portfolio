$(document).ready(function () {
  const formAlert = $("#form-alert");
  const submitButton = $("#submitBtn");
  const messageLink = $("span")
  const formDiv = $("form");

  formAlert.hide();
  let shouldShowForm = false;
  formDiv.hide();

  messageLink.on("click", () => {
    shouldShowForm = !shouldShowForm;
    shouldShowForm ? formDiv.show() : formDiv.hide();
    window.scrollTo(0, document.body.scrollHeight);
  })

  submitButton.on("click", (event) => {
    const message = $("#message");
    const email = $("#email");
    const name = $("#name");
    event.preventDefault();
    const newMessage = {
      from: email.val().trim(),
      subject: `${name.val().trim()} - nickwuerz.com`,
      text: message.val().trim(),
    };
    $.post("/mail", newMessage).then((data) => {
      console.log(data);
      email.val("");
      name.val("");
      message.val("");
      formAlert.show();
      setTimeout(function () {
        formAlert.hide();
        formDiv.hide();
      }, 2000);
    });
  });
});
