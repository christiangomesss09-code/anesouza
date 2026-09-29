export interface Service {
  id: string;
  category: 'cilios' | 'sobrancelhas';
  name: string;
  description: string;
  priceEstimate?: string;
  duration?: string;
}

export interface GalleryItem {
  id: string;
  category: 'cilios' | 'sobrancelhas';
  title: string;
  description: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  date: string;
  rating: number;
  text: string;
  source: 'google' | 'instagram';
  handle?: string;
}

export interface Professional {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
}

export interface BookingData {
  services: Service[];
  date: string;
  time: string;
  professionalId: string;
  clientName: string;
  clientPhone: string;
}
