
//  Selection des elements dans le dom
const radio = document.getElementById('personnalise');
const contenuSup = document.getElementById('contenue-sup');
const radioFem= document.getElementById('fem');
const radioHom = document.getElementById('hom');

// afficher le contenue sup si personnalise est choisis
radio.addEventListener('change', function(){
    if (this.checked) {
        contenuSup.classList.remove('hidden');
    }
})

//  cacher le contenue sup si femme est choisis
radioFem.addEventListener('change', function(){
    if (this.checked) {
        contenuSup.classList.add('hidden');
    }
})

//  cacher le contenue sup si Homme est choisi
radioHom.addEventListener('change', function(){
    if (this.checked) {
        contenuSup.classList.add('hidden');
    }
})
