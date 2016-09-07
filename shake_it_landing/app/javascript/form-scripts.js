$(".suscribe__container .landing__email form").on("submit", function (event) {
    event.preventDefault();
    submitForm();
});


function submitForm(){
    // Initiate Variables With Form Content
    var email = $(".suscribe__container .landing__email form input").val();
    alert(email);
    $.ajax({
        type: "POST",
        url: "../../php/form-process.php",
        data: "&email=" + email ,
        success : function(text){
            if (text == "success"){
                alert('sent')
            } else {
                alert('error')
                // formError();
                // submitMSG(false,text);
            }
        }
    });
}

// function formSuccess(){
//     $("#contactForm")[0].reset();
//     submitMSG(true, "Message Submitted!")
// }

// function formError(){
//     $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//         $(this).removeClass();
//     });
// }

// function submitMSG(valid, msg){
//     if(valid){
//         var msgClasses = "h3 text-center tada animated text-success";
//     } else {
//         var msgClasses = "h3 text-center text-danger";
//     }
//     $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
// }