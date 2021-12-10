"use strict";(self.webpackChunkbooks_shelf=self.webpackChunkbooks_shelf||[]).push([[581],{5581:(O,c,n)=>{n.r(c),n.d(c,{WishlistModule:()=>Y});var h=n(4430),m=n(3811),d=n(655),t=n(5e3),u=n(5750),f=n(1440),g=n(9224),l=n(6346),s=n(9808);function _(e,i){1&e&&(t.TgZ(0,"mat-header-cell"),t._uU(1,"Logo"),t.qZA())}function C(e,i){if(1&e&&t._UZ(0,"img",12),2&e){const o=t.oxw().$implicit;t.s9C("src",null==o.volumeInfo.imageLinks?null:o.volumeInfo.imageLinks.thumbnail,t.LSH),t.s9C("alt",o.volumeInfo.title)}}function Z(e,i){if(1&e&&(t.TgZ(0,"mat-cell"),t.TgZ(1,"div",10),t.YNc(2,C,1,2,"img",11),t.qZA(),t.qZA()),2&e){const o=i.$implicit;t.xp6(2),t.Q6J("ngIf",null==o.volumeInfo.imageLinks?null:o.volumeInfo.imageLinks.thumbnail)}}function v(e,i){1&e&&(t.TgZ(0,"mat-header-cell"),t._uU(1,"Author"),t.qZA())}function T(e,i){if(1&e&&(t.TgZ(0,"span",14),t._uU(1),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Oqu(o)}}function x(e,i){if(1&e&&(t.TgZ(0,"mat-cell"),t.YNc(1,T,2,1,"span",13),t.qZA()),2&e){const o=i.$implicit;t.xp6(1),t.Q6J("ngForOf",o.volumeInfo.authors)}}function w(e,i){1&e&&(t.TgZ(0,"mat-header-cell"),t._uU(1,"Book Title"),t.qZA())}function W(e,i){if(1&e&&(t.TgZ(0,"mat-cell"),t.TgZ(1,"span",14),t._uU(2),t.qZA(),t.qZA()),2&e){const o=i.$implicit;t.xp6(2),t.Oqu(o.volumeInfo.title)}}function A(e,i){1&e&&(t.TgZ(0,"mat-header-cell"),t._uU(1,"Description"),t.qZA())}function D(e,i){if(1&e&&(t.TgZ(0,"mat-cell"),t.TgZ(1,"span",15),t._uU(2),t.qZA(),t.qZA()),2&e){const o=i.$implicit;t.xp6(2),t.hij("",o.volumeInfo.description," ")}}function k(e,i){1&e&&t._UZ(0,"mat-header-row")}function I(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"mat-row",16),t.NdJ("click",function(){const N=t.CHM(o).$implicit;return t.oxw().onBookDetails(N)}),t.qZA()}}const r=function(){return["Logo","Author","BookTitle","Description"]};const M=[{path:"",component:(()=>{class e{constructor(o,a){this.wishService=o,this.csModalService=a}ngOnInit(){this.wishbooks$=this.wishService.getWishBooks()}onBookDetails(o){return(0,d.mG)(this,void 0,void 0,function*(){yield this.csModalService.openDialog(o)})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(u.M),t.Y36(f.i))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-wishlist-page"]],decls:18,vars:7,consts:[[1,"table-container"],[1,"mat-elevation-z8","mat-table-striped",3,"dataSource"],["matColumnDef","Logo"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","Author"],["matColumnDef","BookTitle"],["matColumnDef","Description"],[4,"matHeaderRowDef"],[3,"click",4,"matRowDef","matRowDefColumns"],[1,"img-wrapper"],[3,"src","alt",4,"ngIf"],[3,"src","alt"],["style","padding: 10px;",4,"ngFor","ngForOf"],[2,"padding","10px"],[2,"padding","10px","text-overflow","ellipsis","overflow","hidden","width","auto","height","1.2em","white-space","nowrap"],[3,"click"]],template:function(o,a){1&o&&(t.TgZ(0,"mat-card"),t.TgZ(1,"div",0),t.TgZ(2,"mat-table",1),t.ALo(3,"async"),t.ynx(4,2),t.YNc(5,_,2,0,"mat-header-cell",3),t.YNc(6,Z,3,1,"mat-cell",4),t.BQk(),t.ynx(7,5),t.YNc(8,v,2,0,"mat-header-cell",3),t.YNc(9,x,2,1,"mat-cell",4),t.BQk(),t.ynx(10,6),t.YNc(11,w,2,0,"mat-header-cell",3),t.YNc(12,W,3,1,"mat-cell",4),t.BQk(),t.ynx(13,7),t.YNc(14,A,2,0,"mat-header-cell",3),t.YNc(15,D,3,1,"mat-cell",4),t.BQk(),t.YNc(16,k,1,0,"mat-header-row",8),t.YNc(17,I,1,0,"mat-row",9),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(2),t.Q6J("dataSource",t.lcZ(3,3,a.wishbooks$)),t.xp6(14),t.Q6J("matHeaderRowDef",t.DdM(5,r)),t.xp6(1),t.Q6J("matRowDefColumns",t.DdM(6,r)))},directives:[g.a8,l.BZ,l.w1,l.fO,l.Dz,l.as,l.nj,l.ge,l.ev,s.O5,s.sg,l.XQ,l.Gk],pipes:[s.Ov],styles:[".img-wrapper[_ngcontent-%COMP%]{width:50px;height:76px;background-color:#d3d3d3;border-radius:5px;margin:10px}.img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:inherit;height:inherit;border-radius:inherit}"],changeDetection:0}),e})()}],y=[h.m,(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[m.Bz.forChild(M)],m.Bz]}),e})()];let Y=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[...y]]}),e})()}}]);