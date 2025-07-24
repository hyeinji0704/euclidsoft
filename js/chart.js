// ==============================
// 데이터 정의
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

// 색상 정의
const lineColors = ['#56A373', '#4678E6', '#F48F41'];

// const gradientColors = [
//   (opacity) => `rgba(86,163,115,${opacity})`,   // #56A373
//   (opacity) => `rgba(70,120,230,${opacity})`,   // #4678E6
//   (opacity) => `rgba(244,143,65,${opacity})`    // #F48F41
// ];

// ==============================
// 차트 초기화 및 갱신
// ==============================

let chart = null;

function initChart() {
  const el = document.getElementById('chart');
  if (!el) return;
  chart = echarts.init(el);
  updateChart('month'); // 초기 로딩
}

function updateChart(type) {
  const labels = xAxisLabels[type];
  const dataSet = chartData[type];

   const series = dataSet.map((item, i) => ({
    name: item.name,
    type: 'line',
    smooth: true,
    showSymbol: false, // 👈 기본 상태에서는 마커 숨김
    emphasis: {
      focus: 'series', // (선택사항) hover 시 강조
      symbol: 'circle' // 👈 hover 시 동그라미 표시
    },
    symbolSize: 6,
    data: item.data,
    lineStyle: {
      color: lineColors[i],
      width: 2
    },
    itemStyle: {
      color: lineColors[i]
    },
    areaStyle: {
      color: {
        type: 'linear',
        x: 0, y: 0, x2: 0, y2: 1,
        colorStops: [
            { offset: 0, color: ['#E8FDF1', '#F4F3FF', '#FFEEE8'][i] },
            { offset: 1, color: '#FFFFFF' }
        ]
      }
    },
  }));

  chart.setOption({
    tooltip: {
      trigger: 'axis',
      backgroundColor: '#fff',
      borderColor: '#eee',
      borderWidth: 1,
      textStyle: {
        color: '#333',
        fontSize: 13,
        fontWeight: 500
      }
    },
    legend: {
      data: dataSet.map(d => d.name),
      top: '0'
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
        axisLine: { show: false },     // 🔹 x축 선 숨김
        axisTick: { show: false },     // 🔹 눈금(짧은 선) 숨김
        axisLabel: {
            color: '#222',               // 텍스트 색상
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
            lineStyle: { color: '#eee' }
        },
        axisLabel: {
            color: '#222',       // ← 텍스트 색상
            fontSize: 16,        // ← 폰트 크기
            fontWeight: '400',   // ← 폰트 굵기
            fontFamily: 'pretendard', // ← 폰트 적용 시 (선택사항)
            formatter: value => value.toLocaleString(), // ← 숫자 쉼표 추가 (선택)
            margin: 12  // 🔹 여기! 숫자와 그래프 간 여백(px)
        }
    },
    series
  });
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
  bindTabEvents();

  // 사이즈 변경 시 대응
  window.addEventListener('resize', () => {
    chart && chart.resize();
  });
});
