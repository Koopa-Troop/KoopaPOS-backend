const productsMock = [
    {
      id: '1',
      name: 'Adult Large Breed',
      image: 'https://www.eukanuba.com.mx/40-thickbox_default/adult-large-breed.jpg',
      price: 1.52,
      availability: true,
    }, {
      id: '2',
      name: 'Adult Medium Breed',
      image: 'https://www.eukanuba.com.mx/37-home_default/adult-medium-breed.jpg',
      price: 1.52,
      availability: true,
    }, {
      id: '3',
      name: 'Adult Small Breed',
      image: 'https://www.eukanuba.com.mx/36-home_default/adult-small-breed.jpg',
      price: 1.52,
      availability: true,
    }, {
      id: '4',
      name: 'Healthy Extras Adult Medium & Large Breed',
      image: 'https://www.eukanuba.com.mx/53-home_default/healthy-extras-adult-medium-large-breed.jpg',
      price: 1.52,
      availability: true,
    }, {
      id: '5',
      name: 'Healthy Extras Adult Small Breed',
      image: 'https://www.eukanuba.com.mx/52-home_default/healthy-extras-adult-small-breed.jpg',
      price: 1.52,
      availability: true,
    }, {
      id: '6',
      name: 'Healthy Extras Puppy',
      image: 'https://www.eukanuba.com.mx/51-home_default/healthy-extras-puppy.jpg',
      price: 1.52,
      availability: true,
    }, {
      id: '7',
      name: 'Adult Large Breed',
      image: 'https://www.eukanuba.com.mx/40-thickbox_default/adult-large-breed.jpg',
      price: 1.52,
      availability: true,
    }, {
      id: '8',
      name: 'Adult Medium Breed',
      image: 'https://www.eukanuba.com.mx/37-home_default/adult-medium-breed.jpg',
      price: 1.52,
      availability: true,
    }, {
      id: '9',
      name: 'Adult Small Breed',
      image: 'https://www.eukanuba.com.mx/36-home_default/adult-small-breed.jpg',
      price: 1.52,
      availability: true,
    }, {
      id: '10',
      name: 'Healthy Extras Adult Medium & Large Breed',
      image: 'https://www.eukanuba.com.mx/53-home_default/healthy-extras-adult-medium-large-breed.jpg',
      price: 1.52,
      availability: true,
    }, {
      id: '11',
      name: 'Healthy Extras Adult Small Breed',
      image: 'https://www.eukanuba.com.mx/52-home_default/healthy-extras-adult-small-breed.jpg',
      price: 1.52,
      availability: true,
    }, {
      id: '12',
      name: 'Healthy Extras Puppy',
      image: 'https://www.eukanuba.com.mx/51-home_default/healthy-extras-puppy.jpg',
      price: 1.52,
      availability: true,
    },
  ];
  
  class ProductsServiceMock {
    async getProducts() {
      return Promise.resolve(productsMock)
    }
  }
  
  module.exports = {
    productsMock,
    ProductsServiceMock
  };
  