function selectItem(category, item){
    div.innerHTML = `<div class="container">
    <div class="display_item">
        <button class="item_btn_back">Go back</button>
        <main class="item_main">
            <img src="${data_categories[category][item][1]}" class="item_img">
            <div class="item_control_amont">
                <button id="item_control_btn_less">–</button>
                <div id="item_control_btn_num">1</div>
                <button id="item_control_btn_more">+</button>
            </div>
            <div class="item_information">
                <h2 class="item_h2">${data_categories[category][item][2]}</h2>
                <span  class="item_span">Ingredients: lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                <h4 class="item_h4">Size:</h4>
                <div class="item_portion_size">
                    <button class="item_letter selected" id="S">S</button>
                    <button class="item_letter" id="M">M</button>
                    <button class="item_letter" id="L">L</button>
                </div>
            </div>   
        </main>
        <footer  class="footer_item">
            <h2 id="item_price">10$</h2>
            <button id="item_buy_btn">Add to cart</button>
        </footer>
    </div>
</div>`;

    let item_control_btn_less = document.querySelector("#item_control_btn_less");
    item_control_btn_less.addEventListener('click', Minus);
    let item_control_btn_num = document.querySelector("#item_control_btn_num");
    let item_control_btn_more = document.querySelector("#item_control_btn_more");
    item_control_btn_more.addEventListener('click', Plus);
    let btn_S = document.querySelector("#S");
    btn_S.addEventListener('click', S);
    let btn_M = document.querySelector("#M");
    btn_M.addEventListener('click', M);
    let btn_L = document.querySelector("#L");
    btn_L.addEventListener('click', L);
    let display_price = document.querySelector("#item_price");
    let add_to_cart = document.querySelector("#item_buy_btn");
    add_to_cart.addEventListener('click', AddItem)

    let item_h2 = document.querySelector(".item_h2");

    let num = 1;
    let price = 10;
    
    function Minus(){
        if (num>1) {
            num--;
            item_control_btn_num.innerText = num;
            display_price.innerText = num*price + "$";
        }
    }
    function Plus() {
        num++;
        item_control_btn_num.innerText = num;
        display_price.innerText = num*price + "$";
    }
    function S() {
        btn_S.style.color = "#01977f";
	    btn_S.style.borderColor = "#01977f";
        btn_M.style.color = "black";
	    btn_M.style.borderColor = "black";
        btn_L.style.color = "black";
	    btn_L.style.borderColor = "black";
        price = 10;
        display_price.innerText = num*price + "$";
    }
    function M() {
        btn_M.style.color = "#01977f";
	    btn_M.style.borderColor = "#01977f";
        btn_S.style.color = "black";
	    btn_S.style.borderColor = "black";
        btn_L.style.color = "black";
	    btn_L.style.borderColor = "black";
        price = 20;
        display_price.innerText = num*price + "$";
    }
    function L() {
        btn_L.style.color = "#01977f";
	    btn_L.style.borderColor = "#01977f";
        btn_S.style.color = "black";
	    btn_S.style.borderColor = "black";
        btn_M.style.color = "black";
	    btn_M.style.borderColor = "black";
        price = 30;
        display_price.innerText = num*price + "$";
    }
    function AddItem() {
        cart_data.push([item_h2.innerText, num*price]);
        console.log(cart_data[1]);
    }
    
}

function GoBackCategory(category) {
    switch (category) {
        case 0:
            FastFoodDisplay();
            break;
        case 1:
            ItalianFoodDisplay();
            break;
        case 2:
            JapaniseFoodDisplay();
            break;
        case 3:
            BakeryDisplay();
            break;
        case 4:
            BarbecueDisplay();
            break;
        case 5:
            BeveragesDisplay();
            break;
        case 6:
            VegetarianDisplay();
            break;
        case 7:
            DessertsDisplay();
            break;
    }
}



// function S() {
// 	let btn3 = document.getElementById('S')
// 	btn3.style.color = "#01977f"
// 	btn3.style.borderColor = "#01977f"
// 	let btn4 = document.getElementById('M')
// 	btn4.style.color = "black"
// 	btn4.style.borderColor = "black"
// 	let btn5 = document.getElementById('L')
// 	btn5.style.color = "black"
// 	btn5.style.borderColor = "black"
// 	let amount = document.getElementById('num')
// 	let prc = document.getElementById('price')
// 	n = Number(amount.innerText)
// 	prc.innerText = 10*n
// }
// function M() {
// 	let btn3 = document.getElementById('S')
// 	btn3.style.color = "black"
// 	btn3.style.borderColor = "black"
// 	let btn4 = document.getElementById('M')
// 	btn4.style.color = "#01977f"
// 	btn4.style.borderColor = "#01977f"
// 	let btn5 = document.getElementById('L')
// 	btn5.style.color = "black"
// 	btn5.style.borderColor = "black"
// 	let amount = document.getElementById('num')
// 	let prc = document.getElementById('price')
// 	n = Number(amount.innerText)
// 	prc.innerText = 20*n
// }
// function L() {
// 	let btn3 = document.getElementById('S')
// 	btn3.style.color = "black"
// 	btn3.style.borderColor = "black"
// 	let btn4 = document.getElementById('M')
// 	btn4.style.color = "black"
// 	btn4.style.borderColor = "black"
// 	let btn5 = document.getElementById('L')
// 	btn5.style.color = "#01977f"
// 	btn5.style.borderColor = "#01977f"
// 	let amount = document.getElementById('num')
// 	let prc = document.getElementById('price')
// 	n = Number(amount.innerText)
// 	prc.innerText = 30*n
// }