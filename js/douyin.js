// 抖音AI助播系统交互脚本
document.addEventListener('DOMContentLoaded', function() {
    // 初始化图表
    const usageChart = echarts.init(document.getElementById('usageChart'));
    const userChart = echarts.init(document.getElementById('userChart'));

    // 直播效果分析图配置
    const usageOption = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['AI助播', '传统直播']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月']
        },
        yAxis: {
            type: 'value',
            name: '互动率(%)'
        },
        series: [
            {
                name: 'AI助播',
                type: 'bar',
                data: [45, 52, 58, 65, 72, 80],
                itemStyle: {
                    color: '#000000'
                }
            },
            {
                name: '传统直播',
                type: 'bar',
                data: [30, 32, 35, 38, 40, 42],
                itemStyle: {
                    color: '#999999'
                }
            }
        ]
    };

    // 粉丝增长趋势图配置
    const userOption = {
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月']
        },
        yAxis: {
            type: 'value',
            name: '粉丝数'
        },
        series: [{
            data: [2000, 5000, 10000, 20000, 35000, 50000],
            type: 'line',
            smooth: true,
            areaStyle: {
                opacity: 0.3,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#000000' },
                    { offset: 1, color: 'rgba(0, 0, 0, 0.1)' }
                ])
            },
            itemStyle: {
                color: '#000000'
            }
        }]
    };

    // 渲染图表
    usageChart.setOption(usageOption);
    userChart.setOption(userOption);

    // 响应式调整
    window.addEventListener('resize', function() {
        usageChart.resize();
        userChart.resize();
    });

    // 添加卡片悬停效果
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });

    // 添加返回按钮动画效果
    const backButton = document.querySelector('.back-button');
    backButton.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(-5px)';
        this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
    });
    
    backButton.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
        this.style.boxShadow = 'none';
    });
}); 