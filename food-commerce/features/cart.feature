Feature: Carrinho de Compras
  Para garantir que os clientes possam gerenciar seus pedidos
  Como cliente
  Eu quero adicionar, remover e ajustar itens no carrinho

Scenario: Adicionar um item ao carrinho
  Given que o carrinho está vazio
  When eu adicionar "Big Carne" ao carrinho
  Then o carrinho deve conter 1 item "Big Carne"

Scenario: Remover um item do carrinho
  Given que o carrinho contém 1 item "Big Carne"
  When eu remover "Big Carne" do carrinho
  Then o carrinho deve estar vazio
