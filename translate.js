var arrayLang = {
    'en': {
      'header': 'Brendas Brincolines',
      'nav-about': 'ABOUT',
      'nav-portfolio': 'PORTFOLIO',
      'nav-contact': 'CONTACT',
      'about-header': 'ABOUT US',
      'about-sub1': 'We rent jumpies, tents, tables and chairs for social events.',
      'about-sub2': 'Delivery, setup, and pickup is free of cost.',
      'about-sub3': 'We have delivered services at house parties, venues, and parks. Give us a call for a free estimate.',
      'about-sub4': 'Years of service',
      'about-sub5': 'Clients served',
      'about-sub6': 'Events',
      'about-sub7': 'Cities',
      'port': 'PHOTOS',
      'contact': 'CONTACT US'
    },
      'sp': {
        'header': 'Brendas Brincolines',
        'nav-about': 'SOBRE NOSOTROS',
        'nav-portfolio': 'FOTOS',
        'nav-contact': 'CONTACTA',
        'about-header': 'ABOUT US',
        'about-sub1': 'Rentamos brincolines, casitas, cias y mesas.',
        'about-sub2': 'Vamos hacia usted sin costo extra.',
        'about-sub3': 'Vamos a fiestas en tu casa, salon, y parkes. LLamenos para un estimado gratis.',
        'about-sub4': 'Anos de servicio',
        'about-sub5': 'Clientes servido',
        'about-sub6': 'Eventos',
        'about-sub7': 'ciudades',
        'port': 'FOTOS',
        'contact': 'CONTACTE NOS'
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