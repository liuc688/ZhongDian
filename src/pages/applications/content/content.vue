<template>
  <a-spin
    :spinning="spinning"
    style="height: 100%; width: 100%"
    tip="Loading..."
  >
    <a-layout style="width: 100%; height: 100%">
      <!-- 左侧列表 -->
      <a-layout-sider style="height: 100%">
        <!-- 站点/组织选择 -->
        <a-tree-select
          @change="changeaorg"
          show-search
          style="width: 100%; padding: 10px 5%; background: #1890ff33"
          v-model="organization"
          :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
          :treeData="organizations"
          placeholder="请选择所在组织"
          :replaceFields="{
            title: undefined,
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
        >
          <span
            slot="title"
            slot-scope="record"
            color="#f50"
            class="channel-tree-item"
          >
            {{ record.title }}
            <a-tag
              color="orange"
              v-if="record.hidden"
              style="max-height: 25px; margin: auto"
              >隐</a-tag
            >
          </span>
        </a-tree-select>
        <!-- 目录/目录列表 -->
        <a-tabs
          style=""
          class="tabs_top"
          v-model="activekey"
          @contextmenu.prevent="ondesktopmenu"
          @change="callback"
          :tabBarGutter="80"
          size="large"
          :tabBarStyle="tabBarStyle"
        >
          <!-- 目录列表 -->
          <a-tab-pane key="1" tab="目录">
            <div class="tabs_swich">
              <span>拖拽排序： </span>
              <a-switch v-model="draggables" @change="draggableschange">
                <a-icon slot="checkedChildren" type="check" />
                <a-icon slot="unCheckedChildren" type="close" />
              </a-switch>
              <a-button
                style="float: right"
                size="small"
                type="primary"
                @click="addchannel"
              >
                <a-icon type="plus" />创建目录</a-button
              >
            </div>
            <!-- 检索目录模块 -->
            <a-tree-select
              show-search
              style="width: 100%; padding: 10px 5%; background: #1890ff33"
              v-model="channelsss"
              @change="researchchannel"
              :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
              :treeData="channelData"
              placeholder="检索目录"
              :replaceFields="{
                title: undefined,
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
            >
              <span
                slot="title"
                slot-scope="record"
                color="#f50"
                class="channel-tree-item"
              >
                {{ record.title }}
                <a-tag
                  color="orange"
                  v-if="record.hidden"
                  style="max-height: 25px; margin: auto"
                  >隐</a-tag
                >
                <a-tag
                  color="blue"
                  v-if="record.maps && record.maps.length"
                  style="max-height: 25px; margin: auto"
                  >映</a-tag
                >
                <a-tag
                  color="cyan"
                  v-if="record.link"
                  style="max-height: 25px; margin: auto"
                  >链</a-tag
                >
              </span>
            </a-tree-select>
            <!-- 目录树 -->
            <a-tree
              class="draggable-tree"
              :tree-data="channelData"
              :draggable="draggables"
              :default-expand-all="true"
              auto-expand-parent
              :expandedKeys.sync="channelexpandedKeys"
              :selectedKeys.sync="channelselectedKeys"
              :block-node="true"
              :replaceFields="{
                title: undefined,
                key: 'id',
                value: 'id',
              }"
              ref="channelTree"
              @select="treeSelect"
              @expand="onExpand"
              @dragenter="onDragEnter"
              @drop="onDrop"
            >
              <span
                slot="title"
                slot-scope="record"
                color="#f50"
                class="channel-tree-item"
              >
                <div class="channel-tree-item_left">
                  {{ record.title }}
                  <a-tag
                    color="orange"
                    v-if="record.hidden"
                    style="max-height: 25px; margin: auto"
                    >隐</a-tag
                  >
                  <a-tag
                    color="blue"
                    v-if="record.maps && record.maps.length"
                    style="max-height: 25px; margin: auto"
                    >映</a-tag
                  >
                  <a-tag
                    color="cyan"
                    v-if="record.link"
                    style="max-height: 25px; margin: auto"
                    >链</a-tag
                  >
                </div>
                <a-icon
                  type="plus-square"
                  class="icon_more"
                  :style="{
                    fontSize: '16px',
                    paddingTop: '2px',
                    paddingRight: '5px',
                    color: '#8f8f8f',
                  }"
                  @click.stop="(event) => event.stopPropagation()"
                  @click="addchannel(record)"
                />

                <a-dropdown class="icon_more" :trigger="['click']">
                  <a-icon
                    type="bars"
                    :style="{
                      fontSize: '20px',
                      paddingTop: '2px',
                      paddingRight: '5px',
                    }"
                    @click.stop="(event) => event.stopPropagation()"
                  />
                  <a-menu slot="overlay" style="width: 160px">
                    <a-menu-item>
                      <a @click="addchannel(record)">
                        <a-icon type="plus-circle" />
                        目录添加
                      </a>
                    </a-menu-item>
                    <a-menu-item class="dividers">
                      <a @click="editchannel(record)">
                        <a-icon type="edit" />
                        目录编辑
                      </a>
                    </a-menu-item>
                    <a-menu-item>
                      <a @click="channelMappinng(record)">
                        <a-icon type="switcher" />
                        目录映射
                      </a>
                    </a-menu-item>
                    <a-menu-item class="dividers">
                      <a @click="onDelete(record)">
                        <a-icon type="delete" />
                        目录删除
                      </a>
                    </a-menu-item>
                    <a-menu-item class="dividers">
                      <a @click="onEditForms(record)">
                        <a-icon type="cloud-server" />
                        挂载表单
                      </a>
                    </a-menu-item>
                    <a-menu-item>
                      <a @click="onStatus(record, true)">
                        <a-icon type="setting" />
                        设置审批流程
                      </a>
                    </a-menu-item>
                    <a-menu-item class="dividers">
                      <a @click="settemplate(record)">
                        <a-icon type="setting" />
                        设置模板
                      </a>
                    </a-menu-item>
                    <a-menu-item>
                      <a @click="onHidden(record)">
                        <a-icon type="eye" />
                        显示/隐藏
                      </a>
                    </a-menu-item>
                    <a-menu-item>
                      <a @click="getmoudle(record)">
                        <a-icon type="download" />
                        文章导入模板
                      </a>
                    </a-menu-item>

                    <a-menu-item class="dividers">
                      <a @click="copyname(record.name)">
                        <a-icon type="copy" />
                        获取目录名称
                      </a>
                    </a-menu-item>
                    <a-sub-menu key="test">
                      <template slot="title">
                        <a-icon type="reload" />更新目录缓存
                      </template>
                      <a-menu-item>
                        <a @click="Updatecache(record, true)">
                          <a-icon type="sync" />
                          读取最新数据
                        </a>
                      </a-menu-item>
                      <a-menu-item>
                        <a @click="Updatecache(record, false)">
                          <a-icon type="sync" />
                          读取缓存数据
                        </a>
                      </a-menu-item>
                    </a-sub-menu>
                  </a-menu>
                </a-dropdown>
              </span>
            </a-tree>
          </a-tab-pane>
          <!-- 栏目列表 -->
          <a-tab-pane key="2" tab="栏目">
            <div class="tabs_swich">
              <span>拖拽排序： </span>
              <a-switch v-model="draggabless" @change="draggableschanges">
                <a-icon slot="checkedChildren" type="check" />
                <a-icon slot="unCheckedChildren" type="close" />
              </a-switch>
              <div style="float: right">
                <a-button
                  size="small"
                  type="primary"
                  @click="adddirectory"
                  block
                >
                  <a-icon type="plus" />创建栏目
                </a-button>
              </div>
            </div>
            <!-- 检索栏目模块 -->
            <a-tree-select
              show-search
              style="width: 100%; padding: 10px 5%; background: #1890ff33"
              v-model="columnless"
              @change="researchcolumn"
              :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
              :treeData="directoryData"
              placeholder="检索栏目"
              :replaceFields="{
                title: undefined,
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
            >
              <span
                slot="title"
                slot-scope="record"
                color="#f50"
                class="channel-tree-item"
              >
                {{ record.title }}
                <a-tag
                  color="cyan"
                  v-if="record.link"
                  style="max-height: 25px; margin: auto"
                  >链</a-tag
                >
              </span>
            </a-tree-select>
            <!-- 栏目树 -->
            <a-tree
              class="draggable-tree"
              :tree-data="directoryData"
              :draggable="draggabless"
              :default-expand-all="true"
              auto-expand-parent
              :expandedKeys.sync="expandedKeys"
              :selectedKeys.sync="selectedKeys"
              :block-node="true"
              :replaceFields="{
                title: undefined,
                key: 'id',
                value: 'id',
              }"
              ref="directoryTree"
              @select="treeSelectdire"
              @dragenter="onDragEnter"
              @drop="onDrop"
            >
              <span
                slot="title"
                slot-scope="record"
                color="#f50"
                class="channel-tree-item"
              >
                <div class="channel-tree-item_left">
                  {{ record.title }}
                  <a-tag
                    color="orange"
                    v-if="record.hidden"
                    style="max-height: 25px; margin: auto"
                    >隐</a-tag
                  >
                  <a-tag
                    color="cyan"
                    v-if="record.link"
                    style="max-height: 25px; margin: auto"
                    >链</a-tag
                  >
                </div>
                <a-icon
                  type="plus-square"
                  class="icon_more"
                  :style="{
                    fontSize: '16px',
                    paddingTop: '2px',
                    paddingRight: '5px',
                    color: '#8f8f8f',
                  }"
                  @click.stop="(event) => event.stopPropagation()"
                  @click="adddirectory(record)"
                />
                <a-dropdown class="icon_more" :trigger="['click']">
                  <a-icon
                    type="bars"
                    :style="{
                      fontSize: '20px',
                      paddingTop: '2px',
                      paddingRight: '5px',
                    }"
                    @click.stop="(event) => event.stopPropagation()"
                  />
                  <a-menu slot="overlay" style="width: 160px">
                    <a-menu-item>
                      <a @click="adddirectory(record)">
                        <a-icon type="plus-circle" />
                        添加栏目
                      </a>
                    </a-menu-item>
                    <a-menu-item>
                      <a @click="editdirectory(record)">
                        <a-icon type="edit" />
                        编辑栏目
                      </a>
                    </a-menu-item>
                    <a-menu-item>
                      <a @click="editchanneldirectory(record)">
                        <a-icon type="edit" />
                        编辑栏目目录
                      </a>
                    </a-menu-item>
                    <a-menu-item>
                      <a @click="changedirectory(record)">
                        <a-icon type="edit" />
                        修改名称
                      </a>
                    </a-menu-item>
                    <a-menu-item>
                      <a @click="deletedirectory(record)">
                        <a-icon type="delete" />
                        删除栏目
                      </a>
                    </a-menu-item>
                    <a-menu-item>
                      <a @click="copyname(record.name)">
                        <a-icon type="copy" />
                        获取栏目名称
                      </a>
                    </a-menu-item>
                  </a-menu>
                </a-dropdown>
              </span>
            </a-tree>
          </a-tab-pane>
        </a-tabs>
      </a-layout-sider>
      <!-- 右侧页面 -->
      <a-layout style="height：100%">
        <!-- 站点详情 -->
        <a-layout-header>
          <div class="header_styles">
            <a-descriptions size="small">
              <a-descriptions-item label="站点名">
                {{ siteinfo.title }}
              </a-descriptions-item>
              <a-descriptions-item label="组织机构代码">
                {{ siteinfo.code }}
              </a-descriptions-item>

              <!-- <a-descriptions-item label="是否隐藏">
                {{ siteinfo.hidden ? "是" : "否" }}
              </a-descriptions-item> -->
              <a-descriptions-item label="站点名称">
                {{ siteinfo.name }}
                <a-icon
                  class="copys"
                  @click="copyname(siteinfo.name)"
                  type="copy"
                />
              </a-descriptions-item>

              <a-descriptions-item label="站点分类">
                {{ statuslist[siteinfo.status] }}
              </a-descriptions-item>
              <a-descriptions-item label="域名">
                <a-tag
                  v-for="item in siteinfo.domain"
                  color="#108ee9"
                  :key="item"
                  @click="copyname(item)"
                  >{{ item }}</a-tag
                >
              </a-descriptions-item>
            </a-descriptions>
            <a-space style="position: absolute; right: 20px; top: 60px">
              <a-button icon="reload" @click="onReload">刷新</a-button>
              <a-dropdown :trigger="['click']">
                <a-button
                  class="ant-dropdown-link"
                  @click="(e) => e.preventDefault()"
                >
                  <a-icon type="more" />
                  站点操作
                </a-button>
                <a-menu slot="overlay" style="width: 160px">
                  <a-menu-item>
                    <a @click="onStatus(siteinfo)">
                      <a-icon type="retweet" />
                      设置审批流程
                    </a>
                  </a-menu-item>
                  <a-menu-item>
                    <a @click="siteEdit(siteinfo)" v-auth="`organization.edit`">
                      <a-icon type="edit" />
                      站点编辑
                    </a>
                  </a-menu-item>
                  <a-menu-item>
                    <a
                      @click="siteTemplate(siteinfo)"
                      v-auth="`organization.edit`"
                    >
                      <a-icon type="pic-center" />
                      设置模版
                    </a>
                  </a-menu-item>
                  <a-menu-item>
                    <a
                      @click="recordInfo(siteinfo)"
                      v-auth="`organization.edit`"
                    >
                      <a-icon type="wallet" />
                      备案信息
                    </a>
                  </a-menu-item>
                  <a-menu-item>
                    <a @click="bindings('wx')">
                      <a-icon type="wallet" />
                      绑定微信公众号
                    </a>
                  </a-menu-item>
                  <a-menu-item>
                    <a @click="bindings('wb')">
                      <a-icon type="wallet" />
                      绑定微博账号
                    </a>
                  </a-menu-item>
                  <a-menu-item>
                    <a @click="exportes">
                      <a-icon type="download" />
                      导出目录
                    </a>
                  </a-menu-item>
                  <a-menu-item>
                    <a @click="exportescount">
                      <a-icon type="download" />
                      导出目录发文量
                    </a>
                  </a-menu-item>
                  <a-menu-item>
                    <a @click="exportessitecount">
                      <a-icon type="download" />
                      导出站点发文量
                    </a>
                  </a-menu-item>
                  <a-menu-item>
                    <a @click="docbatch">
                      <a-icon type="cloud-upload" />
                      文章批量导入
                    </a>
                  </a-menu-item>
                  <a-menu-item>
                    <a @click="getbatchresult">
                      <a-icon type="cloud-upload" />
                      查看导入结果
                    </a>
                  </a-menu-item>
                  <a-sub-menu key="test">
                    <template slot="title">
                      <a-icon type="reload" />更新站点缓存
                    </template>
                    <a-menu-item>
                      <a @click="Updatecaches(true)"> 读取最新数据 </a>
                    </a-menu-item>
                    <a-menu-item>
                      <a @click="Updatecaches(false)"> 读取缓存数据 </a>
                    </a-menu-item>
                  </a-sub-menu>
                </a-menu>
              </a-dropdown>
            </a-space>
          </div>
        </a-layout-header>
        <a-layout-content style="height: 90%; overflow: auto">
          <page-toggle-transition
            :disabled="animate.disabled"
            :animate="animate.name"
            :direction="animate.direction"
          >
            <component
              ref="component"
              :is="router"
              :params="params"
              @event="event"
              @on-open="onOpen"
              :key="params.id || params.channel || params.site || params.parent"
            ></component>
          </page-toggle-transition>
        </a-layout-content>
        <!-- <a-layout-footer>Footer</a-layout-footer> -->
      </a-layout>
    </a-layout>
    <a-modal
      :title="Titles"
      :visible="visible"
      @ok="handleOk"
      @cancel="handleCancel"
      width="50%"
    >
      <k-form-build :value="formDatas" ref="kcompanyForm" />
    </a-modal>
    <a-modal
      :title="titless"
      :visible="visibles"
      @ok="handleOks"
      @cancel="handleCancels"
      width="50%"
    >
      <k-form-build :value="formcountDatas" ref="kcompanyForms" />
    </a-modal>
    <a-modal
      title="文章批量导入"
      :visible="docvisibles"
      @ok="dochandleOks"
      @cancel="
        () => {
          docvisibles = false;
        }
      "
      width="50%"
    >
      <k-form-build :value="docformDatas" :config="config" ref="docformDatas" />
    </a-modal>
  </a-spin>
</template>
<script>
import {
  channel_list,
  directory_list,
  channel_hidden,
  channel_delete,
  directory_delete,
  channel_sort,
  directory_sort,
  thirdparty_binding,
  thirdparty_get,
  channel_export,
  channel_documentcount,
  operate_lockopen,
  operate_lockclose,
  render_reset,
  channel_excel_template, //文章导入模板下载
  document_excel_import, //文章批量导入
  download_result_paginate, // 文章结果分页
} from "@/services/content";
import {
  organization_tree,
  organization_get,
  site_documentcount,
} from "@/services/organization";
import InfoDetails from "./components/InfoDetails.vue";
import InfoSite from "./components/InfoSite.vue";
import EditDocuments from "./components/EditDocuments.vue";
import MountForms from "./components/MountForm.vue";
import SetTemplate from "./components/SetTemplate.vue";
import EditChannel from "./components/EditChannel.vue";
import ChannelMapping from "./components/ChannelMapping.vue";
import SiteTemplate from "./components/SiteTemplates.vue";
import RecordInfo from "./components/RecordInfos.vue";
import InfoDirectory from "./components/InfoDirectory.vue";
import EditDirectory from "./components/EditDirectory.vue";
import DocumentSource from "./components/DocumentSource.vue";
import DocumentMove from "./components/DocumentMove.vue";
import DocumentIssued from "./components/DocumentIssued.vue";
import EditChannelDirectory from "./components/EditChannelDirectory.vue";
import ChangeDirectory from "./components/ChangeDirectory.vue";
import Arttemplate from "./components/Arttemplate.vue";
import { form_get } from "@/services/forms";

import { mapState } from "vuex";
import PageToggleTransition from "@/components/transition/PageToggleTransition";
import { FormUpload } from "@/services/api";
import Cookie from "js-cookie";
import Vue from "vue";
import VueClipboard from "vue-clipboard2";
import { connectors } from "@antv/data-set";
Vue.use(VueClipboard);
export default {
  name: "content",
  props: {
    open: {
      type: Function,
    },
    data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {
    InfoDetails,
    InfoSite,
    mapState,
    PageToggleTransition,
    EditDocuments,
    MountForms,
    SetTemplate,
    EditChannel,
    ChannelMapping,
    SiteTemplate,
    RecordInfo,
    InfoDirectory,
    EditDirectory,
    DocumentSource,
    DocumentMove,
    DocumentIssued,
    EditChannelDirectory,
    ChangeDirectory,
    Arttemplate
  },

  computed: {
    ...mapState("setting", ["theme", "animate"]),
    headers() {
      return {
        Authorization: Cookie.get("Authorization"),
      };
    },
    config() {
      return {
        uploadFileHeaders: {
          Authorization: Cookie.get("Authorization"),
        },
        uploadImageHeaders: {
          Authorization: Cookie.get("Authorization"),
        },
      };
    },
  },
  data() {
    return {
      loading: false,
      loadings: false,
      spinning: true,
      organizations: [],
      organization: "",
      tabBarStyle: {
        textAlign: "center",
        background: "#1890ff33",
        padding: " 0px  10px",
      },
      siteinfo: {}, //站点详情
      statuslist: {
        //站点类型字典
        0: "县市区选此项",
        1: "市直部门、区直部门选此项",
        2: "企事业单位选此项",
        3: "镇街道选此项",
      },
      router: null,
      params: {},
      channelData: [],
      directoryData: [],
      channelexpandedKeys: [],
      expandedKeys: [],
      channelselectedKeys: [],
      selectedKeys: [],
      defaultSelectedKeys: [],
      back: {
        route: null,
        params: null,
      },
      activekey: "1",
      visible: false,
      visibles: false,
      docvisibles: false,
      formDatas: {},
      formcountDatas: {},
      platform: "",
      Titles: "绑定微信公众号",
      draggables: false,
      draggabless: false,
      methodes: undefined,
      titless: "导出目录发文量",
      channelsss: undefined,
      columnless: undefined, // 栏目双向绑定
      docformDatas: {},
    };
  },
  created() {
    this.init();
  },
  authorize: {
    siteEdit: "organization.edit",
    recordInfo: "organization.edit",
    siteTemplate: "organization.edit",
  },

  methods: {
    event({ method, params }) {
      if (this[method] && typeof this[method] === "function") {
        this[method](params);
      }
    },
    onOpen(params) {
      this.$emit("open", params || {});
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
      this.router = route;
      this.params = params;
    },
    onReload() {
      const func = this.$refs.component.init;
      if (typeof func == "function") {
        func();
      }
    },
    gets(data) {
      data.filter((item) => {
        item.scopedSlots = { title: "title" };
        if (item.children.length) {
          this.gets(item.children);
        } else {
          return;
        }
      });
    },
    // 页面加载
    init() {
      organization_tree() //站点列表
        .then((response) => {
          this.organizations = response.data.data;
          this.organization = this.data.site
            ? this.data.site
            : this.organizations[0].id;
          this.gets(this.organizations);
          this.OrganizationGet(this.organization);
        })
        .catch((err) => {
          console.log(err);
        });
      form_get({ name: "artic_share" })
        .then((res) => {
          this.formDatas = res.data.data.form;
        })
        .catch((err) => {
          console.log(err);
        });
      form_get({ name: "channel_document_count" })
        .then((res) => {
          this.formcountDatas = res.data.data.form;
        })
        .catch((err) => {
          console.log(err);
        });
      form_get({ name: "document_excel_import" })
        .then((res) => {
          this.docformDatas = res.data.data.form;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 站点选择--目录、栏目获取
    OrganizationGet(data) {
      // this.activekey = "1";
      organization_get({ id: data })
        .then((res) => {
          this.siteinfo = res.data.data;
          this.$nextTick(() => {
            Promise.all([
              channel_list({
                site: data,
                tree: true,
                key: Math.random().toString(36).slice(2),
              }),
              directory_list({
                site: data,
                tree: true,
              }),
            ])
              .then((response) => {
                this.channelData = response[0].data.data;
                this.directoryData = response[1].data.data;
                if (this.data.channel) {
                  this.treeSelect([this.data.channel]);
                  this.spinning = false;
                } else {
                  if (this.activekey == "1") {
                    this.params = {
                      site: data,
                      siteinfo: this.siteinfo,
                      channelData: this.channelData,
                    };
                    this.router = "info-details";
                    this.spinning = false;
                  } else if ((this.activekey = "2")) {
                    this.params = { site: data, channelData: this.channelData };
                    this.router = "info-directory";
                    this.spinning = false;
                  }
                }
              })
              .catch((error) => {
                console.log(error);
              });
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 目录刷新
    refresh({ data, site }, datas) {
      organization_tree() //站点列表
        .then((response) => {
          this.organizations = response.data.data;
          this.gets(this.organizations);
          this.organization = site;
          organization_get({ id: site })
            .then((res) => {
              this.siteinfo = res.data.data;
              Promise.all([
                channel_list({
                  site: site,
                  tree: true,
                }),
                directory_list({
                  site: site,
                  tree: true,
                }),
              ])
                .then((response) => {
                  this.channelData = response[0].data.data;
                  this.directoryData = response[1].data.data;
                  this.activekey = "1";
                  if (datas) {
                    this.params = { site: site, siteinfo: this.siteinfo };
                    this.router = "info-details";
                    this.spinning = false;
                  } else {
                    this.channelselectedKeys = [data];
                    this.defaultSelectedKeys = [data];
                    this.channelexpandedKeys = [data];
                    this.treeSelect([data]);
                  }
                })
                .catch((error) => {
                  console.log(error);
                });
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 重新获取不同站点下的文章
    refreshsite({ data, site, document }) {
      console.log("data, site", data, site, document);
      organization_tree() //站点列表
        .then((response) => {
          this.organizations = response.data.data;
          this.gets(this.organizations);
          this.organization = site;
          organization_get({ id: site })
            .then((res) => {
              this.siteinfo = res.data.data;
              Promise.all([
                channel_list({
                  site: site,
                  tree: true,
                }),
                directory_list({
                  site: site,
                  tree: true,
                }),
              ])
                .then((response) => {
                  this.channelData = response[0].data.data;
                  this.directoryData = response[1].data.data;
                  this.activekey = "1";
                  this.channelselectedKeys = [data];
                  this.channelexpandedKeys = [data];
                  // this.treeSelect([data]);
                  this.channelsss = [data];
                  this.params = Object.assign({}, document, {
                    pagination: {
                      page: 1,
                      per_page: 10,
                    },
                    site: site,
                    channel: data,
                    readonly: false,
                    siteinfo: document.parent,
                    channelData: this.channelData,
                  });
                  this.router = "edit-documents";
                })
                .catch((error) => {
                  console.log(error);
                });
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 栏目刷新
    refreshes({ data, site }, datas) {
      organization_tree() //站点列表
        .then((response) => {
          this.organizations = response.data.data;
          this.gets(this.organizations);
          this.organization = site;
          organization_get({ id: site })
            .then((res) => {
              this.siteinfo = res.data.data;
              Promise.all([
                channel_list({
                  site: site,
                  tree: true,
                }),
                directory_list({
                  site: site,
                  tree: true,
                }),
              ])
                .then((response) => {
                  this.channelData = response[0].data.data;
                  this.directoryData = response[1].data.data;
                  this.activekey = "2";
                  if (datas) {
                    this.params = { site: site, channelData: this.channelData };
                    this.router = "info-directory";
                    this.spinning = false;
                  } else {
                    this.selectedKeys = [data];
                    this.defaultSelectedKeys = [data];
                    this.expandedKeys = [data];
                    this.treeSelectdire([data]);
                  }
                  // this.selectedKeys = [data];
                  // this.defaultSelectedKeys = [data];
                  // this.expandedKeys = [data];
                  // this.treeSelectdire([data]);
                })
                .catch((error) => {
                  console.log(error);
                });
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 编辑站点
    siteEdit(data) {
      this.params = Object.assign({}, data, {
        channel: this.params.channel,
        key: this.activekey,
      });
      this.router = "info-site";
    },
    // 站点设置模板
    siteTemplate(data) {
      this.params = Object.assign({}, data, {
        channel: this.params.channel,
        key: this.activekey,
      });
      this.router = "site-template";
    },
    // 备案信息
    recordInfo(data) {
      this.params = Object.assign({}, data, {
        channel: this.params.channel,
        key: this.activekey,
      });
      this.router = "record-info";
    },
    // 更换站点
    changeaorg(key) {
      this.draggables = false;
      this.spinning = true;
      this.channelsss = undefined;
      this.columnless = undefined;
      this.channelselectedKeys = [];
      this.channelexpandedKeys = [];
      this.selectedKeys = [];
      this.expandedKeys = [];
      this.OrganizationGet(key);
    },
    // 目录-目录切换
    callback(collapsed) {
      this.activekey = collapsed;
      if (collapsed == "1") {
        if (this.channelselectedKeys.length) {
          this.treeSelect(this.channelselectedKeys);
        } else {
          this.params = {
            site: this.params.site,
            siteinfo: this.siteinfo,
            channelData: this.channelData,
          };
          this.router = "info-details";
        }
      } else if (collapsed == "2") {
        if (this.selectedKeys.length) {
          this.treeSelectdire(this.selectedKeys);
        } else {
          this.params = { site: this.params.site };
          this.router = "info-directory";
        }
      }
    },
    // 目录选择
    treeSelect(selectedKeys) {
      console.log("treeSelect", selectedKeys);
      this.channelsss = selectedKeys[0];
      this.channelselectedKeys = selectedKeys || [];
      this.defaultSelectedKeys = selectedKeys || [];
      this.channelexpandedKeys = selectedKeys || [];
      this.params = Object.assign(
        {},
        {
          site: this.organization,
          channel: selectedKeys[0] || "",
          siteinfo: this.siteinfo,
          pagination: {
            page: 1,
            per_page: 10,
          },
          search: {
            keyword: this.data.search ? this.data.search : undefined,
          },
          channelData: this.channelData,
        }
      );
      this.router = "info-details";
    },
    // 栏目选择
    treeSelectdire(selectedKeys) {
      console.log("treeSelectdire", selectedKeys);
      this.columnless = selectedKeys[0];
      this.selectedKeys = selectedKeys || [];
      this.defaultSelectedKeys = selectedKeys || [];
      this.expandedKeys = selectedKeys || [];
      this.params = {
        site: this.organization,
        channel: selectedKeys[0] || "",
        pagination: {
          page: 1,
          per_page: 10,
        },
      };
      this.router = "info-directory";
    },
    onExpand(expandedKeys, info) {
      if (info.expanded) {
        this.channelexpandedKeys = [];
      } else {
        this.channelexpandedKeys = [expandedKeys];
      }
    },
    onExpanddire(expandedKeys, info) {
      if (info.expanded) {
        this.expandedKeys = [];
      } else {
        this.expandedKeys = [expandedKeys];
      }
    },
    // 空白右键
    ondesktopmenu(event) {
      if (this.activekey == "1") {
        if (!this.channelData.length) {
          this.$contextmenu({
            items: [
              {
                label: "目录添加",
                onClick: () => {
                  this.addchannel();
                },
              },
            ],
            event,
            customClass: "class-a",
            zIndex: 6000,
            minWidth: 230,
          });
          return false;
        }
      } else {
        if (!this.directoryData.length) {
          this.$contextmenu({
            items: [
              {
                label: "添加栏目",
                onClick: () => {
                  this.adddirectory();
                },
              },
            ],
            event,
            customClass: "class-a",
            zIndex: 6000,
            minWidth: 230,
          });
          return false;
        }
      }
    },
    // 目录右键
    onRightClickchannel({ event, node }) {
      event.stopPropagation();
      let record = node.$options.propsData.dataRef;
      if (!record.dir) {
        this.$contextmenu({
          items: [
            {
              label: "目录添加",

              icon: "el-icon-printer",
              onClick: () => {
                this.addchannel(record);
              },
            },
            {
              label: "目录编辑",
              icon: "edit",

              onClick: () => {
                this.editchannel(record);
              },
            },
            {
              label: "目录映射",
              onClick: () => {
                this.channelMappinng(record);
              },
            },
            {
              label: "目录删除",
              divided: true,
              shadow: true,
              onClick: () => {
                this.onDelete(record);
              },
            },
            {
              label: "挂载表单",
              onClick: () => {
                this.onEditForms(record);
              },
            },
            {
              label: "设置审批流程",
              onClick: () => {
                this.onStatus(record, true);
              },
            },
            {
              label: "查看审批流程",
              divided: true,
              onClick: () => {
                this.onCheckStatus(record, true);
              },
            },

            {
              label: "设置模板",
              onClick: () => {
                this.settemplate(record);
              },
            },

            {
              label: "显示/隐藏",
              onClick: () => {
                this.onHidden(record);
              },
            },

            {
              label: "获取目录名称",
              onClick: () => {
                this.copyname(record.name);
              },
            },
            {
              label: "更新目录缓存",
              children: [
                {
                  label: "读取最新数据",
                  onClick: () => {
                    this.Updatecache(record, true);
                  },
                },
                {
                  label: "读取缓存数据",
                  onClick: () => {
                    this.Updatecache(record, false);
                  },
                },
              ],
            },
          ],
          event,
          customClass: "class-a",
          zIndex: 6000,
          minWidth: 230,
        });
        return false;
      }
    },
    // 目录映射
    channelMappinng(record) {
      this.params = Object.assign({}, record);
      this.channelselectedKeys = [record.id];
      this.defaultSelectedKeys = [record.id];
      this.channelexpandedKeys = [record.id]; //展开父级
      this.router = "channel-mapping";
    },
    //目录添加
    addchannel(record) {
      const parent = record ? record.id : undefined;
      this.params = Object.assign(
        {},
        { site: this.params.site, id: undefined, parent: parent }
      );
      this.channelselectedKeys = [];
      this.defaultSelectedKeys = [];
      this.channelexpandedKeys = [];
      this.router = "edit-channel";
    },
    // 目录编辑
    editchannel(record) {
      this.channelselectedKeys = [record.id];
      this.defaultSelectedKeys = [record.id];
      this.channelexpandedKeys = [record.id]; //展开父级
      this.params = Object.assign({}, this.params, {
        id: record.id,
      });
      this.router = "edit-channel";
    },
    // 目录删除
    onDelete(record) {
      var that = this;
      this.$confirm({
        title: "确定要删除此目录吗?",
        content: "该操作不可逆 !请谨慎操作 !",
        okText: "确定",
        okType: "danger",
        cancelText: "取消",
        onOk() {
          channel_delete({
            id: record.id,
          })
            .then((res) => {
              that.channelselectedKeys = [];
              that.defaultSelectedKeys = [];
              that.refresh({ data: record.id, site: record.site }, true);
              if (res.data.status) {
                that.$message.success(res.data.message);
              } else {
                that.$message.error(res.data.reason);
              }
            })
            .catch((err) => {
              that.$message.error(err.response.data.message);
              that.loading = false;
            });
        },
        onCancel() {},
      });
    },
    // 目录设置模板
    settemplate(record) {
      this.channelselectedKeys = [record.id];
      this.defaultSelectedKeys = [record.id];
      this.channelexpandedKeys = [record.id];
      this.params = Object.assign({}, this.params, {
        id: record.id,
      });
      this.router = "set-template";
    },
    // 目录挂载表单
    onEditForms(record) {
      this.channelselectedKeys = [record.id];
      this.defaultSelectedKeys = [record.id];
      this.channelexpandedKeys = [record.id];
      this.params = Object.assign({}, this.params, {
        id: record.id,
      });
      this.router = "mount-forms";
      // this.treeSelect([record.id])
    },
    // 目录显隐
    onHidden(record) {
      this.loading = true;
      channel_hidden({
        id: record.id,
      })
        .then((response) => {
          this.refresh({ data: record.id, site: record.site });
          this.$message.success(response.data.message);
        })
        .catch((error) => {
          this.$message.error(error.response.data.data.message);
          this.loading = false;
        });
    },
    // 栏目右键
    onRightClick({ event, node }) {
      event.stopPropagation();
      let record = node.$options.propsData.dataRef;
      if (!record.dir) {
        this.$contextmenu({
          items: [
            {
              label: "添加栏目",
              onClick: () => {
                this.adddirectory(record);
              },
            },
            {
              label: "编辑栏目",
              onClick: () => {
                this.editdirectory(record);
              },
            },
            {
              label: "编辑栏目目录",
              onClick: () => {
                this.editchanneldirectory(record);
              },
            },
            {
              label: "修改名称",
              disabled: false,
              divided: true,
              onClick: () => {
                this.changedirectory(record);
              },
            },
            {
              label: "删除栏目",
              onClick: () => {
                this.deletedirectory(record);
              },
            },
            {
              label: "获取栏目名称",
              onClick: () => {
                this.copyname(record.name);
              },
            },
          ],
          event,
          customClass: "class-a",
          zIndex: 6000,
          minWidth: 230,
        });
        return false;
      }
    },
    // 栏目添加
    adddirectory(record) {
      this.params = {
        organization: this.organization,
      };
      this.params = Object.assign(
        {},
        {
          id: undefined,
          organization: this.organization,
          parent: record ? record.id : "",
        }
      );
      this.selectedKeys = [];
      this.defaultSelectedKeys = [];
      this.expandedKeys = [];
      this.router = "edit-directory";
    },
    // 栏目编辑
    editdirectory(data) {
      this.params = Object.assign({}, data, {
        organization: this.organization,
      });
      this.selectedKeys = [data.id];
      this.defaultSelectedKeys = [data.id];
      this.expandedKeys = [data.id];
      this.router = "edit-directory";
    },
    // 栏目设置目录
    editchanneldirectory(data) {
      this.params = Object.assign({}, data, {
        organization: this.organization,
      });
      this.selectedKeys = [data.id];
      this.defaultSelectedKeys = [data.id];
      this.expandedKeys = [data.id];
      this.router = "edit-channel-directory";
    },
    // 栏目修改
    changedirectory(data) {
      this.params = Object.assign({}, data, {
        organization: this.organization,
      });
      this.selectedKeys = [data.id];
      this.defaultSelectedKeys = [data.id];
      this.expandedKeys = [data.id];
      this.router = "change-directory";
    },
    // 栏目删除
    deletedirectory(record) {
      var that = this;
      this.$confirm({
        title: "确定要删除此栏目吗?",
        content: "该操作不可逆 !请谨慎操作 !",
        okText: "确定",
        okType: "danger",
        cancelText: "取消",
        onOk() {
          directory_delete({
            id: record.id,
          })
            .then((res) => {
              that.selectedKeys = [];
              that.defaultSelectedKeys = [];
              that.refreshes(
                { data: record.id, site: that.organization },
                true
              );
              that.$message.success(res.data.message);
            })
            .catch((err) => {
              that.$message.error(err.response.data.message);
              that.loading = false;
            });
        },
        onCancel() {},
      });
    },
    // 树状拖拽
    onDrop(info) {
      const dropKey = info.node.eventKey; //迁移主键
      const dragKey = info.dragNode.eventKey; //目标主键
      const dropPos = info.node.pos.split("-");
      const dropPosition =
        info.dropPosition - Number(dropPos[dropPos.length - 1]); //位置
      var datas = {
        id: dragKey,
        target: dropKey,
        position: dropPosition,
      };
      if (this.activekey == "1") {
        channel_sort(datas)
          .then((res) => {
            this.refresh({ data: dragKey, site: this.organization });
          })
          .catch((err) => {
            console.log(err);
            this.$message.error(err.response.data.message);
          });
      } else if (this.activekey == "2") {
        directory_sort(datas)
          .then((res) => {
            this.refreshes({ data: dragKey, site: this.organization });
          })
          .catch((err) => {
            console.log(err);
            this.$message.error(err.response.data.message);
          });
      }
    },
    // 树状拖拽
    onDragEnter(info) {
      if (this.activekey == "1") {
        this.channelexpandedKeys = [
          ...info.expandedKeys,
          ...this.channelexpandedKeys,
        ];
      } else if (this.activekey == "2") {
        this.expandedKeys = [...info.expandedKeys, ...this.expandedKeys];
      }
    },
    // 复制目录名称
    copyname(name) {
      this.$copyText(name)
        .then((res) => {
          this.$message.success("复制成功!");
        })
        .catch((err) => {
          console.log(err);
          this.$message.error("复制失败！");
        });
    },
    //更新目录缓存
    Updatecache(record, bolean) {
      render_reset({
        channel: record.id,
        nocache: bolean,
      })
        .then((response) => {
          if (response.data.status == 200) {
            this.$message.success(response.data.message);
            this.treeSelect([record.id]);
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    // 更新首页缓存
    Updatecaches(bolean) {
      render_reset({ site: this.organization, nocache: bolean })
        .then((response) => {
          if (response.data.status == 200) {
            this.$message.success(response.data.message);
            this.loading = true;
            this.spinning = true;
            this.OrganizationGet(this.organization);
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    /**
     * 审批流程
     */
    onStatus(record, ischannel) {
      ischannel = ischannel || false;
      this.onOpen({
        id: record.id,
        name: "Approve",
        title: `设置审批流程 -- ${record.title}`,
        status: true,
        location: "top",
        sort: 0,
        type: "system",
        hidden: false,
        width: "75%",
        height: "75%",
        router: "Approve",
        data: {
          isChannel: ischannel,
          params: record,
          site: this.organization,
        },
        cancel: () => {},
      });
    },
    // 绑定
    bindings(name) {
      this.visible = true;
      this.platform = name;
      if (name == "wx") {
        this.Titles = "绑定微信公众号";
      } else {
        this.Titles = "绑定微博帐号";
      }
      thirdparty_get({
        site: this.siteinfo.id,
        platform: this.platform,
      })
        .then((response) => {
          if (response.data.data.appid) {
            this.$nextTick(() => {
              this.$refs.kcompanyForm.setData({
                appid: response.data.data.appid,
                secret: response.data.data.secret,
              });
            });
          }
        })
        .catch((err) => {
          console.log(err);
          this.$message.error(err.response.data.message);
        });
    },
    handleOk() {
      this.$refs.kcompanyForm
        .getData()
        .then((res) => {
          const datas = Object.assign(res, {
            site: this.siteinfo.id,
            platform: this.platform,
          });
          thirdparty_binding(datas)
            .then((res) => {
              if (res.data.status == 200) {
                this.$message.success(res.data.message);
                this.visible = false;
                this.$refs.kcompanyForm.reset();
              } else {
                this.$message.info(res.data.message);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleCancel() {
      this.visible = false;
      this.$refs.kcompanyForm.reset();
    },
    draggableschange(record) {
      if (record) {
        operate_lockclose({
          site: this.organization,
          interface: "channel.sort",
        })
          .then(() => {
            this.draggables = true;
          })
          .catch((error) => {
            this.draggables = false;
            this.$message.error(error.response.data.message);
            console.log(error);
          });
      } else {
        operate_lockopen({
          site: this.organization,
          interface: "channel.sort",
        })
          .then(() => {
            this.draggables = false;
          })
          .catch((error) => {
            console.log(error);
            this.$message.error(error.response.data.message);
            this.draggables = true;
          });
      }
    },
    draggableschanges(record) {
      this.draggabless = record;
    },
    // 文章导入模板
    getmoudle(record) {
      channel_excel_template({ channel: record.id })
        .then((response) => {
          const a = document.createElement("a");
          var bstr = atob(response.data.data),
            n = bstr.length,
            u8arr = new Uint8Array(n);
          while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
          }
          const blob = new Blob([u8arr], {
            type: response.data.mimetype,
          });
          a.download = response.data.filename;
          a.href = window.URL.createObjectURL(blob);
          a.click();
          this.$message.success("操作成功！");
        })
        .catch((err) => {
          console.log(err);
          this.$message.error(err.response.data.message);
        });
    },
    // 文章导入
    docbatch() {
      this.docvisibles = true;
      this.$nextTick(() => {
        this.$refs.docformDatas.reset();
      });
    },
    dochandleOks() {
      this.$refs.docformDatas
        .getData()
        .then((res) => {
          console.log("res", res);
          document_excel_import({
            path: "/data" + res.path[0].url,
            title: res.title,
          })
            .then((response) => {
              this.$message.success(response.data.data);
              this.docvisibles = false;
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((err) => {
          console.log(err);
          this.$message.error(err.response.data.message);
        });
    },
    // 查看导入结果
    getbatchresult() {
      this.params = Object.assign({},this.siteinfo, {
        channel: this.params.channel,
        key: this.activekey,
      });
      this.router = 'Arttemplate'
    },

    // 导出目录
    exportes() {
      channel_export({ site: this.siteinfo.id })
        .then((response) => {
          var name = "目录文件";
          const a = document.createElement("a");
          var bstr = atob(response.data.data),
            n = bstr.length,
            u8arr = new Uint8Array(n);
          while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
          }
          const blob = new Blob([u8arr], {
            type: response.data.mimetype,
          });
          a.download = name;
          a.href = window.URL.createObjectURL(blob);
          a.click();
          this.$message.success("操作成功！");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    exportescount() {
      this.methodes = channel_documentcount;
      this.visibles = true;
      this.titless = "导出目录发文量";
      this.$refs.kcompanyForms.reset();
    },
    exportessitecount() {
      this.visibles = true;
      this.methodes = site_documentcount;
      this.titless = "导出站点发文量";
      this.$refs.kcompanyForms.reset();
    },
    handleOks() {
      this.$refs.kcompanyForms
        .getData()
        .then((response) => {
          this.methodes({
            site: this.siteinfo.id,
            start: response.ranges[0],
            end: response.ranges[1],
          })
            .then((res) => {
              var name =
                this.methodes == channel_documentcount
                  ? "目录发文量"
                  : "站点发文量";
              const a = document.createElement("a");
              var bstr = atob(res.data.data),
                n = bstr.length,
                u8arr = new Uint8Array(n);
              while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
              }
              const blob = new Blob([u8arr], {
                type: res.data.mimetype,
              });
              a.download = name;
              a.href = window.URL.createObjectURL(blob);
              a.click();
              this.$message.success("操作成功！");
              this.visibles = false;
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    handleCancels() {
      this.visibles = false;
      this.$refs.kcompanyForms.reset();
    },
    /* 检索块功能触发目录树刷新 */
    researchchannel(key) {
      console.log("researchchannel", key);
      this.treeSelect([key]);
    },
    researchcolumn(key) {
      this.treeSelectdire([key]);
    },
  },
};
</script>
<style scoped>
.tabs_top {
  height: calc(100% - 52px);
}
.tabs_top >>> .ant-tabs-bar {
  margin: 0;
}
.tabs_top >>> .ant-tabs-content {
  height: calc(100% - 55px);
}
.tabs_top >>> .ant-tabs-top-content > .ant-tabs-tabpane {
  height: 100%;
  overflow-y: auto;
}
.tabs_top >>> .ant-tabs-top-content > .ant-tabs-tabpane {
  height: 100%;
  overflow-y: auto;
}
.tabs_swich {
  width: 100%;
  text-align: left;
  padding: 10px 30px;
  background: #e4f5ff;
}
.tabs_swich span {
  /* font-size: 16px; */
  line-height: 20px;
}
.copys {
  cursor: pointer;
  padding: 0 10px;
  color: #1890ff;
}
.ant-layout-sider {
  min-width: 300px !important;
}
.ant-layout-header {
  height: 107px !important;
}
.ant-layout-sider,
.ant-layout-header {
  background: #fafafa !important;
  /* border: 1px solid #fafafa; */
}
.ant-layout-header {
  padding: 0px !important;
}
.draggable-tree {
  height: calc(100% - 95px);
}
.draggable-tree >>> li {
  white-space: pre-line;
}
.draggable-tree >>> .ant-tree-node-content-wrapper,
.draggable-tree >>> .ant-tree-node-content-wrapper-normal {
  height: auto !important;
}
.ant-tree.ant-tree-block-node li .ant-tree-node-content-wrapper {
  height: auto !important;
}
.channel-tree-item {
  display: flex;
}
.channel-tree-item_left {
  width: calc(100% - 30px);
  /* overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1; */
}
.channel-tree-item >>> .icon_more {
  width: 30px;
  display: flex;
  justify-items: center;
  align-items: center;
}

.header_styles {
  height: 100%;
  line-height: initial;
  overflow-y: auto;
  background: #1890ff33;
  border-bottom: 1px solid #aaa;
  border-left: 1px solid #fafafa;
}
.dividers {
  border-bottom: 1px solid #eee;
}
</style>
<style>
.ant-descriptions-item {
  padding: 13px !important;
}
.ant-tabs-bar {
  border-bottom: 1px solid #aaa;
}
</style>
