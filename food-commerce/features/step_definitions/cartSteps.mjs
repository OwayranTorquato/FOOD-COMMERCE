import { Given, When, Then } from '@cucumber/cucumber';
import assert from 'assert';

let cart = [];

Given('que o carrinho está vazio', function () {
  cart = [];
});

When('eu adicionar {string} ao carrinho', function (item) {
  cart.push({ name: item, quantity: 1 });
});

Then('o carrinho deve conter 1 item {string}', function (item) {
  assert.equal(cart.length, 1);
  assert.equal(cart[0].name, item);
});

Given('que o carrinho contém 1 item {string}', function (item) {
  cart = [{ name: item, quantity: 1 }];
});

When('eu remover {string} do carrinho', function (item) {
  cart = cart.filter(cartItem => cartItem.name !== item);
});

Then('o carrinho deve estar vazio', function () {
  assert.equal(cart.length, 0);
});
