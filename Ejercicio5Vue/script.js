const app = new Vue({
    el: '#app',
    data: {
        saludo: 'soy el ciclo de vida de Vue'
    },

    //Se ejecutan automáticamente sin usarlas, pero se pueden ocupar

    beforeCreate() {
        console.log('beforeCreate');
    },

    created() {
        //Al crear los métodos, observadores y eventos, pero aún no accede al DOM
        //Aún no puede acceder a 'el'
        console.log('created');
    },
    beforeMount() {
        //Se ejecuta antes de insertar el DOM
        console.log('beforeMount');
    },
    mounted() {
        //Se ejecuta al insertar el DOM 
        console.log('mounted');
    },
    beforeUpdate() {
        //Al detectar un cambio
        console.log('beforeUpdate');
    },
    updated() {
        //Al realizar los cambios
        console.log('updated');
    },
    beforeDestroy() {
        //Antes de destruir la instancia
        console.log('beforeDestroy');
    },
    destroyed() {
        //Se destruye toda la instancia :( 
        console.log('destroyed')
    },
})