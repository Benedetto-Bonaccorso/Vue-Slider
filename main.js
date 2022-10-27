const { createApp } = Vue
console.log("aaaa")
createApp({
  data() {
    return {
        seasons: [
            {Image: "season-1.png",
            Title: "season-1",
            episodes: 26}, 
            {Image: "season-2.png",
            Title: "season-2",
            episodes: 26}, 
            {Image: "season-3.png",
            Title: "season-3", 
            episodes: 26}, 
            {Image: "season-4.png",
            Title: "season-4", 
            episodes: 26},
            {Image: "season-5.png",
            Title: "season-5", 
            episodes: 52}
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
  }

}).mount('#app')