import { ProductData } from '../types';

export const products: ProductData = {
  men: [
    { 
      id: 1, 
      title: "Techwear Hoodie 'Yurei'", 
      img: "./conjunto_cap_calato_no.jpg", 
      fallbackImg: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=500&q=80", 
      category: "Hoodies",
      price: "S/ 189.00",
      desc: "Sudadera técnica oversize con acabado negro mate. Inspirada en los espíritus urbanos."
    },
    { 
      id: 2, 
      title: "Pantalón Cargo 'Ronin'", 
      img: "./bomber_calato_no.jpg", 
      fallbackImg: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=500&q=80", 
      category: "Pantalones",
      price: "S/ 219.00",
      desc: "Múltiples bolsillos tácticos y correas ajustables. Para el guerrero moderno."
    },
    { 
      id: 3,
      title: "Oversize Tee 'Kanji'", 
      img: "./enterizo_calato_no.jpg", 
      fallbackImg: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=500&q=80", 
      category: "Polos",
      price: "S/ 99.00",
      desc: "Algodón pesado de 240g. Estampado minimalista en la espalda."
    },
    { 
      id: 4,
      title: "Jeans 'Destruction' Black", 
      img: "https://images.unsplash.com/photo-1542272617-08f086302436?auto=format&fit=crop&w=500&q=80", 
      category: "Pantalones",
      price: "S/ 180.00",
      desc: "Denim negro lavado a la piedra con roturas estratégicas. Actitud rebelde."
    },
    { 
      id: 5,
      title: "Kimono Jacket 'Sora'", 
      img: "https://images.unsplash.com/photo-1512445239398-6d0c4c575b89?auto=format&fit=crop&w=500&q=80", 
      category: "Chaquetas",
      price: "S/ 245.00",
      desc: "Fusión entre tradición japonesa y streetwear occidental."
    },
    { 
      id: 6,
      title: "Jogger 'Ninja' Tapered", 
      img: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?auto=format&fit=crop&w=500&q=80", 
      category: "Pantalones",
      price: "S/ 120.00",
      desc: "Corte ajustado en tobillos, silueta ancha arriba. Movilidad total."
    }
  ],
  women: [
    { 
      id: 7,
      title: "Bomber 'Sukeban' Leader", 
      img: "./bomber_calato_no.jpg", 
      fallbackImg: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=500&q=80",
      category: "Chaquetas",
      price: "S/ 199.00",
      desc: "Chaqueta bomber 'Tu Calato No' edición Tokyo Gang. Bordados agresivos y corte clásico."
    },
    { 
      id: 8,
      title: "Enterizo 'Shadow' Ops", 
      img: "./enterizo_calato_no.jpg", 
      fallbackImg: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&w=500&q=80",
      category: "Enterizos",
      price: "S/ 180.00",
      desc: "Silueta táctica completa. Funcionalidad y misterio en una sola pieza."
    },
    { 
      id: 9,
      title: "Conjunto Cargo 'Riot'", 
      img: "./conjunto_cap_calato_no.jpg", 
      fallbackImg: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=500&q=80",
      category: "Conjuntos",
      price: "S/ 250.00", 
      desc: "Outfit definitivo 'Tu Calato No'. Casaca oversized y pantalón utilitario para dominar la calle."
    }
  ],
  accessories: [
    {
      id: 10,
      title: "Gorra 'No Face' Dad Hat",
      img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=500&q=80",
      category: "Gorras",
      price: "S/ 85.00",
      desc: "Bordado 'Tu Calato No' en rojo sangre. Estilo desgastado y ajuste metálico."
    },
    {
      id: 11,
      title: "Zapatillas 'Cyber Stomper' V1",
      img: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=500&q=80",
      category: "Zapatillas",
      price: "S/ 389.00",
      desc: "Suela chunky industrial. Diseño futurista para caminar sobre el asfalto caliente."
    },
    {
      id: 12,
      title: "Bucket Hat 'Dark Rain'",
      img: "https://images.unsplash.com/photo-1575428652377-a2697240dac5?auto=format&fit=crop&w=500&q=80",
      category: "Gorras",
      price: "S/ 70.00",
      desc: "Impermeable con ala ancha. Etiqueta reflectante 'Tu Calato No'."
    },
    {
      id: 13,
      title: "Sneakers High-Top 'Shogun'",
      img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=500&q=80",
      category: "Zapatillas",
      price: "S/ 420.00",
      desc: "Caña alta con correas de seguridad. Inspiración techwear japonesa."
    },
    {
      id: 14,
      title: "Gorra Trucker 'Underground'",
      img: "https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=500&q=80",
      category: "Gorras",
      price: "S/ 90.00",
      desc: "Malla trasera negra y frente acolchado. Logo minimalista."
    }
  ]
};