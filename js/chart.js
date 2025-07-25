// ==============================
// 데이터 정의 (Line Chart)
// ==============================

const chartData = {
  month: [
    { name: '전략', data: [150, 120, 50, 30, 100, 120, 90, 80, 110, 160, 180, 60] },
    { name: '법', data: [80, 100, 110, 115, 120, 150, 130, 140, 125, 120, 110, 100] },
    { name: '지침', data: [200, 140, 130, 150, 130, 100, 140, 150, 130, 110, 120, 100] }
  ],
  week: [
    { name: '전략', data: [50, 60, 40, 30, 60, 80, 100] },
    { name: '법', data: [90, 100, 95, 105, 98, 85, 80] },
    { name: '지침', data: [120, 110, 140, 130, 125, 115, 110] }
  ],
  day: [
    { name: '전략', data: [10, 15, 20, 18, 22, 25, 20] },
    { name: '법', data: [30, 28, 26, 25, 27, 29, 30] },
    { name: '지침', data: [40, 38, 35, 36, 34, 33, 32] }
  ]
};

const xAxisLabels = {
  month: ['1','2','3','4','5','6','7','8','9','10','11','12'],
  week: ['1주', '2주', '3주', '4주', '5주', '6주', '7주'],
  day: ['월', '화', '수', '목', '금', '토', '일']
};

const lineColors = ['#F48F41', '#4678E6', '#56A373'];

// ==============================
// 선형 차트 초기화 및 업데이트
// ==============================

let chart = null;

function initChart() {
  const el = document.getElementById('chart');
  if (!el) return;
  chart = echarts.init(el);
  updateChart('month');
}

function updateChart(type) {
  const labels = xAxisLabels[type];
  const rawDataSet = chartData[type];
  const order = ['지침', '법', '전략'];
  const dataSet = order.map(name => rawDataSet.find(d => d.name === name));

  const series = dataSet.map((item, i) => ({
    name: item.name,
    type: 'line',
    smooth: true,
    showSymbol: false,
    emphasis: {
      focus: 'series',
      symbol: 'circle'
    },
    symbolSize: 6,
    data: item.data,
    lineStyle: { color: lineColors[i], width: 2 },
    itemStyle: { color: lineColors[i] },
    areaStyle: {
      color: {
        type: 'linear',
        x: 0, y: 0, x2: 0, y2: 1,
        colorStops: [
          { offset: 0, color: ['#FFF2EE', '#F6F5FF', '#EAFDF3'][i] },
          { offset: 1, color: 'rgba(255,255,255,0.2)' }
        ]
      }
    }
  }));

  chart.setOption({
    tooltip: {
      trigger: 'axis',
      backgroundColor: '#0C1D4F',
      borderWidth: 0,
      padding: [5, 10],
      textStyle: {
        color: '#fff',
        fontSize: 13,
        fontFamily: 'Pretendard'
      },
      extraCssText: 'box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); border-radius: 8px;',
      formatter: function (params) {
        const order = ['전략', '법', '지침'];
        const sorted = params.slice().sort((a, b) => {
          return order.indexOf(a.seriesName) - order.indexOf(b.seriesName);
        });
        let html = '';
        sorted.forEach(item => {
          html += `
            <span style="display:inline-block;margin-right:6px;border-radius:50%;width:8px;height:8px;background-color:${item.color};"></span>
            <span>${item.data.toLocaleString()}</span><br />
          `;
        });
        return html;
      }
    },
    legend: {
      data: ['전략', '법', '지침'],
      icon: 'circle',
      itemWidth: 10,
      itemHeight: 10,
      itemGap: 15,
      textStyle: {
        color: '#3A3E43',
        fontSize: 16,
        fontFamily: 'Pretendard',
        fontWeight: 400
      },
      top: '0',
      orient: 'horizontal',
      right: '0',
      align: 'auto'
    },
    grid: {
      left: 0,
      right: '4%',
      bottom: '5%',
      top: '15%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: labels,
      boundaryGap: false,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        color: '#222',
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'pretendard',
        margin: 15
      }
    },
    yAxis: {
      type: 'value',
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#DDE0E5',
          width: 1,
          type: 'dashed'
        }
      },
      axisLabel: {
        color: '#222',
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'pretendard',
        formatter: value => value.toLocaleString(),
        margin: 12
      }
    },
    series
  });
}

// ==============================
// 도넛 차트 추가
// ==============================

function initDonutChart() {
  const el = document.getElementById('donutChart');
  if (!el) return;
  const donutChart = echarts.init(el, null, {
    width: 212,
    height: 212
  });

  const data = [
    { value: 30, name: '미국' },
    { value: 20, name: '브라질' },
    { value: 15, name: '멕시코' },
    { value: 15, name: '그린란드' },
    { value: 10, name: '영국' },
    { value: 10, name: '기타' }
  ];

  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {d}%',
      backgroundColor: '#1A2B57',
      borderRadius: 8,
      padding: [10, 10],
      textStyle: {
        color: '#fff',
        fontSize: 13
      }
    },
    color: ['#3C986C', '#F7D14F', '#4678E6', '#8467F7', '#6DD1C0', '#FD9E56'],
    series: [
      {
        name: '국가별 분포',
        type: 'pie',
        radius: ['65%', '90%'], // ← 외곽은 거의 꽉 차고, 안쪽은 여백 확보
        center: ['50%', '50%'],
        tooltip: { show: false }, // ✅ 툴팁 비활성화
        emphasis: {
           label: {
            show: true,
            fontSize: 13,
            fontWeight: 600,
            color: '#fff',
            formatter: (params) => {
              return params.percent >= 10 ? `${params.percent}%` : '';
            }
          },
          labelLayout: function (params) {
            return {
              x: params.rect.x + params.rect.width / 2,
              y: params.rect.y + params.rect.height / 2,
              align: 'center',
              verticalAlign: 'middle'
            };
          }
        },
        padAngle: 3,
        itemStyle: {
          opacity: 1,
          borderRadius: 5,
          borderColor: '#fff',
          borderWidth: 1
        },
        label: { 
          show: false,
          position: 'inside',
          formatter: () => '',
        },
        labelLine: {
          show: false    
        },
        data
      },
      {
        type: 'pie',
        radius: ['0%', '56%'],
        center: ['50%', '50%'],
        itemStyle: {
          borderRadius: 0,
          borderColor: '#fff',
          borderWidth: 0,
          opacity: 0.85         // ✅ 기본 상태에서 살짝 어둡게
        },
        emphasis: {
          scale: false,         // ✅ 바깥으로 튀는 애니메이션 제거
          itemStyle: {
            opacity: 1          // ✅ hover 시 진해지게
          }
        },
        data: [
          {
            value: 100,
            name: 'Total',
            itemStyle: {
              color: '#FFF', // 내부 원 흰색
              shadowColor: '#ECECEC',
              shadowBlur: 24,
              shadowOffsetX: 0,
              shadowOffsetY: 0
            },
            label: {
              show: true,
              position: 'center',
              formatter: '{a|100}\n{b|Total}',
              rich: {
                a: {
                  fontSize: 26,
                  fontWeight: 700,
                  color: '#131424',
                  lineHeight: 30
                },
                b: {
                  fontSize: 18,
                  fontFamily: 'poppins',
                  fontWeight: 400,
                  color: '#B5BABD'
                }
              }
            }
          }
        ],
        tooltip: { show: false },
        hoverAnimation: false
      }
    ]
  };

  donutChart.setOption(option);
}

// ==============================
// 탭 이벤트
// ==============================

function bindTabEvents() {
  $('.chart_tab li').on('click', function () {
    const type = $(this).data('type');
    if (!type) return;
    $(this).addClass('active').siblings().removeClass('active');
    updateChart(type);
  });
}

// ==============================
// 실행
// ==============================

$(document).ready(function () {
  initChart();
  initDonutChart();
  bindTabEvents();

  window.addEventListener('resize', () => {
    chart && chart.resize();
  });
});
