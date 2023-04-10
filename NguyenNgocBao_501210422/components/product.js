const app=Vue.createApp({
    data(){
        return{   
            searchString: "",         
            list:[
                {id:"N01",name: "Cam ruột đỏ Mỹ", price:500000, img:"./img/cam1.png", total:0,amount:1},
                {id:"N02",name: "Cam vàng Canada", price:425000, img:"./img/camvang.jpg", total:0,amount:1},
                {id:"N03",name: "Cherry vàng Mỹ", price:450000, img:"./img/cherry-vang-my.jpg", total:0,amount:1},
                {id:"N04",name: "Dâu tây Hàn Quốc", price:200000, img:"./img/dau-tay-han-quoc.jpg", total:0,amount:1},
                {id:"N05",name: "Dưa lưới Việt Nam", price:150000, img:"./img/dualuoi.jpg", total:0,amount:1},
                {id:"N06",name: "Bơ", price:100000, img:"./img/bo.jpg", total:0,amount:1},
                {id:"N07",name: "Cherry đỏ Mỹ", price:400000, img:"./img/cherry-do-my-3.jpg", total:0,amount:1},
                {id:"N08",name: "Lê xanh", price:150000, img:"./img/lexanh.jpg", total:0,amount:1},
                {id:"N09",name: "Nho xanh Úc", price:350000, img:"./img/nho-xanh-uc.jpg", total:0,amount:1},
                {id:"N10",name: "Kiwi", price:300000, img:"./img/kiwi.jpg", total:0,amount:1},
                {id:"N11",name: "Táo tàu", price:300000, img:"./img/taotau.jpg", total:0,amount:1},
                {id:"N12",name: "Lê vàng", price:70000, img:"./img/le.jpg", total:0,amount:1},
            ],
            filter: "Theo giá",
            updown: "Sắp xếp theo",
            cart: [],
            amount: 1
        }
    },
    computed: {
        filterList() {
            var list_array = this.list,
                searchString = this.searchString;
            // nếu ko nhập gì hết
            if (!searchString) {
                return 0;

            }
            // chuyển đổi xử lí đầu vào của chuỗi
            searchString = searchString.trim().toLowerCase();

            // lọc các list 
            list_array = list_array.filter(function(item) {
                // tìm vị vị trí của chũ ở vị trí nào của chuỗi
                if (item.name.toLowerCase().indexOf(searchString) !== -1) {
                    return item
                }
            })
            return list_array;
        },
        filterGoods() {
            
            var mang = [];
            switch (this.filter) {
                case "100,000đ":
                    mang = this.list.filter((i) => i.price < 100000);
                    break;
                case "100,000-200,000đ":
                    mang = this.list.filter(
                        (i) => i.price >= 100000 && i.price <= 200000
                    );
                    break;
                case "200,000-400,000đ":
                    mang = this.list.filter(
                        (i) => i.price >= 200000 && i.price <= 400000
                    );
                    break;
                case "400,000đ":
                    mang = this.list.filter((i) => i.price > 400000);
                    break;
                default:
                    mang = this.list;
                    break;
            }

            if (this.updown === "up") {
                mang.sort((a, b) => {
                    if (a.price < b.price) {
                        return -1;
                    }

                    if (a.price > b.price) {
                        return 1;
                    }

                    return 0;
                });
            } else if (this.updown === "down") {
                mang.sort((a, b) => {
                    if (a.price < b.price) {
                        return 1;
                    }

                    if (a.price > b.price) {
                        return -1;
                    }

                    return 0;
                });
            }
            return mang;
        
            
        },
        getSubTotal() {
            let initialValue = 0;
            this.cart.forEach(el=>{
                    initialValue += el.price * el.amount                 
            });
            return initialValue
        }
    },
    methods: {
        formatPrice(value) {
            let val = (value / 1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        add(sp) {
            let check = 0  ;
            this.cart.forEach(el => {
                if (el.id===sp.id) {
                    check = 1 ;
                    el.amount++
                }
            });
            if (check==0) {
                this.cart.push(sp);
            }
        },
        remove(id) {
            this.cart = this.cart.filter(el => el.id!==id)
        },
    }
}).mount('#app')