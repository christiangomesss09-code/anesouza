import { Service, GalleryItem, Testimonial, Professional } from './types';

export const SERVICES: Service[] = [
  // Cabelos
  {
    id: 'cab-1',
    category: 'cabelos',
    name: 'Corte Signature Studio Luah',
    description: 'Corte personalizado precedido por uma consultoria visagista completa para harmonizar com seus traços e estilo.',
    duration: '60 min',
    priceEstimate: 'R$ 180'
  },
  {
    id: 'cab-2',
    category: 'cabelos',
    name: 'Iluminação & Mechas Premium',
    description: 'Técnicas modernas de clareamento (Freehands ou Papel) preservando a saúde da fibra capilar com produtos premium.',
    duration: '180 min',
    priceEstimate: 'A partir de R$ 520'
  },
  {
    id: 'cab-3',
    category: 'cabelos',
    name: 'Tratamento de Nutrição Profunda',
    description: 'Cronograma capilar de alta performance para recuperar a vitalidade, brilho extremo e maciez dos fios.',
    duration: '75 min',
    priceEstimate: 'R$ 220'
  },
  {
    id: 'cab-4',
    category: 'cabelos',
    name: 'Escova Modeladora & Ritual de Lavatório',
    description: 'Lavagem com massagem capilar relaxante e secagem modelada de altíssima durabilidade.',
    duration: '45 min',
    priceEstimate: 'R$ 95'
  },

  // Nails
  {
    id: 'nail-1',
    category: 'unhas',
    name: 'Manicure & Pedicure Premium',
    description: 'Cutilagem russa ou tradicional, esfoliação com produtos hidratantes e esmaltação nacional ou importada de alta fixação.',
    duration: '90 min',
    priceEstimate: 'R$ 110'
  },
  {
    id: 'nail-2',
    category: 'unhas',
    name: 'Alongamento em Gel Slim',
    description: 'Alongamento de alta resistência e aspecto extremamente fino e natural, ideal para mãos delicadas.',
    duration: '120 min',
    priceEstimate: 'R$ 260'
  },
  {
    id: 'nail-3',
    category: 'unhas',
    name: 'Banho de Gel + Esmaltação em Gel',
    description: 'Camada de gel protetora sobre as unhas naturais, finalizada com esmaltação em gel e cura em cabine LED.',
    duration: '75 min',
    priceEstimate: 'R$ 150'
  },

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

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    category: 'cabelos',
    title: 'Loiras por Studio Luah',
    description: 'Luminosidade com preservação de integridade capilar e tons perolados impecáveis.',
    imageUrl: '/src/assets/images/2.png'
  },
  {
    id: 'g-2',
    category: 'unhas',
    title: 'Manicure Minimalista Chic',
    description: 'Cores neutras e acabamento de alta definição com cutilagem perfeita.',
    imageUrl: '/src/assets/images/3.png'
  },
  {
    id: 'g-3',
    category: 'cilios',
    title: 'Volume Russo Soft',
    description: 'Volume sofisticado sem carregar o olhar. Leveza e elegância.',
    imageUrl: '/src/assets/images/CILIOS.png'
  },
  {
    id: 'g-4',
    category: 'sobrancelhas',
    title: 'Design de Sobrancelhas & Alinhamento',
    description: 'Harmonização de traços com máxima naturalidade e simetria.',
    imageUrl: '/src/assets/images/4.png'
  },
  {
    id: 'g-5',
    category: 'cabelos',
    title: 'Corte Bob Clássico',
    description: 'Corte sofisticado com linhas limpas e movimento natural.',
    imageUrl: '/src/assets/images/6.png'
  },
  {
    id: 'g-6',
    category: 'unhas',
    title: 'Esmaltação em Gel Nude',
    description: 'Brilho espelhado duradouro por mais de 15 dias.',
    imageUrl: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Renata Vasconcellos',
    date: 'Há 2 semanas',
    rating: 5,
    text: 'A melhor experiência de beleza que já tive na vida. O atendimento é primoroso, os produtos têm um aroma maravilhoso e a atenção aos detalhes do meu cabelo me conquistou. Luana Martins é uma artista impecável!',
    source: 'google'
  },
  {
    id: 't-2',
    name: 'Mariana Mendes',
    date: 'Há 1 mês',
    rating: 5,
    text: 'O alongamento em gel do Studio Luah é inacreditável. Super natural, fino e ao mesmo tempo resistente. O capricho da Camila é sem igual e o ambiente nos faz relaxar totalmente.',
    source: 'instagram',
    handle: '@marimendes'
  },
  {
    id: 't-3',
    name: 'Gabriela Rocha',
    date: 'Há 3 dias',
    rating: 5,
    text: 'Fazer meu design de sobrancelhas e cílios aqui se tornou meu ritual de autocuidado sagrado. Toda vez que saio do Studio Luah, saio renovada, confiante e recebendo elogios por onde passo.',
    source: 'google'
  },
  {
    id: 't-4',
    name: 'Ana Beatriz Costa',
    date: 'Há 3 semanas',
    rating: 5,
    text: 'O nível de sofisticação e profissionalismo é absurdo. Elas explicam o processo, usam produtos de alta performance e têm um cuidado enorme com a nossa biossegurança. Indico de olhos fechados!',
    source: 'instagram',
    handle: '@anabea.costa'
  }
];

export const PROFESSIONALS: Professional[] = [
  {
    id: 'p-1',
    name: 'Luana Martins',
    role: 'Fundadora & Hair Artist',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'p-2',
    name: 'Camila Silva',
    role: 'Master Nail Stylist',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'p-3',
    name: 'Beatriz Alencar',
    role: 'Lash & Brow Designer',
    imageUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400'
  }
];
