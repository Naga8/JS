let jsonarr = [
    {
       "_id":"621f083256780a03e8ddb65c",
       "id":1046,
       "brand":"colourpop",
       "name":"Lippie Stix",
       "price":"5.5",
       "price_sign":"$",
       "currency":"CAD",
       "image_link":"https://cdn.shopify.com/s/files/1/1338/0845/collections/blottedlip-lippie-stix_grande.jpg?v=1512588803",
       "description":"Lippie Stix Formula contains Vitamin E, Mango, Avocado, and Shea butter for added comfort and moisture. None of our Lippie formulas contain any nasty ingredients like Parabens or Sulfates.",
       "rating":3.5,
       "category":"lipstick",
       "product_type":"lipstick"
    },
    {
       "_id":"621f088b56780a03e8ddb65d",
       "id":1048,
       "brand":"colourpop",
       "name":"Lippie Pencil",
       "price":"5.0",
       "price_sign":"$",
       "currency":"CAD",
       "image_link":"https://cdn.shopify.com/s/files/1/1338/0845/collections/lippie-pencil_grande.jpg?v=1512588769",
       "description":"Lippie Pencil A long-wearing and high-intensity lip pencil that glides on easily and prevents feathering. Many of our Lippie Stix have a coordinating Lippie Pencil designed to compliment it perfectly, but feel free to mix and match!",
       "rating":4,
       "category":"pencil",
       "product_type":"lip_liner"
    }
 ];
 
 var newone = jsonarr.map((jsonarr) =>{
    let {name, description, rating } = jsonarr
    return {name, description, rating }
 })
 
 console.log(newone);