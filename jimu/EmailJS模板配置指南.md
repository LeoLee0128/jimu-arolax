# EmailJS 模板配置指南

## 📧 模板变量配置

### 当前使用的变量

在您的EmailJS模板中，请确保使用以下变量：

#### 收件人配置
```
To Email: {{email}}
```

#### 邮件内容变量
```
From Email: {{from_email}}
Subject: {{subject}}
Message: {{message}}
Timestamp: {{timestamp}}
Source: {{source}}
```

### 🔧 模板设置步骤

#### 1. 登录EmailJS Dashboard
- 访问：https://dashboard.emailjs.com/
- 登录您的账户

#### 2. 编辑邮件模板
- 进入 "Email Templates" 页面
- 找到模板ID：`template_ehbtrtn`
- 点击编辑

#### 3. 配置模板变量
在模板编辑器中，确保以下配置：

**收件人设置：**
```
To Email: {{email}}
```

**邮件内容：**
```
From: {{from_email}}
Subject: {{subject}}
Message: {{message}}
```

**可选信息：**
```
时间: {{timestamp}}
来源页面: {{source}}
```

### 📋 完整的模板示例

```html
<!DOCTYPE html>
<html>
<head>
    <title>新的合作咨询</title>
</head>
<body>
    <h2>新的Shopify开发合作咨询</h2>
    
    <p><strong>客户邮箱：</strong> {{from_email}}</p>
    <p><strong>咨询时间：</strong> {{timestamp}}</p>
    <p><strong>来源页面：</strong> {{source}}</p>
    
    <p><strong>详细信息：</strong></p>
    <p>{{message}}</p>
    
    <hr>
    <p><small>此邮件由极沐科技网站自动发送</small></p>
</body>
</html>
```

### ⚠️ 重要注意事项

#### 1. 变量名必须完全匹配
- JavaScript中的参数名必须与模板中的变量名完全一致
- 区分大小写：`{{email}}` ≠ `{{Email}}`

#### 2. 收件人配置
- **To Email** 必须设置为 `{{email}}`
- 这样用户才能收到自动回复邮件

#### 3. 测试建议
- 先在EmailJS Dashboard中测试模板
- 确认所有变量都能正确显示
- 然后再在网站中测试

### 🔍 故障排查

#### 问题：The recipients address is empty
**原因：** 模板中的收件人变量名与JavaScript发送的参数名不匹配

**解决方案：**
1. 检查模板中的 "To Email" 是否为 `{{email}}`
2. 确认JavaScript中发送了 `email` 参数
3. 重新测试

#### 问题：用户收不到自动回复
**原因：** 收件人地址配置错误

**解决方案：**
1. 确保 "To Email" 设置为 `{{email}}`
2. 不要使用固定邮箱地址
3. 测试模板功能

#### 问题：邮件主题不专业
**原因：** 邮件主题没有体现业务特色

**解决方案：**
1. 使用专业的合作咨询主题
2. 体现Shopify开发服务特色
3. 让客户感受到专业性

### 📊 当前配置状态

#### ✅ 已配置
- **Service ID**: `service_80luy7a`
- **Template ID**: `template_ehbtrtn`
- **Public Key**: `WEXBbt8LBDbo2QfMh`

#### 🔧 需要确认
- **To Email**: 应设置为 `{{email}}`
- **模板变量**: 确保所有变量名正确

### 🎯 下一步操作

1. **登录EmailJS Dashboard**
2. **编辑模板 `template_ehbtrtn`**
3. **设置 To Email 为 `{{email}}`**
4. **保存模板**
5. **测试网站功能**

---
**更新时间**: 2025年8月16日
**状态**: ⚠️ 需要更新模板配置
