(
    function(){// 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('chart1'));
  
      // myChart.showLoading();
      $.get('https://geo.datav.aliyun.com/areas_v3/bound/340800_full.json', function (geoJson) {
        // myChart.hideLoading();
        echarts.registerMap('AQ', geoJson);
        myChart.setOption(
          (option = {
            title: {
              text: '安庆市2023年各区、县GDP情况',
              subtext: '数据来源：安徽省统计局',
              link: 'https://www.anqing.gov.cn/',
              sublink:
                'http://tjj.ah.gov.cn/'
            },
            tooltip: {
              trigger: 'item',
              formatter: '{b}<br/>{c} (亿元)'
            },
            toolbox: {
              show: true,
              orient: 'vertical',
              left: 'right',
              top: 'center',
              feature: {
                dataView: { readOnly: false },
                restore: {},
                saveAsImage: {}
              }
            },
            visualMap: {
              min: 50,
              max: 500,
              text: ['多', '少'],
              realtime: false,
              calculable: true,
              inRange: {
                color: ['white', 'orange', 'red']
              }
            },
            series: [
              {
                name: '安庆2023年各区县GDP',
                type: 'map',
                map: 'AQ',
                label: {
                  show: true
                },
                data: [
                  { name: '宿松县', value: 273.60},
                  { name: '桐城市', value: 467.40 },
                  { name: '怀宁县', value: 353.40},
                  { name: '望江县', value: 209.74 },
                  { name: '潜山市', value: 244.70},
                  { name: '太湖县', value: 217.80},
                  { name: '岳西县', value: 137.20 },
                  { name: '大观区', value:  222.00},
                  { name: '迎江区', value: 267.10},
                  { name: '宜秀区', value:484.90 },
                ],
                // 自定义名称映射
  
              }
            ]
          })
        );
      });
      
  
      
      
      
  
    }
   )();

   (
    function(){var chartDom = document.getElementById('chart3');
    var myChart = echarts.init(chartDom);
    var option;
    
    option = {
      title: {
        text: 'Stacked Area Chart'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Email',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'Union Ads',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: 'Video Ads',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: 'Direct',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: 'Search Engine',
          type: 'line',
          stack: 'Total',
          label: {
            show: true,
            position: 'top'
          },
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    };
    
    option && myChart.setOption(option);
    })();