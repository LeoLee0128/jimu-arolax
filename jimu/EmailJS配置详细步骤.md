# EmailJS 配置详细步骤

## 问题诊断
当前错误：`The Public Key is invalid` - 表示用户ID不正确

## 正确的配置步骤

### 步骤1：获取Public Key（重要！）
1. 访问：https://dashboard.emailjs.com/admin/account
2. 登录您的EmailJS账户
3. 在页面中找到 **"API Keys"** 部分
4. 复制 **"Public Key"** (格式类似：`user_xxxxxxxxxxxxx`)
5. **注意**：这不是User ID，而是Public Key！

### 步骤2：获取Template ID
1. 访问：https://dashboard.emailjs.com/admin
2. 点击左侧菜单 **"Email Templates"**
3. 找到您创建的邮件模板
4. 点击模板名称进入详情页
5. 复制 **"Template ID"** (格式类似：`template_xxxxxxxxxxxxx`)

### 步骤3：验证服务ID
确认您的服务ID是：`service_80luy7a`

## 常见错误

### 错误1：使用了错误的ID
- ❌ 错误：使用了User ID而不是Public Key
- ✅ 正确：使用Public Key

### 错误2：ID格式不正确
- Public Key格式：`user_xxxxxxxxxxxxx`
- Template ID格式：`template_xxxxxxxxxxxxx`
- Service ID格式：`service_xxxxxxxxxxxxx`

### 错误3：账户未激活
- 确保EmailJS账户已激活
- 检查是否有邮件发送限制

## 测试步骤

### 1. 使用测试页面
打开 `emailjs-test.html` 并填入：
- Public Key (不是User ID)
- Template ID
- 测试邮箱

### 2. 检查控制台输出
应该看到：
```
EmailJS 初始化成功
邮件发送成功!
```

### 3. 检查邮箱
查看 `lzk99018@gmail.com` 是否收到测试邮件

## 更新主页面

测试成功后，更新 `assets/js/email-subscription-debug.js`：

```javascript
// 第10行：替换为您的Public Key
let userID = "user_xxxxxxxxxxxxx"; // 您的Public Key

// 第50行：替换为您的Template ID
const templateId = "template_xxxxxxxxxxxxx"; // 您的Template ID
```

## 邮件模板配置

确保您的邮件模板包含以下变量：
```
收件人：{{to_email}}
发件人：{{from_email}}
主题：{{subject}}
内容：{{message}}
时间：{{timestamp}}
```

## 故障排除

### 如果仍然失败：
1. 检查Public Key是否正确复制
2. 确认Template ID是否正确
3. 验证邮件服务是否配置正确
4. 检查EmailJS账户状态

### 联系支持：
- 邮箱：lzk99018@gmail.com
- 电话：+86 19121685062

## 重要提醒
- Public Key 和 User ID 是不同的
- 必须使用 Public Key 进行初始化
- 确保所有ID都完整复制，不要遗漏字符
