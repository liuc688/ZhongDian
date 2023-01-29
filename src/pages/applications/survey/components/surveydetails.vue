<template>
  <a-card :body-style="{ padding: '24px 32px' }" :bordered="false">
    <div class="title_back">
      <a @click="back"><a-icon type="arrow-left" />返回</a>
    </div>
    <a-spin tip="Loading..." :spinning="spinning">
      <a-row :gutter="24" class="page_paper">
        <h3>问卷编辑：</h3>
        <div class="container">
          <a-col>
            <a-form-model
              ref="forms"
              :model="forms"
              :rules="rules"
              :label-col="labelCol"
              :wrapper-col="wrapperCol"
            >
              <a-form-model-item label="问卷标题" prop="title">
                <a-input v-model="forms.title" placeholder="请输入问卷标题" />
              </a-form-model-item>
              <a-form-model-item label="问卷描述" prop="content">
                <a-input
                  type="textarea"
                  :rows="4"
                  v-model="forms.content"
                  placeholder="请输入问卷描述"
                />
              </a-form-model-item>
              <a-form-model-item label="发起部门" prop="organization">
                <a-tree-select
                  style="width: 100%"
                  show-search
                  allow-clear
                  v-model="forms.organization"
                  :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
                  :treeData="siteList"
                  placeholder="请选择部门"
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
                >
                  <span
                    slot="title"
                    slot-scope="{ key, value }"
                    style="color: #08c"
                    >Child Node1 {{ value }}</span
                  >
                </a-tree-select>
              </a-form-model-item>
              <a-form-model-item
                label="起止日期"
                format="YYYY-MM-DD"
                prop="range"
              >
                <a-range-picker
                  v-model="forms.range"
                  @change="onChange"
                  style="width: 100%"
                />
              </a-form-model-item>
              
              <div style="" class="topicArea" v-for="(item, index) in choices" :key="index">
                <div style="padding:10px 0">
                  <!-- 题目内容 -->
                  <a-form-model-item >
                    <!-- 题目内容插槽 -->
                    <span slot="label" >题目内容
                       <span style="color:#FF3E96;font-size:19px;font-weight:700;font-family:华文行楷"> 
                        {{index === 0 ? '(1)': '(' + (index + 1) + ')'}} 
                      </span>
                    </span>
                    <a-input
                      placeholder="请选择题目内容"
                      v-model="choices[index].title"
                      style="width: 100%"
                    >
                    </a-input>
                  </a-form-model-item>
                  <a-form-model-item label="类型">
                    <a-select v-model="choices[index].type" placeholder="类型">
                      <a-select-option value="radio"> 单选题 </a-select-option>
                      <a-select-option value="checkbox"> 多选题 </a-select-option>
                      <a-select-option value="input"> 问答题 </a-select-option>
                    </a-select>
                  </a-form-model-item>

                  <a-form-model-item label="是否必填">
                    <a-radio-group v-model="choices[index].fill">
                      <a-radio :value="true"> 是 </a-radio>
                      <a-radio :value="false"> 否 </a-radio>
                    </a-radio-group>
                  </a-form-model-item>

                  <a-form-model-item
                    v-if="choices[index].type !== 'input'"
                    label="答案选项"
                  >
                    <a-select
                      mode="tags"
                      placeholder="答案选项"
                      style="width: 80%"
                      v-model="choices[index].options"
                    >
                    </a-select>
                    <!-- 删除题目按钮 -->
                    <a-button
                      style="margin-left: 5%"
                      v-if="choices.length > 0"
                      icon="delete"
                      :disabled="choices.length === 0"
                      @click="removeDomain(item)"
                    ></a-button>
                  </a-form-model-item>
                </div>
              </div>
              <a-form-model-item :wrapperCol="{ span: 18, offset: 4 }">
                <a-button
                  @click="addDomain"
                  type="dashed"
                  icon="plus"
                  style="margin: 5px 8px 5px 0; width: 100%"
                  >添加题目</a-button
                >
              </a-form-model-item>
            </a-form-model>

            <div class="buttonsArea">
              <a-button
                @click="submint"
                :loading="loading"
                type="primary"
                >保存</a-button
              >
              <a-button
                type="primary"
                style="margin-left: 10px"
                v-if="id"
                @click="Statistics"
                >答案统计</a-button
              >
            </div>
          </a-col>
        </div>
      </a-row>
    </a-spin>
  </a-card>
</template>
<script>
// import { site_list } from "@/services/opinion";
import { organization_tree } from "@/services/organization";
import { survey_get, survey_update, survey_add } from "@/services/survey";
// import pick from "lodash.pick";

export default {
  props: {
    params: {
      //传递的数据
      type: Object,
    },
    event: {
      type: Function,
    },
  },
  data() {
    return {
      extension: [],
      fields: [],
      spinning: true,
      loading: false,
      id: this.$route.query.id,
      checkedNames: true,
      siteList: [],
      forms: {},
      labelCol: { span: 4 },
      wrapperCol: { span: 18 },
      choices: [],
      start: "",
      end: "",
      rules: {
        title: [{ required: true, message: "请输入问卷标题" }],
        content: [{ required: true, message: "请输入问卷描述" }],
        range: [{ required: true, message: "请输入起止时间" }],
        organization: [{ required: true, message: "请输入发起部门" }],
        titles: [{ required: true, message: "请输入题目" }],
        type: [{ required: true, message: "请输入题目类型" }],
        options: [{ required: true, message: "请输入题目选项" }],
      },
      methodes: undefined,
    };
  },
  computed: {
    dynamicData() {
      let result = {
        organizations: [],
        scope: {
          1: "今天",
          2: "本周",
          3: "上周",
          4: "本月",
          5: "上月",
        },
      };
      return result;
    },
  },
  created() {
    console.log('this.params',this.params)
    this.id = this.params.data.id ? this.params.data.id : undefined;
    this.methodes = this.params.data.id ? survey_update : survey_add;
    this.init();
  },
  methods: {
    onChange(data, range) {
      if (range && range.length) {
        this.start = range[0];
        this.end = range[1];
      } else {
        this.start = undefined;
        this.end = undefined;
      }
    },
    /*表单项添加*/
    addDomain() {
      this.choices.push({
        title: "",
        type: "",
        fill: true,
        options: [],
      });
    },
    /*表单项删除*/
    removeDomain(item) {
      let index = this.choices.indexOf(item);
      if (index !== -1) {
        this.choices.splice(index, 1);
      }
    },
    init() {
      organization_tree()
        .then((res) => {
          this.siteList = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
      if (this.params.data.id) {
        survey_get({ id: this.id })
          .then((res) => {
            console.log('res',res)
            var datas = res.data.message.data;
            datas.range = [datas.start, datas.end];
            datas.organization = datas.organization ? datas.organization.id : undefined;
            this.model = Object.assign({}, datas);
            this.choices = this.model.choices;
            this.start = datas.range[0].substring(0,10);
            this.end = datas.range[1].substring(0,10);
            this.extension = datas._extension.data;
            this.spinning = false;
            this.$nextTick(() => {
              this.forms = {
                title: this.model.title,
                content: this.model.content,
                range: [this.model.start, this.model.end],
                organization: this.model.organization,
                choices: this.model.choices,
              };
            });
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.spinning = false;
      }
    },
    Statistics() {
      this.$emit("event", {
        method: "onLink",
        params: {
          route: "survey-statistics",
          params: this.params,
        },
      });
    },
    submint() {
      this.forms.choices = this.choices;
      this.$refs.forms.validate((valid) => {
        if (valid) {
          this.loading = true;
          var parems = {
            start: this.start,
            end: this.end,
            organization: this.forms.organization,
            title: this.forms.title,
            content: this.forms.content,
            choices: this.forms.choices,
            id: this.id,
          };
          this.methodes(parems)
            .then(() => {
              this.loading = false;
              this.$message.success("操作成功！");
              this.back();
            })
            .catch((err) => {
              this.loading = false;
              console.log(err);
            });
        }
      });
    },
    back() {
      this.$emit("event", {
        method: "onLink",
        params: {
          id:this.params.id?this.params.id:'',
          route: "home",
          params: this.params,
        },
      });
    },
  },
};
</script>
<style scoped>
.title_back {
  padding: 10px;
  background: #daedff;
  border: 1px solid #40a9ff;
  border-radius: 5px;
  margin-bottom: 20px;
}
.page_paper {
  background: #f0f8ff;
  padding: 20px;
}
/* 内容的版心区域 */
.container {
  width: 850px;
  margin: 0 auto;
}
/* 题目区域 */
.topicArea {
  margin: 40px 50px 20px 0;
  width: 100%;
  box-shadow: rgb(186, 207, 233) 0 0 10px;
  /* border-top: 1px solid #ccc; */
  border-radius: 15px;
}
/* 按钮区域 两个按钮，不居中了，都放在最后一行的后面了 */
.buttonsArea {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>