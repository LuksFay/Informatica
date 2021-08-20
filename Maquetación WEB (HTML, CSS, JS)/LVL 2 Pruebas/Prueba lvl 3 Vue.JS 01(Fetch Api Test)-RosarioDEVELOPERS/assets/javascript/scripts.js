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
