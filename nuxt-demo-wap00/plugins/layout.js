import Vue from 'vue'
import {
  Toast,
  Indicator,
  MessageBox
} from 'mint-ui';

let loading = null;

export default ({
  app
}, inject) => {

  // 错误提示
  inject('errorToast', function(msg) {
      if (msg) {
        Toast({
          message: msg,
          duration: 2000
        });
      }
    }),

    // 成功提示
    inject('successToast', function(msg) {
      if (msg) {
        Toast({
          message: msg,
          duration: 2000
        });
      }
    }),

    // 加载
    // 显示loading
    inject('loadStart', function(text = '加载中...') {
      Indicator.open({
        text: text,
        spinnerType: 'fading-circle'
      });

    }),

    // 隐藏loading
    inject('loadEnd', function() {
      Indicator.close();
    }),

    // 弹窗
    // 注意：原弹窗按钮样式是左取消右确定，但项目UI需要左确定右取消，所以取消与确定的文本和事件对换
    inject('wDialog', function(title, content, cancelButtonText, confirmButtonText, showConfirmButton, cb_ok, cb_err) {
      this.$confirm(content, title, {
        cancelButtonText: cancelButtonText || '确定',
        confirmButtonText: confirmButtonText || '取消',
        showConfirmButton: showConfirmButton,
        dangerouslyUseHTMLString: true,
        center: true,
        customClass: 'myDialogBox',
        distinguishCancelAndClose: true,
        callback: function(action) {
          if (action == "confirm") {
            cb_err && cb_err();
          } else if (action == "cancel") {
            cb_ok && cb_ok();
          }
        }
      })
    }),

    // 指定滚动条位置
    inject('wSetScroll', function(top) {
      if (document.documentElement.scrollTop || document.documentElement.scrollTop == 0) {
        document.documentElement.scrollTop = top;
      } else if (window.pageYOffset || window.pageYOffset == 0) {
        window.pageYOffset = top;
      } else if (document.body.scrollTop || document.body.scrollTop == 0) {
        document.body.scrollTop = top;
      }
    }),

    // 返顶
    inject('wToTop', function() {
      this.$wSetScroll(0);
    }),

    // textarea格式转换
    inject('textFormat', function(str) {
      if (str) {
        return str.replace(/\n/g, '<br/>').replace(/ /g, '&nbsp;');
      } else {
        return '';
      }

    }),

    // 判断页面是否滚动到底部
    inject('scrollBottom', function(cb) {
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      if (scrollTop + windowHeight == scrollHeight) {
        cb && cb();
      }

    })

}
