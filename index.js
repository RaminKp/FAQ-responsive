const faqParts = document.querySelectorAll('.faqPart');

faqParts.forEach((faqPart, index) => {
  const question = faqPart.querySelector('.question');
  const answer = faqPart.querySelector(`.answer${index + 1}`);
  const arrow = faqPart.querySelector(`.arrowNo${index + 1}`);
  answer.style.display = 'none'; // Set answers to display: none initially

  question.addEventListener('click', () => {
    if (answer.style.display === 'none') {
      answer.style.display = 'block';
      arrow.style.transform = 'rotate(180deg)';
      question.style.fontWeight = '600';
    } else {
      answer.style.display = 'none';
      arrow.style.transform = 'rotate(0deg)';
      question.style.fontWeight = '300';
    }
  });
});










