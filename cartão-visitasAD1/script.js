/* script.js
 - Smooth scroll for CTAs
 - Basic form validation + simulated send
 - Footer year auto update
*/

document.addEventListener('DOMContentLoaded', function () {

  // smooth scroll for internal links (cta)
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const el = document.querySelector(targetId);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // small focus for accessibility
        el.setAttribute('tabindex', '-1');
        el.focus({preventScroll:true});
      }
    });
  });

  // form behaviour
  const form = document.getElementById('formContato');
  const status = document.getElementById('form-status');
  const resetBtn = document.getElementById('btn-reset');

  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      form.reset();
      status.textContent = '';
    });
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // simple validity check (browser will already flag required)
      if (!form.checkValidity()) {
        status.textContent = 'Preencha os campos obrigatórios.';
        status.style.color = '#f0b0b0';
        return;
      }

      // collect data (you can send to server here using fetch)
      const data = {
        nome: form.nome.value.trim(),
        telefone: form.telefone.value.trim(),
        email: form.email.value.trim(),
        mensagem: form.mensagem.value.trim()
      };

      // show sending state
      status.textContent = 'Enviando...';
      status.style.color = '#ffd700';

      // simulate network delay
      setTimeout(function () {
        // simulated success
        status.textContent = 'Mensagem enviada com sucesso. Responderei em breve.';
        status.style.color = '#b0f0b0';
        form.reset();
      }, 900);
    });
  }

  // footer year
  const ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();
});