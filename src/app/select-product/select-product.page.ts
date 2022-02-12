import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product.model';
import { SelectProductService } from '../service/product/select-product.service';
import transformProductImageUrl from '../utils/transformImageUrl';


@Component({
  selector: 'app-select-product',
  templateUrl: './select-product.page.html',
  styleUrls: ['./select-product.page.scss'],
})
export class SelectProductPage implements OnInit {
  productLst: Product[];
  routeFlag = '';
  typeFlag = '';
  valorTotal = 0;
  loading = false;

  constructor(
    private selectProductSvc: SelectProductService,
    public router: Router,
    public actRoute: ActivatedRoute,
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.routeFlag = this.actRoute.snapshot.paramMap.get('sizeid');
    this.typeFlag = this.actRoute.snapshot.paramMap.get('product-sel');

    this.getAllProducts(this.routeFlag, this.typeFlag);

    this.valorTotal = 0;
  }

  transformImageUrl(imageUrl: string): string {
    return imageUrl.slice(0, 4) === 'http' ? imageUrl : transformProductImageUrl(imageUrl);
  }

  getAllProducts(size: string, type: string) {
    this.loading = true;
    if (type === 'marmita') {
      this.selectProductSvc.getAllProductsMarmita(size).subscribe(
        result => {
          this.productLst = result;
          this.loading = false;
        },
        err => {
          console.log('Não foi possivel pegar a lista de produtos');
          this.loading = false;
        });
    }
    else if (type === 'bebidas') {
      this.selectProductSvc.getAllProductsBebida().subscribe(
        result => {
          this.productLst = result;
          this.loading = false;
        },
        err => {
          console.log('Não foi possivel pegar a lista de produtos');
          this.loading = false;
        });
    }
  }

  getAddToCart(product: Product) {
    if (!product.isChecked) {
      this.valorTotal += product.price;
    } else {
      this.valorTotal -= product.price;
    }
  }

  isSelectProduct(): boolean {
    return this.productLst.find(product => product.isChecked) ? true : false;
  }

  goToCart() {
    const productsAdd: Product[] = [];
    this.productLst.forEach(item => {
      if (item.isChecked === true) {
        productsAdd.push(item);
      }
    });
    if (productsAdd.length > 0) {
      productsAdd.forEach(item => item.meet_options = []);
      localStorage.setItem('lst', JSON.stringify(productsAdd));
      localStorage.valorTotal = this.valorTotal;
      this.router.navigate(['/cart']);
    }
  }

}
