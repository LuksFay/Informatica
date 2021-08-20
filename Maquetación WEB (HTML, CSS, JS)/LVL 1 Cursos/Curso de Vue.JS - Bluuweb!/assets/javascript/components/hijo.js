Vue.component('hijo',{
    template: //html
    `
    <div class="py-5 bg-success">
    <h4>Componente Hijo: {{numera}}</h4>
    <h4>Nombre: {{nombre}}</h4>
    <h3>{{hola}}</h3>
    
    </div>
    `,
    props:['numera','hola'],
    data(){
        return{
            nombre: 'algo'
        }
    },
    mounted(){
        this.$emit('nombreHijo',this.nombre);
    }
})