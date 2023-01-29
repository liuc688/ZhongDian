<template>
  <a-card>
    <a-table :dataSource="dataSource" :columns="columns" :loading="loading">
      <span slot="_title" slot-scope="text, record">
        <div style="text-align: left">
          <template>
            <a-tag v-if="!record.status" class="doc_tags" color="red">审</a-tag>
          </template>
          <template v-if="record.logo.length">
            <a-tag class="doc_tags" color="green">图</a-tag>
          </template>

          <a @click="onCheck(record)" style="color: #1890ff">
            {{ text }}
          </a>
        </div>
      </span>
      <span slot="parent" slot-scope="text, record">
        {{ record.parent.title }}
      </span>
      <span slot="site" slot-scope="text, record">{{
        record.parent.site.title
      }}</span>
    </a-table>
  </a-card>
</template>

<script>
import { approve_document } from "@/services/approve";

export default {
  props: {
    params: {
      type: Object,
      default: () => {
        return {};
      },
    },
    event: {
      type: Function,
    },
    onOpen: {
      type: Function,
    },
  },
  components: {},
  computed: {},
  data() {
    return {
      loading: false,
      curr_site_id: null,
      dataSource: [],
      columns: [
        {
          title: "编号",
          dataIndex: "sort",
          align: "center",
          scopedSlots: { customRender: "sort" },
        },
        {
          title: "标题",
          dataIndex: "title",
          align: "center",
          scopedSlots: { customRender: "_title" },
        },
        {
          title: "目录",
          dataIndex: "parent",
          align: "center",
          scopedSlots: { customRender: "parent" },
        },
        {
          title: "站点",
          dataIndex: "site",
          align: "center",
          scopedSlots: { customRender: "site" },
        },
        {
          title: "发布时间",
          dataIndex: "release",
          sorter: true,
          align: "center",
          scopedSlots: { customRender: "release" },
        },
      ],
    };
  },
  created() {
    this.onLoad();
  },
  methods: {
    onLoad() {
      this.loading = true;
      Promise.all([
        approve_document(),
      ])
        .then((response) => {
          this.dataSource = response[0].data.data;
          this.loading = false;
        })
        .catch((error) => {
          console.log("error", error);
          this.loading = false;
        });
    },
    onCheck(record) {
      console.log("record", record);

      this.$emit("on-open", {
        id: record.id,
        name: "Document",
        title: `文章详情 -- ${record.title}`,
        status: true,
        location: "top",
        sort: 0,
        type: "system",
        hidden: false,
        width: "75%",
        height: "75%",
        router: "Document",
        data: record,
        cancel: () => {},
      });
    },
    onTreeSelect() {},
    onTreeExpand(expandedKeys, info) {
      if (info.expanded) {
        this.channelexpandedKeys = [];
      } else {
        this.channelexpandedKeys = [expandedKeys];
      }
    },
  },
};
</script>
<style scoped>
.approved-paginatsion-sider {
  background-color: #f0f2f5;
}
</style>
