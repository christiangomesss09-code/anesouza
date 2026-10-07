import { Service, GalleryItem, Testimonial, Professional } from './types';

export const SERVICES: Service[] = [
  // Cílios
  {
    id: 'lash-1',
    category: 'cilios',
    name: 'Clássico Fio a Fio',
    description: 'Aplicação de um fio sintético de alta qualidade sobre cada cílio natural. Resultado elegante, delineado e discreto, ideal para quem busca naturalidade.',
    duration: '120 min',
    priceEstimate: 'R$ 190'
  },
  {
    id: 'lash-2',
    category: 'cilios',
    name: 'Volume Brasileiro - Fio Y',
    description: 'Técnica com fios em formato Y pré-montados, oferecendo o dobro de volume com o mesmo peso do fio a fio clássico. Leveza e definição equilibrada.',
    duration: '130 min',
    priceEstimate: 'R$ 220'
  },
  {
    id: 'lash-4',
    category: 'cilios',
    name: 'Volume Glamour - Fio 5D',
    description: 'Leques com 5 fios ultra-leves para um visual marcante e sofisticado. Perfeito para ocasiões especiais ou para quem ama um olhar mais dramático.',
    duration: '180 min',
    priceEstimate: 'R$ 310'
  },
  {
    id: 'lash-5',
    category: 'cilios',
    name: 'Mega Volume - 8D',
    description: 'O ápice da técnica: leques com 8 fios ultra-finos para um volume impactante, glamouroso e de tirar o fôlego. Maxima densidade com conforto.',
    duration: '210 min',
    priceEstimate: 'R$ 380'
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

const BASE_IMG = 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image';

const gImg = (prompt: string, size = 'portrait_4_3' as const) =>
  `${BASE_IMG}?prompt=${encodeURIComponent(prompt)}&image_size=${size}`;

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    category: 'cilios',
    title: 'Volume Egípcio 3D',
    description: 'Leques artesanais com três fios ultra-finos. Densidade elegante e equilibrada.',
    imageUrl: gImg('Extreme close-up macro of woman eye with Egyptian 3D volume handmade fan eyelash extensions, three ultra-fine lashes per point, balanced elegant density, warm golden studio lighting, luxury beauty aesthetic, photorealistic')
  },
  {
    id: 'g-2',
    category: 'sobrancelhas',
    title: 'Design de Sobrancelhas & Henna',
    description: 'Harmonização de traços com henna orgânica. Simetria milimétrica e naturalidade.',
    imageUrl: gImg('Close-up of perfectly shaped woman eyebrows with organic henna stain and customized design, symmetrical facial golden ratio proportion, natural hair strokes, warm soft beauty studio light, nude beige tones, premium brow aesthetic, photorealistic')
  },
  {
    id: 'g-3',
    category: 'sobrancelhas',
    title: 'Transformação Lash & Brow',
    description: 'A transformação completa do olhar combinando cílios volumosos e sobrancelhas alinhadas.',
    imageUrl: gImg('Portrait of elegant Brazilian woman with complete eye transformation, full volume eyelash extensions and perfectly shaped eyebrows, warm soft studio lighting, luxury beauty salon background, natural nude makeup, high-end aesthetic, photorealistic')
  },
  {
    id: 'g-4',
    category: 'cilios',
    title: 'Clássico Fio a Fio',
    description: 'Um fio por cílio natural. Resultado discreto, delineado e elegantemente natural.',
    imageUrl: gImg('Beautiful natural eye with classic individual 1D eyelash extension, one premium synthetic lash applied per each natural eyelash, subtle elegant defined look, warm beige nude studio tones, soft luxury beauty lighting, photorealistic')
  },
  {
    id: 'g-8',
    category: 'sobrancelhas',
    title: 'Ritual Brow Lamination',
    description: 'Técnica de alinhamento dos fios com nutrição intensiva. Sobrancelhas encorpadas e modernas.',
    imageUrl: gImg('Close-up of woman eyebrows during brow lamination ritual, perfectly aligned and full laminated brow hairs, nourishing oil application, premium beauty treatment scene, warm soft studio lighting, luxury aesthetic, photorealistic')
  },
  {
    id: 'g-9',
    category: 'cilios',
    title: 'Volume Glamour 5D',
    description: 'Cinco fios ultra-leves por leque. Visual marcante perfeito para ocasiões especiais.',
    imageUrl: gImg('Dramatic close-up eye with glamour 5D volume handmade fan eyelash extensions, five ultra-light fibers per point, striking sophisticated look, warm premium studio lighting, elegant makeup, luxury beauty photography aesthetic, photorealistic')
  },
  {
    id: 'g-10',
    category: 'sobrancelhas',
    title: 'Mega Volume 8D Impactante',
    description: 'O ápice da técnica. Leques com oito fios ultra-finos e máxima densidade glamourosa.',
    imageUrl: gImg('Extreme close-up of woman eye with breathtaking mega volume 8D handmade fan eyelash extensions, eight ultra-fine lashes per point, maximum density impactful glamorous statement lashes, luxury premium studio lighting, editorial high-end beauty aesthetic, photorealistic')
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
