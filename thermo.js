//<script>
function convert(degree) {
    var x;
    if (degree == "C") {
        x = document.getElementById("c").value * 9 / 5 + 32;
        document.getElementById("f").value = Math.round(x);
    } else {
        x = (document.getElementById("f").value -32) * 5 / 9;
        document.getElementById("c").value = Math.round(x);
    }
}
//Below is to prevent any character inputs outside of 1-10
document.querySelector("input").addEventListener("keyup", function () {
    console.log(this.value);
});

// </script> These script tags will be needed inline.


/*
Function referenced from: 
http://www.w3resource.com/
*/