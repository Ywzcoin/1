// X（Twitter）矩阵AI运营系统交互脚本
document.addEventListener('DOMContentLoaded', function() {
    // 初始化图表
    const usageChart = echarts.init(document.getElementById('usageChart'));
    const userChart = echarts.init(document.getElementById('userChart'));

    // 内容互动效果分析图配置
    const usageOption = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['AI创作', '传统创作']
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
                name: 'AI创作',
                type: 'bar',
                data: [35, 42, 48, 52, 58, 65],
                itemStyle: {
                    color: '#1DA1F2'
                }
            },
            {
                name: '传统创作',
                type: 'bar',
                data: [20, 22, 25, 28, 30, 32],
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
            data: [1000, 2500, 4500, 7000, 10000, 15000],
            type: 'line',
            smooth: true,
            areaStyle: {
                opacity: 0.3,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#1DA1F2' },
                    { offset: 1, color: 'rgba(29, 161, 242, 0.1)' }
                ])
            },
            itemStyle: {
                color: '#1DA1F2'
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
            this.style.boxShadow = '0 8px 15px rgba(29, 161, 242, 0.2)';
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
        this.style.boxShadow = '0 4px 15px rgba(29, 161, 242, 0.3)';
    });
    
    backButton.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
        this.style.boxShadow = 'none';
    });
}); 