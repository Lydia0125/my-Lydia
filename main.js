// ===== 导航滚动效果 =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ===== 汉堡菜单 =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const navActions = document.querySelector('.nav-actions');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navActions.classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navActions.classList.remove('open');
  });
});

// ===== 案例 Tab 切换 =====
const tabBtns = document.querySelectorAll('.tab-btn');
const casePanels = document.querySelectorAll('.case-panel');
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    casePanels.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
  });
});

// ===== 定价切换（月/年）=====
const billingToggle = document.getElementById('billing-toggle');
const monthlyLabel = document.getElementById('monthly-label');
const yearlyLabel = document.getElementById('yearly-label');
billingToggle.addEventListener('change', () => {
  const isYearly = billingToggle.checked;
  monthlyLabel.classList.toggle('active', !isYearly);
  yearlyLabel.classList.toggle('active', isYearly);
  document.querySelectorAll('.price-amount[data-monthly]').forEach(el => {
    const val = isYearly ? el.dataset.yearly : el.dataset.monthly;
    el.textContent = '¥' + val;
  });
});

// ===== 客服悬浮窗 =====
const chatBubble = document.getElementById('chat-bubble');
const chatPopup = document.getElementById('chat-popup');
const chatClose = document.getElementById('chat-close');
chatBubble.addEventListener('click', () => chatPopup.classList.toggle('open'));
chatClose.addEventListener('click', () => chatPopup.classList.remove('open'));

// ===== 联系表单提交 =====
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = '✅ 提交成功，我们将尽快联系您！';
  btn.disabled = true;
  btn.style.background = 'rgba(16,185,129,0.2)';
  btn.style.color = '#10b981';
  btn.style.border = '1px solid rgba(16,185,129,0.3)';
  btn.style.boxShadow = 'none';
});

// ===== 滚动入场动画 =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .testimonial-card, .pricing-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
