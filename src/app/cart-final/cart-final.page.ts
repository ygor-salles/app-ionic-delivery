import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from '../models/pedido.model';
import { OrderProduct } from './../models/orderProduct.model';

@Component({
  selector: 'app-cart-final',
  templateUrl: './cart-final.page.html',
  styleUrls: ['./cart-final.page.scss'],
})
export class CartFinalPage implements OnInit {
  listaProdutos: OrderProduct[] = [];
  valorTotal = 0;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.initPage();
  }

  initPage() {
    const carrinho: Pedido = JSON.parse(localStorage.getItem('lstAllProducts'));
    this.listaProdutos = carrinho.products;
    this.valorTotal += JSON.parse(localStorage.getItem('valorTotal'));
  }

  remove(p: OrderProduct, i: number) {
    this.listaProdutos.splice(i, 1);
    this.valorTotal -= p.total_item;
    localStorage.setItem('lst', JSON.stringify(this.listaProdutos));
    localStorage.setItem('valorTotal', JSON.stringify(this.valorTotal));
  }

  goToConfirm() {
    localStorage.valorTotal = this.valorTotal;
    if (this.valorTotal !== 0) {
      this.router.navigateByUrl('/cart-confirm');
    } else {
      console.log('error');
    }
  }

}
