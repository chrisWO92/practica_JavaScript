dineroCofla = parseInt(prompt("Cuanto dinero tienes, Cofla?"));
dineroRoberto = parseInt(prompt("Cuanto dinero tienes, Roberto?"));
dineroPedro = parseInt(prompt("Cuanto dinero tienes, Pedro?"));


//ESTO ES LO QUE PUEDE COMPRAR COFLA

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Cofla, compra el helado de agua");
    alert("Te sobran " + (dineroCofla - 0.6));
}
else if (dineroCofla >= 1 && dineroCofla < 1.6){
    alert("Cofla, compra el helado de crema");
    alert("Te sobran " + (dineroCofla - 1));
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7){
    alert("Cofla, compra el bombón marca heladix");
    alert("Te sobran " + (dineroCofla - 1.6));
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8){
    alert("Cofla, compra el bombón marca heladovich");
    alert("Te sobran " + (dineroCofla - 1.7));
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9){
    alert("Cofla, compra el bombón marca helardo");
    alert("Te sobran " + (dineroCofla - 1.8));
}
else if (dineroCofla >= 2.9){
    alert("Cofla, puedes comprar el potecito de helado con confites o el pote de 1/4 kg");
    alert("Te sobran " + (dineroCofla - 2.9));
}
else {
    alert("Cofla, eres un pobre, no te alcanza para comprar un sope");
}


//ESTO ES LO QUE PUEDE COMPRAR PEDRO

if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert("Pedro, compra el helado de agua");
}
else if (dineroPedro >= 1 && dineroPedro < 1.6){
    alert("Pedro, compra el helado de crema");
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7){
    alert("Pedro, compra el bombón marca heladix");
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8){
    alert("Pedro, compra el bombón marca heladovich");
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9){
    alert("Pedro, compra el bombón marca helardo");
}
else if (dineroPedro >= 2.9){
    alert("Pedro, puedes comprar el potecito de helado con confites o el pote de 1/4 kg");
}
else {
    alert("Pedro, eres un pobre, no te alcanza para comprar un sope");
}


//ESTO ES LO QUE PUEDE COMPRAR ROBERTO

if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert("Roberto, compra el helado de agua");
}
else if (dineroRoberto >= 1 && dineroRoberto < 1.6){
    alert("Roberto, compra el helado de crema");
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7){
    alert("Roberto, compra el bombón marca heladix");
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8){
    alert("Roberto, compra el bombón marca heladovich");
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9){
    alert("Roberto, compra el bombón marca helardo");
}
else if (dineroRoberto >= 2.9){
    alert("Roberto, puedes comprar el potecito de helado con confites o el pote de 1/4 kg");
}
else {
    alert("Roberto, eres un pobre, no te alcanza para comprar un sope");
}
