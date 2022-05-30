import { clientes } from "./clientes.js";
import { produtos } from "./produtos.js";

const menu = document.querySelectorAll("[data-action]");
const secClient = document.querySelector("#client");
const secProduct = document.querySelector("#product");
const secOrder = document.querySelector("#order");
const buttonCloseModal = document.querySelectorAll(".form__header > span");
const allModals = document.querySelectorAll(".form");

//modal interaction
const getDataset = (action) => {
    switch (action) {
        case "client":
            return secClient;
        case "product":
            return secProduct;
        case "order":
            return secOrder;
    }
};

const closeAllModals = () => {
    allModals.forEach((item) => {
        item.classList.remove("form-active");
    });
};

menu.forEach((item) => {
    item.addEventListener("click", () => {
        closeAllModals();
        const action = item.dataset.action;
        const modal = getDataset(action);
        modal.classList.add("form-active");
    });
});

buttonCloseModal.forEach((item) => {
    item.addEventListener("click", () => {
        closeAllModals();
    });
});

//Modal client
const formClient = document.querySelector("#formClient");
const buttonForm = document.querySelectorAll(".button__client");
const { inputCodeClient, inputNameClient, inputDateClient } =
    formClient.elements;

let indexClient = 0;
inputCodeClient.value = clientes[indexClient].codCliente;
inputNameClient.value = clientes[indexClient].nomeCliente;
inputDateClient.value = clientes[indexClient].dataCadCli;

formClient.addEventListener("submit", (event) => {
    event.preventDefault();
});

buttonForm.forEach((item) => {
    item.addEventListener("click", () => {
        switch (item.value) {
            case "<":
                if (indexClient == 0) {
                    indexClient = 0;
                    alert("Início dos registros de Clientes");
                } else {
                    indexClient--;
                }
                inputCodeClient.value = clientes[indexClient].codCliente;
                inputNameClient.value = clientes[indexClient].nomeCliente;
                inputDateClient.value = clientes[indexClient].dataCadCli;
                break;

            case ">":
                if (indexClient >= clientes.length - 1) {
                    indexClient = clientes.length - 1;
                    alert("Final dos registros de Clientes");
                } else {
                    indexClient++;
                }
                inputCodeClient.value = clientes[indexClient].codCliente;
                inputNameClient.value = clientes[indexClient].nomeCliente;
                inputDateClient.value = clientes[indexClient].dataCadCli;
                break;

            case "Novo":
                inputCodeClient.value = clientes.length + 1;
                inputNameClient.value = "";
                inputDateClient.value = new Date().toLocaleDateString("pt-Br", {
                    dateStyle: "short",
                });
                indexClient++;
                break;

            case "Salvar":
                const verifyClient = clientes.find((item) => {
                    return item.codCliente == inputCodeClient.value;
                });
                if (verifyClient) {
                    alert("Clique em Novo para inserir um novo cliente");
                } else {
                    clientes.push({
                        codCliente: inputCodeClient.value,
                        nomeCliente: inputNameClient.value,
                        dataCadCli: inputDateClient.value,
                    });
                    alert("Cliente cadastrado com sucesso");
                    indexClient = 0;
                    inputCodeClient.value = clientes[indexClient].codCliente;
                    inputNameClient.value = clientes[indexClient].nomeCliente;
                    inputDateClient.value = clientes[indexClient].dataCadCli;
                }
                break;
        }
    });
});

//Modal product
const formProduct = document.querySelector("#formProduct");
const buttonProduct = document.querySelectorAll(".button__product");
const {
    inputCodeProduct,
    inputDescriptionProduct,
    inputPriceProduct,
    inputAmountProduct,
} = formProduct.elements;

let indexProduct = 0;
inputCodeProduct.value = produtos[indexProduct].codProduto;
inputDescriptionProduct.value = produtos[indexProduct].descProduto;
inputPriceProduct.value = produtos[indexProduct].precoProduto.toLocaleString(
    "pt-BR",
    {
        style: "currency",
        currency: "BRL",
    }
);
inputAmountProduct.value = produtos[indexProduct].qtdEstoqueProd;

formProduct.addEventListener("submit", (event) => {
    event.preventDefault();
});

buttonProduct.forEach((item) => {
    item.addEventListener("click", () => {
        switch (item.value) {
            case "<":
                if (indexProduct == 0) {
                    indexProduct = 0;
                    alert("Início dos registros de Produtos");
                } else {
                    indexProduct--;
                }
                inputCodeProduct.value = produtos[indexProduct].codProduto;
                inputDescriptionProduct.value =
                    produtos[indexProduct].descProduto;
                inputPriceProduct.value = produtos[
                    indexProduct
                ].precoProduto.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                });
                inputAmountProduct.value =
                    produtos[indexProduct].qtdEstoqueProd;
                break;

            case ">":
                if (indexProduct >= produtos.length - 1) {
                    indexProduct = produtos.length - 1;
                    alert("Final dos registros de Clientes");
                } else {
                    indexProduct++;
                }
                inputCodeProduct.value = produtos[indexProduct].codProduto;
                inputDescriptionProduct.value =
                    produtos[indexProduct].descProduto;
                inputPriceProduct.value = produtos[
                    indexProduct
                ].precoProduto.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                });
                inputAmountProduct.value =
                    produtos[indexProduct].qtdEstoqueProd;
                break;

            case "Novo":
                inputCodeProduct.value = produtos.length + 1;
                inputDescriptionProduct.value = "";
                inputPriceProduct.value = "";
                inputAmountProduct.value = "";
                indexProduct++;
                break;

            case "Salvar":
                const verifyProduct = produtos.find((item) => {
                    return (
                        item.codProduto == inputCodeProduct.value ||
                        item.descProduto == inputDescriptionProduct.value
                    );
                });
                if (verifyProduct) {
                    alert("Clique em Novo para inserir um novo Produto");
                } else {
                    produtos.push({
                        codProduto: inputCodeProduct.value,
                        descProduto: inputDescriptionProduct.value,
                        precoProduto: inputPriceProduct.value,
                        qtdEstoqueProd: inputAmountProduct.value,
                    });
                    alert("Produto cadastrado com sucesso");
                    indexProduct = 0;
                    inputCodeProduct.value = produtos[indexProduct].codProduto;
                    inputDescriptionProduct.value =
                        produtos[indexProduct].descProduto;
                    inputPriceProduct.value = produtos[
                        indexProduct
                    ].precoProduto.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    });
                    inputAmountProduct.value =
                        produtos[indexProduct].qtdEstoqueProd;
                }
                break;
        }
    });
});

//Modal order
const formOrder = document.querySelector("#formOrder");
const buttonOrder = document.querySelector("#formOrder > fieldset > button");
const {
    inputCodeClientOrder,
    inputNameClientOrder,
    inputCodeProductOrder,
    inputNameProductOrder,
    inputPriceProductOrder,
    inputquantityOrder,
} = formOrder.elements;
const orderList = [];

inputCodeClientOrder.addEventListener("change", () => {
    inputNameClientOrder.value = clientes.find(
        (item) => item.codCliente == inputCodeClientOrder.value
    ).nomeCliente;
});

inputCodeProductOrder.addEventListener("change", () => {
    inputNameProductOrder.value = produtos.find(
        (item) => item.codProduto == inputCodeProductOrder.value
    ).descProduto;
    inputPriceProductOrder.value = produtos.find(
        (item) => item.codProduto == inputCodeProductOrder.value
    ).precoProduto;
});

buttonOrder.addEventListener("click", (event) => {
    event.preventDefault();
    const verifyOrder = orderList.find((item) => {
        return (
            item.codCliente == inputCodeClientOrder.value &&
            item.codProduto == inputCodeProductOrder.value
        );
    });
    const verifyQuantity = produtos.find((item) => {
        return item.qtdEstoqueProd < inputquantityOrder.value;
    });
    if (verifyOrder) {
        alert("Produto já adicionado");
    } else if (verifyQuantity) {
        alert("Quantidade indisponível");
    } else {
        orderList.push({
            codCliente: inputCodeClientOrder.value,
            nomeCliente: inputNameClientOrder.value,
            codProduto: inputCodeProductOrder.value,
            descProduto: inputNameProductOrder.value,
            precoProduto: inputPriceProductOrder.value,
            qtdProduto: inputquantityOrder.value,
        });
        alert("Produto adicionado com sucesso");
    }

    const clearTable = document.querySelector("#tableOrder > tbody");
    clearTable.innerHTML = "";

    orderList.forEach((item) => {
        const tdCodProduto = document.createElement("td");
        const tdDescProduto = document.createElement("td");
        const tdPrecoProduto = document.createElement("td");
        const tdQtdProduto = document.createElement("td");
        const tdTotalProduto = document.createElement("td");

        tdCodProduto.textContent = item.codProduto;
        tdDescProduto.textContent = item.descProduto;
        tdPrecoProduto.textContent = item.precoProduto;
        tdQtdProduto.textContent = item.qtdProduto;
        tdTotalProduto.textContent = item.precoProduto * item.qtdProduto;

        const tr = document.createElement("tr");
        tr.appendChild(tdCodProduto);
        tr.appendChild(tdDescProduto);
        tr.appendChild(tdPrecoProduto);
        tr.appendChild(tdQtdProduto);
        tr.appendChild(tdTotalProduto);

        const table = document.querySelector("#tableOrder > tbody");
        table.appendChild(tr);
    });

    let totalOrder = 0;
    totalOrder = orderList.reduce((totalOrder, item) => {
        return totalOrder + item.precoProduto * item.qtdProduto;
    }, totalOrder);

    const totalOrderElement = document.querySelector("#totalOrder");
    totalOrderElement.textContent = totalOrder.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
});
