class Produto {
  constructor() {
    this.id = 1;
    this.productList = [];
  }
  add() {
    event.preventDefault();
    let product = this.readData();
    let validate = this.validate(product);

    if (validate) {
      this.saveData(product);
      console.log(this.productList);
    }
    this.listInTable();
    this.clearInputs();
  }

  readData() {
    let product = {};

    product.id = this.id;
    product.nome = document.getElementById("nome").value;
    product.quantidade = document.getElementById("quantidade").value;
    product.classe = document.getElementById("classe").value;

    return product;
  }
  validate(product) {
    let msg = "";
    if (product.nome == "") {
      msg += "preencha o nome";
    }
    if (product.quantidade == "") {
      msg += "preencha o quantidade";
    }
    if (product.classe == "") {
      msg += "preencha a classe";
    }
    if (msg != "") {
      alert(msg);
      return false;
    }
    return true;
  }
  saveData(product) {
    this.productList.push(product);
    this.id++;
  }
  listInTable() {
    let tbody = document.getElementById("tbody");
    tbody.innerText = "";

    for (let i = 0; i < this.productList.length; i++) {
      let tr = tbody.insertRow();

      let tdId = tr.insertCell();
      let tdNome = tr.insertCell();
      let tdquantidade = tr.insertCell();
      let tdclasse = tr.insertCell();
      let tdAct = tr.insertCell();

      tdId.innerText = this.productList[i].id;
      tdNome.innerText = this.productList[i].nome;
      tdquantidade.innerText = this.productList[i].quantidade;
      tdclasse.innerText = this.productList[i].classe;

      let trashIcon = document.createElement("i");
      trashIcon.setAttribute(
        "onclick",
        `produto.deleteProduct(${this.productList[i].id})`
      );

      trashIcon.classList.add("bi");
      trashIcon.classList.add("bi-trash-fill");

      tdAct.appendChild(trashIcon);
    }
  }

  clearInputs() {
    document.getElementById("nome").value = "";
    document.getElementById("quantidade").value = "";
    document.getElementById("classe").value = "";
  }
  deleteProduct(id) {
    let tbody = document.getElementById("tbody");

    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i].id == id) {
        this.productList.splice(i, 1);
        tbody.deleteRow(i);
      }
    }
    alert("produto deletado com sucesso! :)");
  }
}
const produto = new Produto();
