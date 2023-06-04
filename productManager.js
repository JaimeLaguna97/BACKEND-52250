// Define the ProductManager class
class ProductManager {
    constructor() {
      this.products = [];
      this.nextProductId = 1; 
      // Define the constructor "products"
      // Initialize it with an empty array to store products.
    }
  
    // Method to return the array of products
    getProducts() {
      return this.products;
    }
  
    // Method to add a product to the array
    addProduct(title, description, price, thumbnail, code, stock) {
      // Validate that all fields are required
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.log("All fields are required");
        return;
      }
    
      // Validate that the "code" field is not repeated
      if (this.products.some((product) => product.code === code)) {
        console.log("Product code already exists");
        return;
      }
    
      const newProduct = {
        id: this.nextProductId,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
    
      this.products.push(newProduct);
      this.nextProductId++;
    
      console.log("Product added successfully");
    }node 
  
    // Method to find a product by its id
    getProductById(idProduct) {
      const product = this.products.find((product) => product.id === idProduct);
  
      if (product) {
        console.log("Product found:", product);
      } else {
        console.log("Product not found");
        return null; //Return null if product is not found
      }
    }
  }

  // USAGE EXAMPLE
  
  const AdminProduct = new ProductManager();
  
  AdminProduct.addProduct("Regla", "transparente", 80, "sin imagen", "ab154", 36);
  AdminProduct.addProduct("Lapiz", "azul", 30, "sin imagen", "ab155", 15);
  AdminProduct.addProduct("Cuaderno", "tapa dura", 120, "sin imagen", "ab156", 27);
  
  AdminProduct.getProductById(1);
  AdminProduct.getProductById(2);
  AdminProduct.getProductById(3);
  AdminProduct.getProductById(4); // Product not found
  console.log(AdminProduct.getProducts());

  