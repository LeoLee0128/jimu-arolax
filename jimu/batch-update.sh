#!/bin/bash

# 批量更新HTML文件的脚本
# 用于修复移动端菜单显示问题和其他优化

echo "开始批量更新HTML文件..."

# 定义要更新的文件列表（排除已经手动更新的文件）
files=(
    "01-index.html"
    "404-bold.html"
    "404.html"
    "about-bold.html"
    "ai-agency.html"
    "blog-bold.html"
    "blog-details-bold.html"
    "blog-details.html"
    "blog.html"
    "branding-agency.html"
    "career-bold.html"
    "career-details-bold.html"
    "career-details.html"
    "career.html"
    "contact-bold.html"
    "corporate-agency.html"
    "creative-agency-classic.html"
    "creative-agency.html"
    "design-studio.html"
    "digital-agency.html"
    "faq-bold.html"
    "faq.html"
    "marketing-agency.html"
    "modern-agency.html"
    "photography-studio.html"
    "portfolio-carousel.html"
    "portfolio-material.html"
    "portfolio-slicer.html"
    "portfolio-spring.html"
    "seo-agency.html"
    "service-details-bold.html"
    "service-details.html"
    "services-bold.html"
    "startup-agency.html"
    "team-bold.html"
    "team-details-bold.html"
    "team-details.html"
    "team.html"
    "test-preloader.html"
    "video-production.html"
    "work-details-bold.html"
    "work-details.html"
    "works-bold.html"
)

# 移动端菜单FOUC修复的CSS代码
fouc_fix='    /* 初始状态设置 - 防止FOUC */
    .header__navicon {
      display: none;
    }
    .header__nav {
      display: block;
    }
    '

extra_fix='    
    /* 额外的防闪烁措施 */
    @media only screen and (max-width: 1199px) {
      .main-menu {
        display: none !important;
      }
    }'

# 遍历文件列表
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "正在更新: $file"
        
        # 检查文件是否包含移动端菜单修复的样式
        if grep -q "移动端菜单修复" "$file"; then
            echo "  - 发现移动端菜单修复样式，添加FOUC防护..."
            
            # 在移动端菜单修复样式后添加FOUC修复
            if ! grep -q "初始状态设置 - 防止FOUC" "$file"; then
                # 在<style>标签后添加FOUC修复
                sed -i.bak "/<!-- 移动端隐藏联系我们按钮和菜单修复 -->/,/<style>/{
                    /<style>/a\\
$fouc_fix
                }" "$file"
                
                # 在样式结束前添加额外修复
                sed -i "/}<\/style>/i\\
$extra_fix" "$file"
                
                echo "  - FOUC修复已添加"
            else
                echo "  - FOUC修复已存在，跳过"
            fi
        else
            echo "  - 未发现移动端菜单修复样式，跳过"
        fi
        
        # 清理备份文件
        [ -f "$file.bak" ] && rm "$file.bak"
        
    else
        echo "文件不存在: $file"
    fi
done

echo "批量更新完成！"
echo ""
echo "修复说明："
echo "1. 添加了初始状态设置，防止FOUC（Flash of Unstyled Content）"
echo "2. 确保在CSS完全加载之前，移动端菜单就能正确显示"
echo "3. 添加了额外的防闪烁措施"
echo ""
echo "建议测试："
echo "1. 在移动端浏览器中清除缓存后首次访问页面"
echo "2. 在网络较慢的环境下测试"
echo "3. 检查PC端菜单是否仍然正常显示"
