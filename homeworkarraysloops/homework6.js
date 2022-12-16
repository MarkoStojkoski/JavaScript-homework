let first5= ['Marko', 'Bojan', 'Darko','Kiko']
let last = ['Stojkoski', 'Gjoreski', 'Mateski', 'Radeski']

function fistLastname (first5, last) {
    for (let i=0; i< first5.length; i++) {
        console.log ( i + " " + first5[i] +" " + last[i]);
    }
}

fistLastname (first5, last);