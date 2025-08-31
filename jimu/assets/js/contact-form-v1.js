// 联系表单 EmailJS 功能 - v1.0
// 更新时间: 2025-08-16
// 功能: 处理联系表单提交，发送邮件到info@jimu-tech.com
(function() {
    'use strict';
    
    console.log('联系表单 EmailJS 功能 v1.0 已加载');
    
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
    
    // 处理联系表单提交
    function handleContactForm(event) {
        event.preventDefault();
        
        console.log('开始处理联系表单请求...');
        
        const form = event.target;
        const nameInput = form.querySelector('#Name');
        const emailInput = form.querySelector('#Email');
        const messageInput = form.querySelector('#Messages');
        
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();
        
        console.log('用户输入信息:', { name, email, message });
        
        // 验证必填字段
        if (!name || !email) {
            console.log('必填字段验证失败');
            showContactMessage('请填写姓名和邮箱', 'error', form);
            return;
        }
        
        // 验证邮箱格式
        if (!isValidEmail(email)) {
            console.log('邮箱格式验证失败');
            showContactMessage('请输入有效的邮箱地址', 'error', form);
            return;
        }
        
        // 显示加载状态
        const submitBtn = form.querySelector('.submit-btn button');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span>发送中...</span>';
        submitBtn.disabled = true;
        
        // 发送邮件通知
        const templateParams = {
            email: "info@jimu-tech.com",  // 收件人邮箱
            from_email: email,
            from_name: name,
            subject: "新的客户咨询",
            message: `客户姓名: ${name}\n客户邮箱: ${email}\n咨询内容: ${message || '无'}`,
            timestamp: new Date().toISOString(),
            source: window.location.href
        };
        
        console.log('发送邮件参数:', templateParams);
        
        emailjs.send("service_80luy7a", "template_ehbtrtn", templateParams)
        .then(function(response) {
            console.log("邮件发送成功:", response);
            showContactMessage('咨询已发送！我们会尽快与您联系', 'success', form);
            // 清空表单
            nameInput.value = '';
            emailInput.value = '';
            messageInput.value = '';
        })
        .catch(function(error) {
            console.error("邮件发送失败:", error);
            showContactMessage('发送失败，请稍后重试', 'error', form);
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
    
    // 显示联系表单消息提示
    function showContactMessage(message, type, form) {
        console.log('显示联系表单消息:', message, type);
        
        // 移除之前的消息
        const existingMessage = form.querySelector('.contact-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // 创建消息元素
        const messageDiv = document.createElement('div');
        messageDiv.className = `contact-message ${type}`;
        messageDiv.textContent = message;
        messageDiv.style.cssText = `
            margin-top: 15px;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.4;
            transition: all 0.3s ease;
            text-align: center;
            ${type === 'success' ? 'color: #28a745;' : 'color: #dc3545;'}
        `;
        
        // 插入到表单后面
        form.appendChild(messageDiv);
        
        // 5秒后自动移除
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.style.opacity = '0';
                setTimeout(() => {
                    if (messageDiv.parentNode) {
                        messageDiv.parentNode.removeChild(messageDiv);
                    }
                }, 300);
            }
        }, 5000);
    }
    
    // 绑定联系表单事件
    function initContactForm() {
        const contactForm = document.querySelector('.contact-wrap form');
        console.log('找到联系表单:', contactForm);
        
        if (contactForm) {
            // 绑定提交事件
            contactForm.addEventListener('submit', handleContactForm);
            console.log('联系表单事件绑定成功');
        } else {
            console.log('未找到联系表单');
        }
    }
    
    // 页面加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initContactForm);
    } else {
        initContactForm();
    }
    
    console.log('联系表单 EmailJS 功能初始化完成');
    
})();
