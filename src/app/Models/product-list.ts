import { IProduct } from "./i-product";

export let ProductList :IProduct[] = [
    {
        id: 1, name: 'Redmi 9', description: 'phone xiaomi', price: 9000, onSale: true, discount: 5, quantity: 5,
        img: 'https://img.gkbcdn.com/s3/p/2020-06-12/Global-Version-Xiaomi-Redmi-9-6-53--4GB-64GB-Smartphone-Carbon-Grey-906588-.jpg'
      },
      {
        id: 2, name: 'Galaxy s24 ultra', description: 'phone samsung galaxy', price: 25000, onSale: false, discount: 15, quantity: 1,
        img: 'https://www.att.com/scmsassets/global/devices/phones/samsung/samsung-galaxy-s24-ultra/carousel/titanium-violet-1.png'
      },
      {
        id: 3, name: 'Reno 8T', description: 'phone oppo', price: 15000, onSale: true, discount: 10, quantity: 4,
        img: 'https://r2media.horizondm.com/catalog/product/cache/df0fd26a5939738811f1a7c10cac02a5/o/p/oppo-reno-8t-5g-_8_256_-midnight-black-_a_-1.jpg'
      },
      {
        id: 4, name: 'Oppo A78', description: 'phone oppo', price: 9000, onSale: false, discount: 12, quantity: 2,
        img: 'https://elghazawy.com/storage/161312/Oppo-A78-%281%29.webp'
      },
      {
        id: 5, name: 'Xiaomi 14 Ultra', description: 'phone xiaomi', price: 20000, onSale: true, discount: 8, quantity: 5,
        img: 'https://i02.appmifile.com/91_operatorx_operatorx_opx/24/02/2024/4eafcd40186edde466860564f9ff71e9.png?thumb=1&w=500&f=webp&q=85'
      }
]