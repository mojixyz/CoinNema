webpackJsonp([0],{

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/developer/developer.module": [
		160
	],
	"../pages/notify/notify.module": [
		162
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeveloperPageModule", function() { return DeveloperPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__developer__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DeveloperPageModule = (function () {
    function DeveloperPageModule() {
    }
    DeveloperPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__developer__["a" /* DeveloperPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__developer__["a" /* DeveloperPage */]),
            ],
        })
    ], DeveloperPageModule);
    return DeveloperPageModule;
}());

//# sourceMappingURL=developer.module.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeveloperPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DeveloperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DeveloperPage = (function () {
    function DeveloperPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    DeveloperPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DeveloperPage');
    };
    DeveloperPage.prototype.telegram = function () {
        window.open("https://telegram.me/mojixyz", '_system');
    };
    DeveloperPage.prototype.email = function () {
        window.open("mailto:mr.mojixyz@protonmail.com?Subject=CoinNema", '_system');
    };
    DeveloperPage.prototype.api = function () {
        window.open("https://coindesk.com/", '_system');
    };
    DeveloperPage.prototype.about = function () {
        window.open("https://www.coindesk.com/about/", '_system');
    };
    DeveloperPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    DeveloperPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-developer',template:/*ion-inline-start:"/home/mojtaba/w/ionic/coinnegar/src/pages/developer/developer.html"*/'<!--\n  Generated template for the DeveloperPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<h2 style="color:green">توسعه دهنده:</h2>\n    <h3 align="center" style="color:red"> مجتبی رضایی</h3>\n    <div text-center>\n      <button ion-button icon-only large (click)="email()"> <ion-icon name="mail"></ion-icon></button>\n    <button ion-button icon-only large (click)="telegram()">  <ion-icon name="paper-plane"></ion-icon></button>\n  </div>\n  <div dir="ltr">\n  <h2 style="color:green;text-direction:ltr">API:</h2>\n      <h3 align="center" style="color:red" dir="ltr" >CoinDesk</h3>\n      <div text-center>\n        <button ion-button icon-only large (click)="api()"> <ion-icon name="link"></ion-icon></button>\n      <button ion-button icon-only large (click)="about()">  <ion-icon name="link"></ion-icon></button>\n    </div>\n      <button ion-button full small (click)="dismiss()" color="danger">بازگشت</button>\n</div>\n'/*ion-inline-end:"/home/mojtaba/w/ionic/coinnegar/src/pages/developer/developer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], DeveloperPage);
    return DeveloperPage;
}());

//# sourceMappingURL=developer.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyPageModule", function() { return NotifyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notify__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotifyPageModule = (function () {
    function NotifyPageModule() {
    }
    NotifyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notify__["a" /* NotifyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notify__["a" /* NotifyPage */]),
            ],
        })
    ], NotifyPageModule);
    return NotifyPageModule;
}());

//# sourceMappingURL=notify.module.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NotifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotifyPage = (function () {
    function NotifyPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.data = {
            price: 0,
            big: "",
            curn: "",
            repat: false
        };
        this.big = null;
        this.price = null;
        this.curn = null;
        this.repat = true;
    }
    NotifyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotifyPage');
    };
    NotifyPage.prototype.dismiss = function () {
        this.data.big = this.big;
        this.data.price = this.price;
        this.data.curn = this.curn;
        this.data.repat = this.repat;
        this.viewCtrl.dismiss(this.data);
    };
    NotifyPage.prototype.dismissnull = function () {
        this.viewCtrl.dismiss();
    };
    NotifyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notify',template:/*ion-inline-start:"/home/mojtaba/w/ionic/coinnegar/src/pages/notify/notify.html"*/'<!--\n  Generated template for the NotifyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-list>\n\n  <ion-item>\n    <ion-label floating >ارزش بیت کوین</ion-label>\n    <ion-input type="number" [value]="price" [(ngModel)]="price" ></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>ارز</ion-label>\n    <ion-select [(ngModel)]="curn" cancelText="بازگشت" okText="انتخاب">\n      <ion-option value="dollar">دلار</ion-option>\n      <ion-option value="rial">ریال</ion-option>\n\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label>کم و بیش</ion-label>\n    <ion-select [(ngModel)]="big" cancelText="بازگشت" okText="انتخاب">\n        <ion-option value="big">بیشتر</ion-option>\n      <ion-option value="less">کمتر</ion-option>\n\n\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n  <ion-label>یک بار</ion-label>\n  <ion-checkbox  [(ngModel)]="repat"></ion-checkbox>\n</ion-item>\n</ion-list>\n\n <ion-row>\n	<ion-col col-6>\n		<button ion-button color="default" (click)="dismiss()" large>\n			<b>ثبت کن</b>\n		</button>\n	</ion-col>\n  <ion-col col-6>\n    <button ion-button color="danger" (click)="dismissnull()" large >\n      <b>بی خیال</b>\n    </button>\n  </ion-col>\n\n</ion-row>\n'/*ion-inline-end:"/home/mojtaba/w/ionic/coinnegar/src/pages/notify/notify.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], NotifyPage);
    return NotifyPage;
}());

//# sourceMappingURL=notify.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jalali_moment__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jalali_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jalali_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__notify_notify__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__developer_developer__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var HomePage = (function () {
    function HomePage(navCtrl, http, socialSharing, actionSheetCtrl, localNotifications, popoverCtrl, toastCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.socialSharing = socialSharing;
        this.actionSheetCtrl = actionSheetCtrl;
        this.localNotifications = localNotifications;
        this.popoverCtrl = popoverCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.price = "";
        this.faprice = "";
        this.show = "";
        this.color = "green";
        this.tag = "دلار";
        this.time = "";
        this.vaz = true;
        this.datadate = [];
        this.rate = [];
        this.monthdatadate = [];
        this.monthrate = [];
        this.persian = [];
        this.strw = "54321";
        this.icon = 'notifications';
        this.id = 1;
        this.data = {
            price: 0,
            big: "",
            curn: "",
            repat: false
        };
        this.pet = null;
        this.lineChartData = [
            { data: this.rate, label: 'ارزش بیت کوین' },
        ];
        this.lineChartLabels = this.datadate;
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: '#FFC107',
                borderColor: '#FF9800',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.lineChartData1 = [
            { data: this.monthdatadate, label: 'ارزش بیت کوین' },
        ];
        this.lineChartLabels1 = this.monthdatadate;
        this.lineChartOptions1 = {
            responsive: true
        };
        this.lineChartColors1 = [
            {
                backgroundColor: '#FFC107',
                borderColor: '#FF9800',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend1 = true;
        this.lineChartType1 = 'line';
        this.storage.get('status').then(function (val) {
            if (val)
                _this.icon = "notifications-off";
        });
        this.pet = "kittens";
        this.persian['0'] = '۰';
        this.persian['1'] = '۱';
        this.persian['2'] = '۲';
        this.persian['3'] = '۳';
        this.persian['4'] = '۴';
        this.persian['5'] = '۵';
        this.persian['6'] = '۶';
        this.persian['7'] = '۷';
        this.persian['8'] = '۸';
        this.persian['9'] = '۹';
        this.persian['.'] = '.';
        this.persian['-'] = '-';
        this.persian[':'] = ':';
        this.persian[','] = ',';
        this.curent_update();
        this.days_update();
        this.months_update();
        setInterval(function () {
            _this.notify();
        }, 60000);
        this.dopersian(this.strw);
    }
    HomePage.prototype.dopersian = function (stri) {
        var s = stri;
        var i = s.length;
        var stro = "";
        for (var j = 0; j < i; j++) {
            stro = stro + this.persian[s.charAt(j)];
        }
        return stro;
    };
    HomePage.prototype.showing = function () {
        if (this.vaz) {
            this.show = this.faprice;
            this.vaz = false;
            this.color = "red";
            this.tag = "ریال";
        }
        else {
            this.show = this.price;
            this.vaz = true;
            this.color = "green";
            this.tag = "دلار";
        }
    };
    HomePage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'یک گزینه را انتخاب کنید',
            buttons: [
                {
                    icon: 'timer',
                    text: 'اشتراک گذاری ارزش این لحظه',
                    handler: function () {
                        _this.share();
                    }
                }, {
                    icon: 'calendar',
                    text: 'تغیر قیمت یک ماه پیش (متنی)',
                    handler: function () {
                        _this.month_share();
                    }
                }, {
                    icon: 'calendar',
                    text: 'تغیر قیمت سه ماه پیش (متنی)',
                    handler: function () {
                        _this.month_sharing();
                    }
                }, {
                    icon: 'close',
                    text: 'بازگشت',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    HomePage.prototype.presentPopover = function () {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_7__notify_notify__["a" /* NotifyPage */]);
        popover.present();
        popover.onDidDismiss(function (data) {
            console.log(data);
            if (data != null) {
                if (data.price != null && data.curn != null && data.big != null) {
                    _this.icon = 'notifications-off';
                    _this.storage.set('status', true);
                    _this.storage.set('data', data);
                    _this.storage.get('data').then(function (val) {
                        console.log('Your age is', val);
                    });
                    _this.presentToast('اعلان فعال شد');
                }
            }
        });
    };
    HomePage.prototype.presentPopover2 = function () {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_8__developer_developer__["a" /* DeveloperPage */]);
        popover.present();
    };
    HomePage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 2000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    HomePage.prototype.not = function (text) {
        this.localNotifications.schedule({
            id: this.id,
            text: text,
            icon: "show",
            smallIcon: "show",
            sound: 'file://assets/sounds/coin.mp3'
        });
        this.id++;
        this.presentToast(text);
    };
    HomePage.prototype.notify = function () {
        var _this = this;
        this.storage.get('status').then(function (val) {
            console.log(val);
            if (val) {
                _this.curent_update();
                _this.storage.get('data').then(function (val2) {
                    console.log(val2);
                    if (val2.big == "big") {
                        if (val2.curn == "dollar")
                            if (parseInt(_this.price.replace(',', '')) > val2.price) {
                                var text = "ارزش بیت کوین از " + _this.dopersian(val2.price) + " دلار بیشتر شد";
                                console.log(text);
                                _this.not(text);
                                if (val2.repat) {
                                    _this.icon = 'notifications';
                                    _this.storage.set('status', false);
                                }
                            }
                        if (val2.curn == "rial")
                            if (parseInt(_this.faprice.replace(',', '')) > val2.price) {
                                var text = "ارزش بیت کوین از " + _this.dopersian(val2.price) + " ریال بیشتر شد";
                                console.log(text);
                                _this.not(text);
                                if (val2.repat) {
                                    _this.icon = 'notifications';
                                    _this.storage.set('status', false);
                                }
                            }
                    }
                    if (val2.big == "less") {
                        if (val2.curn == "dollar")
                            if (parseInt(_this.price.replace(',', '')) < val2.price) {
                                var text = "ارزش بیت کوین از " + _this.dopersian(val2.price) + " دلار کمتر شد";
                                console.log(text);
                                _this.not(text);
                                if (val2.repat) {
                                    _this.icon = 'notifications';
                                    _this.storage.set('status', false);
                                }
                            }
                        if (val2.curn == "rial")
                            if (parseInt(_this.faprice.replace(',', '')) < val2.price) {
                                var text = "ارزش بیت کوین از " + _this.dopersian(val2.price) + " ریال کمتر شد";
                                console.log(text);
                                _this.not(text);
                                if (val2.repat) {
                                    _this.icon = 'notifications';
                                    _this.storage.set('status', false);
                                }
                            }
                    }
                });
            }
        });
    };
    HomePage.prototype.share = function () {
        var str = "";
        str = str + "ارزش بیت کوین در این لحظه\n";
        str = str + this.dopersian(this.price);
        str = str + " دلار";
        str = str + "\n";
        str = str + this.dopersian(this.faprice);
        str = str + " ریال";
        console.log(str);
        this.socialSharing.share(str, 'ارزش فعلی بیت کوین');
    };
    HomePage.prototype.month_share = function () {
        var str = "";
        str = str + "ارزش بیت کوین از یکماه پیش\n";
        var i = this.rate.length;
        for (var j = 0; j < i; j++)
            str = str + this.datadate[j] + " = " + this.dopersian(this.rate[j].toString()) + " دلار " + "\n";
        this.socialSharing.share(str, 'ارزش بیت کوین از یکماه پیش');
        console.log(str);
    };
    ;
    HomePage.prototype.month_sharing = function () {
        var str = "";
        str = str + "ارزش بیت کوین از سه ماه پیش\n";
        var i = this.monthrate.length;
        for (var j = 0; j < i; j++)
            str = str + this.monthdatadate[j] + " = " + this.dopersian(this.monthrate[j].toString()) + " دلار " + "\n";
        this.socialSharing.share(str, 'ارزش بیت کوین از سه ماه پیش');
        console.log(str);
    };
    ;
    HomePage.prototype.chartClicked = function (e) {
        console.log(e);
    };
    HomePage.prototype.chartHovered = function (e) {
        console.log(e);
    };
    HomePage.prototype.chartClicked1 = function (e) {
        console.log(e);
    };
    HomePage.prototype.chartHovered1 = function (e) {
        console.log(e);
    };
    HomePage.prototype.curent_update = function () {
        var _this = this;
        this.http.get("https://api.coindesk.com/v1/bpi/currentprice/IRR.json").map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.price = data.bpi.USD['rate'];
            _this.faprice = data.bpi.IRR['rate'];
            _this.time = data.time.updated;
            if (_this.tag == "دلار")
                _this.show = _this.price;
            else
                _this.show = _this.faprice;
            console.log("updated");
        });
    };
    HomePage.prototype.days_update = function () {
        var _this = this;
        this.http.get("https://api.coindesk.com/v1/bpi/historical/close.json?start=" + __WEBPACK_IMPORTED_MODULE_6_jalali_moment__().utc().subtract(1, 'day').subtract(1, 'month').format('YYYY-MM-DD') + "&end=" + __WEBPACK_IMPORTED_MODULE_6_jalali_moment__().utc().subtract(1, 'day').format('YYYY-MM-DD') + "").map(function (res) { return res.json(); }).subscribe(function (data) {
            var i = Object.keys(data.bpi).length;
            for (var y = 0; y < i; y++) {
                var str = __WEBPACK_IMPORTED_MODULE_6_jalali_moment__().utc().subtract(1, 'day').subtract(1, 'month').add(y, 'day').format("YYYY-MM-DD");
                _this.datadate.push(_this.dopersian(__WEBPACK_IMPORTED_MODULE_6_jalali_moment__(str).format('jYYYY-jM-jD')));
                _this.rate.push(Number(data.bpi[str]));
            }
            var _lineChartData = new Array(_this.lineChartData.length);
            for (var i_1 = 0; i_1 < _this.lineChartData.length; i_1++) {
                _lineChartData[i_1] = { data: new Array(_this.lineChartData[i_1].data.length), label: _this.lineChartData[i_1].label };
                for (var j = 0; j < _this.lineChartData[i_1].data.length; j++) {
                    _lineChartData[i_1].data[j] = _this.rate[j];
                }
            }
            _this.lineChartData = _lineChartData;
        });
    };
    HomePage.prototype.months_update = function () {
        var _this = this;
        this.http.get("https://api.coindesk.com/v1/bpi/historical/close.json?start=" + __WEBPACK_IMPORTED_MODULE_6_jalali_moment__().utc().subtract(1, 'day').subtract(3, 'month').format('YYYY-MM-DD') + "&end=" + __WEBPACK_IMPORTED_MODULE_6_jalali_moment__().utc().subtract(1, 'day').format('YYYY-MM-DD') + "").map(function (res) { return res.json(); }).subscribe(function (data) {
            var i = Object.keys(data.bpi).length;
            for (var y = 0; y < i; y++) {
                var str = __WEBPACK_IMPORTED_MODULE_6_jalali_moment__().utc().subtract(1, 'day').subtract(3, 'month').add(y, 'day').format("YYYY-MM-DD");
                _this.monthdatadate.push(_this.dopersian(__WEBPACK_IMPORTED_MODULE_6_jalali_moment__(str).format('jYYYY-jM-jD')));
                _this.monthrate.push(Number(data.bpi[str]));
            }
            var _lineChartData1 = new Array(_this.lineChartData1.length);
            for (var i_2 = 0; i_2 < _this.lineChartData1.length; i_2++) {
                _lineChartData1[i_2] = { data: new Array(_this.lineChartData1[i_2].data.length), label: _this.lineChartData1[i_2].label };
                for (var j = 0; j < _this.lineChartData1[i_2].data.length; j++) {
                    _lineChartData1[i_2].data[j] = _this.monthrate[j];
                }
            }
            _this.lineChartData1 = _lineChartData1;
        });
    };
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            _this.curent_update();
            refresher.complete();
        }, 2000);
    };
    HomePage.prototype.donotify = function () {
        var _this = this;
        this.storage.get('status').then(function (val) {
            if (!val) {
                _this.presentPopover();
            }
            else {
                _this.icon = 'notifications';
                _this.storage.set('status', false);
                _this.presentToast('اعلان غیرفعال شد');
            }
        });
    };
    HomePage.prototype.appstore = function () {
        window.open("market://details?id=io.github.mojixyz.coinnema", '_system');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/home/mojtaba/w/ionic/coinnegar/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons left>\n        <button ion-button icon-only>\n            <ion-icon ios="logo-bitcoin" md="logo-bitcoin"></ion-icon>\n        </button>\n    </ion-buttons>\n    <ion-title><i><b>کوین نما</b></i></ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="appstore()"><ion-icon name="appstore"></ion-icon></button>\n\n      <button ion-button icon-only (click)=" presentPopover2()"><ion-icon name="information-circle"></ion-icon></button>\n      <button ion-button icon-only (click)="donotify()"><ion-icon [name]="icon"></ion-icon></button>\n\n      <button ion-button icon-only (click)="presentActionSheet()"><ion-icon name="share"></ion-icon></button>\n\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n   <ion-refresher-content\n     pullingIcon="arrow-dropdown"\n     pullingText="برای بروز رسانی پاین بکشید"\n     refreshingSpinner="circles"\n     refreshingText="بروز رسانی">\n   </ion-refresher-content>\n </ion-refresher>\n <h2 color=primary align="center">ارزش <i style="color:orange">بیت کوین</i> در این لحظه</h2>\n      <h3 align="center" [ngStyle]="{\'color\':color}" (click)="showing()">\n      {{show}} {{tag}}\n    </h3>\n\n\n  <h3 align=\'center\'>نمودار تغیر قیمت <i style="color:green">(دلار)</i></h3>\n          <div padding>\n                        <ion-segment [(ngModel)]="pet">\n                          <ion-segment-button value="kittens">\n                          یک ماه پیش\n                          </ion-segment-button>\n                          <ion-segment-button value="puppies">\n                            سه ماه پیش\n                          </ion-segment-button>\n                        </ion-segment>\n                      </div>\n\n                      <div [ngSwitch]="pet">\n                          <canvas dir="rtl" *ngSwitchCase="\'puppies\'"  baseChart width="100%" height="100%"\n                                      [datasets]="lineChartData1"\n                                      [labels]="lineChartLabels1"\n                                      [options]="lineChartOptions1"\n                                      [colors]="lineChartColors1"\n                                      [legend]="lineChartLegend1"\n                                      [chartType]="lineChartType1"\n                                      (chartHover)="chartHovered($event)"\n                                      (chartClick)="chartClicked($event)"></canvas>\n\n                          <canvas dir="rtl" *ngSwitchCase="\'kittens\'"  baseChart width="100%" height="100%"\n                                      [datasets]="lineChartData"\n                                      [labels]="lineChartLabels"\n                                      [options]="lineChartOptions"\n                                      [colors]="lineChartColors"\n                                      [legend]="lineChartLegend"\n                                      [chartType]="lineChartType"\n                                      (chartHover)="chartHovered1($event)"\n                                      (chartClick)="chartClicked1($event)"></canvas>\n                      </div>\n</ion-content>\n'/*ion-inline-end:"/home/mojtaba/w/ionic/coinnegar/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__["a" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(356);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_header_color__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_local_notifications__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home_module__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/developer/developer.module#DeveloperPageModule', name: 'DeveloperPage', segment: 'developer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notify/notify.module#NotifyPageModule', name: 'NotifyPage', segment: 'notify', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_header_color__["a" /* HeaderColor */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_local_notifications__["a" /* LocalNotifications */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_header_color__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, headerColor) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //statusBar.styleDefault();
            statusBar.backgroundColorByHexString('#488aff');
            headerColor.tint('#488aff');
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/mojtaba/w/ionic/coinnegar/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/mojtaba/w/ionic/coinnegar/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_header_color__["a" /* HeaderColor */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 211,
	"./af.js": 211,
	"./ar": 212,
	"./ar-dz": 213,
	"./ar-dz.js": 213,
	"./ar-kw": 214,
	"./ar-kw.js": 214,
	"./ar-ly": 215,
	"./ar-ly.js": 215,
	"./ar-ma": 216,
	"./ar-ma.js": 216,
	"./ar-sa": 217,
	"./ar-sa.js": 217,
	"./ar-tn": 218,
	"./ar-tn.js": 218,
	"./ar.js": 212,
	"./az": 219,
	"./az.js": 219,
	"./be": 220,
	"./be.js": 220,
	"./bg": 221,
	"./bg.js": 221,
	"./bn": 222,
	"./bn.js": 222,
	"./bo": 223,
	"./bo.js": 223,
	"./br": 224,
	"./br.js": 224,
	"./bs": 225,
	"./bs.js": 225,
	"./ca": 226,
	"./ca.js": 226,
	"./cs": 227,
	"./cs.js": 227,
	"./cv": 228,
	"./cv.js": 228,
	"./cy": 229,
	"./cy.js": 229,
	"./da": 230,
	"./da.js": 230,
	"./de": 231,
	"./de-at": 232,
	"./de-at.js": 232,
	"./de-ch": 233,
	"./de-ch.js": 233,
	"./de.js": 231,
	"./dv": 234,
	"./dv.js": 234,
	"./el": 235,
	"./el.js": 235,
	"./en-au": 236,
	"./en-au.js": 236,
	"./en-ca": 237,
	"./en-ca.js": 237,
	"./en-gb": 238,
	"./en-gb.js": 238,
	"./en-ie": 239,
	"./en-ie.js": 239,
	"./en-nz": 240,
	"./en-nz.js": 240,
	"./eo": 241,
	"./eo.js": 241,
	"./es": 242,
	"./es-do": 243,
	"./es-do.js": 243,
	"./es.js": 242,
	"./et": 244,
	"./et.js": 244,
	"./eu": 245,
	"./eu.js": 245,
	"./fa": 246,
	"./fa.js": 246,
	"./fi": 247,
	"./fi.js": 247,
	"./fo": 248,
	"./fo.js": 248,
	"./fr": 249,
	"./fr-ca": 250,
	"./fr-ca.js": 250,
	"./fr-ch": 251,
	"./fr-ch.js": 251,
	"./fr.js": 249,
	"./fy": 252,
	"./fy.js": 252,
	"./gd": 253,
	"./gd.js": 253,
	"./gl": 254,
	"./gl.js": 254,
	"./gom-latn": 255,
	"./gom-latn.js": 255,
	"./he": 256,
	"./he.js": 256,
	"./hi": 257,
	"./hi.js": 257,
	"./hr": 258,
	"./hr.js": 258,
	"./hu": 259,
	"./hu.js": 259,
	"./hy-am": 260,
	"./hy-am.js": 260,
	"./id": 261,
	"./id.js": 261,
	"./is": 262,
	"./is.js": 262,
	"./it": 263,
	"./it.js": 263,
	"./ja": 264,
	"./ja.js": 264,
	"./jv": 265,
	"./jv.js": 265,
	"./ka": 266,
	"./ka.js": 266,
	"./kk": 267,
	"./kk.js": 267,
	"./km": 268,
	"./km.js": 268,
	"./kn": 269,
	"./kn.js": 269,
	"./ko": 270,
	"./ko.js": 270,
	"./ky": 271,
	"./ky.js": 271,
	"./lb": 272,
	"./lb.js": 272,
	"./lo": 273,
	"./lo.js": 273,
	"./lt": 274,
	"./lt.js": 274,
	"./lv": 275,
	"./lv.js": 275,
	"./me": 276,
	"./me.js": 276,
	"./mi": 277,
	"./mi.js": 277,
	"./mk": 278,
	"./mk.js": 278,
	"./ml": 279,
	"./ml.js": 279,
	"./mr": 280,
	"./mr.js": 280,
	"./ms": 281,
	"./ms-my": 282,
	"./ms-my.js": 282,
	"./ms.js": 281,
	"./my": 283,
	"./my.js": 283,
	"./nb": 284,
	"./nb.js": 284,
	"./ne": 285,
	"./ne.js": 285,
	"./nl": 286,
	"./nl-be": 287,
	"./nl-be.js": 287,
	"./nl.js": 286,
	"./nn": 288,
	"./nn.js": 288,
	"./pa-in": 289,
	"./pa-in.js": 289,
	"./pl": 290,
	"./pl.js": 290,
	"./pt": 291,
	"./pt-br": 292,
	"./pt-br.js": 292,
	"./pt.js": 291,
	"./ro": 293,
	"./ro.js": 293,
	"./ru": 294,
	"./ru.js": 294,
	"./sd": 295,
	"./sd.js": 295,
	"./se": 296,
	"./se.js": 296,
	"./si": 297,
	"./si.js": 297,
	"./sk": 298,
	"./sk.js": 298,
	"./sl": 299,
	"./sl.js": 299,
	"./sq": 300,
	"./sq.js": 300,
	"./sr": 301,
	"./sr-cyrl": 302,
	"./sr-cyrl.js": 302,
	"./sr.js": 301,
	"./ss": 303,
	"./ss.js": 303,
	"./sv": 304,
	"./sv.js": 304,
	"./sw": 305,
	"./sw.js": 305,
	"./ta": 306,
	"./ta.js": 306,
	"./te": 307,
	"./te.js": 307,
	"./tet": 308,
	"./tet.js": 308,
	"./th": 309,
	"./th.js": 309,
	"./tl-ph": 310,
	"./tl-ph.js": 310,
	"./tlh": 311,
	"./tlh.js": 311,
	"./tr": 312,
	"./tr.js": 312,
	"./tzl": 313,
	"./tzl.js": 313,
	"./tzm": 314,
	"./tzm-latn": 315,
	"./tzm-latn.js": 315,
	"./tzm.js": 314,
	"./uk": 316,
	"./uk.js": 316,
	"./ur": 317,
	"./ur.js": 317,
	"./uz": 318,
	"./uz-latn": 319,
	"./uz-latn.js": 319,
	"./uz.js": 318,
	"./vi": 320,
	"./vi.js": 320,
	"./x-pseudo": 321,
	"./x-pseudo.js": 321,
	"./yo": 322,
	"./yo.js": 322,
	"./zh-cn": 323,
	"./zh-cn.js": 323,
	"./zh-hk": 324,
	"./zh-hk.js": 324,
	"./zh-tw": 325,
	"./zh-tw.js": 325
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 410;

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notify_notify_module__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__developer_developer_module__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_3__notify_notify_module__["NotifyPageModule"], __WEBPACK_IMPORTED_MODULE_4_ng2_charts__["ChartsModule"], __WEBPACK_IMPORTED_MODULE_5__developer_developer_module__["DeveloperPageModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__home__["a" /* HomePage */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__home__["a" /* HomePage */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_1__home__["a" /* HomePage */]] //<-- add all your module components to here
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ })

},[332]);
//# sourceMappingURL=main.js.map