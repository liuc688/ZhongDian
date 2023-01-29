<template>
  <!-- <system-views :memus="routers" @on-menu-item="onMenuItem">
    <template slot="header">
      <a-button-group slot="enterButton"
        ><a-button
          icon="reload"
          type="link"
          style="color: #ffffff"
          @click="onRefresh"
          :loading="loading"
          >刷新</a-button
        ></a-button-group
      >
    </template>
    <template slot="content">
      <component
        ref="component"
        style="background: none"
        :is="route"
        :params="params"
        @event="event"
      ></component>
    </template>
  </system-views> -->
  <div>
    <page-toggle-transition
          :disabled="animate.disabled"
          animate="fade"
          :direction="animate.direction"
        >
          <component
            ref="component"
            :is="route"
            :params="params"
            @event="event"
            
          ></component>
        </page-toggle-transition>
  </div>
</template>

<script>
import SystemViews from "@/layouts/ApplicationViews/SystemViews";
import PageToggleTransition from "@/components/transition/PageToggleTransition";

import { mapState } from "vuex";
import Home from "./components/home.vue";

export default {
  name: "user",
  components: {
    SystemViews,
    Home,
    PageToggleTransition
  },
  props: {
    id: {
      type: String,
    },
    data: {
      //传递的数据
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  computed: {
    ...mapState("setting", ["animate"]),
  },
  data() {
    return {
      show: false,
      loading: false,
      params: {},
      back: {
        route: null,
        params: null,
      },
      route: "home",
    };
  },
  created() {
    this.init();
  },
  authorize: {},
  methods: {
    init() {
      this.route = "home";
    },
    onLink({ route, params }) {
      if (params.pagination) {
        this.back.route = this.route;
        this.back.params = this.params;
      } else {
        this.back.route = null;
        this.back.params = null;
      }
      //跳转
      this.route = route;
      this.params = params;
    },
    onRefresh() {
      if (
        this.$refs.component &&
        typeof this.$refs.component.onReset === "function"
      ) {
        this.$refs.component.onReset();
      }
    },
    event({ method, params }) {
      if (this[method] && typeof this[method] === "function") {
        this[method](params);
      }
    },
    onMenuItem(record) {
      this.onLink({
        route: record.parent,
        params: record,
      });
    },
    onBack() {
      if (this.back.route) {
        this.route = this.back.route;
        // this.params = this.back.params;
      }
    },
  },
};
</script>
<style></style>
