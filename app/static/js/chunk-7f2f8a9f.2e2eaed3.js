(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f2f8a9f"],{"20e9":function(e,t,i){"use strict";i("c136")},"9e54":function(e,t,i){},"9ec7":function(e,t,i){},b633:function(e,t,i){"use strict";i("fb73")},c136:function(e,t,i){},c66d:function(e,t,i){"use strict";i.r(t);i("b0c0");var n=i("7a23"),r={class:"profile"};function c(e,t,i,c,o,s){var a=Object(n["C"])("profile-header"),l=Object(n["C"])("profile-body"),u=Object(n["C"])("EditProfilePopup");return Object(n["u"])(),Object(n["g"])("div",r,[Object(n["k"])(a,{id:o.userId,following:o.following,followers:o.followers,name:o.name},null,8,["id","following","followers","name"]),Object(n["k"])(l),e.getEditProfileStatus?(Object(n["u"])(),Object(n["e"])(u,{key:0})):Object(n["f"])("",!0)])}var o=i("1da1"),s=i("5530"),a=(i("96cf"),{class:"profile-body"}),l=Object(n["i"])('<div class="sections"><div class="sections-item active"> Твиты </div><div class="sections-item"> Твиты и ответы </div><div class="sections-item"> Медиа </div><div class="sections-item"> Нравится </div></div>',1),u={key:0,class:"tweets-wrapper"};function d(e,t,i,r,c,o){var s=Object(n["C"])("tweet");return Object(n["u"])(),Object(n["g"])("div",a,[l,c.userTweets?(Object(n["u"])(),Object(n["g"])("div",u,[(Object(n["u"])(!0),Object(n["g"])(n["a"],null,Object(n["A"])(c.userTweets,(function(e){return Object(n["u"])(),Object(n["e"])(s,{key:e.id,"tweet-data":e,onDeleteTweet:o.getTweets,onGetTweets:o.getTweets},null,8,["tweet-data","onDeleteTweet","onGetTweets"])})),128))])):Object(n["f"])("",!0)])}var b=i("9257"),f=i("5502"),p={name:"ProfileBody",components:{Tweet:b["a"]},data:function(){return{userTweets:[]}},computed:Object(s["a"])({},Object(f["b"])(["getMyProfileId"])),mounted:function(){this.getTweets()},methods:{handleTweetDelete:function(){this.getTweets()},getTweets:function(){return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}}};i("dad5");p.render=d;var j=p,O=(i("a4d3"),i("e01a"),{key:0}),m={class:"profile-cover-pic"},h=["src"],v={class:"profile-header"},w={class:"profile-actions"},g={class:"profile-actions-image"},k=["src"],y={class:"profile-actions-edit"},P={class:"profile-info"},I={class:"profile-info-name"},D={class:"profile-info-username"},T={class:"profile-description"},C={class:"profile-created-at"},M=["href"],R=Object(n["j"])(" Регистрация: май 2011 г. "),E={class:"profile-follower-counts"},x=Object(n["h"])("span",null,"в читаемых",-1),S=Object(n["h"])("span",null,"читателя",-1);function H(e,t,i,r,c,o){var s,a,l=Object(n["C"])("base-icon");return e.me.id?(Object(n["u"])(),Object(n["g"])("header",O,[Object(n["h"])("div",m,[Object(n["h"])("img",{src:e.me.profile.pic_cover},null,8,h)]),Object(n["h"])("div",v,[Object(n["h"])("div",w,[Object(n["h"])("div",g,[Object(n["h"])("img",{src:o.avatar},null,8,k)]),Object(n["h"])("div",y,[Object(n["h"])("div",{class:"edit-button",onClick:t[0]||(t[0]=function(t){return e.$store.commit("setEditProfileStatus",!0)})}," Редактировать ")])]),Object(n["h"])("div",P,[Object(n["h"])("p",I,Object(n["F"])(i.name),1),Object(n["h"])("span",D,Object(n["F"])(i.name),1)]),Object(n["h"])("div",T,Object(n["F"])(e.me.profile.description),1),Object(n["h"])("div",C,[Object(n["h"])("span",null,[Object(n["k"])(l,{icon:"link"}),Object(n["h"])("a",{href:o.profileWebsite.full_website},Object(n["F"])(o.profileWebsite.website),9,M)]),Object(n["h"])("span",null,[Object(n["k"])(l,{icon:"calendar"}),R])]),Object(n["h"])("div",E,[Object(n["h"])("p",null,[Object(n["j"])(Object(n["F"])(null===(s=i.following)||void 0===s?void 0:s.length)+" ",1),x]),Object(n["h"])("p",null,[Object(n["j"])(Object(n["F"])(null===(a=i.followers)||void 0===a?void 0:a.length)+" ",1),S])])])])):Object(n["f"])("",!0)}i("a9e3"),i("d3b7"),i("3ca3"),i("ddb0"),i("2b3d");var U=i("c1df"),V=i.n(U),$=i("8bac"),A=i("7f56"),F=new A["AvatarGenerator"],L={name:"ProfileHeader",components:{BaseIcon:$["a"]},props:{id:Number,following:Array,followers:Array,name:String},computed:Object(s["a"])(Object(s["a"])({},Object(f["b"])({getMyProfileId:"getMyProfileId",me:"getMe"})),{},{avatar:function(){return F.generateRandomAvatar(Number(this.id))},profileWebsite:function(){return{website:new URL(new URL(this.me.profile.website)).host,full_website:this.me.profile.website}},joinedAtDate:function(){return"".concat(V()(this.me.createdAt).format("MMM YYYY"))}}),methods:{moment:V.a}};i("20e9");L.render=H;var B=L,W=function(e){return Object(n["x"])("data-v-52dcc2ce"),e=e(),Object(n["v"])(),e},_={class:"edit-profile-wrapper"},K={class:"edit-profile-popup-header"},Y=W((function(){return Object(n["h"])("div",{class:"heading"},[Object(n["h"])("h3",null,"Изменить профиль")],-1)})),q={class:"submit-button"},G=["disabled"],J={class:"edit-form"},N={class:"edit-form-item"},z=W((function(){return Object(n["h"])("label",{for:"name"},"Имя",-1)})),Q={class:"edit-form-item"},X=W((function(){return Object(n["h"])("label",{for:"description"},"Описание",-1)})),Z={class:"edit-form-item"},ee=W((function(){return Object(n["h"])("label",{for:"website"},"Сайт",-1)}));function te(e,t,i,r,c,o){var s=Object(n["C"])("BaseIcon");return Object(n["u"])(),Object(n["g"])("div",{ref:"popupWrapper",class:"edit-profile-popup",onClick:t[5]||(t[5]=function(){return o.handleClickOutside&&o.handleClickOutside.apply(o,arguments)}),onKeydown:t[6]||(t[6]=Object(n["L"])((function(t){return e.$store.commit("setEditProfileStatus",!1)}),["esc"]))},[Object(n["h"])("div",_,[Object(n["h"])("div",K,[Object(n["h"])("div",{class:"close-button",onClick:t[0]||(t[0]=function(t){return e.$store.commit("setEditProfileStatus",!1)})},[Object(n["k"])(s,{icon:"close"})]),Y,Object(n["h"])("div",q,[Object(n["h"])("button",{disabled:!o.IsStringsValid||!o.IsURLValid,onClick:t[1]||(t[1]=function(){return o.submitHandler&&o.submitHandler.apply(o,arguments)})}," Сохранить ",8,G)])]),Object(n["h"])("div",J,[Object(n["h"])("div",N,[z,Object(n["K"])(Object(n["h"])("input",{id:"name","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.userData.name=e}),type:"text",required:""},null,512),[[n["H"],c.userData.name]])]),Object(n["h"])("div",Q,[X,Object(n["K"])(Object(n["h"])("input",{id:"description","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.userData.description=e}),type:"text",required:""},null,512),[[n["H"],c.userData.description]])]),Object(n["h"])("div",Z,[ee,Object(n["K"])(Object(n["h"])("input",{id:"website","onUpdate:modelValue":t[4]||(t[4]=function(e){return c.userData.website=e}),type:"url",required:""},null,512),[[n["H"],c.userData.website]])])])])],544)}var ie={name:"EditProfilePopup",components:{BaseIcon:$["a"]},data:function(){return{userData:{name:"",description:"",website:""}}},computed:Object(s["a"])(Object(s["a"])({},Object(f["b"])(["getMe"])),{},{IsStringsValid:function(){return this.userData.name.length>1&&this.userData.description.length>2},IsURLValid:function(){try{return new URL(this.userData.website),!0}catch(e){return!1}}}),created:function(){this.userData={name:this.getMe.profile.name,description:this.getMe.profile.description,website:this.getMe.profile.website}},methods:{submitHandler:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("setMyInfo",Object(s["a"])({},e.userData));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),e.$notification({type:"error",message:"Error when editing profile"});case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))()},handleClickOutside:function(e){var t={target:e.target,ref:this.$refs.popupWrapper};t.target===t.ref&&this.$store.commit("setEditProfileStatus",!1)}}};i("b633");ie.render=te,ie.__scopeId="data-v-52dcc2ce";var ne=ie,re=i("7424"),ce={name:"ProfileView",components:{ProfileBody:j,ProfileHeader:B,EditProfilePopup:ne},data:function(){return{userId:null,following:0,followers:0,name:""}},computed:Object(s["a"])({},Object(f["b"])(["getMyProfileId","getEditProfileStatus"])),mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var i,n,r,c,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=null===(i=e.$route)||void 0===i?void 0:i.params,r=n.profileId,t.next=3,Object(re["e"])(r);case 3:c=t.sent,o=c.data,e.userId=null===o||void 0===o?void 0:o.user.id,e.following=null===o||void 0===o?void 0:o.user.following,e.followers=null===o||void 0===o?void 0:o.user.followers,e.name=null===o||void 0===o?void 0:o.user.name;case 9:case"end":return t.stop()}}),t)})))()}};i("fc23");ce.render=c;t["default"]=ce},dad5:function(e,t,i){"use strict";i("9e54")},fb73:function(e,t,i){},fc23:function(e,t,i){"use strict";i("9ec7")}}]);
//# sourceMappingURL=chunk-7f2f8a9f.2e2eaed3.js.map