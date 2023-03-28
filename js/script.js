const{createApp} = Vue

createApp({
    data(){
        return{
            message:'hello vue',
            img: 'https://picsum.photos/200',
            imgAlt:'photo random'
        }
    },
}).mount('#app')