const { createApp, filter } = Vue.createApp({
    data() {
        return {
            errors: {
                name: '',
                email:'',
                pass: '',
                checkpass:''
            },
            name: '',
            email:'',
            pass: '',
            checkpass:''
        }
    },
    methods: {
        validate() {
            let isValid = true

            // Ten người dùng
            if (this.name == '' || this.name.length <3 || this.name.length ==0) {
                this.errors.name = 'Bạn phải nhập tên người dùng.'
                isValid = false
            }
            else {
                this.errors.name = ''
                isValid = true
            }
            // kiểm tra email
            if (!this.email) {
                this.errors.email = 'Bạn phải nhập email!'
                isValid = false
            }else if (!this.validateEmail(this.email)) { // Kiểm tra mẫu nhập EMAIL
                this.errors.email = 'Vui lòng nhập email đúng định dạng abc@gmail.com';}
            else {
                this.errors.email = ''
                isValid = true
            }
            // mật khẩu
            if (this.pass === 0) {
                this.errors.pass = 'Bạn phải nhập mật khẩu.'
                isValid = false
            } else if (this.pass.length < 8) {
                this.errors.pass = 'Mật khẩu phải có ít nhất 8 kí tự '
                isValid = false
            } else {
                this.errors.pass = ''
                isValid = true
            }
            // kiểm tra lại mk
            if (this.checkpass === 0) {
                this.errors.checkpass = 'Bạn phải nhập mật khẩu.'
                isValid = false
            }
            else if (this.checkpass !== this.pass) {
                this.errors.checkpass = 'Mật khẩu nhập lại phải giống '
                isValid = false
            } else {
                this.errors.checkpass = ''
                isValid = true
            }
            return isValid

            // nhập lại mk
        },
        validateEmail: function (email) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                return true;
            }
            return false;
        }
    }
}).mount('#app')