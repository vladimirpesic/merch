"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[629],{6629:(A,c,i)=>{i.r(c),i.d(c,{AccountModule:()=>T});var u=i(8583),a=i(1950),o=i(4579),t=i(4394),m=i(6325),p=i(4015);let g=(()=>{class e{constructor(n,r,l){this.accountService=n,this.router=r,this.activatedRoute=l}ngOnInit(){this.returnUrl=this.activatedRoute.snapshot.queryParams.returnUrl||"/shop",this.createLoginForm()}createLoginForm(){this.loginForm=new o.cw({email:new o.NI("",[o.kI.required,o.kI.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")]),password:new o.NI("",o.kI.required)})}onSubmit(){this.accountService.login(this.loginForm.value).subscribe(()=>{this.router.navigateByUrl(this.returnUrl)},n=>{console.log(n)})}cancel(){this.router.navigateByUrl("/")}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(m.B),t.Y36(a.F0),t.Y36(a.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],decls:12,vars:5,consts:[[1,"container"],[3,"formGroup","ngSubmit"],[1,"text-center","my-4"],[1,"my-3"],["formControlName","email",3,"label"],["formControlName","password",3,"label","type"],["type","submit",1,"btn","btn-primary","mx-2",3,"disabled"],["type","button",1,"btn","btn-default","mx-2",3,"click"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"form",1),t.NdJ("ngSubmit",function(){return r.onSubmit()}),t.TgZ(2,"div",2),t.TgZ(3,"h3",3),t._uU(4,"Login"),t.qZA(),t.qZA(),t._UZ(5,"app-text-input",4),t._UZ(6,"app-text-input",5),t.TgZ(7,"div",2),t.TgZ(8,"button",6),t._uU(9,"Login"),t.qZA(),t.TgZ(10,"button",7),t.NdJ("click",function(){return r.cancel()}),t._uU(11,"Cancel"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(1),t.Q6J("formGroup",r.loginForm),t.xp6(4),t.Q6J("label","Email address"),t.xp6(1),t.Q6J("label","Password")("type","password"),t.xp6(2),t.Q6J("disabled",r.loginForm.invalid))},directives:[o._Y,o.JL,o.sg,p.t,o.JJ,o.u],styles:[".container[_ngcontent-%COMP%]{max-width:380px}"]}),e})();var d=i(8946),f=i(4945),h=i(1528),v=i(7969);function b(e,s){if(1&e&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&e){const n=s.$implicit;t.xp6(1),t.Oqu(n)}}function Z(e,s){if(1&e&&(t.TgZ(0,"ul",10),t.YNc(1,b,2,1,"li",11),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.errors)}}const y=[{path:"login",component:g},{path:"register",component:(()=>{class e{constructor(n,r,l){this.fb=n,this.accountService=r,this.router=l}ngOnInit(){this.createRegisterForm()}createRegisterForm(){this.registerForm=this.fb.group({displayName:[null,[o.kI.required]],email:[null,[o.kI.required,o.kI.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")],[this.validateEmailNotTaken()]],password:[null,o.kI.required]})}onSubmit(){this.accountService.register(this.registerForm.value).subscribe(n=>{this.router.navigateByUrl("/shop")},n=>{console.log(n),this.errors=n.errors})}validateEmailNotTaken(){return n=>(0,d.H)(500).pipe((0,h.w)(()=>n.value?this.accountService.checkEmailExists(n.value).pipe((0,v.U)(r=>r?{emailExists:!0}:null)):(0,f.of)(null)))}cancel(){this.router.navigateByUrl("/")}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(o.qu),t.Y36(m.B),t.Y36(a.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-register"]],decls:14,vars:7,consts:[[1,"container"],[3,"formGroup","ngSubmit"],[1,"text-center","my-4"],[1,"my-3"],["formControlName","displayName",3,"label"],["formControlName","email",3,"label"],["formControlName","password",3,"label","type"],["class","text-danger list-unstyled",4,"ngIf"],["type","submit",1,"btn","btn-primary","mx-2",3,"disabled"],["type","button",1,"btn","btn-default","mx-2",3,"click"],[1,"text-danger","list-unstyled"],[4,"ngFor","ngForOf"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"form",1),t.NdJ("ngSubmit",function(){return r.onSubmit()}),t.TgZ(2,"div",2),t.TgZ(3,"h3",3),t._uU(4,"Register"),t.qZA(),t.qZA(),t._UZ(5,"app-text-input",4),t._UZ(6,"app-text-input",5),t._UZ(7,"app-text-input",6),t.YNc(8,Z,2,1,"ul",7),t.TgZ(9,"div",2),t.TgZ(10,"button",8),t._uU(11,"Register"),t.qZA(),t.TgZ(12,"button",9),t.NdJ("click",function(){return r.cancel()}),t._uU(13,"Cancel"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(1),t.Q6J("formGroup",r.registerForm),t.xp6(4),t.Q6J("label","Display Name"),t.xp6(1),t.Q6J("label","Email address"),t.xp6(1),t.Q6J("label","Password")("type","password"),t.xp6(1),t.Q6J("ngIf",r.errors),t.xp6(2),t.Q6J("disabled",r.registerForm.invalid))},directives:[o._Y,o.JL,o.sg,p.t,o.JJ,o.u,u.O5,u.sg],styles:[".container[_ngcontent-%COMP%]{max-width:380px}"]}),e})()}];let x=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[a.Bz.forChild(y)],a.Bz]}),e})();var C=i(4466);let T=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[u.ez,x,C.m]]}),e})()}}]);