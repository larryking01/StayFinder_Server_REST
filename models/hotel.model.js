let hotelItem = {
  id: 'uuid',

  hotelName: 'text',
  shortDescription: 'text',
  fullDescription: 'text',

  streetAddress: 'text',
  city: 'text',
  country: 'text',

  latitude: 'float8',       
  longitude: 'float8',       

  startingPrice: 'float8',   
  currency: 'text',        
  priceRange: 'text',     

  isAvailable: 'boolean',
  numberOfRoomsAvailable: 'int2',

  coverImageUrl: 'text',
  galleryImages: 'text[]', 

  averageRating: 'float4',   
  reviewCount: 'int2',
  starRating: 'float4',      

  amenities: 'text[]',               
  policies: 'text[]',                
  accessibilityFeatures: 'text[]',   

  checkInTime: 'text',     
  checkOutTime: 'text',    

  minimumStay: 'number',     
  maximumStay: 'number',  

  houseRules: 'text[]',

  contactPhone: 'text',
  contactEmail: 'text',

  acceptedPaymentMethods: 'text[]',

  isFeatured: 'boolean',
};
