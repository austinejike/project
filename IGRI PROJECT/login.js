$(document).ready(function(){
    
    $("#btnLogin").click(function(){

        if($("#emailInput").val() === "") {
            $("#message1").html("Email required")
            setTimeout( () => $("#message1").remove(), 3000)
        }else if($("#passwordInput").val() === ""){
            $("#message").html("password required")
            setTimeout( () => $("#message").remove(), 3000)
        }else if($("#emailInput").val() === "sharpcode@gmail.com" && $("#passwordInput").val() === "sharpcode"){
            window.location = "IGR.html"
        }else{
           // alert('incorect email or password')
            $("#message").html("Incorect email or password").css
            setTimeout( () => $("#message").remove(), 3000)
        }
        
     });

});