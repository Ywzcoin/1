// 探探AI精准获客系统交互脚本
document.addEventListener('DOMContentLoaded', function() {
    // 初始化图表
    const usageChart = echarts.init(document.getElementById('usageChart'));
    const userChart = echarts.init(document.getElementById('userChart'));

    // 匹配效果分析图配置
    const usageOption = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['AI匹配', '传统匹配']
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
            name: '匹配率(%)'
        },
        series: [
            {
                name: 'AI匹配',
                type: 'bar',
                data: [50, 58, 65, 72, 80, 88],
                itemStyle: {
                    color: '#FF4D4F'
                }
            },
            {
                name: '传统匹配',
                type: 'bar',
                data: [35, 38, 40, 42, 45, 48],
                itemStyle: {
                    color: '#999999'
                }
            }
        ]
    };

    // 用户增长趋势图配置
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
            name: '用户数'
        },
        series: [{
            data: [3000, 7000, 15000, 25000, 40000, 60000],
            type: 'line',
            smooth: true,
            areaStyle: {
                opacity: 0.3,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#FF4D4F' },
                    { offset: 1, color: 'rgba(255, 77, 79, 0.1)' }
                ])
            },
            itemStyle: {
                color: '#FF4D4F'
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
            this.style.boxShadow = '0 8px 15px rgba(255, 77, 79, 0.2)';
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
        this.style.boxShadow = '0 4px 15px rgba(255, 77, 79, 0.3)';
    });
    
    backButton.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
        this.style.boxShadow = 'none';
    });
}); 