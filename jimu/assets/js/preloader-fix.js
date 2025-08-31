/**
 * 预加载动画修复脚本
 * 解决预加载动画无法正常隐藏的问题
 */

(function() {
  'use strict';
  
  // 预加载动画修复函数
  function fixPreloader() {
    var preloader = document.getElementById('preloader');
    var container = document.getElementById('container');
    
    if (!preloader) {
      return; // 如果没有预加载动画，直接返回
    }
    
    // 方法1: 使用window.onload事件
    window.addEventListener('load', function() {
      hidePreloader();
    });
    
    // 方法2: 检查document.readyState
    if (document.readyState === 'complete') {
      hidePreloader();
    } else {
      document.addEventListener('readystatechange', function() {
        if (document.readyState === 'complete') {
          hidePreloader();
        }
      });
    }
    
    // 方法3: 设置超时保护（3秒后强制隐藏）
    setTimeout(function() {
      forceHidePreloader();
    }, 3000);
    
    // 方法4: 监听页面可见性变化
    document.addEventListener('visibilitychange', function() {
      if (!document.hidden) {
        setTimeout(hidePreloader, 500);
      }
    });
    
    // 方法5: 监听用户交互事件
    ['click', 'touchstart', 'keydown'].forEach(function(eventType) {
      document.addEventListener(eventType, function() {
        setTimeout(hidePreloader, 100);
      }, { once: true });
    });
    
    // 隐藏预加载动画的主函数
    function hidePreloader() {
      if (!preloader || preloader.classList.contains('hidden')) {
        return;
      }
      
      // 添加loaded类到container
      if (container) {
        container.classList.add('loaded');
      }
      
      // 添加fade-out类到preloader
      preloader.classList.add('fade-out');
      
      // 延迟移除预加载动画
      setTimeout(function() {
        if (preloader && preloader.parentNode) {
          preloader.parentNode.removeChild(preloader);
        }
      }, 1000);
    }
    
    // 强制隐藏预加载动画的函数
    function forceHidePreloader() {
      if (!preloader) {
        return;
      }
      
      // 添加多个隐藏类
      preloader.classList.add('hidden', 'force-hide-preloader', 'fade-out');
      
      // 直接设置样式
      preloader.style.display = 'none';
      preloader.style.opacity = '0';
      preloader.style.visibility = 'hidden';
      preloader.style.pointerEvents = 'none';
      
      // 延迟移除元素
      setTimeout(function() {
        if (preloader && preloader.parentNode) {
          preloader.parentNode.removeChild(preloader);
        }
      }, 500);
    }
    
    // 方法6: 监听错误事件
    window.addEventListener('error', function() {
      setTimeout(forceHidePreloader, 1000);
    });
    
    // 方法7: 监听网络状态变化
    if ('connection' in navigator) {
      navigator.connection.addEventListener('change', function() {
        setTimeout(hidePreloader, 500);
      });
    }
  }
  
  // 在DOM加载完成后执行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fixPreloader);
  } else {
    fixPreloader();
  }
  
  // 备用方案：在页面完全加载后再次检查
  window.addEventListener('load', function() {
    setTimeout(function() {
      var preloader = document.getElementById('preloader');
      if (preloader) {
        preloader.classList.add('force-hide-preloader');
        preloader.style.display = 'none';
      }
    }, 2000);
  });
  
})();
