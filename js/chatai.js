document.addEventListener('DOMContentLoaded', () => {
  // ====== textarea 자동 높이 ======
  const textarea = document.querySelector('.chat-input__field');
  if (textarea) {
    textarea.addEventListener('input', () => {
      textarea.style.height = 'auto';
      textarea.style.height = Math.min(textarea.scrollHeight, 200) + 'px';
    });
  }

  // ====== 스크롤 시 헤더 shadow ======
  const main = document.querySelector('.chat-main');
  const header = document.querySelector('.chatai-header');

  if (main && header) {
    main.addEventListener('scroll', () => {
      if (main.scrollTop > 0) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    });
  }
});
