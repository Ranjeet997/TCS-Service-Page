$(document).ready(function(){
    var isExpanded = false;

    // Show only the first four cards initially
    $('.card:lt(4)').show();

    $('.show-more').click(function(){
      if (!isExpanded) {
        $('.card:hidden').slideDown(); // Show all hidden cards
        $('.show-more').text('View Less'); // Change button text to "View Less"
      } else {
        $('.card:gt(3)').slideUp(); // Hide cards after the first four
        $('.show-more').text('View More'); // Change button text to "View More"
      }
      isExpanded = !isExpanded; // Toggle the expanded state
    });
  });

  function toggleContent() {
    var content = document.querySelector('.content');
    var toggleBtn = document.querySelector('.toggle-btn');
    content.classList.toggle('show-content');
    toggleBtn.textContent = content.classList.contains('show-content') ? '-' : '+';
  }