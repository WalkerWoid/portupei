const usualItems = [
    {
        itemImageSrc: 'images/catalog_item1.png',
        itemName: 'Портупея “Пеппи”',
        itemDiscount: 53,
        itemOldPrice: 4990,
        itemNewPrice: 2990,
        colors: ['black', 'red'],
        sizes: ['XS', 'S', 'M', 'L']
    },
    {
        itemImageSrc: 'images/catalog_item2.png',
        itemName: 'Портупея “Влади”',
        itemDiscount: 53,
        itemOldPrice: 4990,
        itemNewPrice: 2990,
        colors: ['black'],
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
    },
    {
        itemImageSrc: 'images/catalog_item1.png',
        itemName: 'Портупея “Джони Миллер”',
        itemDiscount: 53,
        itemOldPrice: 4990,
        itemNewPrice: 2990,
        colors: ['black', 'red'],
        sizes: ['XS', 'S', 'M', 'L']
    },
    {
        itemImageSrc: 'images/catalog_item2.png',
        itemName: 'Портупея “Пеппи”',
        itemDiscount: 53,
        itemOldPrice: 4990,
        itemNewPrice: 2990,
        colors: ['black', 'red'],
        sizes: ['XS', 'S']
    },
    {
        itemImageSrc: 'images/catalog_item1.png',
        itemName: 'Портупея “Влади”',
        itemDiscount: 53,
        itemOldPrice: 4990,
        itemNewPrice: 2990,
        colors: ['black'],
        sizes: ['XS', 'S', 'M', 'L']
    },
    {
        itemImageSrc: 'images/catalog_item2.png',
        itemName: 'Портупея “Джони Миллер”  ',
        itemDiscount: 53,
        itemOldPrice: 4990,
        itemNewPrice: 2990,
        colors: ['black', 'red'],
        sizes: ['XS', 'M', 'L']
    }
];
const eroticItems = [
    {
        itemImageSrc: 'images/catalog_item3.png',
        itemName: 'Портупея “Пеппи”',
        itemDiscount: 53,
        itemOldPrice: 4990,
        itemNewPrice: 2990,
        colors: ['black', 'red'],
        sizes: ['S', 'M', 'XL', 'XXL']
    },
    {
        itemImageSrc: 'images/catalog_item1.png',
        itemName: 'Портупея “Влади”',
        itemDiscount: 53,
        itemOldPrice: 4990,
        itemNewPrice: 2990,
        colors: ['black'],
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
    },
    {
        itemImageSrc: 'images/catalog_item3.png',
        itemName: 'Портупея “Джони Миллер”',
        itemDiscount: 53,
        itemOldPrice: 4990,
        itemNewPrice: 2990,
        colors: ['black', 'red'],
        sizes: ['XS', 'S', 'M','XXL']
    },
    {
        itemImageSrc: 'images/catalog_item1.png',
        itemName: 'Портупея “Пеппи”',
        itemDiscount: 53,
        itemOldPrice: 4990,
        itemNewPrice: 2990,
        colors: ['black', 'red'],
        sizes: ['XS','L', 'XL', 'XXL']
    },
    {
        itemImageSrc: 'images/catalog_item3.png',
        itemName: 'Портупея “Влади”',
        itemDiscount: 53,
        itemOldPrice: 4990,
        itemNewPrice: 2990,
        colors: ['black', 'red'],
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        itemImageSrc: 'images/catalog_item1.png',
        itemName: 'Портупея “Джони Миллер”  ',
        itemDiscount: 53,
        itemOldPrice: 4990,
        itemNewPrice: 2990,
        colors: ['red'],
        sizes: ['XS', 'S', 'M', 'L', 'XXL']
    }
];

class Page {
    constructor() {
        this.catalogContainer = document.querySelector('.catalog__items');
        this.usualItemButton = document.querySelector('.catalog__button_usual');
        this.eroticItemButton = document.querySelector('.catalog__button_erotic');
        this.buyWindow = document.querySelector('.buy-window__wrapper');
        this.pageInit();
    }
    pageInit() {
        this.eventHandlers();
    }
    eventHandlers() {
        this.usualItemButton.addEventListener('click', event => this.renderUsualCatalog(event));
        this.eroticItemButton.addEventListener('click', event => this.renderEroticCatalog(event));
        document.addEventListener('click', event => this.chooseSize(event));
        document.addEventListener('click', event => this.openBuyWindow(event));
    }
    renderUsualCatalog(event) {
        if (event.target.classList.contains('catalog__button_active') === true) {
            return;
        }
        this.usualItemButton.classList.remove('catalog__button_no-active');
        this.usualItemButton.classList.add('catalog__button_active');

        this.eroticItemButton.classList.remove('catalog__button_active');

        this.catalogContainer.innerHTML = '';
        const usualCatalog = new Catalog(usualItems);
    }
    renderEroticCatalog(event) {
        if (event.target.classList.contains('.catalog__button_active') === true) {
            return;
        }
        this.eroticItemButton.classList.remove('catalog__button_no-active');
        this.eroticItemButton.classList.add('catalog__button_active');

        this.usualItemButton.classList.remove('catalog__button_active');

        this.catalogContainer.innerHTML = '';
        const eroticCatalog = new Catalog(eroticItems);
    }
    chooseSize(event) {
        if (event.target.classList.contains('item__size_available') === true) {
            event.target.parentNode.querySelectorAll('span').forEach(span => {
                span.classList.remove('item__size_selected');
            });
            event.target.classList.add('item__size_selected');
        }
    }
    openBuyWindow(event) {
        const allSizes = [...event.target.parentNode.querySelectorAll('.item__size')];

        let selectedSize = '';
        for (const size of allSizes) {
            if (size.classList.contains('item__size_selected')) {
                selectedSize = size.textContent
            }
        }

        if (!event.target.classList.contains('item__buy-btn')) {
            return;
        }

        if (selectedSize === '') {
            alert('Выбирите размер');
            return;
        }

        document.body.classList.add('close-body');

        const name = event.target.dataset.name;
        const imgSrc = event.target.dataset.imgsrc;
        const oldPrice = event.target.dataset.oldprice;
        const newPrice = event.target.dataset.newprice;

        const buyWindow = new BuyWindow(imgSrc, name, selectedSize, oldPrice, newPrice);
        document.querySelector('.catalog').insertAdjacentHTML('afterbegin', buyWindow.renderBuyWindow());
        document.querySelector('.buy-window__wrapper').addEventListener('click', event => this.closeBuyWindow(event));
        document.querySelector('.buy-window__buy-btn').addEventListener('click', event => {
            event.preventDefault();
        })
    }
    closeBuyWindow(event) {
        if (event.target.classList.contains('buy-window__wrapper') === true ||
            event.target.classList.contains('buy-window__close') === true) {
            document.querySelector('.buy-window__wrapper').remove();
            document.body.classList.remove('close-body');
        }
    }
}

class CatalogItem {
    constructor (item) {
        this.name = item.itemName;
        this.imageSrc = item.itemImageSrc;
        this.discount = item.itemDiscount;
        this.oldPrice = item.itemOldPrice;
        this.newPrice = item.itemNewPrice;
        this.colors = item.colors;
        this.itemSizes = item.sizes;
        this.allSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
        this.renderColors();
        this.renderSizes()
    }
    renderColorHtml(colorName) {
        return `<div class="item__color item__color_${colorName}"></div>`
    }
    renderColors() {
        let colors = '';
        for (const color of this.colors) {
            colors += this.renderColorHtml(color);
        }
        return colors;
    }
    renderAvailableSizeHtml(size) {
        return `<span class="item__size item__size_available">${size}</span>`
    }
    renderUnavailableSizeHtml(size) {
        return `<span class="item__size item__size_no-available">${size}</span>`
    }
    renderSizes() {
        let sizes = '';
        for (const size of this.allSizes) {
            if (this.itemSizes.includes(size) === true) {
                sizes += this.renderAvailableSizeHtml(size)
            } else {
                sizes += this.renderUnavailableSizeHtml(size)
            }
        }
        return sizes;
    }
    renderItem() {
        return `<div class="item">
                <div class="item__top">
                    <img src="${this.imageSrc}" alt="catalog-item" class="item__img">
                    <span class="item__sale">-${this.discount}%</span>
                </div>
                <div class="item__bottom">
                    <div class="item__name">${this.name}</div>
                    <div class="item__sizes">${this.renderSizes()}</div>
                    <div class="item__colors">${this.renderColors()}</div>
                    <div class="item__prices">
                        <span class="item__price_old">${this.oldPrice} р.</span>
                        <span class="item__price_new">${this.newPrice} р.</span>
                    </div>
                    <button class="item__buy-btn" type="button" 
                    data-imgsrc="${this.imageSrc}" 
                    data-name="${this.name}"
                    data-oldprice="${this.oldPrice}"
                    data-newprice="${this.newPrice}">заказать</button>
                </div>
            </div>`
    }
    renderItemColors
}

class Catalog {
    constructor(items) {
        this.itemsArray = items;
        this.catalogContainer = document.querySelector('.catalog__items');
        this.renderCatalog();
    }
    renderCatalog() {
        for (const item of this.itemsArray) {
            console.log(item);
            const newItem = new CatalogItem(item);
            this.catalogContainer.insertAdjacentHTML('beforeend', newItem.renderItem());
        }
    }
}

class BuyWindow {
    constructor (itemImgSrc, itemName, itemSize, itemOldPrice, itemNewPrice) {
        this.itemImgSrc = itemImgSrc;
        this.itemName = itemName;
        this.itemSize = itemSize;
        this.itemOldPrice = itemOldPrice;
        this.itemNewPrice = itemNewPrice;
        this.wrapper = 'buy-window__wrapper';
    }
    renderBuyWindow() {
        return `<div class="${this.wrapper}">
                    <div class="buy-window">
                        <img src="${this.itemImgSrc}" alt="buy-item-img" class="buy-window__img">
                        <div class="buy-window__right">
                            <div class="buy-window__close"></div>

                            <div class="item__name">${this.itemName}</div>
                            <div class="item__prices buy-window__prices">
                                <span class="item__price_old">4990 р.</span>
                                <span class="item__price_new">2990 р.</span>
                            </div>
                            <div class="item__sizes buy-window__sizes">
                                <span class="item__size ">${this.itemSize}</span>
                            </div>
                            <form action="#" class="buy-window__form">
                                <input type="text" class="buy-window__input" placeholder="Ваше имя">
                                <input type="text" class="buy-window__input" placeholder="Ваш телефон">
                                <button type="submit" class="buy-window__buy-btn">Оформить заказ</button>
                            </form>
                        </div>
                    </div>
                </div>`
    }
}

const usualCatalog = new Catalog(usualItems);
const page = new Page();
