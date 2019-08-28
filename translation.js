var arrayLang = {
    'en': {
      'header': 'Brenda\'s Jumpies',
      'sub-header': 'Rent jumpies, tables, chairs, and tents for the ocasion.',
      'nav-about': 'ABOUT',
      'nav-portfolio': 'PORTFOLIO',
      'nav-contact': 'CONTACT',
      'about-header': 'ABOUT US',
      'about-sub1': 'We rent jumpies, tents, tables and chairs for social events.',
      'about-sub2': 'Delivery of equipment provided. Note there is extra charge for cities outside of Santa Rosa.',
      'about-sub3': 'We have delivered services at house parties, venues, and parks. Give us a call for a free estimate.',
      'about-sub4': 'Years of service',
      'about-sub5': 'Clients served',
      'about-sub6': 'Events',
      'about-sub7': 'Cities',
      'port': 'PHOTOS',
      'contact': 'CONTACT US',
      'reg': 'Regular jumpies',
      'slide': 'Jumpies with slide',
      'water': 'Jumpies with water slide',
      'view': 'View all jumpies'
    },
      'sp': {
        'header': 'Brendas Brincolines',
        'sub-header': 'Renta brincolines, sillas, mesas y carpas para la ocasion.',
        'nav-about': 'SOBRE NOSOTROS',
        'nav-portfolio': 'FOTOS',
        'nav-contact': 'CONTACTA',
        'about-header': '',
        'about-sub1': 'Rentamos brincolines, sillas, mesas y carpas para todas ocasiones.',
        'about-sub2': 'Solo hay cargo extra si es fuera de Santa Rosa.',
        'about-sub3': 'LLevamos a casas, salones, y parques. LLamenos para un estimado gratis.',
        'about-sub4': 'Anos de servicio',
        'about-sub5': 'Clientes servido',
        'about-sub6': 'Eventos',
        'about-sub7': 'Ciudades',
        'port': 'FOTOS',
        'contact': 'CONTACTE NOS',
        'view': 'Ver todos los brincolines'
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