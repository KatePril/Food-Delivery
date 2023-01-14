let btn_start = document.querySelector("#start_btn");
btn_start.addEventListener('click', DisplayMenu);

function DisplayMenu(){
    div.innerHTML = menuHTML;
    div.innerHTML += footerHTML;

    let footer_btn_menu = document.querySelector("#footer_btn_menu");
    let footer_btn_chat = document.querySelector("#footer_btn_chat");
    let footer_btn_cart = document.querySelector("#footer_btn_cart");
    let footer_btn_account = document.querySelector("#footer_btn_account");

    let  menu_btn_user = document.querySelector("#menu_btn_user");

    footer_btn_menu.addEventListener('click', DisplayMenu);

    footer_btn_account.addEventListener('click', DisplayAccount);
    menu_btn_user.addEventListener('click', DisplayAccount);

    footer_btn_cart.addEventListener('click', DisplayCart);
    footer_btn_chat.addEventListener('click', DisplayChat);

    let menu_btn_fast_food = document.querySelector("#menu_btn_fast_food");
    menu_btn_fast_food.addEventListener('click', FastFoodDisplay);

    let menu_btn_italian_food = document.querySelector("#menu_btn_italian_food");
    menu_btn_italian_food.addEventListener('click', ItalianFoodDisplay);

    let menu_btn_japanese_food = document.querySelector("#menu_btn_japanese_food");
    menu_btn_japanese_food.addEventListener('click', JapaniseFoodDisplay);

    let menu_btn_bakery = document.querySelector("#menu_btn_bakery");
    menu_btn_bakery.addEventListener('click', BakeryDisplay);

    let menu_btn_beverages = document.querySelector("#menu_btn_beverages");
    menu_btn_beverages.addEventListener('click', BeveragesDisplay);

    let menu_btn_barbecue = document.querySelector("#menu_btn_barbecue");
    menu_btn_barbecue.addEventListener('click', BarbecueDisplay);

    let menu_btn_vegetarian = document.querySelector("#menu_btn_vegetarian");
    menu_btn_vegetarian.addEventListener('click', VegetarianDisplay);

    let menu_btn_desserts = document.querySelector("#menu_btn_desserts");
    menu_btn_desserts.addEventListener('click', DessertsDisplay);
}

function DisplayAccount(){
    div.innerHTML = accountHTML;    
    DisplayFooter();
}

function DisplayCart(){
    let order_details = "";
    let total_price = 0;
    for (let  i = 1; i < cart_data.length; i++) {
        order_details += `<div class="cart_item">
            <div class="cart_item_details">
                <span class="cart_name_item">${cart_data[i][0]}</span>
                <span class="cart_price_item">${cart_data[i][1]}$</span>
                <button class="btn_delate_item">
                    <img src="Images/Icons/close.png" class="btn_delate_item_img">
                </button>
            </div>
            <div class="cart_item_line"></div>
        </div>`;
        total_price += cart_data[i][1];
    }
    div.innerHTML = `<div class="display_cart">
        <div class="cart_header">
            <h2 class="cart_h2">Your order</h2>
        </div>
        <div class="cart_line"></div>
        ${order_details}
    </div>
    <div class="cart_total_price">
            <h3 class="cart_h3">Total</h3>
            <h3 class="cart_h3 total_price_display">${total_price}$</h3>
            <button class="btn_make_order">Order now</button>
    </div>`;
    DisplayFooter();

    let close = document.getElementsByClassName("btn_delate_item");
    let lines = document.getElementsByClassName("cart_item_line");
    let prices = document.getElementsByClassName("cart_price_item")

    for (let i = 0; i < close.length; i++){
        close[i].onclick = function () {
          let div = this.parentElement;
          div.parentElement.style.display = "none";
          lines[i].style.display = "none";
          total_price -= parseInt(prices[i].innerText.replace("$", ""), 10);
          let total_price_display = document.querySelector(".total_price_display");
          total_price_display.innerText = total_price + "$";
        }
    }
}

function DisplayChat(){
    div.innerHTML = chatHTML;
    DisplayFooter();
    let btn = document.getElementById("chat_btn");
    btn.addEventListener('click', newMsg);

    function createItem(msg) {

        if (msg=="") 
            return 
    
        let div = document.createElement("div");	
        
        let span = document.createElement("span");
        span.className = "msgSpan"
        span.innerText = msg
    
        div.append(span)
    
        return div
        
    }
    function newMsg() {
    
        let chat = document.querySelector(".chat")
        let msgInput = null;
    
        msgInput =  document.getElementById("txt")
    
        let msg = msgInput.value
        msgInput.value = ""
    
        let div = createItem(msg)
    
        div.className = "msgItem"
    
        chat.append(div)
    
        if (chat.children.length>8) 
            chat.firstElementChild.remove()
    }
}

function DisplayFooter(){
    div.innerHTML += footerHTML;

    let footer_btn_menu = document.querySelector("#footer_btn_menu");
    let footer_btn_chat = document.querySelector("#footer_btn_chat");
    let footer_btn_cart = document.querySelector("#footer_btn_cart");
    let footer_btn_account = document.querySelector("#footer_btn_account");

    footer_btn_menu.addEventListener('click', DisplayMenu);
    footer_btn_account.addEventListener('click', DisplayAccount);
    footer_btn_cart.addEventListener('click', DisplayCart);
    footer_btn_chat.addEventListener('click', DisplayChat);
}