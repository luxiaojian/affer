<template>
  <eleme-header :show-aside.sync="showAside" v-if="!isPreview"></eleme-header>
  <div class="offer">
    <img src="http://7qna7i.com1.z0.glb.clouddn.com/back4433.png" alt="offer模板" class="bg">
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
      <div class="inscribe white">
        <span class="inscribe-year" v-text="inscribeYear"></span>
        <span class="inscribe-month" v-text="inscribeMonth">七</span>
        <span class="inscribe-day" v-text="inscribeDay">一</span>
      </div>
      <div class="order">
        <img src="http://7qna7i.com1.z0.glb.clouddn.com/order.png" alt="饿了么工章">
      </div>
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
    color: #007fd0;
    font-size: 24px;
  }

  .white {
    position: absolute;
    overflow: hidden;
    text-align: left;
    color: #fff;
    font-size: 22px;
  }

  .offer {
    max-width: 1280px;
    margin: 0 auto;
    margin-top: 50px;
    position: relative;
  }

  .offer img.bg {
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
    top: 268px;
    left: 560px;
  }

  .probation {
    width: 44px;
    top: 268px;
    right: 182px;
  }

  .contact {
    width: 220px;
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
    top: 1534px;
    left: 480px;
  }

  .food {
    width: 44px;
    top: 1534px;
    right: 504px;
  }

  .inscribe {
    top: 2422px;
    right: 74px;
  }

  .inscribe-year {
    letter-spacing: 10px;
  }

  .inscribe-month {
    width: 80px;
  }

  .inscribe-day {
    width: 100px;
  }

  .order {
    position: absolute;
    width: 245px;
    top: 2280px;
    right: 90px;
  }

  .order img {
    display: block;
    position: relative;
    z-index: 99;
    width: 100%;
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
          inscribe: new Date('2016-7-1'),
          contact: {
            department: '人力与服务交付中心',
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
      },

      inscribeYear() {
        let year = this.data.inscribe.getFullYear();
        return `${this.numberToChinese(year)}年`;
      },

      inscribeMonth() {
        let month = this.data.inscribe.getMonth() + 1;
        return `${this.numberToChinese(month)} 月`;
      },

      inscribeDay() {
        let day = this.data.inscribe.getDate();
        return `${this.numberToChinese(day)} 日`;
      }
    },

    methods: {
      numberToChinese(num) {
        let chnNumChar = [ 'O', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];

        if (num > 0 && num < 11) {
          return chnNumChar[num];
        } else if (num > 9 && num < 32) {
          let m = Math.floor(num / 10);
          let n = num % 10;
          if (num > 9 && num < 20) {
            return `十${chnNumChar[n]}`;
          } else if ((num > 20 && num < 30) || (num > 30 && num < 32)) {
            return `${chnNumChar[m]}十${chnNumChar[n]}`;
          } else if (num === 20 || num === 30) {
            return `${chnNumChar[m]}十`;
          }
        } else {
          let ns = '';
          let numArray = String(num).split('').map(k => Number(k));

          numArray.forEach(k => { ns += chnNumChar[k];});
          return ns;
        }
      }
    }
  };
</script>
