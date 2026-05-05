// 카드 클릭 시 해당 카테고리 페이지로 이동 (추후 연결)
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const id = card.id;
    alert(`'${card.querySelector('h3').textContent}' 콘텐츠는 곧 추가됩니다!`);
  });
});