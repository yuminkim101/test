(() => {
  const classes = {
    pottery: { title: '도자기', text: '물레 위 흙이 그릇이 되는 과정을 직접 만져 보세요.', panel: '#cfe5dd', accent: '#2c7a74', radius: '50%' },
    baking: { title: '베이킹', text: '반죽부터 굽기까지, 내가 만든 간식을 들고 집에 가요.', panel: '#f7e3b8', accent: '#d9962b', radius: '50% 50% 50% 12%' },
    leather: { title: '가죽공예', text: '재단하고 바느질해서 작은 소품 하나를 완성해요.', panel: '#e8d3c4', accent: '#8a5a3c', radius: '12%' },
    flower: { title: '플라워', text: '계절 꽃을 골라 내 손으로 꽃다발을 묶어 보세요.', panel: '#f4d3dc', accent: '#c4527a', radius: '50% 0 50% 0' },
    drawing: { title: '드로잉', text: '처음 펜을 잡아도 괜찮아요. 선 하나부터 시작해요.', panel: '#d5def5', accent: '#3d5bb5', radius: '0 50% 0 50%' },
    perfume: { title: '향수', text: '여러 향을 섞어 세상에 하나뿐인 향을 만들어요.', panel: '#e2d8f2', accent: '#7a56b8', radius: '50% 50% 8% 8%' }
  };

  const picker = document.querySelector('[data-picker]');
  if (!picker) return;
  const swatch = picker.querySelector('[data-swatch]');
  const shape = picker.querySelector('.swatch-shape');
  const title = picker.querySelector('[data-title]');
  const text = picker.querySelector('[data-text]');
  const tabs = picker.querySelectorAll('[role="tab"]');

  const select = (key) => {
    const c = classes[key];
    title.textContent = c.title;
    text.textContent = c.text;
    swatch.style.backgroundColor = c.panel;
    shape.style.backgroundColor = c.accent;
    shape.style.borderRadius = c.radius;
    tabs.forEach((t) => t.setAttribute('aria-selected', String(t.dataset.key === key)));
  };

  tabs.forEach((t) => t.addEventListener('click', () => select(t.dataset.key)));
})();
