document.addEventListener('DOMContentLoaded', function() {
    // 设置日期输入框的默认值为今天
    const dateInput = document.getElementById('date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;

    // 获取所有表单输入
    const formInputs = document.querySelectorAll('.complaint-form input');
    
    // 为每个输入框添加事件监听器
    formInputs.forEach(input => {
        input.addEventListener('input', function() {
            // 保存输入值到localStorage
            localStorage.setItem(this.id, this.value);
        });
    });

    // 页面加载时恢复保存的值
    formInputs.forEach(input => {
        const savedValue = localStorage.getItem(input.id);
        if (savedValue) {
            input.value = savedValue;
        }
    });

    // 添加平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}); 