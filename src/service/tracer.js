 /* eslint-disable */
 function tracer () {
  let _self = {
    rate: 1,
    monitor: function () {
      let self = this;
      window.onerror = function (message, url, line) {
        // 捕获错误
        var errorDetail = {
          message: message,
          line: line
        };
        // 判断发送的几率是否达到要求
        if (Math.random() < self.rate) {
          // 发送错误报告
          self.report(errorDetail);
        }
        // 不隐藏错误
        return false;
      }
      console.log('startup the error tracer');
    },
    config: function (options) {
      if (options) {
        rate = options.rate;
      }
      return this
    },
    report: function (error) {
      var content = {
        userAgent: window.navigator.userAgent,
        url: window.location.href,
        timestamp: Date.now(),
        error: error
      };
      console.log(content);
    }
  }
  return _self;
}

module.exports = {
  tracer: tracer
};