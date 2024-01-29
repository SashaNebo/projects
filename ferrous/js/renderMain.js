const renderMain = () => {
  const mainContainerHTML = `
  <main class="main" id='main' data-active="active">

  <div class="container">
    <div class="row">
      <div class="main-container">
        <div class="main-container-grid" id='main-container'>
        </div>
      </div>
    </div>
  </div>
  </div>
</main>
  `
  header.insertAdjacentHTML('afterend', mainContainerHTML)

  const renderMainProduct = () => {
    product.forEach(info => {
      const mainContainer = document.querySelector('#main-container')

      const mainProductHTML = `
      <div class="grid-item" data-id="${info.id}">
        <div class="grid-item-content">
          <div class="product-card">
            <div class="product-card-assets">
              <span href="#" class="product-card-assets__img">
                <div>
                  <img src="${info.imgSrc[0]}" alt="">
                </div>
              </span>
              <div class="product-card-assets__icon wish-button">
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Add_To_Queue"> <path id="Vector" d="M3 9V19.4C3 19.9601 3 20.2399 3.10899 20.4538C3.20487 20.642 3.35774 20.7952 3.5459 20.8911C3.7596 21 4.0395 21 4.59846 21H15.0001M14 13V10M14 10V7M14 10H11M14 10H17M7 13.8002V6.2002C7 5.08009 7 4.51962 7.21799 4.0918C7.40973 3.71547 7.71547 3.40973 8.0918 3.21799C8.51962 3 9.08009 3 10.2002 3H17.8002C18.9203 3 19.4801 3 19.9079 3.21799C20.2842 3.40973 20.5905 3.71547 20.7822 4.0918C21.0002 4.51962 21.0002 5.07969 21.0002 6.19978L21.0002 13.7998C21.0002 14.9199 21.0002 15.48 20.7822 15.9078C20.5905 16.2841 20.2842 16.5905 19.9079 16.7822C19.4805 17 18.9215 17 17.8036 17H10.1969C9.07899 17 8.5192 17 8.0918 16.7822C7.71547 16.5905 7.40973 16.2842 7.21799 15.9079C7 15.4801 7 14.9203 7 13.8002Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
              </div>
              <span href='#' class="product-card__price">
                <div>
                  ${info.price}
                </div>
              </span>
            </div>
            <div class="product-card-details">
              <p class="product-card-details__title">
                ${info.title}
              </p>
              <p class="product-card-details__category">
                Originals
              </p>
              <p class="product-card-details__variety">
                ${info.colors}
              </p>
            </div>
          </div>
        </div>
      </div>
      `

      mainContainer.insertAdjacentHTML('beforeend', mainProductHTML)
    })
  }
  renderMainProduct()
  checkLiked()
}

renderMain()
