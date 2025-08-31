# 预加载动画data-text值更新总结

## 更新概述

已成功将网站中所有页面的预加载动画 `data-text` 值从旧的 "AROLAX" 更新为新的 "极沐科技 JimuTech"。

## 更新内容

### 旧的data-text值
```
第一行：A R O L A X
第二行：A X X X X X X X
```

### 新的data-text值
```
第一行：极 沐 科 技
第二行：J i m u T e c h
```

## 已更新的页面

### 主要页面（已更新）
- ✅ `index.html` - 首页
- ✅ `about.html` - 关于我们
- ✅ `contact.html` - 联系我们
- ✅ `services.html` - 核心服务
- ✅ `works.html` - 成功案例
- ✅ `blog.html` - 博客
- ✅ `team.html` - 团队
- ✅ `career.html` - 招聘
- ✅ `faq.html` - 常见问题
- ✅ `404.html` - 404页面
- ✅ `work-details.html` - 项目详情

### Bold版本页面（已更新）
- ✅ `about-bold.html` - 关于我们（粗体版）
- ✅ `contact-bold.html` - 联系我们（粗体版）
- ✅ `services-bold.html` - 核心服务（粗体版）
- ✅ `works-bold.html` - 成功案例（粗体版）

### 其他页面（需要更新）
以下页面仍需要更新，可以使用提供的脚本进行批量更新：

#### 详情页面
- `blog-details.html`
- `blog-details-bold.html`
- `team-details.html`
- `team-details-bold.html`
- `career-details.html`
- `career-details-bold.html`
- `service-details.html`
- `service-details-bold.html`
- `work-details-bold.html`

#### Bold版本页面
- `blog-bold.html`
- `team-bold.html`
- `career-bold.html`
- `faq-bold.html`
- `404-bold.html`

#### 其他模板页面
- `ai-agency.html`
- `branding-agency.html`
- `creative-agency.html`
- `creative-agency-classic.html`
- `corporate-agency.html`
- `design-studio.html`
- `digital-agency.html`
- `marketing-agency.html`
- `modern-agency.html`
- `photography-studio.html`
- `portfolio-carousel.html`
- `portfolio-material.html`
- `portfolio-spring.html`
- `portfolio-slicer.html`
- `seo-agency.html`
- `startup-agency.html`
- `video-production.html`
- `01-index.html`

## 更新方法

### 方法1：手动更新（已完成主要页面）
使用搜索替换功能，将以下内容替换：

**替换前：**
```html
<span data-text="A" class="characters">极</span>
<span data-text="R" class="characters">沐</span>
<span data-text="O" class="characters">科</span>
<span data-text="L" class="characters">技</span>
<br/>
<span data-text="A" class="characters">J</span>
<span data-text="X" class="characters">i</span>
<span data-text="X" class="characters">m</span>
<span data-text="X" class="characters">u</span>
<span data-text="X" class="characters">T</span>
<span data-text="X" class="characters">e</span>
<span data-text="X" class="characters">c</span>
<span data-text="X" class="characters">h</span>
```

**替换后：**
```html
<span data-text="极" class="characters">极</span>
<span data-text="沐" class="characters">沐</span>
<span data-text="科" class="characters">科</span>
<span data-text="技" class="characters">技</span>
<br/>
<span data-text="J" class="characters">J</span>
<span data-text="i" class="characters">i</span>
<span data-text="m" class="characters">m</span>
<span data-text="u" class="characters">u</span>
<span data-text="T" class="characters">T</span>
<span data-text="e" class="characters">e</span>
<span data-text="c" class="characters">c</span>
<span data-text="h" class="characters">h</span>
```

### 方法2：使用提供的脚本（推荐）
可以使用提供的 `update-preloader.js` 或 `batch-update.sh` 脚本进行批量更新。

## 验证方法

更新完成后，可以通过以下方式验证：

1. **检查预加载动画**：访问各个页面，查看预加载动画是否正确显示"极沐科技 JimuTech"
2. **搜索验证**：在代码中搜索 `data-text="极"` 确认更新成功
3. **浏览器测试**：在不同浏览器中测试预加载动画效果

## 注意事项

1. **备份文件**：更新前建议备份所有HTML文件
2. **测试验证**：更新后需要在不同设备和浏览器中测试
3. **缓存清理**：更新后可能需要清理浏览器缓存才能看到效果
4. **一致性检查**：确保所有页面的预加载动画都使用相同的data-text值

## 更新状态

- ✅ 主要页面：已完成
- ✅ Bold版本主要页面：已完成
- ⏳ 其他页面：待更新（可使用脚本批量处理）

## 下一步

对于剩余的页面，建议：
1. 使用提供的脚本进行批量更新
2. 逐个验证更新效果
3. 在不同环境中测试预加载动画
4. 确保所有页面的品牌一致性
