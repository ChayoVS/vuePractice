const app = new Vue ({
    el: '#app',
    data: {
        mensaje: 'Hola soy Rosario',
        contador: 0
    },

    computed: {
        invertido(){
            return this.mensaje.split('').reverse().join('');
        },

        color(){
            return {
                'bg-succes': this.contador <= 30,
                'bg-warning': this.contador >30 && this.contador < 70,
                'bg-danger': this.contador >= 70
            }
        }
    },

});