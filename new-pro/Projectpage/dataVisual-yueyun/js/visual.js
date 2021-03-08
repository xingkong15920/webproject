$(window).load(function () {
    $(".loading").fadeOut()
})

$(function () {
    echarts_1();
    echarts_2();
    echarts_3();
    echarts_4();

    function echarts_1() {
        var myChart = echarts.init(document.getElementById('echart1'));
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            legend: {
                right: 0,
                top: 30,
                height: 160,
                itemWidth: 10,
                itemHeight: 10,
                itemGap: 10,
                textStyle: {
                    color: 'rgba(255,255,255,.6)',
                    fontSize: 12
                },
                orient: 'vertical',
                data: ['支付宝', '微信支付', '云闪付', '其他']
            },
            calculable: true,
            series: [
                {
                    name: ' ',
                    color: ['#00fcf9', '#9999FF', '#CCFFFF', '#CCCC33', '#62c98d', '#205acf', '#c9c862', '#c98b62', '#c962b9', '#7562c9', '#c96262', '#c25775', '#00b7be'],
                    type: 'pie',
                    radius: [30, 70],
                    center: ['35%', '50%'],
                    roseType: 'radius',
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

                    data: [
                        {value: 120589.14, name: '支付宝'},
                        {value: 185894.58, name: '微信支付'},
                        {value: 36584.12, name: '云闪付'},
                        {value: 54782.50, name: '其他'},
                    ]
                },
            ]
        };

        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_2() {
        var myChart = echarts.init(document.getElementById('echart2'));
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            legend: {

                top: '15%',
                data: ['超市', '便利店', '宾馆', '母婴', 'KTV'],
                icon: 'circle',
                textStyle: {
                    color: 'rgba(255,255,255,.6)',
                }
            },
            calculable: true,
            series: [{
                name: '',
                color: ['#00fcf9', '#9999FF', '#CCFFFF', '#CCCC33', '#CCFF99', '#205acf', '#c9c862', '#c98b62', '#c962b9', '#c96262'],
                type: 'pie',
                startAngle: 0,
                radius: [51, 100],
                center: ['50%', '45%'],
                roseType: 'area',
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
                data: [
                    {value: 88415.25, name: '超市',},
                    {value: 75427.21, name: '便利店',},
                    {value: 55809.38, name: '宾馆',},
                    {value: 64852.14, name: '母婴',},
                    {value: 25874.58, name: 'KTV',},

                    {value: 0, name: "", label: {show: false}, labelLine: {show: false}},
                    {value: 0, name: "", label: {show: false}, labelLine: {show: false}},
                    {value: 0, name: "", label: {show: false}, labelLine: {show: false}},
                    {value: 0, name: "", label: {show: false}, labelLine: {show: false}},
                    {value: 0, name: "", label: {show: false}, labelLine: {show: false}},


                ]
            }]
        };

        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_3() {
        var myChart = echarts.init(document.getElementById('echart3'));
        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            },
            legend: {
                //icon: 'vertical',
                data: ['交易额', '交易笔数'],
                //align: 'center',
                // right: '35%',
                top: '0',
                textStyle: {
                    color: "#fff"
                },
                // itemWidth: 15,
                // itemHeight: 15,
                itemGap: 20,
            },
            grid: {
                left: '0',
                right: '20',
                top: '10',
                bottom: '20',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba(255,255,255,.6)'
                    },
                    interval: 0,
                    rotate: 45,
                    fontSize: 12
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                },
                //默认最近12天的交易;
                data: (function () {
                    var now = new Date();
                    var res = [];
                    var len = 12;
                    while (len--) {
                        res.unshift(now.toLocaleDateString().replace(/^\D*/, ''));
                        now = new Date(now - 24 * 60 * 60 * 1000);
                    }
                    return res;
                })()
            }, {}],
            yAxis: [{
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba(255,255,255,.6)'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                }
            }],
            series: [{
                name: '交易额',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(24, 163, 64, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(24, 163, 64, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#cdba00',
                        borderColor: 'rgba(137,189,2,0.27)',
                        borderWidth: 12
                    }
                },
                data: [201232200, 231221466, 343112257, 331245580, 371232207, 401221200, 431215512, 451134220, 481251215, 490123280, 508331250, 521242187]
            }, {
                name: '交易笔数',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(39, 122,206, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(39, 122,206, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#277ace',
                        borderColor: 'rgba(0,136,212,0.2)',
                        borderWidth: 12
                    }
                },
                data: [1231400, 1123300, 1235230, 1432450, 1223250, 1634650, 1225720, 2213800, 1824520, 1923310, 1312404, 1535300]
            }]
        };

        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    //09.TOP5城市-echart4;
    function echarts_4() {
        var myChart = echarts.init(document.getElementById('echart4'));
        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#e57f12'
                    }
                }
            },
            "legend": {
                "data": [
                    {"name": "总交易额"},
                ],
                "top": "0%",
                "textStyle": {
                    "color": "rgba(255,255,255,0.9)"
                }
            },
            calculable: true,
            "xAxis": [
                {
                    "type": "category",
                    data: ["杭州", "上海", "北京", "广州", "武汉"],
                    axisLine: {lineStyle: {color: "rgba(255,255,255,.1)"}},
                    axisLabel: {
                        textStyle: {color: "rgba(255,255,255,.6)", fontSize: '14',},
                    },
                },
            ],
            "yAxis": [
                {
                    "type": "value",
                    "name": "金额",
                    /*"min": 0,
                     "max": 1000,
                     "interval": 100,*/
                    "axisLabel": {
                        "show": true,
                    },
                    axisLine: {lineStyle: {color: 'rgba(255,255,255,.4)'}},//左线色
                },
            ],
            "grid": {
                "top": "15%",
                "right": "30",
                "bottom": "30",
                "left": "130",
            },
            "series": [
                {
                    "name": "总交易额",
                    "type": "bar",
                    "data": ["144331458.20", "122323586.25", "251222310.47", "148323435.21", "139315278.23"],
                    markPoint: {
                        data: [
                            {type: 'max', name: '最大值'},
                            {type: 'min', name: '最小值'}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    },
                    "barWidth": "50",
                    "itemStyle": {
                        "normal": {
                            "color": {
                                "type": "linear",
                                "x": 0,
                                "y": 0,
                                "x2": 0,
                                "y2": 1,
                                "colorStops": [
                                    {
                                        "offset": 0,
                                        "color": "#e57f12"
                                    },
                                    {
                                        "offset": 1,
                                        "color": "#e57f12"
                                    }
                                ],
                                "globalCoord": false
                            }
                        }
                    }
                }

            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
})
