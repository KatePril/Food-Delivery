function FastFoodDisplay(){
    div.innerHTML = `<div class="display_category">
    <h2 class="menu_h2">Fast food</h2>
    <div id="menu_categories">
        <div class="menu_categories_row">
            <button class="menu_main_btn" id="${data_categories[0][0][0]}">
                <img src="${data_categories[0][0][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[0][0][2]}</span>
            </button>
            <button class="menu_main_btn" id="${data_categories[0][1][0]}">
                <img src="${data_categories[0][1][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[0][1][2]}</span>
            </button>
        </div>
        <div class="menu_categories_row">
            <button class="menu_main_btn" id="${data_categories[0][2][0]}">
                <img src="${data_categories[0][2][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[0][2][2]}</span>
            </button>
            <button class="menu_main_btn" id="${data_categories[0][3][0]}">
                <img src="${data_categories[0][3][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[0][3][2]}</span>
            </button>
        </div>
        <div class="menu_categories_row menu_categories_last_row_padding">
            <button class="menu_main_btn" id="${data_categories[0][4][0]}">
                <img src="${data_categories[0][4][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[0][4][2]}</span>
            </button>
            <button class="menu_main_btn" id="${data_categories[0][5][0]}">
                <img src="${data_categories[0][5][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[0][5][2]}</span>
            </button>
        </div>
    </div>
</div>`;
    DisplayFooter();

    let menu_btn_burger = document.getElementById('menu_btn_burger');
    menu_btn_burger.addEventListener('click', selectBurger);
    let menu_btn_double_burger = document.getElementById('menu_btn_double_burger');
    menu_btn_double_burger.addEventListener('click', selectDoubleBurger);
    let menu_btn_hot_dog = document.getElementById('menu_btn_hot_dog');
    menu_btn_hot_dog.addEventListener('click', selectHotDog);
    let menu_btn_rice = document.getElementById('menu_btn_rice');
    menu_btn_rice.addEventListener('click', selectRice);
    let menu_btn_taco = document.getElementById('menu_btn_taco');
    menu_btn_taco.addEventListener('click', selectTaco);
    let menu_btn_roll = document.getElementById('menu_btn_roll');
    menu_btn_roll.addEventListener('click', selectRoll);
}

function ItalianFoodDisplay(){
    div.innerHTML = `<div class="display_category">
    <h2 class="menu_h2">Italian food</h2>
    <div id="menu_categories">
        <div class="menu_categories_row">
            <button class="menu_main_btn" id="${data_categories[1][0][0]}">
                <img src="${data_categories[1][0][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[1][0][2]}</span>
            </button>
            <button class="menu_main_btn" id="${data_categories[1][1][0]}">
                <img src="${data_categories[1][1][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[1][1][2]}</span>
            </button>
        </div>
        <div class="menu_categories_row">
            <button class="menu_main_btn" id="${data_categories[1][2][0]}">
                <img src="${data_categories[1][2][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[1][2][2]}</span>
            </button>
            <button class="menu_main_btn" id="${data_categories[1][3][0]}">
                <img src="${data_categories[1][3][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[1][3][2]}</span>
            </button>
        </div>
        <div class="menu_categories_row menu_categories_last_row_padding">
            <button class="menu_main_btn" id="${data_categories[1][4][0]}">
                <img src="${data_categories[1][4][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[1][4][2]}</span>
            </button>
            <button class="menu_main_btn" id="${data_categories[1][5][0]}">
                <img src="${data_categories[1][5][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[1][5][2]}</span>
            </button>
        </div>
    </div>
</div>`;
    DisplayFooter();
    
    let menu_btn_calzone = document.getElementById('menu_btn_calzone');
    menu_btn_calzone.addEventListener('click', selectCalzone);
    let menu_btn_minestrone = document.getElementById('menu_btn_minestrone');
    menu_btn_minestrone.addEventListener('click', selectMinestrone);
    let menu_btn_pizza = document.getElementById('menu_btn_pizza');
    menu_btn_pizza.addEventListener('click', selectPizza);
    let menu_btn_ravioli = document.getElementById('menu_btn_ravioli');
    menu_btn_ravioli.addEventListener('click', selectRavioli);
    let menu_btn_risotto = document.getElementById('menu_btn_risotto');
    menu_btn_risotto.addEventListener('click', selectRisotto);
    let menu_btn_carbonara = document.getElementById('menu_btn_carbonara');
    menu_btn_carbonara.addEventListener('click', selectCarbonara);
}

function JapaniseFoodDisplay(){
    div.innerHTML = `<div class="display_category">
    <h2 class="menu_h2">Japanise food</h2>
    <div id="menu_categories">
        <div class="menu_categories_row">
            <button class="menu_main_btn" id="${data_categories[2][0][0]}">
                <img src="${data_categories[2][0][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[2][0][2]}</span>
            </button>
            <button class="menu_main_btn" id="${data_categories[2][1][0]}">
                <img src="${data_categories[2][1][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[2][1][2]}</span>
            </button>
        </div>
        <div class="menu_categories_row">
            <button class="menu_main_btn" id="${data_categories[2][2][0]}">
                <img src="${data_categories[2][2][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[2][2][2]}</span>
            </button>
            <button class="menu_main_btn" id="${data_categories[2][3][0]}">
                <img src="${data_categories[2][3][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[2][3][2]}</span>
            </button>
        </div>
        <div class="menu_categories_row menu_categories_last_row_padding">
            <button class="menu_main_btn" id="${data_categories[2][4][0]}">
                <img src="${data_categories[2][4][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[2][4][2]}</span>
            </button>
            <button class="menu_main_btn" id="${data_categories[2][5][0]}">
                <img src="${data_categories[2][5][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[2][5][2]}</span>
            </button>
        </div>
    </div>
</div>`;
    DisplayFooter();

    let menu_btn_sushi = document.getElementById('menu_btn_sushi');
    menu_btn_sushi.addEventListener('click', selectSushi);
    let menu_btn_sushi2 = document.getElementById('menu_btn_sushi2');
    menu_btn_sushi2.addEventListener('click', selectSushi2);
    let menu_btn_curry_rice = document.getElementById('menu_btn_curry_rice');
    menu_btn_curry_rice.addEventListener('click', selectCurryRice);
    let menu_btn_hot_pot = document.getElementById('menu_btn_hot_pot');
    menu_btn_hot_pot.addEventListener('click', selectHotPot);
    let menu_btn_miso = document.getElementById('menu_btn_miso');
    menu_btn_miso.addEventListener('click', selectMiso);
    let menu_btn_ramen = document.getElementById('menu_btn_ramen');
    menu_btn_ramen.addEventListener('click', selectRamen);
}

function BakeryDisplay(){
    div.innerHTML = `<div class="display_category">
    <h2 class="menu_h2">Bakery</h2>
    <div id="menu_categories">
        <div class="menu_categories_row">
            <button class="menu_main_btn" id="${data_categories[3][0][0]}">
                <img src="${data_categories[3][0][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[3][0][2]}</span>
            </button>
            <button class="menu_main_btn" id="${data_categories[3][1][0]}">
                <img src="${data_categories[3][1][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[3][1][2]}</span>
            </button>
        </div>
        <div class="menu_categories_row">
            <button class="menu_main_btn" id="${data_categories[3][2][0]}">
                <img src="${data_categories[3][2][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[3][2][2]}</span>
            </button>
            <button class="menu_main_btn" id="${data_categories[3][3][0]}">
                <img src="${data_categories[3][3][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[3][3][2]}</span>
            </button>
        </div>
        <div class="menu_categories_row menu_categories_last_row_padding">
            <button class="menu_main_btn" id="${data_categories[3][4][0]}">
                <img src="${data_categories[3][4][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[3][4][2]}</span>
            </button>
            <button class="menu_main_btn" id="${data_categories[3][5][0]}">
                <img src="${data_categories[3][5][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[3][5][2]}</span>
            </button>
        </div>
    </div>
</div>`;
    DisplayFooter();

    let menu_btn_bread = document.getElementById('menu_btn_bread');
    menu_btn_bread.addEventListener('click', selectBread);
    let menu_btn_challah = document.getElementById('menu_btn_challah');
    menu_btn_challah.addEventListener('click', selectChallah);
    let menu_btn_cookies = document.getElementById('menu_btn_cookies');
    menu_btn_cookies.addEventListener('click', selectCookies);
    let menu_btn_croissant = document.getElementById('menu_btn_croissant');
    menu_btn_croissant.addEventListener('click', selectCroissant);
    let menu_btn_donuts = document.getElementById('menu_btn_donuts');
    menu_btn_donuts.addEventListener('click', selectDonuts);
    let menu_btn_pretzel = document.getElementById('menu_btn_pretzel');
    menu_btn_pretzel.addEventListener('click', selectPretzel);
}

function BarbecueDisplay(){
    div.innerHTML = `<div class="display_category">
    <h2 class="menu_h2">Barbecue</h2>
    <div id="menu_categories">
        <div class="menu_categories_row">
            <button class="menu_main_btn" id="${data_categories[4][0][0]}">
                <img src="${data_categories[4][0][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[4][0][2]}</span>
            </button>
            <button class="menu_main_btn" id="${data_categories[4][1][0]}">
                <img src="${data_categories[4][1][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[4][1][2]}</span>
            </button>
        </div>
        <div class="menu_categories_row">
            <button class="menu_main_btn" id="${data_categories[4][2][0]}">
                <img src="${data_categories[4][2][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[4][2][2]}</span>
            </button>
            <button class="menu_main_btn" id="${data_categories[4][3][0]}">
                <img src="${data_categories[4][3][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[4][3][2]}</span>
            </button>
        </div>
        <div class="menu_categories_row menu_categories_last_row_padding">
            <button class="menu_main_btn" id="${data_categories[4][4][0]}">
                <img src="${data_categories[4][4][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[4][4][2]}</span>
            </button>
            <button class="menu_main_btn" id="${data_categories[4][5][0]}">
                <img src="${data_categories[4][5][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[4][5][2]}</span>
            </button>
        </div>
    </div>
</div>`;
    DisplayFooter();

    let menu_btn_steak = document.getElementById('menu_btn_steak');
    menu_btn_steak.addEventListener('click', selectSteak);
    let menu_btn_steak2 = document.getElementById('menu_btn_steak2');
    menu_btn_steak2.addEventListener('click', selectSteak2);
    let menu_btn_sausage = document.getElementById('menu_btn_sausage');
    menu_btn_sausage.addEventListener('click', selectSausage);
    let menu_btn_bacons = document.getElementById('menu_btn_bacons');
    menu_btn_bacons.addEventListener('click', selectBacons);
    let menu_btn_fishes = document.getElementById('menu_btn_fishes');
    menu_btn_fishes.addEventListener('click', selectFishes);
    let menu_btn_salmon = document.getElementById('menu_btn_salmon');
    menu_btn_salmon.addEventListener('click', selectSalmon);
}

function BeveragesDisplay(){
    div.innerHTML = `<div class="display_category">
    <h2 class="menu_h2">Beverages</h2>
    <div id="menu_categories">
        <div class="menu_categories_row">
            <button class="menu_main_btn" id="${data_categories[5][0][0]}">
                <img src="${data_categories[5][0][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[5][0][2]}</span>
            </button>
            <button class="menu_main_btn" id="${data_categories[5][1][0]}">
                <img src="${data_categories[5][1][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[5][1][2]}</span>
            </button>
        </div>
        <div class="menu_categories_row">
            <button class="menu_main_btn" id="${data_categories[5][2][0]}">
                <img src="${data_categories[5][2][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[5][2][2]}</span>
            </button>
            <button class="menu_main_btn" id="${data_categories[5][3][0]}">
                <img src="${data_categories[5][3][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[5][3][2]}</span>
            </button>
        </div>
        <div class="menu_categories_row menu_categories_last_row_padding">
            <button class="menu_main_btn" id="${data_categories[5][4][0]}">
                <img src="${data_categories[5][4][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[5][4][2]}</span>
            </button>
            <button class="menu_main_btn" id="${data_categories[5][5][0]}">
                <img src="${data_categories[5][5][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[5][5][2]}</span>
            </button>
        </div>
    </div>
</div>`;
    DisplayFooter();
    
    let menu_btn_green_tea = document.getElementById('menu_btn_green_tea');
    menu_btn_green_tea.addEventListener('click', selectGreenTea);
    let menu_btn_coffee = document.getElementById('menu_btn_coffee');
    menu_btn_coffee.addEventListener('click', selectCoffee);
    let menu_btn_milk_tea = document.getElementById('menu_btn_milk_tea');
    menu_btn_milk_tea.addEventListener('click', selectMilkTea);
    let menu_btn_bubble_tea = document.getElementById('menu_btn_bubble_tea');
    menu_btn_bubble_tea.addEventListener('click', selectBubbleTea);
    let menu_btn_bubble_tea1 = document.getElementById('menu_btn_bubble_tea1');
    menu_btn_bubble_tea1.addEventListener('click', selectBubbleTea1);
    let menu_btn_bubble_tea2 = document.getElementById('menu_btn_bubble_tea2');
    menu_btn_bubble_tea2.addEventListener('click', selectBubbleTea2);
}

function VegetarianDisplay(){
    div.innerHTML = `<div class="display_category">
    <h2 class="menu_h2">Vegetarian food</h2>
    <div id="menu_categories">
        <div class="menu_categories_row">
            <button class="menu_main_btn" id="${data_categories[6][0][0]}">
                <img src="${data_categories[6][0][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[6][0][2]}</span>
            </button>
            <button class="menu_main_btn" id="${data_categories[6][1][0]}">
                <img src="${data_categories[6][1][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[0][1][2]}</span>
            </button>
        </div>
        <div class="menu_categories_row">
            <button class="menu_main_btn" id="${data_categories[6][2][0]}">
                <img src="${data_categories[6][2][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[6][2][2]}</span>
            </button>
            <button class="menu_main_btn" id="${data_categories[6][3][0]}">
                <img src="${data_categories[6][3][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[6][3][2]}</span>
            </button>
        </div>
        <div class="menu_categories_row menu_categories_last_row_padding">
            <button class="menu_main_btn" id="${data_categories[6][4][0]}">
                <img src="${data_categories[6][4][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[6][4][2]}</span>
            </button>
            <button class="menu_main_btn" id="${data_categories[6][5][0]}">
                <img src="${data_categories[6][5][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[6][5][2]}</span>
            </button>
        </div>
    </div>
</div>`;
    DisplayFooter();
    
    let menu_btn_salad = document.getElementById('menu_btn_salad');
    menu_btn_salad.addEventListener('click', selectSalad);
    let menu_btn_salad1 = document.getElementById('menu_btn_salad1');
    menu_btn_salad1.addEventListener('click', selectSalad1);
    let menu_btn_salad2 = document.getElementById('menu_btn_salad2');
    menu_btn_salad2.addEventListener('click', selectSalad2);
    let menu_btn_salad3 = document.getElementById('menu_btn_salad3');
    menu_btn_salad3.addEventListener('click', selectSalad3);
    let menu_btn_nuts = document.getElementById('menu_btn_nuts');
    menu_btn_nuts.addEventListener('click', selectNuts);
    let menu_btn_potatoes = document.getElementById('menu_btn_potatoes');
    menu_btn_potatoes.addEventListener('click', selectPotatoes);
}

function DessertsDisplay(){
    div.innerHTML = `<div class="display_category">
    <h2 class="menu_h2">Desserts</h2>
    <div id="menu_categories">
        <div class="menu_categories_row">
            <button class="menu_main_btn" id="${data_categories[7][0][0]}">
                <img src="${data_categories[7][0][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[7][0][2]}</span>
            </button>
            <button class="menu_main_btn" id="${data_categories[7][1][0]}">
                <img src="${data_categories[7][1][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[7][1][2]}</span>
            </button>
        </div>
        <div class="menu_categories_row">
            <button class="menu_main_btn" id="${data_categories[7][2][0]}">
                <img src="${data_categories[7][2][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[7][2][2]}</span>
            </button>
            <button class="menu_main_btn" id="${data_categories[7][3][0]}">
                <img src="${data_categories[7][3][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[7][3][2]}</span>
            </button>
        </div>
        <div class="menu_categories_row menu_categories_last_row_padding">
            <button class="menu_main_btn" id="${data_categories[7][4][0]}">
                <img src="${data_categories[7][4][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[7][4][2]}</span>
            </button>
            <button class="menu_main_btn" id="${data_categories[7][5][0]}">
                <img src="${data_categories[7][5][1]}" class="menu_main_img">
                <span class="menu_main_span">${data_categories[7][5][2]}</span>
            </button>
        </div>
    </div>
</div>`;
    DisplayFooter();
    
    let menu_btn_cake = document.getElementById('menu_btn_cake');
    menu_btn_cake.addEventListener('click', selectCake);
    let menu_btn_cupcake = document.getElementById('menu_btn_cupcake');
    menu_btn_cupcake.addEventListener('click', selectCupcake);
    let menu_btn_ice_cream = document.getElementById('menu_btn_ice_cream');
    menu_btn_ice_cream.addEventListener('click', selectIceCream);
    let menu_btn_jelly = document.getElementById('menu_btn_jelly');
    menu_btn_jelly.addEventListener('click', selectJelly);
    let menu_btn_muffin = document.getElementById('menu_btn_muffin');
    menu_btn_muffin.addEventListener('click', selectMuffin);
    let menu_btn_pudding = document.getElementById('menu_btn_pudding');
    menu_btn_pudding.addEventListener('click', selectPudding);
}