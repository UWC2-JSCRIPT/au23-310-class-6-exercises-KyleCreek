/**
 * Toggles "done" class on <li> element
 */
$('.today-list').on('click', 'li', function(){
  $(this).closest('li').toggleClass('done');
});
/**
 * Delete element when delete link clicked
 */
$('.today-list').on('click', '.delete', function(){
  $(this).closest('li').remove()
});
/**
 * Adds new list item to <ul>
 */
const addListItem = function(e) {
  e.preventDefault();
  const text = $('input').val();
  // Build List Item
  const newLi = $('<li>');
  // Build Span. 
  const newSpan = $('<span>');
  newSpan.text(text);

  
  // Build Delete Buttton
  const newA = $('<a>');
  newA.text('Delete');
  newA.addClass('delete');

  // Append the Elements
  newLi.append(newSpan);
  newLi.append(newA);


  // Append the list item to the UL
  $('.today-list').append(newLi);

  // rest here...
};

// add listener for add
$('.add-item').on('click', addListItem);
