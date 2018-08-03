
Page({
  handleTitleClick: function(event) {
    // console.log(event);
    this.setData({
      currentIdx: event.target.id - 0
    });
  },
  data: {
    currentIdx: 0,
    items: [
      {
        desc: "推荐",
        list: [
          {
            meta: {
              type: "default",
            },
            data: {
              title: "渔舟唱晚，响穷彭蠡之滨，雁阵惊寒，声断衡阳之浦",
              author: "逍遥",
              image: "1/images/1.jpg",
              article: "1/paragraphs/1/article"
            }
          },
          {
            meta: {
              type: "default",
            },
            data: {
              title: "此处有崇山峻岭，茂林修竹，又有清流激湍，映带左右",
              author: "逍遥",
              image: "1/images/2.jpg"
            }
          },
          {
            meta: {
              type: "default",
            },
            data: {
              title: "醉里挑灯看剑，却无战鼓狼烟",
              author: "逍遥",
              image: "1/images/3.jpg"
            }
          },
          {
            meta: {
              type: "default",
            },
            data: {
              title: "是因为想了太多，还是我庸人自扰",
              author: "逍遥",
              image: "1/images/4.jpg"
            }
          },
          {
            meta: {
              type: "default",
            },
            data: {
              title: "蝴蝶泉水清又清，丢个石头试水深",
              author: "逍遥",
              image: "1/images/5.jpg"
            }
          },
          {
            meta: {
              type: "default",
            },
            data: {
              title: "有人说",
              author: "逍遥",
              image: "1/images/6.jpg"
            }
          },
          {
            meta: {
              type: "default",
            },
            data: {
              title: "学着放下",
              author: "逍遥",
              image: "1/images/7.jpg"
            }
          },
          {
            meta: {
              type: "default",
            },
            data: {
              title: "落霞与孤鹜齐飞，秋水共长天一色",
              author: "逍遥",
              image: "1/images/8.jpg"
            }
          },
          {
            meta: {
              type: "default",
            },
            data: {
              title: "冯唐易老，李广难封",
              author: "逍遥",
              image: "1/images/9.jpg"
            }
          },
          {
            meta: {
              type: "default",
            },
            data: {
              title: "北海虽赊，扶摇可接，东隅已逝，桑榆非晚",
              author: "逍遥",
              image: "1/images/10.jpg"
            }
          }
        ]
      },
      {
        desc: "体育",
        list: [
          {
            meta: {
              type: "list",
            },
            data: [
              {
                desc: "滑冰",
                image: "2/images/1/01.png"
              },
              {
                desc: "高尔夫",
                image: "2/images/1/02.png"
              },
              {
                desc: "滑雪",
                image: "2/images/1/03.png"
              },
              {
                desc: "击剑",
                image: "2/images/1/04.png"
              },
              {
                desc: "篮球",
                image: "2/images/1/05.png"
              },
              {
                desc: "乒乓球",
                image: "2/images/1/06.png"
              },
              {
                desc: "田径",
                image: "2/images/1/07.png"
              },
              {
                desc: "游泳",
                image: "2/images/1/08.png"
              },
              {
                desc: "自行车",
                image: "2/images/1/09.png"
              },
              {
                desc: "足球",
                image: "2/images/1/10.png"
              },
            ]
          },
          {
            meta: {
              type: "list-scroll",
            },
            data: [
              {
                desc: "爱尔兰",
                image: "2/images/2/01.png"
              },
              {
                desc: "丹麦",
                image: "2/images/2/02.png"
              },
              {
                desc: "德国",
                image: "2/images/2/03.png"
              },
              {
                desc: "法国",
                image: "2/images/2/04.png"
              },
              {
                desc: "芬兰",
                image: "2/images/2/05.png"
              },
              {
                desc: "加拿大",
                image: "2/images/2/06.png"
              },
              {
                desc: "美国",
                image: "2/images/2/07.png"
              },
              {
                desc: "挪威",
                image: "2/images/2/08.png"
              },
              {
                desc: "葡萄牙",
                image: "2/images/2/09.png"
              },
              {
                desc: "日本",
                image: "2/images/2/10.png"
              },
              {
                desc: "瑞典",
                image: "2/images/2/11.png"
              },
              {
                desc: "瑞士",
                image: "2/images/2/12.png"
              },
              {
                desc: "西班牙",
                image: "2/images/2/13.png"
              },
              {
                desc: "意大利",
                image: "2/images/2/14.png"
              },
              {
                desc: "英国",
                image: "2/images/2/15.png"
              },
              {
                desc: "中国",
                image: "2/images/2/16.png"
              }
            ]
          },
          {
            meta: {
              type: "video",
            },
            data: {
              desc: "微信小程序",
              video: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
            }
          }
        ]
      },
      {
        desc: "国际"
      },
      {
        desc: "表白"
      },
      {
        desc: "约会"
      },
      {
        desc: "形象"
      },
      {
        desc: "相亲"
      },
      {
        desc: "撩妹"
      },
      {
        desc: "故事会"
      },
      {
        desc: "阻击"
      }
    ]
  }
})