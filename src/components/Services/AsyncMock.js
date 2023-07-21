
 const products = [
  // Clothing & Uniforms
  {
    name: "Karate Gi",
    description: "Traditional uniform for Karate practitioners.",
    id: 1,
    stock: 20,
    price: '$49.99',
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/845/122/products/_lem61111-36e2f4195cf2e34ab416064018125291-640-0.jpg",
    category: "clothing"
  },
  {
    name: "Taekwondo Uniform",
    description: "Official Taekwondo uniform with dobok and belt.",
    id: 2,
    stock: 18,
    price: '$45.99',
    img: "https://www.aamasupply.com/cdn/shop/products/ADITSM01.jpg?v=1600460110",
    category: "clothing"
  },
  {
    name: "Brazilian Jiu-Jitsu Gi",
    description: "High-quality BJJ uniform with lightweight and durable fabric.",
    id: 3,
    stock: 15,
    price: '$64.99',
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr0Kw6TnMKdJWrvRAtBXD-HW91_f7YF8ftTg&usqp=CAU",
    category: "clothing"
  },

  // Protective Gear
  {
    name: "Boxing Gloves",
    description: "High-quality gloves for training and sparring.",
    id: 4,
    stock: 15,
    price: '$34.99',
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWcr6kWpDDsxNPdwyxo5V3R1q5NoIQxFF-3Q&usqp=CAU",
    category: "protective"
  },
  {
    name: "Shin Guards",
    description: "Protective shin guards for various martial arts.",
    id: 5,
    stock: 12,
    price: '$24.99',
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0YAUL0gmJqtUdqdkSegWpXE33ZVRaH66xwFevYAjEM6rAWHQMIW7MUmAsjsN9OwjAMko&usqp=CAU",
    category: "protective"
  },
  {
    name: "Training Helmet",
    description: "Padded helmet for protection during training.",
    id: 6,
    stock: 20,
    price: '$29.99',
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1iRRKdsohusAkON9MvA5Jlpo5TCR8uRB1Lw&usqp=CAU",
    category: "protective"
  },

  // Training Equipment
  {
    name: "Punching Bag",
    description: "Heavy-duty punching bag for strength and endurance training.",
    id: 7,
    stock: 10,
    price: '$89.99',
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReUB2-yRjCwnzHvOOtMA7nxMaZsfKKAUze1A&usqp=CAU",
    category: "equipement"
  },
  {
    name: "Focus Mitts",
    description: "Pair of focus mitts for precise striking practice.",
    id: 8,
    stock: 12,
    price: '$29.99',
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSghpqatUV0cXirN9Bo-AEKugs91AlBtZVnMx5xw24doYNzCJgK_Dnso_atAHyroXo2WAA&usqp=CAU",
    category: "equipement"
  },
  {
    name: "Kicking Pads",
    description: "Thick pads for powerful kicking techniques.",
    id: 9,
    stock: 8,
    price: '$39.99',
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJEpRG7oZnM91WiaZmT4BI7dvf77RJOSLCuA&usqp=CAUdata:image/jpeg;base64,/9j/4AAQSkZJRgABhttps://http2.mlstatic.com/D_NQ_NP_699046-MLA31009659845_062019-V.webpAQAAAQABAAD/2wCEAAkGBxITEBUTExIVExUXGRUXFRUXFRUVFRUXGBcWGBcVFRUYHSggGBolHRYXITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGi0mHyUtLS0tLS0tKy0tLS0tLS0xLS0tLS0vLS0tLS0tLy0tLS0tLS0tLS0tLSstLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQMEBgcIAgH/xABGEAACAQIDAgsEBggEBwEAAAAAAQIDEQQSIQUxBgcTIkFRYXGBkaEykrHBQlJygsLRCCMzQ2Ki4fAUJFOzNWNzo7Li8Rb/xAAbAQEAAgMBAQAAAAAAAAAAAAAAAQQCAwUGB//EADURAAIhttps://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTsUm9qL8sXwDgcDEllZJLiHnoA2dHcgqbIa5BKMwhLlro5Hjx5gt4MHrsSTEUon44pHNpwNYX-tVO-9zOBsWT0UY2T94aG4WpLaiEerFqqkV_3YCSAPPmuWA&usqp=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",
    category: "equipement"
  },

  // Training Weapons
  {
    name: "Wooden Bokken",
    description: "Wooden sword for martial arts practice.",
    id: 10,
    stock: 25,
    price: '$29.99',
    img: "data:image/jpeg;base64,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",
    category: "weapons"
  },
  {
    name: "Foam Nunchakus",
    description: "Padded nunchakus for safe training.",
    id: 11,
    stock: 30,
    price: '$19.99',
    img: "data:image/jpeg;base64,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",
    category: "weapons"
  },
  {
    name: "Rubber Training Knife",
    description: "Safe rubber knife for self-defense training.",
    id: 12,
    stock: 40,
    price: '$9.99',
    img: "data:image/jpeg;base64,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",
    category: "weapons"
  },
];

function getData(){
  return new Promise( (resolve, reject)=> {
    setTimeout(()=>{
      resolve(products)
    }, 2000)
  })
}

export function getProductData(idURL){
  return new Promise( (resolve, reject)=> {
    const productRequested = products.find((item) => item.id === parseInt(idURL)); 
    setTimeout(()=>{
      resolve(productRequested)
    }, 2000)
  })
}

export function getCategoryData(categoryURL){
  return new Promise( (resolve, reject)=> {
    const categoryRequested = products.filter(item => {
     return item.category.toLowerCase() === categoryURL.toLowerCase();  
    }); 
    setTimeout(()=>{
      resolve(categoryRequested)
    }, 2000)
  })
}

export default getData; 