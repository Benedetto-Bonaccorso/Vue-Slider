const { createApp } = Vue

createApp({
  data() {
    return {
        seasons: [
            {
              Image: "season-1.png",
              Title: "season-1",
              Episodes: 26
            }, 
            {
            Image: "season-2.png",
            Title: "season-2",
            Episodes: 26
          }, 
            {
            Image: "season-3.png",
            Title: "season-3", 
            Episodes: 26
          }, 
            {
            Image: "season-4.png",
            Title: "season-4", 
            Episodes: 26
          },
            {
            Image: "season-5.png",
            Title: "season-5", 
            Episodes: 52
          }
        ],
        episodeDuration:11,

        source: "./img/",

        counter: 0,
    }
  }, 
  methods:{
    counterUp(){
      this.counter++
      if(this.counter >= this.seasons.length){
        this.counter=0
      }
    },
    counterDown(){
      this.counter--
      if(this.counter < 0){
        this.counter = this.seasons.length-1
      }
    },
    logg(){
      console.log(this.counter)
    }

  }

}).mount('#app')