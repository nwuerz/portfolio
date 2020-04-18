$("#submitBtn").on("click", ()=>{
    const newMessage = {
        from: $("#email").val().trim(),
        subject: $("#name").val().trim(),
        text: $("#message").val().trim()
    };

    $.post("/mail", newMessage)
    .then((data)=> {
        console.log(data);
    });
});