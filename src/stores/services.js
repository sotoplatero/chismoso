import { readable } from 'svelte/store';

export const services = readable([
    { 
      id: 'recipes' , 
      name: 'Recetas de Cocina', 
      description: 'Receta aleatorea desde recetasgratis.com',
    },
    { 
      id: 'tv' , 
      name: 'Televisión Cubana', 
      description: 'Programación de todos los canales disponible de la TV Cubana',
    },
    { 
    	id: 'rates', 
    	name: 'Tasas de Cambio', 
    	value: true
    },
    { 
    	id: 'cats', 
    	name: 'Fotos de Gaticos', 
    	value: true
    },
    { 
    	id: 'dogs', 
    	name: 'Fotos de Perritos', 
    	value: true
    },
    { 
    	id: 'number', 
    	name: 'Números', 
    	description: "Muestra datos curiosos sobre los números"
    },
    { 
    	id: 'nasa', 
    	name: 'Foto de la NASA', 
    	description: "La foto del día publicada por la NASA incluyendo una amplia descripción"
    },
    { 
    	id: 'podcats', 
    	name: 'Podcast Cubanos', 
    	description: "Una entrada aleatoria del listado de Podcast Cubanos desde cubapod"
    },
    { 
    	id: 'quotes', 
    	name: 'Frases Célebres', 
    	value: true
    },
    { 
    	id: 'ecured-ephemeris', 
    	name: 'Efemérides del día', 
    	description: "Desde el sitio de Ecured las efemerides que incluyen nacimientos, fallecimientos"
    },{ 
    	id: 'ecured-curiosity', 
    	name: 'Curiosidades de Ecured', 
    	description: "Curiosidades publicadas en la página principal de la Ecured"
    },{ 
    	id: 'lucasnometro', 
    	name: 'Lucasnometro Semanal', 
    	value: true
    },{ 
    	id: 'insmet', 
    	name: 'Estado del Tiempo', 
    	description: "Actualización del estado del tiempo para mañana"
    },
  ])

