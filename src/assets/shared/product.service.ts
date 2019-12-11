import { ProductModel } from './product.model';

export class ProductService {  
    productsList: ProductModel[] = [
            new ProductModel (
                "test 1",
                "Granites",
                "Red",
                "Norway",
                "/assets/resources/images/products/granite-products/granite-blocks.jpg"            
            ),
            new ProductModel (
                "test 2",
                "Granites",
                "Red",
                "Norway",
                "/assets/resources/images/products/granite-products/granite-blocks.jpg" )           
            ,
            new ProductModel (
                "test 3",
                "Granites",
                "Red",
                "Norway",
                "/assets/resources/images/products/granite-products/granite-blocks.jpg"            
            ),
            new ProductModel (
                "Manglore Granite",
                "Marbles",
                "Blue",
                "North India",
                "/assets/resources/images/products/granite-products/granite-blocks.jpg"            
            ),
            new ProductModel (
                "Chennai Granite",
                "Marbles",
                "Blue",
                "North India",
                "/assets/resources/images/products/granite-products/granite-blocks.jpg"            
            ),
            new ProductModel (
                "Rajasthan Granite",
                "Marbles",
                "Blue",
                "North India",
                "/assets/resources/images/products/granite-products/granite-blocks.jpg"            
            ),
            new ProductModel (
                "Manglore Granite",
                "Engineering Stone",
                "Brown",
                "South India",
                "/assets/resources/images/products/granite-products/granite-blocks.jpg"            
            ),
            new ProductModel (
                "Chennai Granite",
                "Engineering Stone",
                "Brown",
                "South India",
                "/assets/resources/images/products/granite-products/granite-blocks.jpg"            
            ),
            new ProductModel (
                "Rajasthan Granite",
                "Engineering Stone",
                "Brown",
                "South India",
                "/assets/resources/images/products/granite-products/granite-blocks.jpg"            
            ),
            new ProductModel (
                "Manglore Granite",
                "Peeble & Cobble",
                "Orange",
                "Brazil",
                "/assets/resources/images/products/granite-products/granite-blocks.jpg"            
            ),
            new ProductModel (
                "Chennai Granite",
                "Peeble & Cobble",
                "Orange",
                "Brazil",
                "/assets/resources/images/products/granite-products/granite-blocks.jpg"            
            ),
            new ProductModel (
                "Rajasthan Granite",
                "Peeble & Cobble",
                "Orange",
                "Brazil",
                "/assets/resources/images/products/granite-products/granite-blocks.jpg"            
            )
        ];

    getProducts() {
        return this.productsList.slice();
    }
}
        
    
