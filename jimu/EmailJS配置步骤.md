# EmailJS 配置步骤

## 已完成的操作
✅ 创建了EmailJS邮件服务 (service_80luy7a)  
✅ 创建了邮件模板  
✅ 在contact页面集成了EmailJS功能  
✅ 已将服务ID填入代码中 (service_80luy7a)  

## 还需要完成的步骤

### 1. 获取EmailJS用户ID
1. 登录您的EmailJS账户
2. 在控制台中找到 "Account" 或 "API Keys" 部分
3. 复制您的 **Public Key** (用户ID)
4. 在 `assets/js/email-subscription.js` 文件中替换 `YOUR_USER_ID`

### 2. 获取邮件模板ID
1. 在EmailJS控制台中找到您创建的邮件模板
2. 复制模板的 **Template ID**
3. 在 `assets/js/email-subscription.js` 文件中替换 `YOUR_TEMPLATE_ID`

### 3. 更新代码
在 `assets/js/email-subscription.js` 文件中找到这两行：

```javascript
// 第5行：替换用户ID
emailjs.init("YOUR_USER_ID");

// 第35行：替换模板ID（服务ID已填入）  
emailjs.send("service_80luy7a", "YOUR_TEMPLATE_ID", {
```

### 4. 邮件模板变量
确保您的邮件模板包含以下变量：
- `{{to_email}}` - 收件人邮箱
- `{{from_email}}` - 订阅者邮箱
- `{{subject}}` - 邮件主题
- `{{message}}` - 邮件内容

### 5. 测试功能
1. 打开 `contact.html` 页面
2. 在页脚的邮箱输入框中输入测试邮箱
3. 点击订阅按钮
4. 检查是否收到通知邮件

## 邮件模板示例
```
主题：新的邮箱订阅

内容：
有新的用户订阅了您的网站！

订阅者邮箱：{{from_email}}
订阅时间：{{timestamp}}
来源页面：{{source}}

请及时处理此订阅请求。
```

## 故障排除

### 如果邮件发送失败：
1. 检查用户ID和模板ID是否正确
2. 确认邮件服务配置正确
3. 查看浏览器控制台的错误信息
4. 检查EmailJS账户的邮件发送限制

### 如果页面报错：
1. 确认EmailJS SDK已正确加载
2. 检查JavaScript文件路径是否正确
3. 查看浏览器控制台的错误信息

## 联系支持
如有问题，请联系：
- 邮箱：lzk99018@gmail.com
- 电话：+86 19121685062
