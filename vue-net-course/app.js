const app = Vue.createApp({
  data() {
    return {
      title: "Hello Vue Data",
      age: 24,
      gender: "MALE",
      show: true,
      x:0,
      y:0,
    };
  },
  methods: {
    changeTitle() {
      this.title = "hey deba";
    },
    handleEvents() {
      alert("Events ente");
      this.title = "hey mouseOver"
    },
    mouseMove(e){
        this.x=e.offsetX
        this.y=e.offsetY
    }
  },
});

app.mount("#app");
