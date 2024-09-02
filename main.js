const toggleContent = () => {
    const hiddenContent = document.getElementById('hiddenContent');
    const showMoreButton = document.querySelector('.text-blue-500');
  
    if (hiddenContent.classList.contains('hidden')) {
      hiddenContent.classList.remove('hidden');  // Show the content
      showMoreButton.classList.add('hidden');

    } else {
      hiddenContent.classList.add('hidden');    // Hide the content
      showMoreButton.classList.remove('hidden');

    }
  };
  