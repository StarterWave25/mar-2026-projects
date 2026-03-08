let resumeId = 'tpl-1';

const resumeContainer = document.querySelector('.resume-section');
const resumeTemplatesContainer = document.querySelector('.resume-templates-section');

const renderResume = (resumeId) => {
  let resumeHTML = document.querySelector(`#${resumeId}`).innerHTML;
  resumeContainer.innerHTML = resumeHTML;
}

renderResume(resumeId);

document.addEventListener("DOMContentLoaded", () => {

  resumeContainer.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      resumeContainer.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  });

  const downloadBtn = document.querySelector('.download-btn');

  downloadBtn.addEventListener('click', () => {
    html2pdf().from(resumeContainer.innerHTML).save();
  });

  resumeTemplatesContainer.addEventListener('click', (ev) => {
    const card = ev.target.closest('.resume-card');

    if (!card) return;
    renderResume(card.id);
  });
});