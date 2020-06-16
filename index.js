function onDelete(event) {
  $(e.target).closest('li').remove();
}

function waitForDelete(){ 
  // This *should* handle deletion
  $('.shopping-list').on('click', '.shopping-item-delete', onDelete);
}

function startup() {
  waitForDelete();  
  // This should handle toggling
  $('.shopping-list').on('click', '.shopping-item-toggle', function handleToggle(e) {
    $(e.target).closest('li').toggleClass('shopping-item__checked');
  });

  $('#js-shopping-list-form').submit(function (event) {
    event.preventDefault()
    let item = $(this).find("#shopping-list-entry").val()
    $('.shopping-list').append(`<li>
     <span class="shopping-item">${item}</span>
     <div class="shopping-item-controls">
       <button class="shopping-item-toggle">
         <span class="button-label">check</span>
       </button>
       <button class="shopping-item-delete">
         <span class="button-label">delete</span>
       </button>
     </div>
   </li>`);
  });
}

$(startup);

