import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ProductModel } from './product.model';

@Injectable({providedIn:'root'})

export class ProductService implements OnInit {

    constructor() {}    
    ngOnInit() {
    }
    productsList1: ProductModel[] = [
            new ProductModel ( "Chocolate Pearl Granite", "Granites", "Chocolate", "Brazil", "/assets/resources/images/products/granites/Brazil/Chocolate-Pearl-Granite.jpg" ),
            new ProductModel ( "Labradorite Granite", "Granites", "Red", "Brazil", "/assets/resources/images/products/granites/Brazil/Labradorite-Granite.jpg" ),
            new ProductModel ( "Lemurian Blue Granite", "Granites", "Blue", "Brazil", "/assets/resources/images/products/granites/Brazil/Lemurian-Blue-Granite.jpg" ),
            new ProductModel ( "Volga Blue Granite", "Granites", "Blue", "Brazil", "/assets/resources/images/products/granites/Brazil/Volga-Blue-Granite.jpg" ),
            new ProductModel ( "Apple Green Granite ", "Granites", "Apple Green", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Apple-Green-Granite.jpg" ),
            new ProductModel ( "Bala Flower Granite", "Granites", "Red", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Bala-Flower-Granite.jpg" ),
            new ProductModel ( "Brown Pearl Granite", "Granites", "Brown", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Brown-Pearl-Granite.jpg" ),
            new ProductModel ( "Caliber Brown Granite", "Granites", "Brown", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Caliber-Brown-Granite.jpg" ),
            new ProductModel ( "Cherry Brown Granite ", "Granites", "Brown", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Cherry-Brown-Granite.jpg" ),
            new ProductModel ( "Fish Brown Granite ", "Granites", "Brown", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Fish-Brown-Granite.jpg"),
            new ProductModel ( "French Brown Granite", "Granites", "Brown", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/French-Brown-Granite.jpg" ),
            new ProductModel ( "G D Brown Granite", "Granites", "Brown", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/G-D-Brown-Granite.jpg"),
            new ProductModel ( "Green Pearl Granite ", "Granites", "Green", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Green-Pearl-Granite.jpg"),
            new ProductModel ( "Honey Brown Granite", "Granites", "Brown", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Honey-Brown-Granite.jpg" ),
            new ProductModel ( "Icy Blue Granite", "Granites", "Blue", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Icy-Blue-Granite.jpg" ),
            new ProductModel ( "Jhansi Red Granite", "Granites", "Red", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Jhansi-Red-Granite.jpg" ),
            new ProductModel ( "Lakha Red Granite", "Granites", "Red", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Lakha-Red-Granite.jpg" ),
            new ProductModel ( "Majestic Brown Granite", "Granites", "Brown", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Majestic_Brown_Granite.jpg" ),
            new ProductModel ( "Merry Gold Granite ", "Granites", "Gold", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Merry-Gold-Granite.jpg" ),
            new ProductModel ( "Nasoli Gold Granite  ", "Granites", "Gold", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Nasoli-Gold-Granite.jpg" ),
            new ProductModel ( "Nosra Gold Granite", "Granites", "Gold", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Nosra-Gold-Granite.jpg" ),
            new ProductModel ( "Ocean Pearl Granite  ", "Granites", "Pearl", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Ocean-Pearl-Granite.jpg" ),
            new ProductModel ( "P White Granite", "Granites", "White", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/P-White-Granite.jpg" ),
            new ProductModel ( "Rajashree Red Granite", "Granites", "Red", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Rajashree-Red-Granite.jpg" ),
            new ProductModel ( "Rolite Brown Granite", "Granites", "Brown", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Rolite-Brown-Granite.jpg" ),
            new ProductModel ( "Rosy Pink Granite", "Granites", "Pink", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Rosy-Pink-Granite.jpg" ),
            new ProductModel ( "Royal Brown Granite", "Granites", "Brown", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Royal-Brown-Granite.jpg" ),
            new ProductModel ( "Royal Cream Granite", "Granites", "Cream", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Royal-Cream-Granite.jpg" ),
            new ProductModel ( "Royal Pink Granite", "Granites", "Pink", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Royal-Pink-Granite.jpg" ),
            new ProductModel ( "Z Brown Granite", "Granites", "Brown", "North India", "/assets/resources/images/products/granites/North-Indian-Granites/Z-Brown-Granite.jpg" ),
            new ProductModel ( "Black Pearl Granite", "Granites", "Black", "Norway", "/assets/resources/images/products/granites/Norway/Black-Pearl-Granite.jpg" ),
            new ProductModel ( "Blue Pearl Granite", "Granites", "Blue", "Norway", "/assets/resources/images/products/granites/Norway/Blue-Pearl-Granite.jpg" ),
            new ProductModel ( "Brown Pearl Granite", "Granites", "Brown", "Norway", "/assets/resources/images/products/granites/Norway/Brown-Pearl-Granite.jpg" ),
            new ProductModel ( "Adhunik Brown Granite", "Granites", "Brown", "South India", "/assets/resources/images/products/granites/South-Indian-Granites/Adhunik-Brown-Granite.jpg" ),
            new ProductModel ( "Antique Fantasy Granite", "Granites", "-", "South India", "/assets/resources/images/products/granites/South-Indian-Granites/Antique_Fantasy_Granite.jpg" ),
            new ProductModel ( "Arcateak Granite", "Granites", "-", "South India", "/assets/resources/images/products/granites/South-Indian-Granites/Arcateak-Granite.jpg" ),
            new ProductModel ( "Asian Sky Granite", "Granites", "-", "South India", "/assets/resources/images/products/granites/South-Indian-Granites/Asian-Sky-Granite.jpg" ),
            new ProductModel ( "Asian Top Granite", "Granites", "-", "South India", "/assets/resources/images/products/granites/South-Indian-Granites/Asian-Top-Granite.jpg" ),
            new ProductModel ( "Baltic Rain Granite", "Granites", "-", "South India", "/assets/resources/images/products/granites/South-Indian-Granites/Baltic-Rain-Granite.jpg" ),
            new ProductModel ( "Black Pearl Granite", "Granites", "Black", "South India", "/assets/resources/images/products/granites/South-Indian-Granites/Black-Pearl-Granite.jpg" ),
            new ProductModel ( "Brown Cateyes Granite", "Granites", "Brown", "South India", "/assets/resources/images/products/granites/South-Indian-Granites/Brown-Cateyes-Granite.jpg" ),
            new ProductModel ( "Coffee Brown Granite", "Granites", "Brown", "South India", "/assets/resources/images/products/granites/South-Indian-Granites/Coffee-Brown-Granite.jpg" ),
            new ProductModel ( "Diamond fall", "Granites", "-", "South India", "/assets/resources/images/products/granites/South-Indian-Granites/Diamond-fall.jpg" ),
            new ProductModel ( "Export Black Granite", "Granites", "Black", "South India", "/assets/resources/images/products/granites/South-Indian-Granites/Export-Black-Granite.jpg" ),
            new ProductModel ( "Galaxy Black Granite", "Granites", "Black", "South India", "/assets/resources/images/products/granites/South-Indian-Granites/Galaxy-Black-Granite.jpg" ),
            new ProductModel ( "Golden Summer Granite", "Granites", "Gold", "South India", "/assets/resources/images/products/granites/South-Indian-Granites/Golden_Summer-Granite.jpg" ),
            new ProductModel ( "Hassan Green Granite", "Granites", "Green", "South India", "/assets/resources/images/products/granites/South-Indian-Granites/Hassan-Green-Granite.jpg" ),
            new ProductModel ( "Honey Brown Granite", "Granites", "Brown", "South India", "/assets/resources/images/products/granites/South-Indian-Granites/Honey-Brown-Granite.jpg" ),
            new ProductModel ( "Ivory Beauty Granite", "Granites", "Ivory", "South India", "/assets/resources/images/products/granites/South-Indian-Granites/Ivory-Beauty-Granite.jpg" ),
            new ProductModel ( "K Black Granite", "Granites", "Black", "South India", "/assets/resources/images/products/granites/South-Indian-Granites/K-Black-Granite.jpg" ),
            new ProductModel ( "Leopard Skin Granite", "Granites", "-", "South India", "/assets/resources/images/products/granites/South-Indian-Granites/leopard-skin-granite.jpg" ),
            new ProductModel ( "Maple Ice Granite", "Granites", "-", "South India", "/assets/resources/images/products/granites/South-Indian-Granites/Maple-Ice-Granite.jpg" ),
            new ProductModel ( "Midnight Granite", "Granites", "-", "South India", "/assets/resources/images/products/granites/South-Indian-Granites/Midnight-Granite.jpg" ),
            new ProductModel ( "Moon Valley Granite", "Granites", "-", "South India", "/assets/resources/images/products/granites/South-Indian-Granites/Moon-Valley-Granite.jpg" ),
            new ProductModel ( "Paradiso Green", "Granites", "Green", "South India", "/assets/resources/images/products/granites/South-Indian-Granites/Paradiso-Green.jpg" ),
            new ProductModel ( "Raw Silk Ivory Granite", "Granites", "Ivory", "South India", "/assets/resources/images/products/granites/South-Indian-Granites/Raw-Silk-Ivory-Granite.jpg" ),
            new ProductModel ( "Romantic Red Granite", "Granites", "Red", "South India", "/assets/resources/images/products/granites/South-Indian-Granites/Romantic-Red-Granite.jpg" ),
            new ProductModel ( "Ruby Red Granite", "Granites", "Red", "South India", "/assets/resources/images/products/granites/South-Indian-Granites/Ruby-Red-Granite.jpg" ),
            new ProductModel ( "Sadar Ali White Granite", "Granites", "White", "South India", "/assets/resources/images/products/granites/South-Indian-Granites/Sadar-Ali-White-Granite.jpg" ),
            new ProductModel ( "Seera Grey Granite", "Granites", "Grey", "South India", "/assets/resources/images/products/granites/South-Indian-Granites/Seera-Grey-Granite.jpg" ),
            new ProductModel ( "Steel Grey Granite", "Granites", "Grey", "South India", "/assets/resources/images/products/granites/South-Indian-Granites/Steel-Grey-Granite.jpg" ),
            new ProductModel ( "Strawberry Granite", "Granites", "Strawberry", "South India", "/assets/resources/images/products/granites/South-Indian-Granites/Strawberry-Granite.jpg" ),
            new ProductModel ( "Tan Brown Granite", "Granites", "Brown", "South India", "/assets/resources/images/products/granites/South-Indian-Granites/Tan-Brown-Granite.jpg" ),
            new ProductModel ( "Telephone Black Granite", "Granites", "Black", "South India", "/assets/resources/images/products/granites/South-Indian-Granites/Tan-Brown-Granite.jpg" ),
            new ProductModel ( "Thunderwood Brown Granite", "Granites", "Brown", "South India", "/assets/resources/images/products/granites/South-Indian-Granites/Thunderwood-Brown-Granite.jpg" ),
            new ProductModel ( "Tigerato Granite", "Granites", "-", "South India", "/assets/resources/images/products/granites/South-Indian-Granites/Tigerato-Granite.jpg" ),
            new ProductModel ( "Titanium Granite", "Granites", "-", "South India", "/assets/resources/images/products/granites/South-Indian-Granites/Titanium-Granite.jpg" )
        ];
    productsList2: ProductModel[] = [
            new ProductModel ( "Baikal Marble", "Marbles", "-", "South India", "/assets/resources/images/products/Marble-All-South-Indian/Baikal-Marble.jpg" ),
            new ProductModel ( "Belize Marble", "Marbles", "-", "South India", "/assets/resources/images/products/Marble-All-South-Indian/Belize-Marble.jpg" ),
            new ProductModel ( "Brazilian Marble", "Marbles", "-", "South India", "/assets/resources/images/products/Marble-All-South-Indian/Brazilian-Marble.jpg" ),
            new ProductModel ( "Burberry Marble", "Marbles", "-", "South India", "/assets/resources/images/products/Marble-All-South-Indian/Burberry-Marble.jpg" ),
            new ProductModel ( "Crystal Bianco Marble", "Marbles", "-", "South India", "/assets/resources/images/products/Marble-All-South-Indian/Crystal-Bianco-Marble.jpg" ),
            new ProductModel ( "Cygnus Marble", "Marbles", "-", "South India", "/assets/resources/images/products/Marble-All-South-Indian/Cygnus-Marble.jpg" ),
            new ProductModel ( "Milk Rose Marble", "Marbles", "-", "South India", "/assets/resources/images/products/Marble-All-South-Indian/Milk-Rose-Marble.jpg" ),
            new ProductModel ( "Moon Valley Marble", "Marbles", "-", "South India", "/assets/resources/images/products/Marble-All-South-Indian/Moon-Valley-Marble.jpg" ),
            new ProductModel ( "Panama Marble", "Marbles", "-", "South India", "/assets/resources/images/products/Marble-All-South-Indian/Panama-Marble.jpg" ),
            new ProductModel ( "Sparrow Marble", "Marbles", "-", "South India", "/assets/resources/images/products/Marble-All-South-Indian/Sparrow-Marble.jpg" ),
        ];
    productsList3: ProductModel[] = [
            new ProductModel ( "Chocolate Pearl Granite", "Engineering Stone", "Chocolate", "Brazil", "/assets/resources/images/products/granites/Brazil/Chocolate-Pearl-Granite.jpg" ),
            new ProductModel ( "Labradorite Granite", "Engineering Stone", "Red", "Brazil", "/assets/resources/images/products/granites/Brazil/Labradorite-Granite.jpg" ),
            new ProductModel ( "Lemurian Blue Granite", "Engineering Stone", "Blue", "Brazil", "/assets/resources/images/products/granites/Brazil/Lemurian-Blue-Granite.jpg" )
        ];
    productsList4: ProductModel[] = [
            new ProductModel ( "Chocolate Pearl Granite", "Peeble and Cobble", "Chocolate", "Brazil", "/assets/resources/images/products/granites/Brazil/Chocolate-Pearl-Granite.jpg" ),
            new ProductModel ( "Labradorite Granite", "Peeble and Cobble", "Red", "Brazil", "/assets/resources/images/products/granites/Brazil/Labradorite-Granite.jpg" ),
            new ProductModel ( "Lemurian Blue Granite", "Peeble and Cobble", "Blue", "Brazil", "/assets/resources/images/products/granites/Brazil/Lemurian-Blue-Granite.jpg" )
        ];
    getProduct1() {
        return this.productsList1.slice();
    }
    getProduct2() {
        return this.productsList2.slice();
    }
    getProduct3() {
        return this.productsList3.slice();
    }
    getProduct4() {
        return this.productsList4.slice();
    }
    

}