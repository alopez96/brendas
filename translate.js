var arrayLang = {
    'en': {
      'header': 'Brendas Brincolines',
      'sub-header': 'Rent from us!',
      'about-btn': 'About',
    },
      'sp': {
        'header': 'Brendas Brincolines',
        'sub-header': 'Rente para sus eventos!',
        'about-btn': 'Sobre nosotros',
      }
  };

  $(function(){
    $('.translate').click(function(){
      var lang = $(this).attr('id');
      $('.lang').each(function(index, element){
        $(this).text(arrayLang[lang][$(this).attr('key')]);
      })
    });
  });