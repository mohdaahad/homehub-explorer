
import { PropertyCardProps } from '../components/properties/PropertyCard';

export const properties: PropertyCardProps[] = [
  {
    id: '1',
    title: 'Modern Luxury Villa with Pool',
    address: '123 Seaside Dr, Malibu, CA 90265',
    price: 4500000,
    bedrooms: 5,
    bathrooms: 4.5,
    area: 4200,
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    propertyType: 'house',
    featured: true,
    isNew: true
  },
  {
    id: '2',
    title: 'Downtown Penthouse Apartment',
    address: '789 Urban Ave, New York, NY 10001',
    price: 3200000,
    bedrooms: 3,
    bathrooms: 3,
    area: 2800,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    propertyType: 'apartment',
    featured: true
  },
  {
    id: '3',
    title: 'Contemporary Beachfront Condo',
    address: '456 Ocean Blvd, Miami, FL 33139',
    price: 1950000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1650,
    imageUrl: 'https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    propertyType: 'condo',
    isNew: true
  },
  {
    id: '4',
    title: 'Tuscan-Style Country Estate',
    address: '1001 Vineyard Ln, Napa, CA 94558',
    price: 7950000,
    bedrooms: 6,
    bathrooms: 5.5,
    area: 6800,
    imageUrl: 'https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    propertyType: 'house',
    featured: true
  },
  {
    id: '5',
    title: 'Urban Loft in Arts District',
    address: '555 Gallery Row, Los Angeles, CA 90013',
    price: 1750000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1850,
    imageUrl: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    propertyType: 'condo'
  },
  {
    id: '6',
    title: 'Mediterranean Waterfront Villa',
    address: '888 Bayshore Dr, Tampa, FL 33611',
    price: 5700000,
    bedrooms: 5,
    bathrooms: 4,
    area: 5100,
    imageUrl: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    propertyType: 'villa',
    isNew: true
  },
  {
    id: '7',
    title: 'Mountain View Cabin Retreat',
    address: '321 Pine Ridge, Aspen, CO 81611',
    price: 2950000,
    bedrooms: 4,
    bathrooms: 3,
    area: 3200,
    imageUrl: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    propertyType: 'house'
  },
  {
    id: '8',
    title: 'Historic Brownstone Townhouse',
    address: '159 Commonwealth Ave, Boston, MA 02116',
    price: 4250000,
    bedrooms: 4,
    bathrooms: 3.5,
    area: 3900,
    imageUrl: 'https://images.unsplash.com/photo-1577252704512-333c791bc969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    propertyType: 'house',
    featured: true
  }
];

export const getFeaturedProperties = () => {
  return properties.filter(property => property.featured);
};

export const getNewProperties = () => {
  return properties.filter(property => property.isNew);
};

export const getPropertyById = (id: string) => {
  return properties.find(property => property.id === id);
};
