
Page({
  onLoad: function(options) {
    this.setData({
      src: decodeURIComponent(options.src),
      desc: options.desc
    })
  },
  data: {
    src: "",
    desc: ""
  }
})
