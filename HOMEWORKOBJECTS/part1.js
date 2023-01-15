let animal = {
    name: "betoven",
    kind: "dog",
    speak: function(message) {
       return `${this.message}`
    }

}
let message = prompt(`Enter your message`);
console.log( `Betoven says: ${message}` );
