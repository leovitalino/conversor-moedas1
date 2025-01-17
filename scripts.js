const convertButton = document.querySelector("button");
const selectMoeda = document.querySelector(".select-currency");
const selectCambio = document.querySelector(".select-first");

async function convertValues() {
    const inputValor = document.querySelector(".valor").value;
    const primeiraMoeda = document.querySelector(".currency-value1");
    const segundaMoeda = document.querySelector(".currency-value2");

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL,JPY-BRL,CNY-BRL,ARS-BRL").then(response => response.json())

    const realHoje = 1;
    const dolarHoje = data.USDBRL.bid
    const euroHoje = data.EURBRL.bid
    const libraHoje = data.GBPBRL.bid
    const ieneHoje = data.JPYBRL.bid
    const yuanHoje = data.CNYBRL.bid
    const argHoje = data.ARSBRL.bid 

    if (selectCambio.value == "real") {
        primeiraMoeda.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(inputValor);
    };

    if (selectCambio.value == "dolar") {
        primeiraMoeda.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValor);
    };

    if (selectCambio.value == "euro") {
        primeiraMoeda.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor);
    };

    if (selectCambio.value == "libra") {
        primeiraMoeda.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValor);
    };

    if (selectCambio.value == "iene") {
        primeiraMoeda.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputValor);
    };

    if (selectCambio.value == "yuan") {
        primeiraMoeda.innerHTML = new Intl.NumberFormat("zh-CN", {
            style: "currency",
            currency: "CNY"
        }).format(inputValor);
    };

    if (selectCambio.value == "arg") {
        primeiraMoeda.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputValor);
    };

    /* Sequencia do dolar */

    if (selectMoeda.value == "dolar" && selectCambio.value == "real") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValor / dolarHoje);
    };

    if (selectMoeda.value == "dolar" && selectCambio.value == "dolar") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValor);
    };

    if (selectMoeda.value == "dolar" && selectCambio.value == "euro") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValor * (dolarHoje / euroHoje));
    };

    if (selectMoeda.value == "dolar" && selectCambio.value == "libra") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValor * (dolarHoje / libraHoje));
    };

    if (selectMoeda.value == "dolar" && selectCambio.value == "iene") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValor * (ieneHoje / dolarHoje));
    };

    if (selectMoeda.value == "dolar" && selectCambio.value == "yuan") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValor * (yuanHoje / dolarHoje));
    };

    if (selectMoeda.value == "dolar" && selectCambio.value == "arg") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValor * (argHoje / dolarHoje));
    };

    /* Sequencia do Real*/

    if (selectMoeda.value == "real" && selectCambio.value == "real") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(inputValor);
    };

    if (selectMoeda.value == "real" && selectCambio.value == "dolar") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(inputValor * (dolarHoje / realHoje));
    };

    if (selectMoeda.value == "real" && selectCambio.value == "euro") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(inputValor * (euroHoje / realHoje));
    };

    if (selectMoeda.value == "real" && selectCambio.value == "libra") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(inputValor * (libraHoje / realHoje));
    };

    if (selectMoeda.value == "real" && selectCambio.value == "iene") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(inputValor / (realHoje / ieneHoje));
    };

    if (selectMoeda.value == "real" && selectCambio.value == "yuan") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(inputValor / (realHoje / yuanHoje));
    };

    if (selectMoeda.value == "real" && selectCambio.value == "arg") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(inputValor / (realHoje / argHoje));
    };

    /*Sequencia do euro*/

    if (selectMoeda.value == "euro" && selectCambio.value == "euro") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor);
    };

    if (selectMoeda.value == "euro" && selectCambio.value == "dolar") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor * (euroHoje / dolarHoje));
    };

    if (selectMoeda.value == "euro" && selectCambio.value == "real") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor * (realHoje / euroHoje));
    };

    if (selectMoeda.value == "euro" && selectCambio.value == "libra") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor * (euroHoje / libraHoje));
    };

    if (selectMoeda.value == "euro" && selectCambio.value == "iene") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor * (ieneHoje / euroHoje));
    };

    if (selectMoeda.value == "euro" && selectCambio.value == "yuan") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor * (yuanHoje / euroHoje));
    };

    if (selectMoeda.value == "euro" && selectCambio.value == "arg") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor * (argHoje / euroHoje));
    };

    /* Sequencia do libra */

    if (selectMoeda.value == "libra" && selectCambio.value == "libra") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValor);
    };

    if (selectMoeda.value == "libra" && selectCambio.value == "real") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValor * (realHoje / libraHoje));
    };

    if (selectMoeda.value == "libra" && selectCambio.value == "dolar") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValor * (dolarHoje / libraHoje));
    };

    if (selectMoeda.value == "libra" && selectCambio.value == "euro") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValor * (euroHoje / libraHoje));
    };

    if (selectMoeda.value == "libra" && selectCambio.value == "iene") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValor * (ieneHoje / libraHoje));
    };

    if (selectMoeda.value == "libra" && selectCambio.value == "yuan") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValor * (yuanHoje / libraHoje));
    };

    if (selectMoeda.value == "libra" && selectCambio.value == "arg") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValor * (argHoje / libraHoje));
    };

    /* Sequencia do Iene */

    if (selectMoeda.value == "iene" && selectCambio.value == "iene") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputValor);
    };

    if (selectMoeda.value == "iene" && selectCambio.value == "real") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputValor * (realHoje / ieneHoje));
    };

    if (selectMoeda.value == "iene" && selectCambio.value == "dolar") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputValor * (dolarHoje / ieneHoje));
    };

    if (selectMoeda.value == "iene" && selectCambio.value == "euro") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputValor * (euroHoje / ieneHoje));
    };

    if (selectMoeda.value == "iene" && selectCambio.value == "libra") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputValor * (libraHoje / ieneHoje));
    };

    if (selectMoeda.value == "iene" && selectCambio.value == "yuan") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputValor * (yuanHoje / ieneHoje));
    };

    if (selectMoeda.value == "iene" && selectCambio.value == "arg") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputValor * (argHoje / ieneHoje));
    };

    /* Sequencia do Yuan */

    if (selectMoeda.value == "yuan" && selectCambio.value == "yuan") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("zh-CN", {
            style: "currency",
            currency: "CNY"
        }).format(inputValor);
    };

    if (selectMoeda.value == "yuan" && selectCambio.value == "real") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("zh-CN", {
            style: "currency",
            currency: "CNY"
        }).format(inputValor * (realHoje / yuanHoje));
    };

    if (selectMoeda.value == "yuan" && selectCambio.value == "dolar") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("zh-CN", {
            style: "currency",
            currency: "CNY"
        }).format(inputValor * (dolarHoje / yuanHoje));
    };

    if (selectMoeda.value == "yuan" && selectCambio.value == "euro") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("zh-CN", {
            style: "currency",
            currency: "CNY"
        }).format(inputValor * (euroHoje / yuanHoje));
    };

    if (selectMoeda.value == "yuan" && selectCambio.value == "libra") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("zh-CN", {
            style: "currency",
            currency: "CNY"
        }).format(inputValor * (libraHoje / yuanHoje));
    };

    if (selectMoeda.value == "yuan" && selectCambio.value == "iene") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("zh-CN", {
            style: "currency",
            currency: "CNY"
        }).format(inputValor * (ieneHoje / yuanHoje));
    };

    if (selectMoeda.value == "yuan" && selectCambio.value == "arg") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("zh-CN", {
            style: "currency",
            currency: "CNY"
        }).format(inputValor * (argHoje / yuanHoje));
    };

    /* Sequencia dos Pesos Argentinos */

    if (selectMoeda.value == "arg" && selectCambio.value == "arg") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputValor);
    };

    if (selectMoeda.value == "arg" && selectCambio.value == "real") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputValor * (realHoje / argHoje));
    };

    if (selectMoeda.value == "arg" && selectCambio.value == "dolar") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputValor * (dolarHoje / argHoje));
    };

    if (selectMoeda.value == "arg" && selectCambio.value == "euro") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputValor * (euroHoje / argHoje));
    };

    if (selectMoeda.value == "arg" && selectCambio.value == "libra") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputValor * (libraHoje / argHoje));
    };

    if (selectMoeda.value == "arg" && selectCambio.value == "iene") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputValor * (ieneHoje / argHoje));
    };

    if (selectMoeda.value == "arg" && selectCambio.value == "yuan") {
        segundaMoeda.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputValor * (yuanHoje / argHoje));
    };

    console.log(convertValues);
};

function changeCurrency() {
    const nomeMoeda = document.querySelector(".currency-name");
    const figuraMoeda = document.querySelector(".image-us");

    if (selectMoeda.value == "real") {
        nomeMoeda.innerHTML = "Real"
        figuraMoeda.src = "./assets/brasil 2.png"
    };

    if (selectMoeda.value == "dolar") {
        nomeMoeda.innerHTML = "Dolar Americano"
        figuraMoeda.src = "./assets/estados-unidos.png"
    };

    if (selectMoeda.value == "euro") {
        nomeMoeda.innerHTML = "Euro"
        figuraMoeda.src = "./assets/euro.png"
    };

    if (selectMoeda.value == "libra") {
        nomeMoeda.innerHTML = "Libra"
        figuraMoeda.src = "./assets/libra.png"
    };

    if (selectMoeda.value == "iene") {
        nomeMoeda.innerHTML = "Iene"
        figuraMoeda.src = "./assets/japao.png"
    };

    if (selectMoeda.value == "yuan") {
        nomeMoeda.innerHTML = "Yuan"
        figuraMoeda.src = "./assets/china.png"
    };

    if (selectMoeda.value == "arg") {
        nomeMoeda.innerHTML = "Peso Argentino"
        figuraMoeda.src = "./assets/argentina.png"
    };

    convertValues()
};

function changeCambio() {
    const nomeMoeda1 = document.querySelector(".currency");
    const figuraMoeda2 = document.querySelector(".img-br");

    if (selectCambio.value == "real") {
        nomeMoeda1.innerHTML = "Real"
        figuraMoeda2.src = "./assets/brasil 2.png"
    };

    if (selectCambio.value == "dolar") {
        nomeMoeda1.innerHTML = "Dolar Americano"
        figuraMoeda2.src = "./assets/estados-unidos.png"
    };

    if (selectCambio.value == "euro") {
        nomeMoeda1.innerHTML = "Euro"
        figuraMoeda2.src = "./assets/euro.png"
    };

    if (selectCambio.value == "libra") {
        nomeMoeda1.innerHTML = "Libra"
        figuraMoeda2.src = "./assets/libra.png"
    };

    if (selectCambio.value == "iene") {
        nomeMoeda1.innerHTML = "Iene"
        figuraMoeda2.src = "./assets/japao.png"
    };

    if (selectCambio.value == "yuan") {
        nomeMoeda1.innerHTML = "Yuan"
        figuraMoeda2.src = "./assets/china.png"
    };

    if (selectCambio.value == "arg") {
        nomeMoeda1.innerHTML = "Peso Argentino"
        figuraMoeda2.src = "./assets/argentina.png"
    };

    convertValues()
};

selectCambio.addEventListener("change", changeCambio);
selectMoeda.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);