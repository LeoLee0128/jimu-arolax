# 联系表单 EmailJS 功能说明

## 📧 功能概述

为contact页面的联系表单添加EmailJS功能，当用户提交联系表单时，自动发送邮件到 `info@jimu-tech.com`。

## ✅ 功能特性

### 🎯 表单处理
- **表单验证**：验证姓名和邮箱必填字段
- **邮箱格式验证**：确保邮箱格式正确
- **实时反馈**：显示加载状态和结果提示

### 📧 邮件发送
- **收件人**：`info@jimu-tech.com`
- **邮件主题**：`新的客户咨询`
- **邮件内容**：包含客户姓名、邮箱、咨询内容

### 🎨 用户体验
- **页面内提示**：在表单下方显示消息
- **自动清空**：发送成功后自动清空表单
- **加载状态**：按钮显示"发送中..."状态

## 🔧 技术实现

### 📋 表单字段
```html
<input type="text" name="姓名" id="Name" placeholder="Name*">
<input type="text" name="Email" id="Email" placeholder="Email*">
<input type="text" name="备注" id="Messages" placeholder="备注">
```

### 📧 邮件模板参数
```javascript
const templateParams = {
    email: "info@jimu-tech.com",  // 收件人邮箱
    from_email: email,            // 客户邮箱
    from_name: name,              // 客户姓名
    subject: "新的客户咨询",       // 邮件主题
    message: `客户姓名: ${name}\n客户邮箱: ${email}\n咨询内容: ${message || '无'}`,
    timestamp: new Date().toISOString(),
    source: window.location.href
};
```

### 🎨 消息提示样式
```css
margin-top: 15px;
font-size: 14px;
font-weight: 400;
line-height: 1.4;
transition: all 0.3s ease;
text-align: center;
```

## 📱 用户交互流程

### 1. 填写表单
- 用户填写姓名（必填）
- 用户填写邮箱（必填）
- 用户填写备注（可选）

### 2. 提交验证
- 验证必填字段是否填写
- 验证邮箱格式是否正确
- 显示相应错误提示

### 3. 发送处理
- 显示"发送中..."状态
- 发送邮件到info@jimu-tech.com
- 显示发送结果

### 4. 结果反馈
- **成功**：显示"咨询已发送！我们会尽快与您联系"
- **失败**：显示"发送失败，请稍后重试"
- 自动清空表单（成功时）

## 🔍 验证规则

### 必填字段验证
- **姓名**：不能为空
- **邮箱**：不能为空

### 邮箱格式验证
```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

## 📊 邮件内容格式

### 邮件主题
```
新的客户咨询
```

### 邮件正文
```
客户姓名: [客户姓名]
客户邮箱: [客户邮箱]
咨询内容: [咨询内容或"无"]
时间: [发送时间]
来源页面: [页面URL]
```

## 🎯 与邮箱订阅功能的区别

| 功能 | 联系表单 | 邮箱订阅 |
|------|----------|----------|
| **触发方式** | 提交联系表单 | 页脚邮箱订阅 |
| **收件人** | info@jimu-tech.com | 客户邮箱 |
| **邮件内容** | 客户咨询信息 | 订阅确认 |
| **表单字段** | 姓名、邮箱、备注 | 仅邮箱 |
| **验证规则** | 姓名+邮箱必填 | 邮箱格式验证 |

## 📝 配置要求

### EmailJS配置
- **Service ID**: `service_80luy7a`
- **Template ID**: `template_ehbtrtn`
- **Public Key**: `WEXBbt8LBDbo2QfMh`

### 邮件模板变量
确保EmailJS模板支持以下变量：
- `{{email}}` - 收件人邮箱
- `{{from_email}}` - 发件人邮箱
- `{{from_name}}` - 发件人姓名
- `{{subject}}` - 邮件主题
- `{{message}}` - 邮件内容

## 🚀 使用方法

### 对于用户
1. 访问contact页面
2. 填写联系表单
3. 点击"发送我的咨询"
4. 查看发送结果

### 对于管理员
1. 检查info@jimu-tech.com邮箱
2. 查看客户咨询邮件
3. 及时回复客户

## 🔧 故障排查

### 常见问题
1. **表单无法提交**：检查EmailJS SDK是否正确加载
2. **邮件发送失败**：检查EmailJS配置是否正确
3. **验证失败**：检查必填字段和邮箱格式

### 调试信息
- 打开浏览器开发者工具
- 查看Console标签页
- 检查EmailJS相关日志

---
**更新时间**: 2025年8月16日
**版本**: v1.0
**状态**: ✅ 已部署
