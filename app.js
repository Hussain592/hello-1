

$(function () {
    $("#Form").on("submit", function (e) {
        e.preventDefault();

        var fname = $("#fname").val();
        var lname = $("#lname").val();
        var email = $("#email").val();

        if (fname == "") {
            $("#span1").text("please enter your name")
        } else {
            $("#span1").text()
        } if (lname == "") {
            $("#span2").text("please enter your last name")
        } else {
            $("#span2").text("")
        } if (email == "") {
            $("#span3").text("please enter your email")
        } else {
            $("#span3").text("")
        }
        if (fname !== "" && lname !== "" && email !== "") {
            window.location.href = "thank.html"
        }
    })


})


$('.your-slider').slick({
    dots: true, // Dots indicators ko dikhana
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Kitne slides ek sath dikhana
    slidesToScroll: 1 // Har scroll par kitne slides scroll karna
});






