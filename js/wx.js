// 企业微信聚合引流系统交互脚本
document.addEventListener('DOMContentLoaded', function() {
    // 添加卡片悬停效果
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 15px rgba(18, 150, 219, 0.2)';
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
        this.style.boxShadow = '0 4px 15px rgba(18, 150, 219, 0.3)';
    });
    
    backButton.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
        this.style.boxShadow = 'none';
    });
}); 