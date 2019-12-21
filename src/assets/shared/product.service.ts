import { Injectable, OnInit, EventEmitter, Output } from '@angular/core';
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
            new ProductModel ( "Royal Dream", "Engineering Marbles", "-", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Royal-Dream.jpeg" ),
            new ProductModel ( "Amarillo Gold", "Engineering Marbles", "Gold", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Amarillo-Gold.jpg" ),
            new ProductModel ( "Anthracite", "Engineering Marbles", "-", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Anthracite.jpg" ),
            new ProductModel ( "Arctic White", "Engineering Marbles", "White", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Arctic-White.jpg" ),
            new ProductModel ( "Avlanche", "Engineering Marbles", "-", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Avlanche.jpg" ),
            new ProductModel ( "Azul", "Engineering Marbles", "-", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Azul.jpg" ),
            new ProductModel ( "Bianco Desert", "Engineering Marbles", "-", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Bianco-Desert.jpg" ),
            new ProductModel ( "Bianco Maple", "Engineering Marbles", "-", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Bianco-Maple.jpg" ),
            new ProductModel ( "Black Stardust", "Engineering Marbles", "Black", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Black-Stardust.jpg" ),
            new ProductModel ( "Brown Flower", "Engineering Marbles", "Brown", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Brown-Flower.jpg" ),
            new ProductModel ( "Burgundy Maple", "Engineering Marbles", "Burgundy", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Burgundy-Maple.jpg" ),
            new ProductModel ( "Coasta Beige", "Engineering Marbles", "Beige", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Coasta-Beige.jpg" ),
            new ProductModel ( "Coasta Ivory", "Engineering Marbles", "Ivory", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Coasta-Ivory.jpg" ),
            new ProductModel ( "Coasta Maple", "Engineering Marbles", "Maple", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Coasta-Maple.jpg" ),
            new ProductModel ( "Cosmus Black", "Engineering Marbles", "Black", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Cosmus-Black.jpg" ),
            new ProductModel ( "Cosmus Gold", "Engineering Marbles", "Gold", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Cosmus-Gold.jpg" ),
            new ProductModel ( "Emperador", "Engineering Marbles", "-", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Emperador.jpg" ),
            new ProductModel ( "Essel Brown", "Engineering Marbles", "Brown", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Essel-Brown.jpg" ),
            new ProductModel ( "Galaxy", "Engineering Marbles", "-", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Galaxy.jpg" ),
            new ProductModel ( "Galaxy Glitter", "Engineering Marbles", "Glitter", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Galaxy-Glitter.jpg" ),
            new ProductModel ( "Ginger Tan", "Engineering Marbles", "Tan", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Ginger-Tan.jpg" ),
            new ProductModel ( "Gold Glitter", "Engineering Marbles", "Gold", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Gold-Glitter.jpg" ),
            new ProductModel ( "Graphite Grey", "Engineering Marbles", "Grey", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Graphite-Grey.jpg" ),
            new ProductModel ( "Indiano", "Engineering Marbles", "-", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/indiano.jpg" ),
            new ProductModel ( "Island", "Engineering Marbles", "-", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Island.jpg" ),
            new ProductModel ( "Ming Onyx", "Engineering Marbles", "-", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Ming-Onyx.jpg" ),
            new ProductModel ( "Moon Onyx", "Engineering Marbles", "-", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Moon-Onyx.jpg" ),
            new ProductModel ( "New Mud Pie", "Engineering Marbles", "-", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/New-Mud-Pie.jpg" ),
            new ProductModel ( "Oasis", "Engineering Marbles", "-", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Oasis.jpg" ),
            new ProductModel ( "Oyster Beige", "Engineering Marbles", "Beige", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Oyster-Beige.jpg" ),
            new ProductModel ( "Paloma White", "Engineering Marbles", "White", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Paloma-White.jpg" ),
            new ProductModel ( "Polar Stone", "Engineering Marbles", "-", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Polar-Stone.jpg" ),
            new ProductModel ( "Red Stardust", "Engineering Marbles", "Red", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Red-Stardust.jpg" ),
            new ProductModel ( "Sahara Storm", "Engineering Marbles", "-", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/sahara-storm.jpg" ),
            new ProductModel ( "Samoa", "Engineering Marbles", "-", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Samoa.jpg" ),
            new ProductModel ( "Samper White", "Engineering Marbles", "White", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Samper-White.jpg" ),
            new ProductModel ( "Sapphire Blue", "Engineering Marbles", "Blue", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Sapphire-Blue.jpg" ),
            new ProductModel ( "Sky Stardust", "Engineering Marbles", "-", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Sky-Stardust.jpg" ),
            new ProductModel ( "Stardust Marble", "Engineering Marbles", "-", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Stardust-Marble.jpg" ),
            new ProductModel ( "Statuario", "Engineering Marbles", "-", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Statuario.jpg" ),
            new ProductModel ( "Titon Beige", "Engineering Marbles", "Beige", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/titon-beige.jpg" ),
            new ProductModel ( "Titon Bristal", "Engineering Marbles", "Brista", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/titon-bristal.jpg" ),
            new ProductModel ( "Titon Brown", "Engineering Marbles", "Brown", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/titon-brown.jpg" ),
            new ProductModel ( "Tosco Fiero", "Engineering Marbles", "-", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Tosco-Fiero.jpg" ),
            new ProductModel ( "Vanila Wicker", "Engineering Marbles", "Vanila", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Vanila-Wicker.jpg" ),
            new ProductModel ( "Venus White", "Engineering Marbles", "White", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/venus-white.jpg" ),
            new ProductModel ( "White Jade", "Engineering Marbles", "White", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/White-Jade.jpg" ),
            new ProductModel ( "Wind Flower", "Engineering Marbles", "White", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Wind-Flower.jpg" ),
            new ProductModel ( "Winter White", "Engineering Marbles", "White", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Winter-White.jpg" ),
            new ProductModel ( "Solar White", "Engineering Marbles", "White", "Composite Marble", "/assets/resources/images/products/engineering-marbles/composite-marble/Solar-White.png" ),
            new ProductModel ( "Alps White", "Engineering Marbles", "White", "Quartz Stone", "/assets/resources/images/products/engineering-marbles/quartz-stone/alps-white.jpg" ),
            new ProductModel ( "Amelia", "Engineering Marbles", "-", "Quartz Stone", "/assets/resources/images/products/engineering-marbles/quartz-stone/Amelia.jpg" ),
            new ProductModel ( "Amezona", "Engineering Marbles", "-", "Quartz Stone", "/assets/resources/images/products/engineering-marbles/quartz-stone/amezona.jpg" ),
            new ProductModel ( "Antique White", "Engineering Marbles", "White", "Quartz Stone", "/assets/resources/images/products/engineering-marbles/quartz-stone/Antique-White.jpg" ),
            new ProductModel ( "Arabian Stone", "Engineering Marbles", "-", "Quartz Stone", "/assets/resources/images/products/engineering-marbles/quartz-stone/Arabian-Stone.jpg" ),
            new ProductModel ( "Arizona", "Engineering Marbles", "-", "Quartz Stone", "/assets/resources/images/products/engineering-marbles/quartz-stone/Arizona.jpg" ),
            new ProductModel ( "Astone Beige", "Engineering Marbles", "Beige", "Quartz Stone", "/assets/resources/images/products/engineering-marbles/quartz-stone/Astone-Beige.jpg" ),
            new ProductModel ( "Atlanta", "Engineering Marbles", "-", "Quartz Stone", "/assets/resources/images/products/engineering-marbles/quartz-stone/Atlanta.jpg" ),
            new ProductModel ( "Bianco Cristallo", "Engineering Marbles", "-", "Quartz Stone", "/assets/resources/images/products/engineering-marbles/quartz-stone/Bianco-Cristallo.jpg" ),
            new ProductModel ( "Camelia", "Engineering Marbles", "-", "Quartz Stone", "/assets/resources/images/products/engineering-marbles/quartz-stone/Camelia.jpg" ),
            new ProductModel ( "Carara", "Engineering Marbles", "-", "Quartz Stone", "/assets/resources/images/products/engineering-marbles/quartz-stone/Carara.jpg" ),
            new ProductModel ( "Cognizant", "Engineering Marbles", "-", "Quartz Stone", "/assets/resources/images/products/engineering-marbles/quartz-stone/Cognizant.png" ),
            new ProductModel ( "Dantia", "Engineering Marbles", "-", "Quartz Stone", "/assets/resources/images/products/engineering-marbles/quartz-stone/dantia.jpg" ),
            new ProductModel ( "Emperdor Brown ", "Engineering Marbles", "Brown", "Quartz Stone", "/assets/resources/images/products/engineering-marbles/quartz-stone/Emperdor-Brown.jpg" ),
            new ProductModel ( "French Brown Marble ", "Engineering Marbles", "Brown", "Quartz Stone", "/assets/resources/images/products/engineering-marbles/quartz-stone/French-Brown-Marble.jpg" ),
            new ProductModel ( "Gardenia ", "Engineering Marbles", "-", "Quartz Stone", "/assets/resources/images/products/engineering-marbles/quartz-stone/GARDENIA.jpg" ),
            new ProductModel ( "Glacier Epitoma ", "Engineering Marbles", "-", "Quartz Stone", "/assets/resources/images/products/engineering-marbles/quartz-stone/glacier_epitoma.jpg" ),
            new ProductModel ( "Honey Brinjal", "Engineering Marbles", "-", "Quartz Stone", "/assets/resources/images/products/engineering-marbles/quartz-stone/Honey-Brinjal.jpg" ),
            new ProductModel ( "Marmo Gres", "Engineering Marbles", "-", "Quartz Stone", "/assets/resources/images/products/engineering-marbles/quartz-stone/Marmo-Gres.jpg" ),
            new ProductModel ( "Marquina Flower", "Engineering Marbles", "-", "Quartz Stone", "/assets/resources/images/products/engineering-marbles/quartz-stone/marquina-flower.jpg" ),
            new ProductModel ( "Nakardo", "Engineering Marbles", "-", "Quartz Stone", "/assets/resources/images/products/engineering-marbles/quartz-stone/nakardo.jpg" )
        ];
    productsList4: ProductModel[] = [
        new ProductModel ( "Antique Sandstone Cobble", "Pebble and Cobble", "-", "Cobble", "/assets/resources/images/products/pebble-and-cobble/Antique-Sandstone-Cobble.jpg" ),
        new ProductModel ( "Black Pebble Stone", "Pebble and Cobble", "Black", "Pebble", "/assets/resources/images/products/pebble-and-cobble/Black-Pebble-Stone.jpg" ),
        new ProductModel ( "Coffee White Pebbles", "Pebble and Cobble", "White", "Pebble", "/assets/resources/images/products/pebble-and-cobble/Coffee-White-Pebbles.jpg" ),
        new ProductModel ( "Grey and Pink Cobble Blocks", "Pebble and Cobble", "Grey and Pink", "Cobble", "/assets/resources/images/products/pebble-and-cobble/Grey-and-Pink-Cobble-Blocks.jpg" ),
        new ProductModel ( "Natural Cobble Stone", "Pebble and Cobble", "-", "Cobble", "/assets/resources/images/products/pebble-and-cobble/Natural-Cobblestone.jpg" ),
        new ProductModel ( "Natural Pebbles Stone", "Pebble and Cobble", "-", "Pebble", "/assets/resources/images/products/pebble-and-cobble/Natural-Pebbles-Stone.jpeg" ),
        new ProductModel ( "Rainbow Pebble Stone", "Pebble and Cobble", "Rainbow", "Pebble", "/assets/resources/images/products/pebble-and-cobble/Rainbow-Pebblestone.jpg" ),
        new ProductModel ( "White Pebble Stone", "Pebble and Cobble", "White", "Pebble", "/assets/resources/images/products/pebble-and-cobble/White-Pebble-Stone.jpg" )
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