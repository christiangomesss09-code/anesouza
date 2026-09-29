import { Service, GalleryItem, Testimonial, Professional } from './types';

export const SERVICES: Service[] = [
  // Cílios
  {
    id: 'lash-1',
    category: 'cilios',
    name: 'Extensão de Cílios Fio a Fio Clássica',
    description: 'Aplicação minuciosa de um fio de seda sobre cada cílio natural, criando um olhar delineado e natural.',
    duration: '120 min',
    priceEstimate: 'R$ 190'
  },
  {
    id: 'lash-2',
    category: 'cilios',
    name: 'Volume Russo Elegante',
    description: 'Aplicação de leques (fans) ultra-leves e artesanais para dar densidade, volume e sofisticação ao olhar.',
    duration: '150 min',
    priceEstimate: 'R$ 240'
  },
  {
    id: 'lash-3',
    category: 'cilios',
    name: 'Lash Lifting & Nutrição de Queratina',
    description: 'Curvatura e coloração dos próprios cílios naturais, combinados com um banho de queratina e vitaminas.',
    duration: '60 min',
    priceEstimate: 'R$ 140'
  },

  // Sobrancelhas
  {
    id: 'brow-1',
    category: 'sobrancelhas',
    name: 'Design de Sobrancelhas Personalizado',
    description: 'Estudo das proporções faciais e remoção milimétrica dos pelos com pinça e linha para realçar seu olhar.',
    duration: '40 min',
    priceEstimate: 'R$ 75'
  },
  {
    id: 'brow-2',
    category: 'sobrancelhas',
    name: 'Design de Sobrancelhas com Henna Orgânica',
    description: 'Design de alta precisão com aplicação de henna botânica premium para um preenchimento natural e suave.',
    duration: '55 min',
    priceEstimate: 'R$ 95'
  },
  {
    id: 'brow-3',
    category: 'sobrancelhas',
    name: 'Brow Lamination Ritual',
    description: 'Técnica de alinhamento e nutrição dos fios para sobrancelhas mais encorpadas, modernas e elegantes.',
    duration: '60 min',
    priceEstimate: 'R$ 170'
  }
];

import imgCiliosFioAFio from './assets/images/novas imagens/cilios-fio-a-fio-olho-azul.webp';
import imgCiliosCliente from './assets/images/novas imagens/cilios-sobrancelha-cliente.webp';
import imgCiliosVolume from './assets/images/novas imagens/cilios-volume-russo.webp';
import imgLojaBalcao from './assets/images/novas imagens/loja-balcao-vertical.webp';
import imgLojaCorredor1 from './assets/images/novas imagens/loja-corredor-1.webp';
import imgLojaCorredor2 from './assets/images/novas imagens/loja-corredor-2.webp';
import imgMacaCilios from './assets/images/novas imagens/maca-cilios.webp';
import imgSobrancelhaDesign from './assets/images/novas imagens/sobrancelha-design.webp';
import imgVitrineDia from './assets/images/novas imagens/vitrine-dia.webp';
import imgVitrineNoite from './assets/images/novas imagens/vitrine-noite.webp';

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    category: 'cilios',
    title: 'Volume Russo Soft',
    description: 'Volume sofisticado sem carregar o olhar. Leveza e elegância.',
    imageUrl: imgCiliosVolume
  },
  {
    id: 'g-2',
    category: 'sobrancelhas',
    title: 'Design de Sobrancelhas & Alinhamento',
    description: 'Harmonização de traços com máxima naturalidade e simetria.',
    imageUrl: imgSobrancelhaDesign
  },
  {
    id: 'g-3',
    category: 'sobrancelhas',
    title: 'Lash & Brow Transformation',
    description: 'A transformação completa do olhar, combinando cílios e sobrancelhas.',
    imageUrl: imgCiliosCliente
  },
  {
    id: 'g-4',
    category: 'cilios',
    title: 'Lash Design Personalizado',
    description: 'Fio a fio azul com resultado marcante e respeitando a essência.',
    imageUrl: imgCiliosFioAFio
  },
  {
    id: 'g-5',
    category: 'cilios',
    title: 'Maca Premium para Atendimento',
    description: 'Conforto e privacidade em cada detalhe do seu atendimento.',
    imageUrl: imgMacaCilios
  },
  {
    id: 'g-6',
    category: 'sobrancelhas',
    title: 'Recepção e Atendimento',
    description: 'Ambiente acolhedor pensado exclusivamente para o seu momento.',
    imageUrl: imgLojaBalcao
  },
  {
    id: 'g-7',
    category: 'cilios',
    title: 'Interior Elegante do Estúdio',
    description: 'Caminho de entrada decorado com sofisticação e requinte.',
    imageUrl: imgLojaCorredor1
  },
  {
    id: 'g-8',
    category: 'sobrancelhas',
    title: 'Experiência Completa do Espaço',
    description: 'Ampla recepção e corredor de acesso com ambientação premium.',
    imageUrl: imgLojaCorredor2
  },
  {
    id: 'g-9',
    category: 'cilios',
    title: 'Fachada do Estúdio - Dia',
    description: 'Entrada iluminada e convidativa para a sua visita.',
    imageUrl: imgVitrineDia
  },
  {
    id: 'g-10',
    category: 'sobrancelhas',
    title: 'Fachada do Estúdio - Noite',
    description: 'Ambiente intimista e sofisticado para atendimentos noturnos.',
    imageUrl: imgVitrineNoite
  }
];

export const PROFESSIONALS: Professional[] = [
  {
    id: 'p-1',
    name: 'Ane Souza',
    role: 'Lash Designer & Brow Designer',
    imageUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400'
  }
];

export const TESTIMONIALS: Testimonial[] = [];
