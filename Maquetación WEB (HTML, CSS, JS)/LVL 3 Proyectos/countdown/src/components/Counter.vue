<template>
    <div class="counter">
        <div>
            {{displayDays}}
            <p>Days</p>
        </div>
        <span>:</span>
        <div>
            {{displayHours}}
            <p>Hours</p>
        </div>
        <span>:</span>
        <div>
            {{displayMinutes}}
            <p>Minutes</p>
        </div>
        <span>:</span>
        <div>
            {{displaySeconds}}
            <p>Seconds</p>
        </div>
    </div>
</template>

<script>

export default {
    data: () => ({
        displayDays: 0,
        displayHours: 0,
        displayMinutes: 0,
        displaySeconds: 0
    }),
    computed:{
        _seconds:()=>1000,
        _minutes(){
            return this._seconds * 60
        },
        _hours(){
            return this._minutes * 60
        },
        _days(){
            return this._hours * 24
        }
    },
    mounted() {
        this.showRemaining()
    },
    methods: {
        formatNum: num => (num < 1 ? "0" : num),
        showRemaining(){
            const timer = setInterval(()=>{
                const now = new Date();
                const end = new Date("2021/8/25");     //SET INTERVAL HERE
                const distance = end.getTime() - now.getTime();

                if(distance < 0){
                    clearInterval(timer);
                    return;
                }
                const days = Math.floor((distance / this._days));
                const hours = Math.floor((distance % this._days) / this._hours);
                const minutes = Math.floor((distance % this._hours) / this._minutes);
                const seconds = Math.floor((distance % this._minutes) / this._seconds);
                this.displayDays = this.formatNum(days);
                this.displayHours = this.formatNum(hours);
                this.displayMinutes = this.formatNum(minutes);
                this.displaySeconds = this.formatNum(seconds);
            }, 1000);
        }
    }
};
</script>

<style scoped>
.counter{
    display: flex;
    justify-content: center;
    gap: 20px;
    /* padding: 20px;
    text-align: center;
    width: 100%; */
}
</style>