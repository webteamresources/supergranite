import { ProductModel } from './product.model';

export class ProductService {
    private products1: ProductModel[] = [
        new ProductModel('test 1', 'test cate', '../assets/resources/images/products/granite-products/granite-blocks.jpg'),
        new ProductModel('test 1', 'test cate', '../assets/resources/images/products/granite-products/granite-blocks.jpg'),
        new ProductModel('test 1', 'test cate', '../assets/resources/images/products/granite-products/granite-blocks.jpg'),
        new ProductModel('test 1', 'test cate', '../assets/resources/images/products/granite-products/granite-blocks.jpg')
    ]
    getProductsCat1() {
        return this.products1.slice();
    }
    private products2: ProductModel[] = [
        new ProductModel('test 2', 'test cate', '../assets/resources/images/products/granite-products/granite-blocks.jpg'),
        new ProductModel('test 2', 'test cate', '../assets/resources/images/products/granite-products/granite-blocks.jpg'),
        new ProductModel('test 2', 'test cate', '../assets/resources/images/products/granite-products/granite-blocks.jpg'),
        new ProductModel('test 2', 'test cate', '../assets/resources/images/products/granite-products/granite-blocks.jpg')
    ]
    getProductsCat2() {
        return this.products2.slice();
    }
    private products3: ProductModel[] = [
        new ProductModel('test 3', 'test cate', '../assets/resources/images/products/granite-products/granite-blocks.jpg'),
        new ProductModel('test 3', 'test cate', '../assets/resources/images/products/granite-products/granite-blocks.jpg'),
        new ProductModel('test 3', 'test cate', '../assets/resources/images/products/granite-products/granite-blocks.jpg'),
        new ProductModel('test 3', 'test cate', '../assets/resources/images/products/granite-products/granite-blocks.jpg')
    ]
    getProductsCat3() {
        return this.products3.slice();
    }
    private products4: ProductModel[] = [
        new ProductModel('test 4', 'test cate', '../assets/resources/images/products/granite-products/granite-blocks.jpg'),
        new ProductModel('test 4', 'test cate', '../assets/resources/images/products/granite-products/granite-blocks.jpg'),
        new ProductModel('test 4', 'test cate', '../assets/resources/images/products/granite-products/granite-blocks.jpg'),
        new ProductModel('test 4', 'test cate', '../assets/resources/images/products/granite-products/granite-blocks.jpg')
    ]
    getProductsCat4() {
        return this.products4.slice();
    }
}