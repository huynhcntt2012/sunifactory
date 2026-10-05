document.documentElement.classList.add('js');
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  navigation.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Mở menu');
}
toggle.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Đóng menu' : 'Mở menu');
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) {
    closeMenu();
    toggle.focus();
  }
});
document.querySelector('#copy-brief').addEventListener('click', async () => {
  const brief = 'Xin chào Suni Studio, tôi muốn tư vấn in 3D theo yêu cầu.\n- Sản phẩm / Ý tưởng: \n- Hình ảnh / Logo / File thiết kế: \n- Kích thước: \n- Số lượng mong muốn: \n- Tên / Logo / Màu sắc cần cá nhân hóa: \n- Nhu cầu xuất hóa đơn: ';
  const status = document.querySelector('#copy-status');
  const fallback = document.querySelector('#brief-fallback');
  try {
    await navigator.clipboard.writeText(brief);
    fallback.hidden = true;
    status.textContent = 'Đã sao chép! Bạn có thể dán mẫu và điền thông tin sản phẩm.';
  } catch {
    fallback.value = brief;
    fallback.hidden = false;
    fallback.focus();
    fallback.select();
    status.textContent = 'Hãy sao chép mẫu bên dưới và điền thông tin sản phẩm.';
  }
});
