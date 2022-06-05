(function(){"use strict";var t={8564:function(t,e,s){var i={};s.r(i);s(6992),s(8674),s(9601),s(7727);var a=s(9567),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Page")],1)},l=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page__content"},[s("div",{attrs:{id:"top"}}),s("Header",{on:{scroll:t.scrollChapter}}),s("div",{attrs:{id:"about-us"}}),s("AboutUs"),s("div",{attrs:{id:"specialty"}}),s("Specialty"),s("div",{attrs:{id:"for-applicants"}}),s("ForApplicants"),s("div",{attrs:{id:"call-us"}}),s("CallUs"),s("Cellar")],1)},c=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header",style:{backgroundImage:"url("+s(5681)+")"}},[i("div",{staticClass:"header__mask"},[i("div",{staticClass:"content"},[i("Cap",{class:{"background-color__black":t.backgroundCap},on:{scroll:[t.scrollToChapter,t.handleScroll]}}),i("div",{ref:"header"},[i("h3",{staticClass:"invite__title"},[t._v("Cambridge College of Computer Technology")]),i("p",{staticClass:"invite__text"},[t._v('совместно с ЧУО "Мужская гимназия" объявляет ограниченный набор абитуриентов на 2022/23 учебный год')]),t._m(0),t._m(1),i("button",{staticClass:"invite__button",on:{click:function(e){return t.scrollToChapter(t.callUsScroll)}}},[t._v("Подать заявку")])])],1)])])},u=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"invite__text mt-20"},[t._v("После 9 классов на специальности:"),s("span",[t._v(" Web-Design/FrontEnd, BackEnd, Data Science")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"invite__text invite__subtext"},[s("span",{staticClass:"fa fa-graduation-cap invite__subtext"},[t._v(" Выдаем американский диплом")])])}],d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cap"},[s("div",{staticClass:"cap__logo"},[s("h1",{staticClass:"logo__title",on:{click:function(e){return t.scroll("top")}}},[t._v("ccct")]),s("img",{staticClass:"logo__img",attrs:{src:"../../../assets/images/ico.png"}})]),t.screenWidth>=t.SCREEN_WIDTH.widthChangeBurgerToList?s("div",{staticClass:"cap__link-list"},t._l(t.linkList,(function(e){return s("a",{staticClass:"link-list__link",on:{click:function(s){return t.scroll(e.routeName)}}},[t._v(t._s(e.title))])})),0):s("div",{staticClass:"cap__burger",on:{click:function(e){t.burgerIsActive=!t.burgerIsActive}}},[s("span",{staticClass:"fa fa-ellipsis-h",class:{color_orange:t.burgerIsActive}}),s("h5",{class:{color_orange:t.burgerIsActive}},[t._v("Меню")]),s("transition",{attrs:{name:"burger"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.burgerIsActive,expression:"burgerIsActive"}],staticClass:"burger__link-list"},t._l(t.linkList,(function(e){return s("a",{staticClass:"burger__link",on:{click:function(s){return t.scroll(e.routeName)}}},[t._v(t._s(e.title))])})),0)])],1)])},_=[],p={widthChangeBurgerToList:992},f={name:"Cap",data:function(){return{screenWidth:window.innerWidth,burgerIsActive:!1,SCREEN_WIDTH:p}},created:function(){window.addEventListener("resize",this.updateScreenWidth)},computed:{linkList:function(){return[{title:"Почему мы",routeName:"about-us"},{title:"Специальности",routeName:"specialty"},{title:"Абитуриентам",routeName:"for-applicants"},{title:"Подать заявку",routeName:"call-us"}]}},methods:{updateScreenWidth:function(){this.screenWidth=window.innerWidth},scroll:function(t){this.$emit("scroll",{scrollTo:t})}}},v=f,g=s(3736),m=(0,g.Z)(v,d,_,!1,null,null,null),C=m.exports,h={name:"Header",components:{Cap:C},data:function(){return{headerPosition:110,callUsScroll:{scrollTo:"call-us"}}},created:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){this.headerPosition=this.$refs.header.getBoundingClientRect().y},scrollToChapter:function(t){this.$emit("scroll",{data:t})}},computed:{backgroundCap:function(){return this.headerPosition<110}}},b=h,w=(0,g.Z)(b,o,u,!1,null,null,null),x=w.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about-us"},[s("div",{staticClass:"content"},[s("div",{staticClass:"about-us__title"},[t._v("Почему мы?")]),t._l(t.infoRows,(function(t){return s("InfoRow",{attrs:{info:t}})})),s("div",{staticClass:"about-us__organizations"},[s("h4",{staticClass:"row__title"},[t._v("Студенческие организации")]),s("div",{staticClass:"organizations__description"},[s("p",{staticClass:"organizations__text"},[t._v("Каждый сможет найти занятие по душе не только во время обучения, но и в свободное время")]),t._l(t.organizationList,(function(e){return s("div",{staticClass:"organizations__list"},[s("span",{staticClass:"list__dot fa fa-dot-circle-o"}),s("span",[t._v(t._s(e))])])}))],2)])],2)])},k=[],y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"info__row"},[s("h4",{staticClass:"row__title",class:{"title-text-align_center":t.info.titleInCenter}},[t._v(t._s(t.info.title))]),t.textIsString?s("p",{staticClass:"row__text"},[t._v(t._s(t.info.text))]):t._e(),t.textIsString?t._e():s("div",{staticClass:"row__text",class:{"row-text__button-menu":t.info.withPopDownMenu,"row-text-justify-content_center":t.info.titleInCenter}},t._l(t.info.text,(function(e){return s("div",{key:e.id,staticClass:"object__text",class:{"object-text__button-menu":t.info.withPopDownMenu},on:{click:function(s){return t.toggleButtonAboutUs(e.id)}}},[s("div",[t.info.withPopDownMenu?t._e():s("span",{staticClass:"list__dot fa fa-dot-circle-o"}),t.info.withPopDownMenu?s("span",[t._v(t._s(e.title))]):s("span",[t._v(t._s(e))]),t.info.withPopDownMenu?s("span",{staticClass:"list__arrow fa fa-caret-down"}):t._e()]),t._l(t.showTogglesAboutUs,(function(i){return s("div",{staticClass:"list__pop-down-text_enable"},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.id===i,expression:"text.id === show"}]},[t._v(t._s(e.tip))])])}))],2)})),0)])},j=[],U=(s(4553),s(561),{name:"InfoRow",props:["info"],data:function(){return{showTogglesAboutUs:[],showTogglesForApplicants:[]}},methods:{toggleButtonAboutUs:function(t){this.showTogglesAboutUs.findIndex((function(e){return t===e}))>-1?this.showTogglesAboutUs.splice(this.showTogglesAboutUs.findIndex((function(e){return t===e})),1):this.showTogglesAboutUs.push(t)}},computed:{textIsString:function(){return"string"===typeof this.info.text}}}),T=U,E=(0,g.Z)(T,y,j,!1,null,null,null),I=E.exports,A={name:"AboutUs",components:{InfoRow:I},computed:{organizationList:function(){return["Студенческий союз для организации досуга и мероприятий","Волонтерское движение для тех, кто хочет помогать другим","Творческая команда для яркого отдыха","Спортивное объединение для тех, кто не привык сидеть на месте"]},infoRows:function(){return{firstRow:{title:"CCCT – колледж по подготовке специалистов в IT-сфере",text:[{id:1,title:"Передовые образовательные методики",tip:"Преподаем по методикам, разработанными в MIT"},{id:2,title:"Преподаватели практики",tip:"С реальным опытом разработки и внедрения"},{id:3,title:"Американский диплом",tip:"При успешной сдаче экзаменов студент получает диплом CCCT"},{id:4,title:"Очное обучение",tip:"Занятия проходят по адресу: г. Минск, пр-т Независимости 58/40 (ст.м. Площадь Якуба Коласа)"}],withPopDownMenu:!0},secondRow:{title:"Перспективы наших студентов",text:["Гарантированное трудоустройство в европейских и американских компаниях","Стажировки в партнерских компаниях","Формирование собственного портфолио"],withPopDownMenu:!1}}}}},D=A,P=(0,g.Z)(D,S,k,!1,null,null,null),$=P.exports,M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"for-applicants"},[s("div",{staticClass:"content"},[s("div",{staticClass:"for-applicants__title"},[t._v("Абитуриентам")]),t._l(t.infoRows,(function(t){return s("InfoRow",{attrs:{info:t}})})),s("h3",{staticClass:"for-applicants__subtitle row__title subtitle-text-align_center"},[t._v("Стоимость")]),s("div",{staticClass:"for-applicants__direction directions-media"},t._l(t.payments,(function(t){return s("Direction",{attrs:{direction:t}})})),1)],2)])},W=[],R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"direction",class:{"direction-for-applicants":t.direction.price}},[t.direction.imageUrl?s("img",{staticClass:"direction__img",attrs:{src:t.direction.imageUrl}}):t._e(),s("h5",{staticClass:"direction__title"},[t._v(t._s(t.direction.title))]),s("div",{staticClass:"direction__list"},t._l(t.direction.text,(function(e){return s("div",{staticClass:"direction__text"},[s("span",{staticClass:"list__dot fa fa-dot-circle-o"}),s("span",[t._v(t._s(e))])])})),0),t.direction.price?s("p",{staticClass:"direction__price"},[t._v(t._s(t.direction.price))]):t._e()])},L=[],Z={name:"Direction",props:["direction"]},O=Z,N=(0,g.Z)(O,R,L,!1,null,null,null),B=N.exports,H={name:"ForApplicants",components:{Direction:B,InfoRow:I},computed:{infoRows:function(){return{firstRow:{title:"Алгоритм зачисления",text:[{id:1,title:"Подать заявку",tip:"Дата окончания приема заявок 01.07.2022. После окончания 9 класса"},{id:2,title:"Получить консультацию",tip:"После подачи заявки мы с вами свяжемся для консультации по существующим вопросам и пригласим на собеседование для допуска к вступительным экзаменам"},{id:3,title:"Пройти собеседование",tip:"Собеседование проводится членом приемной комиссии по адресу: г. Минск, пр-т Независимости 58/40 (ст.м. Площадь Якуба Коласа)"},{id:4,title:"Сдать вступительные экзамены",tip:"Для поступления в CCCT необходимо сдать экзамены по следующим предметам: математика, английский язык, логика и кругозор"},{id:5,title:"Предоставить необходимые документы",tip:"Необходимо предоставить аттестат об окончании 9/11 класса, справку о состоянии здоровья, анкету для заключения договора, заявление"},{id:6,title:"Оплатить вступительный взнос",tip:"Оплатить взнос в размере 100 BYN в кассу учреждения или через ЕРИП"}],withPopDownMenu:!0,titleInCenter:!0}}},payments:function(){return{frontend:{title:"Очное после 9 класса",text:["Срок обучения - 3 года","Общеобразовательная программа","Американский диплом"],price:"300€"},backend:{title:"Очное после 11 класса",text:["Срок обучения - 2 года","Дополнительная практика","Американский диплом"],price:"200€"},datascience:{title:"Заочное после 11 класса",text:["Срок обучения - 3 года","6 + 1 сессий","Американский диплом"],price:"200€"}}}}},z=H,F=(0,g.Z)(z,M,W,!1,null,null,null),G=F.exports,V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer",style:{backgroundImage:"url("+s(362)+")"}},[i("div",{staticClass:"footer__mask"},[i("div",{staticClass:"content"},[i("div",{staticClass:"footer__content"},[i("h3",{staticClass:"specialty-call-us__title"},[t._v("Подать заявку")]),t._m(0),i("div",{staticClass:"footer__contacts"},[i("div",{staticClass:"contacts__contact"},[i("img",{staticClass:"contact__img",attrs:{src:"../../../assets/images/phone.png"}}),i("a",{staticClass:"contact__value",attrs:{href:"tel:+375293480183"}},[t._v("+375-29-348-01-83")])]),i("div",{staticClass:"contacts__contact"},[i("img",{staticClass:"contact__img",attrs:{src:"../../../assets/images/email.png"}}),i("a",{staticClass:"contact__value",attrs:{href:"mailto:ccct@m-college.online"}},[t._v("ccct@m-college.online")])])])])])])])},q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer__call-us"},[s("p",{staticClass:"call-us__text"},[t._v("Записаться на консультацию")]),s("a",{staticClass:"invite__button",attrs:{href:"https://forms.gle/L6xxG79LJ6mkSvjw6"}},[t._v("Подать заявку")])])}],J={name:"CallUs",data:function(){return{formName:"",formPhone:""}}},K=J,Q=(0,g.Z)(K,V,q,!1,null,null,null),X=Q.exports,Y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"specialty",style:{backgroundImage:"url("+s(8205)+")"}},[i("div",{staticClass:"specialty__top-mask"},[i("div",{staticClass:"specialty__bottom-mask"},[i("div",{staticClass:"content"},[i("div",{staticClass:"specialty__content"},[i("h3",{staticClass:"specialty-call-us__title"},[t._v("Специальности")]),t._m(0),i("div",{staticClass:"specialty__directions directions-media"},t._l(t.directions,(function(t){return i("Direction",{attrs:{direction:t}})})),1),t._m(1),i("VueSlickCarousel",t._b({staticClass:"specialty__carousel"},"VueSlickCarousel",t.slickSliderSettings,!1),[i("CarouselSlide",{attrs:{data:t.slides[0]}}),i("CarouselSlide",{attrs:{data:t.slides[1]}}),i("CarouselSlide",{attrs:{data:t.slides[2]}}),i("CarouselSlide",{attrs:{data:t.slides[3]}}),i("CarouselSlide",{attrs:{data:t.slides[4]}}),i("CarouselSlide",{attrs:{data:t.slides[5]}}),i("CarouselSlide",{attrs:{data:t.slides[6]}}),i("CarouselSlide",{attrs:{data:t.slides[7]}}),i("CarouselSlide",{attrs:{data:t.slides[8]}}),i("CarouselSlide",{attrs:{data:t.slides[9]}}),i("CarouselSlide",{attrs:{data:t.slides[10]}})],1)],1)])])])])},tt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"specialty__info"},[s("h5",{staticClass:"specialty__title"},[t._v("Срок обучения после 9 классов - 3 года")]),s("p",{staticClass:"specialty__text"},[t._v("Обучение по 3 направлениям")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"specialty__info"},[s("h5",{staticClass:"specialty__title"},[t._v("Преподаватели")]),s("p",{staticClass:"specialty__text"},[t._v("В CCCT преподают специалисты с реальным опытом разработки и внедрения, а так же американские спикеры")])])}],et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slide"},[s("img",{staticClass:"slide__img",attrs:{src:t.data.imageUrl}}),s("p",{staticClass:"slide__name"},[t._v(t._s(t.data.name))]),s("p",{staticClass:"slide__subject"},[t._v(t._s(t.data.subject))])])},st=[],it={name:"CarouselSlide",props:["data"]},at=it,nt=(0,g.Z)(at,et,st,!1,null,null,null),lt=nt.exports,rt=s(9421),ct=s.n(rt),ot={widthChangeCarousel:992},ut={name:"Specialty",components:{CarouselSlide:lt,Direction:B,VueSlickCarousel:ct()},data:function(){return{screenWidth:window.innerWidth,SCREEN_WIDTH:ot,slides:[{id:1,name:"Илья Азявчиков",subject:"прикладная информатика",imageUrl:"../../../assets/images/teachers/Azyauchikau.jpg"},{id:2,name:"Артемий Морозов",subject:"PHP/Python",imageUrl:"../../../assets/images/teachers/Marozau.png"},{id:3,name:"Егор Петрико",subject:"UX/UI Design",imageUrl:"../../../assets/images/teachers/petriko.jpg"},{id:4,name:"Федор Стежко",subject:"адаптивная верстка",imageUrl:"../../../assets/images/teachers/stejko.jpg"},{id:5,name:"Александр Бабук",subject:"английский язык",imageUrl:"../../../assets/images/teachers/babuk.jpg"},{id:6,name:"Марк Величко",subject:"высшая математика",imageUrl:"../../../assets/images/teachers/velichko.jpg"},{id:7,name:"Haqi Al-Ganabi",subject:"Основы экономики",imageUrl:"../../../assets/images/teachers/haqi.jpg"},{id:8,name:"Dr. Hui Zhang",subject:"Основы Data Science",imageUrl:"../../../assets/images/teachers/Hui.jpg"},{id:9,name:"DR. Gagik Bakhshyan",subject:"Основы психологии",imageUrl:"../../../assets/images/teachers/Gagik.jpg"},{id:10,name:"Kaji DahalKaji Dahal",subject:"Работа с базами данных",imageUrl:"../../../assets/images/teachers/Kaji.jpg"},{id:11,name:"Suresh Bhattarai",subject:"Физика",imageUrl:"../../../assets/images/teachers/suressh.jpg"}]}},created:function(){window.addEventListener("resize",this.updateScreenWidth)},methods:{updateScreenWidth:function(){this.screenWidth=window.innerWidth}},computed:{slickSliderSettings:function(){return{arrows:this.screenWidth>=ot.widthChangeCarousel,autoplay:!0,autoplaySpeed:3500,dots:!0,infinite:!0,initialSlide:2,speed:700,slidesToShow:this.screenWidth>=ot.widthChangeCarousel?3:1,slidesToScroll:1,swipeToSlide:!0}},directions:function(){return{frontend:{imageUrl:"../../../assets/images/directions/frontend.png",title:"Web-design/FrontEnd",text:["Algorithms","UI/UX Design","Адаптивная верстка (HTML, CSS, JS)","Психология веб-дизайна"]},backend:{imageUrl:"../../../assets/images/directions/backend.png",title:"BackEnd",text:["Algorithms","С/С++","PHP/C#/Java","Работа с базами данных (MySQL, MongoDB, PostgreSQL)"]},datascience:{imageUrl:"../../../assets/images/directions/datascience.png",title:"Data Science",text:["Algorithms","Высшая математика (математические алгоритмы)","C/C++","Python/R/MATLAB"]}}}}},dt=ut,_t=(0,g.Z)(dt,Y,tt,!1,null,null,null),pt=_t.exports,ft=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},vt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cellar"},[s("div",{staticClass:"content"},[s("div",{staticClass:"cellar__content"},[s("div",{staticClass:"cellar__up-content"},[s("div",{staticClass:"cellar__requisites"},[s("div",{staticClass:"cellar__title"},[t._v("Реквизиты")]),s("div",{staticClass:"cellar__text"},[t._v("Частное учреждение образования “Мужская гимназия”")]),s("div",{staticClass:"cellar__text"},[t._v("УНП 193441319")]),s("div",{staticClass:"cellar__text"},[t._v("220067, Беларусь, Минск, ул.Прушинских 78")]),s("div",{staticClass:"cellar__text"},[t._v("Свидетельство о гос. регистрации №193441319")]),s("div",{staticClass:"cellar__text"},[t._v("от 08.07.2020 г. выдано Мингорисполкомом")])])]),s("div",{staticClass:"cellar__down-content"},[s("div",{staticClass:"cellar__socials"},[s("a",{staticClass:"socials__social"},[s("span",{staticClass:"social-facebook fa fa-facebook"})]),s("a",{staticClass:"socials__social"},[s("span",{staticClass:"social-instagram fa fa-instagram"})]),s("a",{staticClass:"socials__social"},[s("span",{staticClass:"social-telegram fa fa-paper-plane"})]),s("a",{staticClass:"socials__social"},[s("span",{staticClass:"social-vk fa fa-vk"})])])])]),s("div",{staticClass:"cellar__rules cellar__text"},[t._v("© 2022. Все права закреплены за M-GYMNASIUM Sp.Z.O.O")])])])}],gt={name:"Cellar"},mt=gt,Ct=(0,g.Z)(mt,ft,vt,!1,null,null,null),ht=Ct.exports,bt={name:"Page",components:{Cellar:ht,Specialty:pt,CallUs:X,ForApplicants:G,AboutUs:$,Header:x},methods:{scrollChapter:function(t){var e=document.getElementById(t.data.scrollTo);e.scrollIntoView({behavior:"smooth"})}}},wt=bt,xt=(0,g.Z)(wt,r,c,!1,null,null,null),St=xt.exports,kt={name:"App",components:{Page:St}},yt=kt,jt=(0,g.Z)(yt,n,l,!1,null,null,null),Ut=jt.exports;a.Z.config.productionTip=!1,new a.Z({styles:i["default"],render:function(t){return t(Ut)}}).$mount("#app")},362:function(t,e,s){t.exports=s.p+"img/call-us.4089a184.png"},5681:function(t,e,s){t.exports=s.p+"img/header.f4edf1d8.png"},8205:function(t,e,s){t.exports=s.p+"img/specialty.76727682.png"}},e={};function s(i){var a=e[i];if(void 0!==a)return a.exports;var n=e[i]={id:i,loaded:!1,exports:{}};return t[i].call(n.exports,n,n.exports,s),n.loaded=!0,n.exports}s.m=t,function(){var t=[];s.O=function(e,i,a,n){if(!i){var l=1/0;for(u=0;u<t.length;u++){i=t[u][0],a=t[u][1],n=t[u][2];for(var r=!0,c=0;c<i.length;c++)(!1&n||l>=n)&&Object.keys(s.O).every((function(t){return s.O[t](i[c])}))?i.splice(c--,1):(r=!1,n<l&&(l=n));if(r){t.splice(u--,1);var o=a();void 0!==o&&(e=o)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[i,a,n]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){s.p="/"}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,i){var a,n,l=i[0],r=i[1],c=i[2],o=0;if(l.some((function(e){return 0!==t[e]}))){for(a in r)s.o(r,a)&&(s.m[a]=r[a]);if(c)var u=c(s)}for(e&&e(i);o<l.length;o++)n=l[o],s.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return s.O(u)},i=self["webpackChunkvue_movie"]=self["webpackChunkvue_movie"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=s.O(void 0,[998],(function(){return s(8564)}));i=s.O(i)})();
//# sourceMappingURL=app-legacy.aa41c4fe.js.map