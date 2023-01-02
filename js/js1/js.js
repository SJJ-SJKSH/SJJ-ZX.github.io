 $(window).load(function(){$(".loading").fadeOut()})  
$(function () {
    echarts_1();
	echarts_2();
	echarts_3();
	echarts_4();
	echarts_5();
	zb1();
	zb2();
	zb3();
	zb4();
function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));
        option = {
                    tooltip : {
                        trigger: 'item',
                        formatter: "{b} : {c} ({d}%)"
                    },
                    legend: {
                        right:10,
                        top:30,
                        height:140,
                        itemWidth:10,
                        itemHeight:10,
                        itemGap:10,
                        textStyle:{
                            color: 'rgba(255,204,51,.6)',
                            fontSize:12
                        },
                        orient:'vertical',
                        data:['90后','80后','70后','其他']
                    },
                   calculable : true,
                    series : [
                        {
                            name:' ',
							color: ['#FFCE34', '#aaCE34', '#4cb9cf', '#53b666', '#62c98d', '#205acf', '#c9c862', '#c98b62', '#c962b9', '#7562c9','#c96262'],	
                            type:'pie',
                            radius : [30, 70],
                            center : ['35%', '50%'],
                            roseType : 'radius',
                            label: {
                                normal: {
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },

                            lableLine: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: true
                                }
                            },

                            data:[
                                {value:36.1, name:'90后'},
                                {value:38.5, name:'80后'},
                                {value:17.8, name:'70后'},
                                {value:7.6, name:'其他'}
                            ]
                        },
                    ]
                };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));

        option = {
                    tooltip : {
                        trigger: 'item',
                        formatter: "{b} : {c} ({d}%)"
                    },
                    legend: {
                        right:10,
                        top:30,
                        height:140,
                        itemWidth:10,
                        itemHeight:10,
                        itemGap:10,
                        textStyle:{
                            color: 'rgba(255,204,51,.6)',
                            fontSize:12
                        },
                        orient:'vertical',
                        data:['90后','80后','70后','其他']
                    },
                   calculable : true,
                    series : [
                        {
                            name:' ',
							color: ['#FFCE34', '#aaCE34', '#4cb9cf', '#c98b62', '#c962b9', '#7562c9','#c96262'],	
                            type:'pie',
                            radius : [30, 70],
                            center : ['35%', '50%'],
                            roseType : 'radius',
                            label: {
                                normal: {
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },

                            lableLine: {
                                normal: {
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },

                            data:[
                                {value:39.3, name:'90后'},
                                {value:37.9, name:'80后'},
                                {value:16.4, name:'70后'},
                                {value:6.4, name:'其他'}
                            ]
                        },
                    ]
                };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_3() {
         /*   */
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart3'));

       option = {
  dataset: {
    source: [
      ['score', 'amount', 'product'],
      [89.3, 90, 'IT通信'],
      [57.1, 80, '金融保险'],
      [74.4, 70, '机械制造'],
      [50.1, 60, '房地产'],
      [89.7, 50, '广告营销'],
    
    ]
  },
  grid: { containLabel: true },
  xAxis: { name: 'amount' },
  yAxis: { type: 'category' },
  visualMap: {
    orient: 'horizontal',
    left: 'center',
    min: 10,
    max: 100,
    text: ['High', 'Low'],
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
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));
option = {
        title:{
        Text:'男女生的主要脱发部位',
        subtext:'',
        subtextstyle:{
          lineHeight:20,
          width:100,
          overflow:'break'
        },
        left:200,
        top:350
        },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#66ccff'
      }
    }
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar',] },
      restore: { show: true },
      saveAsImage: { show: true }
      
    },
 
  },
  legend: {
    data: ['男', '女', '点击显示']
  },
  xAxis: [
    {
      type: 'category',
      data: ['发际线', '头顶', '额角', '后脑勺', '发缝', '双鬓'],
      fontsize:10,
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '比例',
      min: 0,
      max: 100,
      interval: 50,
      axisLabel: {
        formatter: '{value} %'
      }
    },
    
  ],
  series: [
    {
      name: '男',
      type: 'bar',
      color:'blue',
      tooltip: {
        valueFormatter: function (value) {
          return value + ' %';
        }
      },
      data: [
        53.1, 40.8, 29.4, 21.6, 17.2, 6.3
      ]
    },
    {
      name: '女',
      type: 'bar',
      color:'pink',
      tooltip: {
        valueFormatter: function (value) {
          return value + ' %';
        }
      },
      data: [
        46.3, 34.6, 26.5, 15.5, 41.6, 5.6, 
      ]
    },
    
  ]
};
     
        /*   */
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }



      
     





function echarts_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart5'));
 option = {
  dataset: {
    source: [
      ['score', 'amount', 'product'],
      [89.3, 85, '广告营销'],
      [57.1, 80, '法律'],
      [74.4, 75, '医疗卫生'],
      [50.1, 70, '教育'],
      [89.7, 40, '媒体'],
    
    ]
  },
  grid: { containLabel: true },
  xAxis: { name: 'amount' },
  yAxis: { type: 'category' },
  visualMap: {
    orient: 'horizontal',
    left: 'center',
    min: 10,
    max: 100,
    text: ['High', 'Low'],
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
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));
option = {
        title:{
        Text:'男女生的主要脱发部位',
        subtext:'',
        subtextstyle:{
          lineHeight:20,
          width:100,
          overflow:'break'
        },
        left:200,
        top:350
        },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar',] },
      restore: { show: true },
      saveAsImage: { show: true }
      
    },
    //meixiaoguo
    emphasis:{
      iconstyle:{
        textPosition:'right',
        textFill:'gray',
        textbackgroundcolor:'pink',
        textpadding:20
      }
    }
  },
  legend: {
    data: ['男', '女', '点击显示']
  },
  xAxis: [
    {
      type: 'category',
      data: ['发际线', '头顶', '额角', '后脑勺', '发缝', '双鬓'],
      fontsize:10,
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '比例',
      min: 0,
      max: 100,
      interval: 50,
      axisLabel: {
        formatter: '{value} %'
      }
    },
    
  ],
  series: [
    {
      name: '男',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value + ' %';
        }
      },
      data: [
        53.1, 40.8, 29.4, 21.6, 17.2, 6.3
      ]
    },
    {
      name: '女',
      type: 'bar',
      color:'pink',
      tooltip: {
        valueFormatter: function (value) {
          return value + ' %';
        }
      },
      data: [
        46.3, 34.6, 26.5, 15.5, 41.6, 5.6, 
      ]
    },
    
  ]
};
       

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

function zb1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb1'));
		var v1=60//结算数
		var v2=40//未结算数
		var v3=v1+v2//总订单数
option = {	
    series: [{
        type: 'pie',
        radius: ['60%', '70%'],
        color:'#49bcf7',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: v1,
            name: '不严重',
            label: {
                normal: {
                    formatter:Math.round( 57)+ '%',
                    textStyle: {
                        fontSize: 30,
						color:'#33ccff',
                    }
                }
            }
        }, 
			   {
            value: v2,
            label: {
                normal: {
                 formatter : function (params){
                return '不严重'
            },
                    textStyle: {
                        color: '#aaa',
                        fontSize: 16
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
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function zb2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb2'));
 		var v1=80//结算数
		var v2=20//未结算数
		var v3=v1+v2//总订单数
      option = {
	
//animation: false,
    series: [{	
        type: 'pie',
       radius: ['60%', '70%'],
        color:'#49bcf7',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: v1,
            name: '较严重',
            label: {
                normal: {
                    formatter:Math.round( 32.7)+ '%',
                    textStyle: {
                        fontSize: 24,
						color:'#33ccff',
                    }
                }
            }
        }, {
            value: v2,
            label: {
                normal: {
                 formatter : function (params){
                return '较严重'
            },
                    textStyle: {
                        color: '#aaa',
                        fontSize: 16
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
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function zb3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb3'));
		var v1=6//结算金额
		var v2=7//未结算
		var v3=v1+v2
option = {	
    series: [{
		
        type: 'pie',
       radius: ['60%', '70%'],
        color:'#62c98d',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: v1,
            name: '很严重',
            label: {
                normal: {
                    formatter:Math.round(11)+ '%',
                    textStyle: {
                        fontSize: 24,
						color:'#33cc66',
                    }
                }
            }
        }, {
            value: v2,
            label: {
                normal: {
                 formatter : function (params){
                return '很严重'
            },
                    textStyle: {
                        color: '#aaa',
                        fontSize: 16
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
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function zb4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb4'));
		var v1=1//结算金额
		var v2=10//未结算
		var v3=v1+v2
option = {	
    series: [{
		
        type: 'pie',
       radius: ['60%', '70%'],
        color:'#29d08a',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: v1,
            name: '十分严重',
            label: {
                normal: {
                    formatter:Math.round( v1/v3*100)+ '%',
                    textStyle: {
                        fontSize: 24,
						color:'#33cc66',
                    }
                }
            }
        }, {
            value: v2,
            label: {
                normal: {
                 formatter : function (params){
                return '十分严重'
            },
                    textStyle: {
                        color: '#aaa',
                        fontSize: 16
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
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
})



		
		
		


		









