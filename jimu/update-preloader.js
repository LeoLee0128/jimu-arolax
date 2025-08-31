const fs = require('fs');
const path = require('path');

// 需要更新的文件列表（主要页面）
const filesToUpdate = [
  'about.html',
  'contact.html', 
  'services.html',
  'works.html',
  'work-details.html',
  'blog.html',
  'team.html',
  'career.html',
  'faq.html',
  '404.html',
  'about-bold.html',
  'contact-bold.html',
  'services-bold.html',
  'works-bold.html',
  'blog-bold.html',
  'team-bold.html',
  'career-bold.html',
  'faq-bold.html',
  '404-bold.html',
  'work-details-bold.html',
  'blog-details.html',
  'blog-details-bold.html',
  'team-details.html',
  'team-details-bold.html',
  'career-details.html',
  'career-details-bold.html',
  'service-details.html',
  'service-details-bold.html',
  'ai-agency.html',
  'branding-agency.html',
  'creative-agency.html',
  'creative-agency-classic.html',
  'corporate-agency.html',
  'design-studio.html',
  'digital-agency.html',
  'marketing-agency.html',
  'modern-agency.html',
  'photography-studio.html',
  'portfolio-carousel.html',
  'portfolio-material.html',
  'portfolio-spring.html',
  'portfolio-slicer.html',
  'seo-agency.html',
  'startup-agency.html',
  'video-production.html',
  '01-index.html'
];

// 旧的data-text值模式
const oldPatterns = [
  { from: 'data-text="A"', to: 'data-text="极"' },
  { from: 'data-text="R"', to: 'data-text="沐"' },
  { from: 'data-text="O"', to: 'data-text="科"' },
  { from: 'data-text="L"', to: 'data-text="技"' },
  { from: 'data-text="A"', to: 'data-text="J"' }, // 第二行的A
  { from: 'data-text="X"', to: 'data-text="i"' },
  { from: 'data-text="X"', to: 'data-text="m"' },
  { from: 'data-text="X"', to: 'data-text="u"' },
  { from: 'data-text="X"', to: 'data-text="T"' },
  { from: 'data-text="X"', to: 'data-text="e"' },
  { from: 'data-text="X"', to: 'data-text="c"' },
  { from: 'data-text="X"', to: 'data-text="h"' }
];

// 更新单个文件
function updateFile(filename) {
  const filePath = path.join(__dirname, filename);
  
  if (!fs.existsSync(filePath)) {
    console.log(`文件不存在: ${filename}`);
    return false;
  }
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;
    
    // 应用所有替换模式
    oldPatterns.forEach(pattern => {
      if (content.includes(pattern.from)) {
        content = content.replace(pattern.from, pattern.to);
        updated = true;
      }
    });
    
    if (updated) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ 已更新: ${filename}`);
      return true;
    } else {
      console.log(`- 无需更新: ${filename}`);
      return false;
    }
  } catch (error) {
    console.error(`✗ 更新失败: ${filename}`, error.message);
    return false;
  }
}

// 主函数
function main() {
  console.log('开始批量更新预加载动画的data-text值...\n');
  
  let successCount = 0;
  let totalCount = filesToUpdate.length;
  
  filesToUpdate.forEach(filename => {
    if (updateFile(filename)) {
      successCount++;
    }
  });
  
  console.log(`\n更新完成！成功更新 ${successCount}/${totalCount} 个文件。`);
}

// 运行脚本
main();
