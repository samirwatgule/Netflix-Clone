document.addEventListener("DOMContentLoaded", () => {
    // FAQ Accordion functionality
    const accordians = document.querySelectorAll(".FAQ__title")
  
    accordians.forEach((accordian) => {
      accordian.addEventListener("click", function () {
        // Toggle the icon
        const icon = this.querySelector("i")
        if (icon.classList.contains("fa-plus")) {
          icon.classList.remove("fa-plus")
          icon.classList.add("fa-times")
          this.setAttribute("aria-expanded", "true")
        } else {
          icon.classList.remove("fa-times")
          icon.classList.add("fa-plus")
          this.setAttribute("aria-expanded", "false")
        }
  
        // Toggle the content
        const content = this.nextElementSibling
        if (content.style.maxHeight) {
          content.style.maxHeight = null
        } else {
          content.style.maxHeight = content.scrollHeight + "px"
        }
      })
    })
  
    // Sign In Modal functionality
    const modal = document.getElementById("signinModal")
    const btn = document.getElementById("signinButton")
    const span = document.getElementsByClassName("close")[0]
    const loginForm = document.getElementById("loginForm")
  
    // Open modal when sign in button is clicked
    btn.onclick = () => {
      modal.style.display = "block"
      document.body.style.overflow = "hidden" // Prevent scrolling when modal is open
    }
  
    // Close modal when X is clicked
    span.onclick = () => {
      modal.style.display = "none"
      document.body.style.overflow = "auto" // Re-enable scrolling
    }
  
    // Close modal when clicking outside of it
    window.onclick = (event) => {
      if (event.target == modal) {
        modal.style.display = "none"
        document.body.style.overflow = "auto" // Re-enable scrolling
      }
    }
  
    // Handle form submission
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
  
        // Here you would typically send the data to a server
        // For demo purposes, we'll just show an alert
        alert(`Login attempted with email: ${email}`)
  
        // Close the modal after submission
        modal.style.display = "none"
        document.body.style.overflow = "auto" // Re-enable scrolling
      })
    }
  
    // Language switcher functionality
    const languageSelects = document.querySelectorAll(".language__drop__down")
  
    languageSelects.forEach((select) => {
      select.addEventListener("change", function () {
        const selectedLanguage = this.value
        // Here you would typically redirect to a localized version of the site
        // For demo purposes, we'll just show an alert
        alert(`Language changed to: ${selectedLanguage}`)
      })
    })
  
    // Email form validation
    const emailForms = document.querySelectorAll(".email__form__container")
  
    emailForms.forEach((form) => {
      const button = form.querySelector(".primary__button")
      const input = form.querySelector(".email__input")
  
      button.addEventListener("click", () => {
        const email = input.value
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
        if (!email || !emailRegex.test(email)) {
          alert("Please enter a valid email address.")
          input.focus()
        } else {
          // Here you would typically send the data to a server
          // For demo purposes, we'll just show an alert
          alert(`Subscription attempted with email: ${email}`)
        }
      })
    })
  
    // Add smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const target = document.querySelector(this.getAttribute("href"))
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
          })
        }
      })
    })
  
    // Add lazy loading for images and videos
    if ("loading" in HTMLImageElement.prototype) {
      const images = document.querySelectorAll('img[loading="lazy"]')
      images.forEach((img) => {
        img.src = img.src
      })
    } else {
      // Fallback for browsers that don't support lazy loading
      const script = document.createElement("script")
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js"
      document.body.appendChild(script)
    }
  
    // Trending section navigation
    const trendingSlider = document.querySelector(".trending__items")
    const navLeft = document.querySelector(".trending__nav--left")
    const navRight = document.querySelector(".trending__nav--right")
  
    if (trendingSlider && navLeft && navRight) {
      navLeft.addEventListener("click", () => {
        trendingSlider.scrollBy({
          left: -trendingSlider.offsetWidth / 2,
          behavior: "smooth",
        })
      })
  
      navRight.addEventListener("click", () => {
        trendingSlider.scrollBy({
          left: trendingSlider.offsetWidth / 2,
          behavior: "smooth",
        })
      })
  
      // Show/hide navigation buttons based on scroll position
      trendingSlider.addEventListener("scroll", () => {
        if (trendingSlider.scrollLeft <= 0) {
          navLeft.style.opacity = "0"
        } else {
          navLeft.style.opacity = "1"
        }
  
        if (trendingSlider.scrollLeft + trendingSlider.clientWidth >= trendingSlider.scrollWidth - 10) {
          navRight.style.opacity = "0"
        } else {
          navRight.style.opacity = "1"
        }
      })
    }
  })
  