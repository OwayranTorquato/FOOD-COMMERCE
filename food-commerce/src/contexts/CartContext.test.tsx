// src/contexts/CartContext.test.tsx
import React from 'react';
import { renderHook, act } from '@testing-library/react';
import { CartProvider, CartContext } from './CartContext';
import { SnackData } from '../interfaces/SnackData';
import { toast } from 'react-toastify';

// Mock do React Router DOM para `useNavigate`
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

// Mock do Toastify para evitar chamadas reais durante os testes
jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

describe('CartContext', () => {
  // Mock de um snack inicial para os testes
  const snackExample: SnackData = { 
    id: 4,
    name: 'Big Carne',
    price: 18.0,
    snack: 'burger',
    description: 'Uma carne artesanal de primeira qualidade.',
    image: 'https://i.imgur.com/bF8EdBb.jpg',
  };

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <CartProvider>{children}</CartProvider>
  );

  it('should add a snack to the cart', () => {
    const { result } = renderHook(() => React.useContext(CartContext), { wrapper });

    act(() => {
      result.current.addSnackIntoCart(snackExample);
    });

    expect(result.current.cart.length).toBe(1);
    expect(result.current.cart[0].name).toBe('Big Carne');
    expect(result.current.cart[0].quantity).toBe(1);
    expect(toast.success).toHaveBeenCalledWith(`🍔 Big Carne adicionado nos pedidos!`);
  });

  it('should increment the quantity of a snack already in the cart', () => {
    const { result } = renderHook(() => React.useContext(CartContext), { wrapper });

    // Primeiro, adicionar o snack ao carrinho
    act(() => {
      result.current.addSnackIntoCart(snackExample);
    });

    // Incrementar a quantidade do snack
    act(() => {
      result.current.snackCartIncrement(result.current.cart[0]);
    });

    expect(result.current.cart[0].quantity).toBe(2);
    expect(result.current.cart[0].subtotal).toBe(36); // 18 * 2
  });
  it('should remove a snack from the cart', () => {
    const { result } = renderHook(() => React.useContext(CartContext), { wrapper });

    // Adicionar o snack ao carrinho
    act(() => {
      result.current.addSnackIntoCart(snackExample);
    });

    // Remover o snack
    act(() => {
      result.current.removeSnackFromCart(result.current.cart[0]);
    });

    expect(result.current.cart.length).toBe(0);
  });

  it('should navigate to payment on confirmOrder', () => {
    const { result } = renderHook(() => React.useContext(CartContext), { wrapper });

    // Adicionar o snack ao carrinho antes de confirmar o pedido
    act(() => {
      result.current.addSnackIntoCart(snackExample);
    });

    // Chama a função confirmOrder
    act(() => {
      result.current.confirmOrder();
    });

    // Verificar se o `navigate` foi chamado corretamente
    expect(result.current.cart.length).toBeGreaterThan(0); // Verificar se o carrinho não está vazio
    expect(mockNavigate).toHaveBeenCalledWith('/payment'); // Verificar se a navegação foi feita
  });
});
