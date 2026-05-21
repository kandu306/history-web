/* ==========================================================================
   DỰ ÁN LỊCH SỬ VIỆT NAM — LOGIC HỆ THỐNG DÙNG CHUNG (SHARED JS)
   ========================================================================== */

// ── Cấu hình Font chữ mở rộng cho Tailwind CDN ──
window.tailwind = window.tailwind || {};
window.tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Be Vietnam Pro', 'system-ui', 'sans-serif'],
        'serif': ['Noto Serif', 'Georgia', 'serif'],
      }
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  
  // ── 1. Logic Thanh Tiến Trình Đọc (Reading Progress Bar) ──
  const bar = document.getElementById('progress-bar');
  if (bar) {
    const updateProgressBar = () => {
      const scrollTop = document.documentElement.scrollTop;
      const docH = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      bar.style.width = docH > 0 ? (scrollTop / docH * 100) + '%' : '0%';
    };
    
    window.addEventListener('scroll', updateProgressBar, { passive: true });
    updateProgressBar(); // Chạy ngay lập tức để đồng bộ trạng thái khi tải trang
  }

  // ── 2. Logic IntersectionObserver cho Hiệu ứng Cuộn Xuất Hiện (Scroll Fade-In) ──
  const fadeElements = document.querySelectorAll('.fade-in, .fade-section');
  if (fadeElements.length > 0) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.06 });

    fadeElements.forEach(el => io.observe(el));

    // Kích hoạt hiển thị ngay cho các phần tử đã xuất hiện trong khung nhìn ban đầu
    setTimeout(() => {
      fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('visible');
        }
      });
    }, 100);
  }

  // ── 3. Logic Toggle Menu Hamburger trên Thiết bị Di Động ──
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        if (hamburgerIcon) hamburgerIcon.classList.replace('block', 'hidden');
        if (closeIcon) closeIcon.classList.replace('hidden', 'block');
      } else {
        mobileMenu.classList.add('hidden');
        if (hamburgerIcon) hamburgerIcon.classList.replace('hidden', 'block');
        if (closeIcon) closeIcon.classList.replace('block', 'hidden');
      }
    });

    // Tự động đóng menu khi click vào bất kỳ liên kết điều hướng nào
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        if (hamburgerIcon) hamburgerIcon.classList.replace('hidden', 'block');
        if (closeIcon) closeIcon.classList.replace('block', 'hidden');
      });
    });
  }
});
