import { ProductModel } from './product.model';

export class ProductService {
    private products: ProductModel[] = [
        new ProductModel(' Name', 'This is sample', 'sfdsdfs'),
        new ProductModel(' Name', 'This is sample', 'sfdsdfs')
    ]
}