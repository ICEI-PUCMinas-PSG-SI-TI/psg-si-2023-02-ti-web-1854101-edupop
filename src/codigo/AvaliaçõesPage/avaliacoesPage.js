// carrega o cabeçalho e o footer na pagina.
$(        
    function () {
        $("#tagCabecalho").load("../Cabeçalho/cabecalho.html");
        $("#tagRodape").load("../Rodapé/rodape.html");

    // aguarda o carregamento do cabeçalho para inserir a logo.
        setTimeout(() => {
            var logo = document.getElementById('logo')
            logo.src = "/src/assets/logoEduPop.png"
        }, 250)
    }
);

let selectedStars = 0;

function rate(stars) {
  selectedStars = stars;
  const rating = document.getElementById('rating');

 switch(selectedStars){
    case 1:
      document.querySelector('.one').innerHTML = "★";
      document.querySelector('.two').innerHTML = "☆";
      document.querySelector('.three').innerHTML = "☆";
      document.querySelector('.four').innerHTML = "☆";
      document.querySelector('.five').innerHTML = "☆";
    break;
    
    case 2: 
      document.querySelector('.one').innerHTML = "★";
      document.querySelector('.two').innerHTML = "★";
      document.querySelector('.three').innerHTML = "☆";
      document.querySelector('.four').innerHTML = "☆";
      document.querySelector('.five').innerHTML = "☆";
    break;

    case 3: 
      document.querySelector('.one').innerHTML = "★";
      document.querySelector('.two').innerHTML = "★";
      document.querySelector('.three').innerHTML = "★";
      document.querySelector('.four').innerHTML = "☆";
      document.querySelector('.five').innerHTML = "☆";
    break;

    case 4: 
      document.querySelector('.one').innerHTML = "★";
      document.querySelector('.two').innerHTML = "★";
      document.querySelector('.three').innerHTML = "★";
      document.querySelector('.four').innerHTML = "★";
      document.querySelector('.five').innerHTML = "☆";
    break;

    case 5: 
      document.querySelector('.one').innerHTML = "★";
      document.querySelector('.two').innerHTML = "★";
      document.querySelector('.three').innerHTML = "★";
      document.querySelector('.four').innerHTML = "★";
      document.querySelector('.five').innerHTML = "★";
    break;
  }


  for (let i = 0; i < 5; i++) {
    if (i < stars) {
      rating.children[i].style.color = 'gold';
    } else {
      rating.children[i].style.color = 'black';
    }
  }
}

function submitReview() {
  const name = document.getElementById('name').value;
  const photo = document.getElementById('photo').files[0];
  const rating = selectedStars;
  const comment = document.getElementById('comment').value;

  if (!name || !comment || rating === 0 || !photo) {
    alert("Por favor, preencha seu nome, avaliação, comentário e selecione uma foto.");
    return;
  }

  // Recupera avaliações salvas no localStorage
  const savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];

  // Adiciona uma nova avaliação na lista de avaliações
  const newReview = {
    name,
    photo: window.URL.createObjectURL(photo),
    rating,
    comment,
  };
  savedReviews.push(newReview);

  // Salva a lista atualizada no localStorage
  localStorage.setItem('reviews', JSON.stringify(savedReviews));

  // Atualiza a exibição na página
  displayReviews();

  // Limpa a avaliação do usuário após enviar
  document.getElementById('name').value = '';
  document.getElementById('photo').value = '';
  document.getElementById('comment').value = '';
  resetStars();
}

function deleteReview(button) {
  const listItem = button.closest('li');
  const reviewId = listItem.getAttribute('data-id');

  const savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];

  // Remove a avaliação correspondente da lista
  const updatedReviews = savedReviews.filter((review, index) => index != reviewId);

  localStorage.setItem('reviews', JSON.stringify(updatedReviews));

  displayReviews();
}

function resetStars() {
  const rating = document.getElementById('rating');
  for (let i = 0; i < 5; i++) {
    rating.children[i].style.color = 'black';
  }
  selectedStars = 0;
}

function calculateAverageRating() {
  const savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];

  if (savedReviews.length === 0) {
    return 0; // Retorna 0 se não tiver avaliações
  }

  const totalStars = savedReviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = totalStars / savedReviews.length;

  return averageRating;
}

function displayAverageRating() {
  const averageRatingElement = document.getElementById('average-rating');
  const averageRating = calculateAverageRating();

  // Formata a média para exibir uma casa decimal
  const formattedAverage = averageRating.toFixed(1);

  // Exibe a média das estrelas
  averageRatingElement.innerHTML = `Média das Estrelas: ${formattedAverage}/5`;
}

function displayReviews() {
  const reviewList = document.getElementById('review-list');
  reviewList.innerHTML = ''; // Limpa a lista antes de atualizar

  const savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];

  // Exibe as avaliações na página
  savedReviews.forEach((review, index) => {
    const listItem = document.createElement('li');
    listItem.setAttribute('data-id', index);
    const imgElement = document.createElement('img');
    imgElement.src = review.photo;
    imgElement.alt = 'User Photo';
    imgElement.className = 'profile-photo';
    listItem.appendChild(imgElement);

    listItem.innerHTML += `
      <div class="user-info">
        <strong>${review.name}</strong>
        <div class="rating-comment">
          <span class="rating">Estrelas: ${generateStars(review.rating)}</span>
          <br>
          <span class="comment">${review.comment}</span>
          <br>
          <button onclick="deleteReview(this)">Excluir</button>
        </div>
      </div>
    `;

    reviewList.appendChild(listItem);
  });

  // Exibe a média das estrelas após atualizar as avaliações
  displayAverageRating();
}

// Função para gerar estrelas com base na classificação
function generateStars(rating) {
  const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);
  return `<span style="font-size: 20px; color: gold;">${stars}</span>`;
}

// Chama a função displayReviews ao carregar a página para exibir as avaliações que existem
window.onload = function () {
  displayReviews();
};
