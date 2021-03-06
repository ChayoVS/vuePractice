// Instanciamos Vue

const app = new Vue ({
    el:'#app', 
    data: {
        titulo: 'Hola Mundo con Vue',
        frutas: ['Manzana', 'Pera', 'Plátano', 'Fresa'],
        fruits: [
            {nombre:'Manzana', cantidad:10},
            {nombre:'Pera', cantidad:0},
            {nombre:'Plátano', cantidad:3},
            {nombre:'Fresa', cantidad:15},
        ],
        newFruit: '',
        nuevaFruta: '',
        total: 0
    },
    methods: {
        addFruit() {
            this.fruits.push({
                nombre: this.newFruit, cantidad: 0
            })
            this.newFruit = ''
        }, 

        agregarFruta() {
            this.frutas.push(
                this.nuevaFruta
            )
            this.nuevaFruta = ''
        },
        
    },

    computed: {
        sumarFrutas(){
            this.total = 0;
            for(fruit of this.fruits){
                this.total = this.total + fruit.cantidad;
            }
            return this.total;
        }
    }
})

