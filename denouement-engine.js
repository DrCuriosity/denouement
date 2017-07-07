var state = {
  gloss_revealed: [],
  pane_revealed: [],
  knowledge: [],
};

function switch_active_pane(pane) {
  $('.pane').removeClass('active');
  pane.addClass('active');
}

function build_button_bar(pane) {
  data_dir = $(pane).attr('data-action');

  if (data_dir) {
    dir_list = data_dir.split(',');
    // Trim whitespace from items
    for (d in dir_list) {
      dir_list[d] = dir_list[d].trim();
    }

    // Build bar.
    bar = $('<div class="button-bar"></div>');
    for (d in dir_list) {
      dir = dir_list[d];
      soft_button = $('<span class="soft-button"></span>');
      switch(dir) {
        case 'prev':
          label = '&larr;';
          break;
        case 'next':
          label = '&rarr;';
          break;
        default:
          label = dir;
      }
      soft_button.html(label);
      soft_button.attr('data-action', dir);
      // Prepend to maintain data-action button order.
      bar.prepend(soft_button);

    }
    bar.prepend('<hr/>')
    pane.append(bar);
  }

}

function soft_button_handler(e) {
  target = $(e.target);
  pane = target.parents('div.pane');
  action = target.attr('data-action');

  target.addClass('soft-button-visited');

  switch(action) {
    case "next":
      next = $(pane).next();
      switch_active_pane(next);
      next.fadeIn();
      break;
    case "prev":
      prev = $(pane).prev();
      switch_active_pane(prev);
      break;
    default:
      // Do some handling for custom actions.
  }
}


// Show glossary items.
function gloss(e) {
  target = $(e.target);
  // Check for a specific item attribute, or use the text if there is none.
  item = target.attr('item') || target.text();
  $('.glossary').find('section#'+item).fadeIn();
  $('.glossary').addClass('open');
}


// Initialise!
$(function() {
  // Iterate through panes to add button-bars as necessary.
  $.each($('.pane'), function(key, pane) {
    build_button_bar($(pane));
  });

  // Register click handlers
  $('.soft-button').click( soft_button_handler );
  $('.gloss').click( gloss );

});
