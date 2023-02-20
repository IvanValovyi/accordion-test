import AccordionList from "./components/AccordionList.js";

Vue.createApp({
  components: {
    "accordoin-list": AccordionList,
  },
  data() {
    return {
      message: "Hello Vue!",
    };
  },
}).mount("#app");
