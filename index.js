const testimonials = [
    {
      image: "https://c.animaapp.com/m9dzzouw9kS6uh/img/rectangle-1.png",
      name: "Ronald C. Hartung",
      role: "MARKETER",
      text: "We integrated Finovo into our business to accept crypto payments — and it works flawlessly. The platform is user-friendly, even for beginners."
    },
    {
      image: "https://c.animaapp.com/m9dzzouw9kS6uh/img/rectangle-2.png",
      name: "Jessica W. Meyer",
      role: "DEVELOPER",
      text: "Finovo has revolutionized how we manage online transactions. Clean interface, great support — highly recommend."
    },
    {
      image: "https://c.animaapp.com/m9dzzouw9kS6uh/img/rectangle-3.png",
      name: "Samuel P. Rogers",
      role: "ENTREPRENEUR",
      text: "I was skeptical at first, but now I can't imagine our payment system without Finovo. It's secure, reliable, and scalable."
    }
  ];
  
  let currentIndex = 0;
  
  const imageElements = document.querySelectorAll(".group-6 img");
  const nameElement = document.querySelector(".text-wrapper-18");
  const roleElement = document.querySelector(".marketer");
  const textElement = document.querySelector(".text-wrapper-19");
  
  function showTestimonial(index) {
    const testimonial = testimonials[index];
  
    imageElements.forEach((img, i) => {
      img.src = testimonials[(index + i) % testimonials.length].image;
    });
  
    nameElement.textContent = testimonial.name;
    roleElement.textContent = testimonial.role;
    textElement.textContent = testimonial.text;
  }
  
  document.querySelector(".bi-arrow-left-circle").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
  });
  
  document.querySelector(".img-wrapper").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  });
  

  showTestimonial(currentIndex);