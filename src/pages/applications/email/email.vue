<template>
  <div style="width: 100%; height: calc(100vh-64px)">
    <a-spin
      :spinning="spinning"
      style="height: 100%; width: 100%"
      tip="Loading..."
    >
      <div style="height: 100%">
        <component
          ref="component"
          :is="route"
          :params="params"
          @event="event"
          :key="params.id"
        ></component>
      </div>
    </a-spin>
  </div>
</template>
<script>
import Home from "./components/home.vue";
import EmailDetails from "./components/emaildetails.vue";

export default {
  components: {
    Home,
    EmailDetails
  },
  props: {
    data: {
      Type: Object,
      default:{}
    },
  },
  data() {
    return {
      spinning: false,
      params: {},
      back: {
        route: null,
        params: null,
      },
      route: "",
    };
  },
  created() {
    if ( this.data && this.data.id) {
      this.onLink({
        route: "EmailDetails",
        params: {
          data: this.data,
        },
      });
    } else {
      this.onLink({
        route: "home",
        params: {},
      });
    }
  },
  methods: {
    event({ method, params }) {
      if (this[method] && typeof this[method] === "function") {
        this[method](params);
      }
    },
    onLink({ route, params }) {
      this.back.route = this.route;
      this.back.params = this.params;
      //跳转
      this.route = route;
      this.params = params;
    },
  },
};
</script>