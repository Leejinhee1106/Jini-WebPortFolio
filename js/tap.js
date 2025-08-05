// 프로젝트페이지 탭메뉴
document.querySelectorAll('.tab-menu li').forEach(tab => {
  tab.addEventListener('click', function () {
    const target = this.getAttribute('data-tab');

    document.querySelectorAll('.tab-menu li').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

    this.classList.add('active');
    document.getElementById(target).classList.add('active');
  });
});
