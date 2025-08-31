// EmailJS 邮箱订阅功能 - 生产版本 v3.0
// 更新时间: 2025-08-16
// 功能: 页面内提示 + 邮箱历史记录
(function() {
    'use strict';
    
    console.log('EmailJS 订阅功能 v3.0 已加载');
    
    // 检查EmailJS是否加载
    if (typeof emailjs === 'undefined') {
        console.error('EmailJS 未加载！请检查SDK是否正确引入');
        return;
    }
    
    // 初始化EmailJS
    let userID = "WEXBbt8LBDbo2QfMh"; // EmailJS Public Key
    
    try {
        emailjs.init(userID);
        console.log('EmailJS 初始化成功，用户ID:', userID);
    } catch (error) {
        console.error('EmailJS 初始化失败:', error);
        return;
    }
    
    // 处理订阅表单提交
    function handleSubscription(event) {
        event.preventDefault();
        
        console.log('开始处理订阅请求...');
        
        const form = event.target;
        const emailInput = form.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        
        console.log('用户输入的邮箱:', email);
        
        // 验证邮箱格式
        if (!isValidEmail(email)) {
            console.log('邮箱格式验证失败');
            showMessage('请输入有效的邮箱地址', 'error', form);
            return;
        }
        
        // 显示加载状态
        const submitBtn = form.querySelector('.subscribe-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span>提交中...</span>';
        submitBtn.disabled = true;
        
        // 发送邮件通知
        const templateParams = {
            email: email,  // 收件人邮箱，对应模板中的 {{email}}
            from_email: email,
            subject: "新的合作咨询",
            message: `有新的潜在客户寻求Shopify开发合作：${email}`,
            timestamp: new Date().toISOString(),
            source: window.location.href
        };
        
        console.log('发送邮件参数:', templateParams);
        
        emailjs.send("service_80luy7a", "template_ehbtrtn", templateParams)
        .then(function(response) {
            console.log("邮件发送成功:", response);
            showMessage('提交成功！我们会尽快与您联系', 'success', form);
            emailInput.value = '';
            saveSubscription(email);
        })
        .catch(function(error) {
            console.error("邮件发送失败:", error);
            showMessage('提交失败，请稍后重试', 'error', form);
        })
        .finally(function() {
            // 恢复按钮状态
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
    }
    
    // 邮箱格式验证
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // 显示页面内消息提示
    function showMessage(message, type, form) {
        console.log('显示消息:', message, type);
        
        // 移除之前的消息
        const existingMessage = form.querySelector('.subscription-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // 创建消息元素
        const messageDiv = document.createElement('div');
        messageDiv.className = `subscription-message ${type}`;
        messageDiv.textContent = message;
        messageDiv.style.cssText = `
            margin-top: 8px;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.4;
            transition: all 0.3s ease;
            ${type === 'success' ? 'color: #28a745;' : 'color: #dc3545;'}
        `;
        
        // 插入到表单后面
        form.appendChild(messageDiv);
        
        // 3秒后自动移除
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.style.opacity = '0';
                setTimeout(() => {
                    if (messageDiv.parentNode) {
                        messageDiv.parentNode.removeChild(messageDiv);
                    }
                }, 300);
            }
        }, 3000);
    }
    
    // 保存订阅到本地存储
    function saveSubscription(email) {
        try {
            let subscriptions = JSON.parse(localStorage.getItem('emailSubscriptions') || '[]');
            if (!subscriptions.includes(email)) {
                subscriptions.push(email);
                localStorage.setItem('emailSubscriptions', JSON.stringify(subscriptions));
                console.log('订阅信息已保存到本地存储');
            }
        } catch (error) {
            console.log('保存订阅信息失败:', error);
        }
    }
    
    // 获取邮箱历史记录
    function getEmailHistory() {
        try {
            return JSON.parse(localStorage.getItem('emailSubscriptions') || '[]');
        } catch (error) {
            console.log('获取邮箱历史记录失败:', error);
            return [];
        }
    }
    
    // 创建邮箱历史记录下拉列表
    function createEmailHistoryDropdown(emailInput, form) {
        const history = getEmailHistory();
        if (history.length === 0) return;
        
        // 移除现有的下拉列表
        const existingDropdown = form.querySelector('.email-history-dropdown');
        if (existingDropdown) {
            existingDropdown.remove();
        }
        
        // 创建下拉列表容器
        const dropdown = document.createElement('div');
        dropdown.className = 'email-history-dropdown';
        dropdown.style.cssText = `
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            border: 1px solid #e0e0e0;
            border-top: none;
            border-radius: 0 0 5px 5px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            z-index: 1000;
            max-height: 200px;
            overflow-y: auto;
        `;
        
        // 添加历史记录项
        history.forEach(email => {
            const item = document.createElement('div');
            item.className = 'email-history-item';
            item.textContent = email;
            item.style.cssText = `
                padding: 10px 15px;
                cursor: pointer;
                border-bottom: 1px solid #f0f0f0;
                font-size: 14px;
                color: #333;
                transition: background-color 0.2s ease;
            `;
            
            // 鼠标悬停效果
            item.addEventListener('mouseenter', function() {
                this.style.backgroundColor = '#f8f9fa';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.backgroundColor = 'white';
            });
            
            // 点击选择邮箱
            item.addEventListener('click', function() {
                emailInput.value = email;
                dropdown.remove();
                emailInput.focus();
            });
            
            dropdown.appendChild(item);
        });
        
        // 插入下拉列表
        const inputContainer = emailInput.parentElement;
        inputContainer.style.position = 'relative';
        inputContainer.appendChild(dropdown);
        
        // 点击外部关闭下拉列表
        document.addEventListener('click', function closeDropdown(e) {
            if (!dropdown.contains(e.target) && e.target !== emailInput) {
                dropdown.remove();
                document.removeEventListener('click', closeDropdown);
            }
        });
    }
    
    // 绑定表单事件
    function initSubscriptionForms() {
        const forms = document.querySelectorAll('.subscribe-form');
        console.log('找到订阅表单数量:', forms.length);
        
        forms.forEach((form, index) => {
            console.log(`绑定表单 ${index + 1}:`, form);
            
            // 绑定提交事件
            form.addEventListener('submit', handleSubscription);
            
            // 绑定邮箱输入框事件
            const emailInput = form.querySelector('input[type="email"]');
            if (emailInput) {
                // 点击时显示历史记录
                emailInput.addEventListener('focus', function() {
                    createEmailHistoryDropdown(this, form);
                });
                
                // 输入时隐藏历史记录
                emailInput.addEventListener('input', function() {
                    const dropdown = form.querySelector('.email-history-dropdown');
                    if (dropdown) {
                        dropdown.remove();
                    }
                });
            }
        });
    }
    
    // 页面加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSubscriptionForms);
    } else {
        initSubscriptionForms();
    }
    
    console.log('EmailJS 订阅功能初始化完成');
    
})();
