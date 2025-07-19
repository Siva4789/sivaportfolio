
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Form submission handling
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your message!');
  form.reset();
});

// Resume download functionality
document.getElementById('download-resume').addEventListener('click', function() {
  window.open('path/to/your/resume.pdf', '_blank');
});

document.querySelectorAll('.project-image-upload').forEach(inputElement => {
    const imageContainer = document.getElementById(`${inputElement.id}-container`);

    inputElement.addEventListener('change', () => {
        if (inputElement.files && inputElement.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                imageContainer.innerHTML = `<img src="${e.target.result}" alt="Project Image" style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px;">`;
            };
            reader.readAsDataURL(inputElement.files[0]);
        }
    });
});


function showContent(element) {
  
  const content = element.nextElementSibling; // Get the next sibling element (project content)
  
  if (content.classList.contains('active')) {
      // If the content is already visible, hide it
      content.classList.remove('active');
  } else {
      // Hide other project contents
      document.querySelectorAll('.project-content.active').forEach((activeContent) => {
          activeContent.classList.remove('active');
      });
      // Show the clicked project content
      content.classList.add('active');
  }
}
function toggleText(projectId) {
  const projectContent = document.getElementById(projectId);
  const isExpanded = projectContent.classList.toggle('expanded');
  const button = projectContent.querySelector('.project-button');
  button.textContent = isExpanded ? 'Show Less' : 'Learn More';
}

function toggleChat() {
  const chatbot = document.getElementById('chatbot');
  const chatbotToggle = document.getElementById('chatbot-toggle');
  if (chatbot.style.display === 'none' || chatbot.style.display === '') {
      chatbot.style.display = 'flex';
      chatbotToggle.style.display = 'none';
  } else {
      chatbot.style.display = 'none';
      chatbotToggle.style.display = 'block';
  }
}

// Send Message Function
function sendMessage() {
  const chatInput = document.getElementById('chat-input');
  const chatContent = document.getElementById('chat-content');

  if (chatInput.value.trim() === '') return;

  // Display User Message
  const userMessage = document.createElement('div');
  userMessage.classList.add('message', 'user');
  userMessage.innerText = chatInput.value;
  chatContent.appendChild(userMessage);

  // Clear Input
  chatInput.value = '';

  // Simulate Bot Response
  setTimeout(() => {
      const botMessage = document.createElement('div');
      botMessage.classList.add('message', 'bot');
      botMessage.innerText = 'Hi Iam Siva, thanks For visiting my portfolio.';
      chatContent.appendChild(botMessage);

      // Scroll to the bottom of chat content
      chatContent.scrollTop = chatContent.scrollHeight;
  }, 1000);
}

// Handle Enter Key for Sending Messages
function handleKeyPress(event) {
  if (event.key === 'Enter') {
      sendMessage();
  }
}                 





