let speciouspresent = new Date();
speciouspresent = speciouspresent.getFullYear();

if (speciouspresent != 2022) {


  document.getElementsByClassName("copyright")[0].innerHTML += ("2022" + "-" + speciouspresent)


}









else if  (speciouspresent == 2022) {




  document.getElementsByClassName("copyright")[0].innerHTML += (" " + speciouspresent)


}
