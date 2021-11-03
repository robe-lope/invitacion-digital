function copiarCbu() { 
  var copyText = document.getElementById("cbu");

  copyText.select();
  copyText.setSelectionRange(0, 99999);


  navigator.clipboard.writeText(copyText.value);

}
function copiarAlias() { 
  var copyText = document.getElementById("alias");

  copyText.select();
  copyText.setSelectionRange(0, 99999);


  navigator.clipboard.writeText(copyText.value);

}

var countDownDate = new Date("Dec 4, 2021 20:05:00").getTime();
  var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance/(1000*60*60*24));
    var hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((distance%(1000*60*60))/(1000*60));
    var seconds = Math.floor((distance%(1000*60))/1000);
    if(hours < 10 && hours > 0){
    	document.getElementById("launch").innerHTML = "FALTAN " + days + " DIAS "+"0"+hours+":"+minutes+":"+seconds+" ";
    }
    else{
    document.getElementById("launch").innerHTML = "FALTAN " + days + " DIAS "+hours+":"+minutes+":"+seconds+" ";
}
    if(distance<0){
      clearInterval(x);
      document.getElementById("launch").innerHTML = "Rompete la pera rey 🍻";
    }
  }, 1000)

/*FUNCION DE ALERTA COPIADO*/
var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')
var alertTrigger2 = document.getElementById('liveAlertBtn2')
var alertList = document.querySelectorAll('.alerta')
var alerts =  [].slice.call(alertList).map(function (element) {
  return new bootstrap.Alert(element)
})

var alertNode = document.querySelector('.alerta')
var alerta = bootstrap.Alert.getInstance(alertNode)

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible fade show" role="alert">' + message + '<button type="button" class="btn-close btn-sm" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}
if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alert('Copiado al portapapeles', 'success')
  })
}
if(alertTrigger2){
	alertTrigger2.addEventListener('click', function () {
    alert('Copiado al portapapeles', 'success')
  })

}


// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById("foto1");
var img2 = document.getElementById("foto2");
var img3 = document.getElementById("foto3");
var img4 = document.getElementById("foto4");
var img5 = document.getElementById("foto5");
var img6 = document.getElementById("foto6");
var img7 = document.getElementById("foto7");
var img8 = document.getElementById("foto8");
var img9 = document.getElementById("foto9");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img1.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img3.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img4.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img5.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img6.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img7.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img8.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img9.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}