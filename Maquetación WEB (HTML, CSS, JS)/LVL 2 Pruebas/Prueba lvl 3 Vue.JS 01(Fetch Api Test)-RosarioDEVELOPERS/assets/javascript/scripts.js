const app = new Vue({
    el: '#app',
    data:{
        usersData:[],
    },
    methods:{
        llamarAPI(){
        axios.get('https://reqres.in/api/users?per_page=12')
        .then(res=>{
            let data = res.data.data;
            this.usersData = data;
            // console.log(data[0].avatar);
        })},
    },
    created(){
        this.llamarAPI()
    }
    
})

Vue.component('usuarios',{
    template: //html
    `
    <div>
        <div class="card-img-top d-flex justify-content-center">
            <img :src="user.avatar" alt="" class="rounded-circle" >
        </div>
        <div class="card-body">
            <h5 class="card-title">{{user.first_name}} {{user.last_name}}</h5>
            <p class="card-text">{{user.email}}</p>
            <button class="btn btn-primary">
                +Add Friend
            </button>
        </div>
    </div>
    `,
    props:["user"]

})