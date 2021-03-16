import './styles.sass';

const init = () => {
  const topTextOutline = document.querySelector("p:first-of-type");
  const topTextFilled = document.querySelector("p:nth-of-type(2)");
  const bottomTextOutline = document.querySelector("p:nth-of-type(3)");
  const bottomTextFilled = document.querySelector("p:last-of-type");
  
  setTimeout(() => {
    document.querySelectorAll('.bottom').forEach(text => text.style.transition = 'all .3s ease');
    document.querySelectorAll('.top').forEach(text => text.style.transition = 'all .3s ease');
  }, 150);
  
  const handleScroll = () => {
    const posY = window.pageYOffset;
    
    topTextOutline.style.transform = `translateX(${posY/2}px)`;
    topTextFilled.style.transform = `translateX(${posY/2}px)`;

    bottomTextOutline.style.transform = `translateX(-${posY/2}px)`;
    bottomTextFilled.style.transform = `translateX(-${posY/2}px)`;
  }
  
  window.addEventListener("scroll", handleScroll);
}

document.addEventListener("DOMContentLoaded", init);