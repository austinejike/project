$("document").ready(function() {
$('#tblItem').hide();
$("#tblList").hide();

var nameOfServices = [
    {item: "FIELD DEVELPMENT PROGRAM", unitePrice: 100, qty: 1, price: "", id:2},
    {item: "IMPORT OF FEED", unitePrice: 150 , qty: 1, price: "", id:2},
    {item: "SERVICES MANTAINCE", unitePrice: 50, qty: 1, price: "", id:2},
    {item: "IMPORT OF CRUDE", unitePrice: 250, qty: 1, price: "", id:3},
    {item: "MAN POWER MOBLIZTION", unitePrice: 120, qty: 1, price: "", id:3},
    {item: "DATA BASE PROGRAM", unitePrice: 300, qty: 1, price: "", id:3},
    {item: "AGRICULTURAL DEVELOPMENT", unitePrice: 200, qty: 1, price: "", id:4},
    {item: "WOMAN EMPOWERMENT", unitePrice: 170, qty: 1, price: "", id:4},
    {item: "MANUAL LABOUR", unitePrice: 210, qty: 1, price: "", id:4},
    {item: "SCHOOL FEEDING PROGRAM", unitePrice: 230, qty: 1, price: "", id:5},
    {item: "RICE IMPORTATION", unitePrice: 350, qty: 1, price: "", id:5},
    {item: "RAIL WAY FUND", unitePrice: 400, qty: 1, price: "", id:5},
    {item: "EDUCTIONAL PROGRAM", unitePrice: 20, qty: 1, price: "", id:6},
    {item: "PAYMENT SALARY", unitePrice: 350, qty: 1, price: "", id:6},
    {item: "POWER GENERATION", unitePrice: 4020, qty: 1, price: "", id:6}
] 
$(".select-control").change(function(){
    $("tbody").html("");
    for(var i = 0; i < nameOfServices.length; i++){
        if($(this).val()== nameOfServices[i].id){
            $("tbody").append(`<tr class="tbltr">
            <td><input type="radio" name="services" class="radio"> ${nameOfServices[i].item}</td>
            <td class="price">${nameOfServices[i].unitePrice}</td>
            <td><input type="number" class="qty"  value="${nameOfServices[i].qty}" disabled></td>
            <td class="price2">${nameOfServices[i].price}</td>
          </tr>`);
          $('#tblItem').show();
        $("#tblList").show();


        };
        
    };

    $(".radio").click(function(){
        $(".price2").html("") // clear the filed if price
        $(".qty").val(1)
        $(".qty").attr("disabled", "disabled") //set the attribute of qty to disabale
        
        if($(this).is(':checked')) { 
            var finder = $(this).closest("tr").find(".qty")
           // var finderGet = finder[1]
            finder[0].disabled = false;
            //$(this).closest("tr").$(".qty").prop('disabled', false)

            var pbl = $(this).closest('tr').find("td")// find the table data

            var pbl2 = pbl[1].innerText // get the index of the td (unitprice) and find what is inside using [.innnerTex]
             //console.log(pbl2)
            var multipl = $(".qty").val()
            var multply = pbl2 * multipl
            var pay = parseFloat(multply).toLocaleString()
            pbl[3].innerText = pay
            $("#amountToPay").attr("placeholder", pay)
           

            $(".qty").focusout(function(){
                $(".price2").html("")
                var newUnit = pbl[1].innerText
              //  console.log(newUnit)
                var newval = $(this).val()
                var newPrice =  newUnit * newval
                var pay2 = parseFloat(newPrice).toLocaleString()
                pbl[3].innerText = pay2
                $("#amountToPay").attr("placeholder", pay2)
                // console.log(newPrice)
                
                $("#submitBtn").click(function(e){
                    e.preventDefault()
                    $("#form_container").hide()
                    $("#displayForm").show()
                    //setTimeout(()=>$(".p_success").remove(), 3000)
                     var name = $("#payersName").val();
                   // var payMoney= $(".pay_money").val();
                     var address = $("#payerAddress").val();
                     var pNumber = $("#phoneNumber").val();
                     var state = $("#inputState").val();
                    $("#tbody1").append( `<tr>
                    <td>${name }</td>
                    <td>${pay2}</td>
                    <td>${address}</td>
                    <td>${pNumber}</td>
                    <td>${state}</td>
                    </tr>`)
                    
                    $(".tbltr").hide()
                  // alert(1)
                });
                
            }) 
        //$(".price2").html(`<p>${multply}</p>`) 

        } ;     
    });

});

$("#btnLogOff").click(function(){
    if (confirm('Do you want to Logoff from this page?')) {
        window.location = "login.html"
     }
})

   
 
 
});