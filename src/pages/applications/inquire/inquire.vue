<template>
  <div style="width: 100%; height: calc(100vh-64px)">
    <a-spin
      :spinning="spinning"
      style="height: 100%; width: 100%"
      tip="Loading..."
    >
    <div class="box_opin">
      <TreeViews
        :header="false"
        :tree-data="organizations"
        :selectedKeys.sync="keys"
        @on-tree-select="onTreeSelect"
        :data="params"
        @on-back="onBack"
      >
        <template slot="search">
          <a-list :loading='loading'>
          <a-tree-select
            style="width: 100%"
            show-search
            allowClear
            @change="handleChanges"
            v-model="key"
            :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
            :treeData="organizations"
            placeholder="请选择搜索站点"
            :replaceFields="{
              title: 'title',
              key: 'id',
              value: 'id',
            }"
            :filterTreeNode="
              (value, node) => {
                const data = node.componentOptions.propsData.dataRef;
                return (
                      data.title.indexOf(value) !== -1 ||
                      data.name.indexOf(value) !== -1
                    );
              }
            "
          ></a-tree-select>
          </a-list>
        </template>
        <template slot="content" style="height: 100%">
          <component
            ref="component"
            :is="route"
            :params="params"
            @event="event"
            :key="key"
          ></component>
        </template>
      </TreeViews>
      </div>
    </a-spin>
  </div>
</template>


<script>
import Home from "./components/home.vue";
import InquireDetails from "./components/inquiredetails.vue";
import TreeViews from "@/layouts/ApplicationViews/TreeViews";
import { organization_tree } from "@/services/organization";



export default {
  components: {
    Home,
    InquireDetails,
    TreeViews
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
      key:null,
      keys: [],
      organizations: [],
      organization: "",
      expandedKeys: [],
      title: "",
      currData: {},
      selectedRows: [],
    };
  },
  created(){
    if ( this.data && this.data.id) {
      this.onLink({
        route: "InquireDetails",
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
    this.init();
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
    init() {
      organization_tree() //站点列表
        .then((response) => {
          console.log("我是站点列表", response.data.data);
          this.organizations = response.data.data;
          this.$nextTick(() => {
            this.expandedKeys = this.organizations.map((item) => {
              return item.id;
            });
          });
          // this.spinning = false;
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleChanges(value, key, e) {
      this.currData = e.triggerNode.$options.propsData.dataRef;
      this.key = this.currData.id;
      this.keys = [this.key];
      this.params.id = this.currData.id;
    },
    onTreeSelect(record, e) {
      if (e.selected) {
        this.currData = e.node.$options.propsData.dataRef;
        this.key = this.currData.id;
        this.keys = [this.key];
        this.params.id = this.currData.id;
        console.log('this.params.id',this.params.id);
      } else {
        this.currData = {};
        this.key = "";
        this.keys = [];
        this.params.id = undefined;
      }
    },
    onBack() {
      console.log("onBack");
    },
    onRefresh() {
      this.init();
    },
    onClear() {},
    onSelectChange() {},
    deleteRecord() {},
  },
};
</script>