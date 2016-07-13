<template>
  <eleme-header :show-aside.sync="showAside" v-if="!isPreview"></eleme-header>
  <div class="offer">
    <img src="http://7qna7i.com1.z0.glb.clouddn.com/bg.png" alt="offer模板">
    <div class="content">
      <div class="username primary" v-text="data.username"></div>
      <div class="department primary" v-text="data.department"></div>
      <div class="job primary" v-text="data.jobname"></div>
      <div class="report-year primary" v-text="reportYear"></div>
      <div class="report-month primary" v-text="reportMonth"></div>
      <div class="report-day primary" v-text="reportDay">15</div>
      <div class="report-hour primary" v-text="reportHour">10:00</div>
      <div class="contract primary" v-text="reContract">三</div>
      <div class="probation primary" v-text="reProbation">四</div>
      <div class="contact primary" v-text="data.contact.department">人力资源</div>
      <div class="contacter primary" v-text="data.contact.user">唐美玲</div>
      <div class="phone primary" v-text="data.contact.phone">15921611141</div>
      <div class="pay primary" v-text="data.treatment.money">10000</div>
      <div class="food primary" v-text="data.treatment.food">380</div>
    </div>
  </div>
  <eleme-aside :data.sync="data" :is-preview.sync="isPreview" v-show="showAside" v-if="!isPreview"></eleme-aside>
</template>

<style>
  body {
    margin: 0;
    position: relative;
    width: 100%;
    height: auto;
  }
  .primary {
    position: absolute;
    overflow: hidden;
    text-align: center;
    color: #0880bf;
    font-size: 24px;
  }

  .offer {
    max-width: 1280px;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
  }

  .offer img {
    position: absolute;
    z-index: -1;
    width: 100%;
  }

  .content {
    position: relative;
    top: 500px;
  }

  .username {
    width: 100px;
    top: 45px;
    left: 126px;
  }

  .department {
    width: 160px;
    top: 155px;
    right: 360px;
  }

  .job {
    width: 190px;
    top: 155px;
    right: 145px;
  }

  .report-year {
    width: 60px;
    top: 232px;
    right: 590px;
  }

  .report-month {
    width: 45px;
    top: 232px;
    right: 515px;
  }

  .report-day {
    width: 45px;
    top: 232px;
    right: 436px;
  }

  .report-hour {
    width: 60px;
    top: 232px;
    right: 340px;
  }

  .contract {
    width: 44px;
    top: 270px;
    left: 464px;
  }

  .probation {
    width: 44px;
    top: 270px;
    right: 276px;
  }

  .contact {
    width: 120px;
    top: 1152px;
    left: 560px;
  }

  .contacter {
    width: 156px;
    top: 1262px;
    right: 442px;
  }

  .phone {
    width: 246px;
    top: 1262px;
    left: 312px;
  }

  .pay {
    width: 114px;
    top: 1515px;
    left: 480px;
  }

  .food {
    width: 44px;
    top: 1515px;
    right: 504px;
  }
</style>

<script>
  export default {
    data() {
      return {
        showAside: false,
        isPreview: false,
        reportHour: '10:00',
        data: {
          username: '王晓明',
          department: '大前端',
          jobname: 'Web前端工程师',
          contract: 3,
          probation: 4,
          report: new Date(),
          contact: {
            department: '人力资源',
            user: '唐美玲',
            phone: '15921611141'
          },
          treatment: {
            money: '10000',
            food: '380'
          }
        }
      };
    },
    computed: {
      reContract() {
        return this.numberToChinese(this.data.contract);
      },

      reProbation() {
        return this.numberToChinese(this.data.probation);
      },

      reportYear() {
        return this.data.report.getFullYear();
      },

      reportMonth() {
        return this.data.report.getMonth() + 1;
      },

      reportDay() {
        return this.data.report.getDate();
      }
    },

    methods: {
      numberToChinese(num) {
        let chnNumChar = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
        return chnNumChar[num];
      }
    }
  };
</script>
