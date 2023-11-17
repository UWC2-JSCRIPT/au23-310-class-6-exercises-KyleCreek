/**
 * Toggles "done" class on <li> element
 */

/**
 * Delete element when delete link clicked
 */

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

  // rest here...
};

// add listener for add
$('.add-item').on('click', addListItem);