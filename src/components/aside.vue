<template>
  <aside id="aside">
    <el-form label-align="left" :models="data" @submit.prevent="downloadImage()">
      <el-form-item :label-width="formWidth" label="姓名">
        <el-input :model.sync="data.username" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item :label-width="formWidth" label="部门">
        <el-input :model.sync="data.department" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item :label-width="formWidth" label="职位">
        <el-input :model.sync="data.jobname" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item :label-width="formWidth" label="报道日期">
        <el-date-editor type="date" :value.sync="data.report" placeholder="选择报道日期" style="width: 100%;"></el-date-editor>
      </el-form-item>
      <el-form-item :label-width="formWidth" label="合同时间">
        <el-input-number :model.sync="data.contract"></el-input-number>
      </el-form-item>
      <el-form-item :label-width="formWidth" label="试用期">
        <el-input-number :model.sync="data.probation"></el-input-number>
      </el-form-item>
      <el-form-item :label-width="formWidth" label="联系部门">
        <el-input :model.sync="data.contact.department" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item :label-width="formWidth" label="联系人">
        <el-input :model.sync="data.contact.user" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item :label-width="formWidth" label="联系号码">
        <el-input :model.sync="data.contact.phone" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item :label-width="formWidth" label="薪资">
        <el-input :model.sync="data.treatment.money" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item :label-width="formWidth" label="餐补">
        <el-input :model.sync="data.treatment.food" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item :label-width="formWidth" label="落款日期">
        <el-date-editor type="date" :value.sync="data.inscribe" placeholder="修改落款日期" style="width: 100%;"></el-date-editor>
      </el-form-item>
      <el-form-item :label-width="formWidth">
        <el-button type="primary">简历预览</el-button>
      </el-form-item>
    </el-form>
  </aside>
</template>

<style>
  aside {
    position: fixed;
    right: 0;
    top: 48px;
    bottom: 0;
    background: #fff;
    display: fixed;
    width: 360px;
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 12px;
    transition: all .3s cubic-bezier(.55,0,.55,.2);
    box-shadow: -1px -1px 1px 1px rgba(0, 0, 0, 0.2);
  }
</style>

<script>
  export default {
    props: ['data', 'isPreview'],
    data() {
      return {
        formWidth: '80px'
      };
    },
    methods: {
      downloadImage() {
        this.isPreview = true;
        window.html2canvas(document.body, {
          logging: true,
          useCORS: true,
          onrendered: function(canvas) {
            let myImage = canvas.toDataURL('image/png');
            let link = document.createElement('a');
            link.href = myImage;
            link.id = 'image-link';
            document.body.appendChild(link);
            document.getElementById('image-link').click();
            document.body.removeChild(link);
          }
        });
      }
    }
  };
</script>
