import ProductCard from "./shared/ProductCard";


const products = [
    {
        productName : "IPhone 14 Pro",
        productImage :"data:image/jpeg;base64,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",
        description : "Featuring the Always-On display, the first-ever 48MP camera on iPhone, Crash Detection, Emergency SOS via satellite, and an innovative new way to receive notifications and activities with the Dynamic Island",
        price : 100.00,
        specialPrice : 80.00,        
    },
    {
       
        productName : "IPhone 15 Pro",
        productImage : "https://www.dxomark.com/wp-content/uploads/medias/post-157467/Apple-iPhone-15-Pro_-natural_featured-image-packshot-review.jpg",
        description : "Forged in titanium and featuring the groundbreaking A17 Pro chip, a customizable Action button, and the most powerful iPhone camera system ever",
        price : 120.00,
        specialPrice : 96.00,        
    },
    
        {
            productName: "Samsung Galaxy S23 Ultra",
            productImage: "https://m.media-amazon.com/images/I/71OXmy3NMCL._AC_UF1000,1000_QL80_.jpg",
            description: "A powerful Android smartphone with top-tier camera features, stunning display, and lightning-fast performance.",
            specialPrice: 1199.99,
            price: 1299.99
          },       
];
const About = () => {
    return (
        <div className="mx-w-7xl mx-auto px-8 py-8" >
            <h1 className="text-slate-800 text-4xl font-bold text-center mb-12">
               About Us
            </h1>
            <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
                <div className="w-full md:w-1/2 text-center md:text-left text-2xl font-bold mx-20 ">
                    <p >Welcome to our e-commerse site! We are dedicated for giving a best quality products
                        to our customers. Our mission is to provide a best customer service and to make our customers happy
                        with our products.</p>
                </div>
                <div className="mx-20 w-full md:w-1/2 mb-6 md:mb-0">
                <img src="src\assets\sliders\AboutUs.png" 
                     alt="About Us" 
                     className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 "/>
                </div>
            </div>
            <div>
                <h1 className="text-slate-800 text-4xl font-bold text-center mb-12">
                    Our products
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {
                        products.map((product, index) => (
                            <ProductCard key={ index } 
                            image={product.productImage}
                            productName={product.productName}
                            description={product.description}
                            price={product.price}
                            specialPrice={product.specialPrice}
                            about />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default About;