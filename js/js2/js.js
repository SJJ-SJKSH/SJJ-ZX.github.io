$(window).load(function() {
    $(".loading").fadeOut()
})
$(function() {
    echarts_1();
    echarts_2();
    echarts_3();
    echarts_4();
    echarts_5();
    zb1();
    zb2();
    zb3();
    zb4();
    zb5();
    zb6();

    function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));
        option = {
  
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'right'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      color:['#F78C44','#FEF000','#FFC800'],
      radius: '50%',
      data: [
        { value: 37.7, name: '经常烦恼' },
        { value: 45.9, name: '偶尔烦恼' },
        { value: 16.4, name: '从不会烦恼' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));

        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            legend: {

            },
            calculable: true,
            series: [{
                name: '',
                color: ['#F78C44', '#FFC800', '#FEF000', '#53b666', '#F78C44', '#205acf', '#c9c862', '#c98b62', '#c962b9', '#c96262'],
                type: 'pie',
                //起始角度，支持范围[0, 360]
                startAngle: 0,
                //饼图的半径，数组的第一项是内半径，第二项是外半径
                radius: [51, 100],
                //支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度
                center: ['50%', '45%'],

                //是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：
                // 'radius' 面积展现数据的百分比，半径展现数据的大小。
                //  'area' 所有扇区面积相同，仅通过半径展现数据大小
                roseType: 'area',
                //是否启用防止标签重叠策略，默认开启，圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        //  formatter: '{c}辆'
                    },
                    emphasis: {
                        show: true
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length2: 1,
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: [{
                        value: 3,
                        name: '压力非常大',
                    },
                    {
                        value: 4,
                        name: '压力较大',
                    },
                    {
                        value: 2,
                        name: '压力正常',
                    },
                    {
                        value: 1,
                        name: '压力较小',
                    },
                  



                    {
                        value: 0,
                        name: "",
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },


                ]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    function echarts_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart3'));

        option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: ['对就业', '对人际交往', '对心理', '对脱单', '对自信', '对颜值']
  },
  series: [
    {
      name: '十分影响',
      type: 'bar',
      color:['#F78C44'],
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [10.9,13.1,22.9,31.3,31.4,44.3]
    },
    {
      name: '比较影响',
      type: 'bar',
      color:['#FFC800'],
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [30.7,24.3,39.8,28.5,34.2,31.1]
    },
    {
      name: '一般影响',
      type: 'bar',
      color:['#FEF000'],
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [45.9,49.5,25.7,27.1,26.2,18.0]
    },
    {
      name: '不影响',
      type: 'bar',
      color:['#65B581'],
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [12.5,13.1,11.6,13.1,8.2,6.6]
    }
    
  ]
};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));
        option = {
  dataset: {
    source: [
      ['score', 'amount', 'product'],
      [59.1, 72000, '熬夜'],
      [50.2, 60000, '压力过大'],
      [40.8, 48000, '内分泌失调'],
      [32.8, 38400, '缺乏运动'],
      [29.5, 36000, '饮食习惯差'],
      [23.0, 27600, '遗传'],
      [18.3, 21600, '经常烫染'],
      [13.1, 15600, '产后脱发'],
      [8.6, 10800, '所用洗发产品成分差']
    ]
  },
  grid: { containLabel: true },
  xAxis: { name: '数量' },
  yAxis: { type: 'category' },
  visualMap: {
    orient: 'horizontal',
    left: 'center',
    min: 10,
    max: 100,
    text: ['High Score', 'Low Score'],
    // Map the score column to color
    dimension: 0,
    inRange: {
      color: ['#65B581', '#FFCE34', '#FD665F']
    }
  },
  series: [
    {
      type: 'bar',
      encode: {
        // Map the "amount" column to X axis.
        x: 'amount',
        // Map the "product" column to Y axis
        y: 'product'
      }
    }
  ]
};


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    function echarts_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart5'));
        var option = {
  legend: {},
  tooltip: {},
  dataset: {
    source: [
      ['product', '有脱发现象的青年', '没有脱发的青年', ],
      ['非常差', 6.6, 0.8, ],
      ['较差', 11.6,7.8],
      ['一般', 27.8,25.4],
      ['较好', 31.1,39.2],
      ['非常好', 22.9,26.8],
    ]
  },
  xAxis: { type: 'category' },
  yAxis: {},
  series: [{ type: 'bar',color:['#F78C44'], }, { type: 'bar',color:['#FEF000'], }]
};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    function zb1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb1'));
        var v2 = 33 //胜利
        var v1 = 12 //战败
        var v3 = v1 + v2 //总消费 
        option = {
            tooltip: {
                trigger: 'item',
            },
            series: [{

                type: 'pie',
                radius: ['60%', '70%'],
                color: '#37A2DA',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: v2,
                    name: '胜利',
                    label: {
                        normal: {
                            formatter: v2 + '',
                            textStyle: {
                                fontSize: 20,
                                color: '#fff',
                            }
                        }
                    }
                }, {
                    value: v1,
                    name: '战败',
                    label: {
                        normal: {
                            formatter: function(params) {
                                return '胜率' + Math.round(v2 / v3 * 100) + '%'
                            },
                            textStyle: {
                                color: '#aaa',
                                fontSize: 12
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,.2)'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    function zb2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb2'));
        var v1 = 738 //总击杀
        var v2 = 542 //总死亡
        var v3 = v1 + v2 //
        option = {

            tooltip: {
                trigger: 'item',
            },
            series: [{
                type: 'pie',
                radius: ['60%', '70%'],
                color: '#32C5E9',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: v1,
                    name: '总击杀',
                    label: {
                        normal: {
                            formatter: v1 + '',
                            textStyle: {
                                fontSize: 20,
                                color: '#fff',
                            }
                        }
                    }
                }, {
                    value: v2,
                    name: '总死亡',
                    label: {
                        normal: {
                            formatter: function(params) {
                                return '总击杀'
                            },
                            textStyle: {
                                color: '#aaa',
                                fontSize: 12
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,.2)'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    function zb3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb3'));
        var v1 = 51 //排眼
        var v2 = 121 //插眼
        var v3 = v1 + v2 //总消费 
        option = {
            tooltip: {
                trigger: 'item',
            },
            series: [{

                type: 'pie',
                radius: ['60%', '70%'],
                color: '#67E0E3',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: v2,
                    name: '插眼',
                    label: {
                        normal: {
                            formatter: v2 + '',
                            textStyle: {
                                fontSize: 20,
                                color: '#fff',
                            }
                        }
                    }
                }, {
                    value: v1,
                    name: '排眼',
                    label: {
                        normal: {
                            formatter: function(params) {
                                return '总插眼'
                            },
                            textStyle: {
                                color: '#aaa',
                                fontSize: 12
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,.2)'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    function zb4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb4'));
        var v1 = 76 //死亡
        var v2 = 239 //击杀
        var v3 = v1 + v2

        option = {
            tooltip: {
                trigger: 'item',
            },
            series: [{

                type: 'pie',
                radius: ['60%', '70%'],
                color: '#9FE6B8',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: v2,
                    name: '击杀',
                    label: {
                        normal: {
                            formatter: v2 + '',
                            textStyle: {
                                fontSize: 20,
                                color: '#fff',
                            }
                        }
                    }
                }, {
                    value: v1,
                    name: '死亡',
                    label: {
                        normal: {
                            formatter: function(params) {
                                return '总击杀'
                            },
                            textStyle: {
                                color: '#aaa',
                                fontSize: 12
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,.2)'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    function zb5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb5'));
        var v1 = 348 //助攻和击杀
        var v2 = 165 //死亡
        var v3 = v1 + v2 //总消费
        option = {
            tooltip: {
                trigger: 'item',
            },
            series: [{

                type: 'pie',
                radius: ['60%', '70%'],
                color: '#FFDB5C',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: v2,
                    name: '总死亡',
                    label: {
                        normal: {
                            formatter: v2 + '',
                            textStyle: {
                                fontSize: 20,
                                color: '#fff',
                            }
                        }
                    }
                }, {
                    value: v1,
                    name: '击杀和助攻',
                    label: {
                        normal: {
                            formatter: function(params) {
                                return '总死亡'
                            },
                            textStyle: {
                                color: '#aaa',
                                fontSize: 12
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,.2)'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    function zb6() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb6'));
        var k = 19;
        var a = 34;
        var d = 7;
        var v1 = d //死亡
        var v2 = k + a //击杀和助攻
        option = {
            tooltip: {
                trigger: 'item',
            },
            series: [{

                type: 'pie',
                radius: ['60%', '70%'],
                color: '#FB7293',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: v2,
                    name: '击杀和助攻',
                    label: {
                        normal: {
                            formatter: v2 + '',
                            textStyle: {
                                fontSize: 20,
                                color: '#fff',
                            }
                        }
                    }
                }, {
                    value: v1,
                    name: '死亡',
                    label: {
                        normal: {
                            formatter: function(params) {
                                return 'KDA：' + Math.round((k + a) / d)
                            },
                            textStyle: {
                                color: '#aaa',
                                fontSize: 12
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,.2)'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }
})