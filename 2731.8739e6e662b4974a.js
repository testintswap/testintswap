"use strict";(self.webpackChunkintswap_frontend=self.webpackChunkintswap_frontend||[]).push([[2731],{32731:(fn,A,s)=>{s.r(A),s.d(A,{LpStakingPoolModule:()=>dn});var _=s(88692),k=s(7976),f=s(8239),U=s(49368),p=s(2024),m=s(92673),$=s(54121),v=s(61528),w=s(42147),x=s(27969),q=s(84967),R=s(98168),Z=s(84945),T=s(57445),J=s(66393),S=s(62686),V=s(41781),n=s(64537),z=s(19376),N=s(96195),Y=s(39869),Q=s(94602),O=s(9638),M=s(83331),I=s(93706),b=s(20092);function j(i,l){1&i&&(n.TgZ(0,"mat-icon",30),n._uU(1," autorenew "),n.qZA())}function F(i,l){if(1&i){const t=n.EpF();n.TgZ(0,"div",17),n.NdJ("click",function(){n.CHM(t);const o=n.oxw().ngIf,a=n.oxw(3);return n.KtG(a.onStake(o))}),n.YNc(1,j,2,0,"mat-icon",18),n.TgZ(2,"span"),n._uU(3,"Stake"),n.qZA()()}if(2&i){const t=n.oxw(4);n.xp6(1),n.Q6J("ngIf",t.isStaking)}}function E(i,l){1&i&&(n.TgZ(0,"mat-icon",30),n._uU(1," autorenew "),n.qZA())}function B(i,l){if(1&i){const t=n.EpF();n.TgZ(0,"div",17),n.NdJ("click",function(){n.CHM(t);const o=n.oxw(4);return n.KtG(o.onApprove())}),n.YNc(1,E,2,0,"mat-icon",18),n.TgZ(2,"span"),n._uU(3,"Approve"),n.qZA()()}if(2&i){const t=n.oxw(4);n.xp6(1),n.Q6J("ngIf",t.isApproving)}}function D(i,l){if(1&i){const t=n.EpF();n.TgZ(0,"div",14)(1,"span",15),n._uU(2,"Stake"),n.qZA(),n.TgZ(3,"nz-input-number",16),n.NdJ("ngModelChange",function(o){n.CHM(t);const a=n.oxw(3);return n.KtG(a.stakeInputValue=o)}),n.qZA(),n.YNc(4,F,4,1,"div",29),n.YNc(5,B,4,1,"div",29),n.TgZ(6,"div",19),n._uU(7),n.qZA(),n.TgZ(8,"div",20),n._uU(9),n.ALo(10,"number"),n.qZA()()}if(2&i){const t=l.ngIf,e=n.oxw(3);n.xp6(3),n.Q6J("nzSize","large")("nzMin",.01)("ngModel",e.stakeInputValue),n.xp6(1),n.Q6J("ngIf",e.isApproved),n.xp6(1),n.Q6J("ngIf",!e.isApproved),n.xp6(2),n.Oqu(e.stakeInputErrorMsg),n.xp6(2),n.hij("Balance: ",n.xi3(10,7,e.formatTokenValue(t||"0","18"),"1.2-4")," ")}}function G(i,l){1&i&&(n.TgZ(0,"mat-icon",30),n._uU(1," autorenew "),n.qZA())}function W(i,l){if(1&i&&(n.TgZ(0,"div",32)(1,"div",33),n._uU(2),n.qZA(),n.TgZ(3,"div",34),n._uU(4),n.ALo(5,"number"),n.qZA()()),2&i){const t=n.oxw().ngIf,e=n.oxw(4);n.xp6(2),n.hij(" ",t.name,""),n.xp6(2),n.AsE(" ",n.xi3(5,3,e.formatTokenValue(t.claimableReward.value,"18"),"1.2-4")," ",t.claimableReward.symbol,"")}}function H(i,l){if(1&i&&(n.ynx(0),n.YNc(1,W,6,6,"div",31),n.BQk()),2&i){const t=l.ngIf;n.xp6(1),n.Q6J("ngIf",t.claimableReward)}}function K(i,l){if(1&i&&(n.ynx(0),n.YNc(1,H,2,1,"ng-container",3),n.ALo(2,"async"),n.BQk()),2&i){const t=l.$implicit;n.xp6(1),n.Q6J("ngIf",n.lcZ(2,1,t))}}function X(i,l){1&i&&(n.TgZ(0,"mat-icon",35),n._uU(1," autorenew "),n.qZA())}function nn(i,l){if(1&i&&(n.ynx(0),n.TgZ(1,"div",40)(2,"div",41),n._uU(3),n.qZA(),n.TgZ(4,"div",42),n._uU(5),n.qZA()(),n.BQk()),2&i){const t=l.$implicit;n.xp6(3),n.hij("",t.label," :"),n.xp6(2),n.Oqu(t.value)}}function tn(i,l){if(1&i&&(n.ynx(0),n.YNc(1,nn,6,2,"ng-container",24),n.BQk()),2&i){const t=l.ngIf;n.xp6(1),n.Q6J("ngForOf",t)}}function en(i,l){if(1&i&&(n.ynx(0),n.TgZ(1,"h2",38),n._uU(2),n.qZA(),n._UZ(3,"div",39),n.YNc(4,tn,2,1,"ng-container",37),n.ALo(5,"async"),n.BQk()),2&i){const t=l.ngIf;n.oxw(4);const e=n.MAs(3);n.xp6(2),n.Oqu(t.name),n.xp6(2),n.Q6J("ngIf",n.lcZ(5,3,t.info$))("ngIfElse",e)}}function on(i,l){if(1&i&&(n.TgZ(0,"div",36),n.YNc(1,en,6,5,"ng-container",37),n.ALo(2,"async"),n.qZA()),2&i){const t=l.$implicit;n.oxw(3);const e=n.MAs(3);n.xp6(1),n.Q6J("ngIf",n.lcZ(2,2,t))("ngIfElse",e)}}const an=function(i,l){return["/","app","add",i,l]};function rn(i,l){if(1&i){const t=n.EpF();n.ynx(0),n.TgZ(1,"div",4)(2,"button",5),n.NdJ("click",function(){n.CHM(t);const o=n.oxw(2);return n.KtG(o.goBack())}),n.TgZ(3,"mat-icon"),n._uU(4,"arrow_back"),n.qZA()(),n.TgZ(5,"div",6)(6,"h1"),n._uU(7),n.qZA(),n.TgZ(8,"p"),n._uU(9,"Stake LP Token to Earn Rewards"),n.qZA(),n.TgZ(10,"a",7),n._uU(11,">> Get Lp Token"),n.qZA()(),n._UZ(12,"div",8),n.TgZ(13,"div",9)(14,"div",10),n._uU(15,"APY:"),n.qZA(),n.TgZ(16,"div",11),n._uU(17),n.ALo(18,"async"),n.qZA(),n.TgZ(19,"div",10),n._uU(20,"TVL:"),n.qZA(),n.TgZ(21,"div",11),n._uU(22),n.ALo(23,"async"),n.qZA(),n.TgZ(24,"div",10),n._uU(25,"Total Staked:"),n.qZA(),n.TgZ(26,"div",11),n._uU(27),n.ALo(28,"number"),n.qZA(),n.TgZ(29,"div",10),n._uU(30,"Staked Ratio"),n.qZA(),n.TgZ(31,"div",11),n._uU(32),n.ALo(33,"number"),n.qZA()(),n.TgZ(34,"div",12),n.YNc(35,D,11,10,"div",13),n.ALo(36,"async"),n.TgZ(37,"div",14)(38,"span",15),n._uU(39,"Withdraw"),n.qZA(),n.TgZ(40,"nz-input-number",16),n.NdJ("ngModelChange",function(o){n.CHM(t);const a=n.oxw(2);return n.KtG(a.withdrawInputValue=o)}),n.qZA(),n.TgZ(41,"div",17),n.NdJ("click",function(){n.CHM(t);const o=n.oxw().ngIf,a=n.oxw();return n.KtG(a.onWithdraw((null==o.pool?null:o.pool.userStakedAmount)||"0"))}),n.YNc(42,G,2,0,"mat-icon",18),n.TgZ(43,"span"),n._uU(44,"Withdraw"),n.qZA()(),n.TgZ(45,"div",19),n._uU(46),n.qZA(),n.TgZ(47,"div",20),n._uU(48),n.ALo(49,"number"),n.qZA()()(),n._UZ(50,"div",21),n.TgZ(51,"h2",22),n._uU(52,"Reward Tokens"),n.qZA(),n.TgZ(53,"div",23),n.YNc(54,K,3,3,"ng-container",24),n.qZA(),n.TgZ(55,"div",25),n.NdJ("click",function(){n.CHM(t);const o=n.oxw().ngIf,a=n.oxw();return n.KtG(a.claimAll(null==o.pool||null==o.pool.pair?null:o.pool.pair.address))}),n.YNc(56,X,2,0,"mat-icon",26),n._uU(57,"Claim All "),n.qZA()(),n.TgZ(58,"div",27),n.YNc(59,on,3,4,"div",28),n.qZA(),n.BQk()}if(2&i){const t=l.ngIf,e=n.oxw().ngIf,o=n.oxw();n.xp6(7),n.AsE("",null==e.pool||null==e.pool.pair||null==e.pool.pair.collection?null:e.pool.pair.collection.symbol,"-",null==e.pool||null==e.pool.pair||null==e.pool.pair.token?null:e.pool.pair.token.symbol,""),n.xp6(3),n.Q6J("routerLink",n.WLB(32,an,null==e.pool||null==e.pool.pair||null==e.pool.pair.collection?null:e.pool.pair.collection.address,null==e.pool||null==e.pool.pair||null==e.pool.pair.token?null:e.pool.pair.token.address)),n.xp6(7),n.hij("",n.lcZ(18,17,null==e.pool?null:e.pool.totalApy$)," %"),n.xp6(5),n.hij("$ ",n.lcZ(23,19,null==e.pool?null:e.pool.tvl$),""),n.xp6(5),n.hij(" ",n.xi3(28,21,o.formatTokenValue((null==e.pool||null==e.pool.pair||null==e.pool.pair.lpStakingPool?null:e.pool.pair.lpStakingPool.totalStakingAmount)||"0","18"),"1.2-4")," Lp-Token"),n.xp6(5),n.hij("",n.xi3(33,24,null==e.pool?null:e.pool.stakedRatio,"1.2-4")," %"),n.xp6(3),n.Q6J("ngIf",n.lcZ(36,27,o.userLiquidity$)),n.xp6(5),n.Q6J("nzSize","large")("nzMin",.01)("ngModel",o.withdrawInputValue),n.xp6(2),n.Q6J("ngIf",o.isWithdrawing),n.xp6(4),n.Oqu(o.withdrawInputErrorMsg),n.xp6(2),n.hij("Staked: ",n.xi3(49,29,o.formatTokenValue((null==e.pool?null:e.pool.userStakedAmount)||"0","18"),"1.2-4")," "),n.xp6(6),n.Q6J("ngForOf",t),n.xp6(2),n.Q6J("ngIf",o.isClaiming),n.xp6(3),n.Q6J("ngForOf",t)}}function ln(i,l){if(1&i&&(n.TgZ(0,"div",2),n.YNc(1,rn,60,35,"ng-container",3),n.ALo(2,"async"),n.qZA()),2&i){const t=l.ngIf;n.xp6(1),n.Q6J("ngIf",n.lcZ(2,1,null==t.pool?null:t.pool.strategyApys$))}}function sn(i,l){1&i&&(n.TgZ(0,"div",43)(1,"mat-icon",44),n._uU(2,"autorenew"),n.qZA()())}const cn=function(i){return{pool:i}},pn=[{path:"",component:(()=>{class i{constructor(t,e,o,a,g,r){var d=this;this.location=t,this.route=e,this.cacheService=o,this.web3Service=a,this.graphqlService=g,this.accountService=r,this.userLiquidity$=new $.X("0"),this.stakeInputValue="0",this.stakeInputErrorMsg="",this.withdrawInputValue="0",this.withdrawInputErrorMsg="",this.isApproved=!1,this.isStaking=!1,this.isWithdrawing=!1,this.isClaiming=!1,this.isApproving=!1,this.pool$=this.route.paramMap.pipe((0,v.w)(c=>(this.pairAddress=c.get("pairAddress")||void 0,this.cacheService.getPairByAddress(this.pairAddress)))).pipe((0,w.x)((c,h)=>c?.address==h?.address&&c?.lpStakingPool.totalStakingAmount==h?.lpStakingPool.totalStakingAmount&&c?.lpStakingPool.userStaking?.length==h?.lpStakingPool.userStaking?.length),(0,x.U)(c=>{if(!c)return null;const h=p.O$.from(c.lpStakingPool.totalStakingAmount).mul(p.O$.from("10000")).div(p.O$.from(c.liquidity)).toNumber()/100,C=this.cacheService.ethPrice$.pipe((0,x.U)(u=>p.O$.from(u).mul(p.O$.from(c.tvl)).mul(p.O$.from(parseInt(100*h+""))).div(p.O$.from("10").pow(30)).toString())),L=C.pipe((0,v.w)(function(){var u=(0,f.Z)(function*(y){return yield d.getStrategies(c,y)});return function(y){return u.apply(this,arguments)}}())),un=L.pipe((0,v.w)(u=>(0,q.D)(u))).pipe((0,x.U)(u=>this.sumApy(u)),(0,w.x)((u,y)=>u==y)),P=!!c.lpStakingPool.userStaking&&c.lpStakingPool.userStaking.length>0&&p.O$.from(c.lpStakingPool.userStaking[0].amount).gt(p.O$.from("0"));return{pair:c,totalApy$:un,stakedRatio:h,tvl$:C,strategyApys$:L,isUserStaked:P,userStakedAmount:P?c.lpStakingPool.userStaking[0].amount:"0",userStaked$:C.pipe((0,x.U)(u=>P?p.O$.from(c.lpStakingPool.userStaking[0].amount).mul(p.O$.from(u)).div(p.O$.from(c.lpStakingPool.totalStakingAmount)).toString():"0"))}}),(0,R.b)(c=>(c&&this.fetchUserLiquidity(c.pair.address),c)))}ngOnInit(){}parseFloat(t){return parseFloat(t)}sumApy(t){let e=0;for(let o=0;o<t.length;o++)e+=t[o].apy;return e}getStrategies(t,e){var o=this;return(0,f.Z)(function*(){return[...yield o.getGlobalStrategies(),...t.lpStakingPool.incentiveStrategyList].map(a=>{if(a.status){const g=o.getStrategyRewardRate(t.address,a.address);return g&&p.O$.from(e).gt(p.O$.from(0))?g.pipe((0,x.U)(r=>({name:a.name,address:a.address,apy:p.O$.from(r).mul(p.O$.from("10000")).div(V.yb).div(p.O$.from(e)).toNumber()/100})),(0,w.x)((r,d)=>r.apy==d.apy)):(0,Z.of)({name:a.name,address:a.address,apy:0})}return(0,Z.of)({name:a.name,address:a.address,apy:0})}).map(a=>a.pipe((0,w.x)((g,r)=>g.apy==r.apy),(0,v.w)(function(){var g=(0,f.Z)(function*(r){return{...r,pair:t,info$:o.getAtrategyInfo(a,t),claimableReward:yield o.fetchClaimableReward(r.address,t.address)}});return function(r){return g.apply(this,arguments)}}())))})()}fetchClaimableReward(t,e){var o=this;return(0,T.z)(this.accountService.account$).then(a=>a?this.web3Service.invokeContract("IIntswapV1IncentiveStrategy","earned",[e,a],t).then(function(){var g=(0,f.Z)(function*(r){try{return{token:r[0],symbol:(yield o.web3Service.getTokenSymbol(r[0]))[0],value:r[1]}}catch{return null}});return function(r){return g.apply(this,arguments)}}()):null)}getGlobalStrategies(){return this.cacheService.getGlobalStrategies()}goBack(){this.location.back()}getStrategyRewardRate(t,e){var o=this;return(0,J.D)(this.web3Service.invokeContract("IIntswapV1IncentiveStrategy","estimatedOneYearRewards",[t],e)).pipe((0,v.w)(function(){var a=(0,f.Z)(function*(g){const r=g[0];if(r==U.je)return"0";const d=g[1],c=(0,m.parseUnits)(yield o.cacheService.fetchRewardTokenPrice(r),"2");return p.O$.from(d).mul(c).div(p.O$.from("100")).toString()});return function(g){return a.apply(this,arguments)}}()))}formatTokenValue(t,e){return(0,m.formatUnits)(t,e)}getAtrategyInfo(t,e){var o=this;return t.pipe((0,v.w)(function(){var a=(0,f.Z)(function*({name:g,address:r,apy:d}){return[...yield o.fetchAtrategyIncentive(g,r,e),{label:"APY",value:`${d} %`}]});return function(g){return a.apply(this,arguments)}}()))}fetchAtrategyIncentive(t,e,o){var a=this;switch(t){case"RoyaltyDistributionStrategy":return this.web3Service.invokeContract("RoyaltyDistributionStrategy","incentives",[o.address],e).then(function(){var g=(0,f.Z)(function*(r){return[{label:"Reward Token",value:o.token.symbol},{label:"Start Time",value:1e3*r[1]==0?"- -":new Date(1e3*r[1]).toLocaleString()},{label:"Cumulative Rewards",value:`${parseFloat(a.formatTokenValue(r[2],"18")).toFixed(4)} ${o.token.symbol}/s`}]});return function(r){return g.apply(this,arguments)}}()).catch(()=>[]);case"FixedRewardRateStrategy":return this.web3Service.invokeContract("FixedRewardRateStrategy","incentives",[o.address],e).then(function(){var g=(0,f.Z)(function*(r){const d=(yield a.web3Service.getTokenSymbol(r[1]).catch(()=>({0:"- -"})))[0];return[{label:"Reward Token",value:d},{label:"Epoch Num",value:r[2]},{label:"Start Time",value:1e3*r[3]==0?"- -":new Date(1e3*r[3]).toLocaleString()},{label:"End Time",value:1e3*r[4]==0?"- -":new Date(1e3*r[4]).toLocaleString()},{label:"Reward Rate",value:`${parseFloat(a.formatTokenValue(r[6],"18")).toFixed(4)} ${d}/s`}]});return function(r){return g.apply(this,arguments)}}()).catch(()=>[]);default:return Promise.resolve([])}}fetchUserLiquidity(t){this.subUser=this.accountService.account$.subscribe(e=>{e&&this.graphqlService.fetchUserLiquidity(e,t).then(({data:o})=>{const a=o.liquidityInPair?o.liquidityInPair.liquidity:"0";this.userLiquidity$.next(a),this.fetchUserAllowance(t,a)}),this.userLiquidity$.next("0")})}fetchUserAllowance(t,e){(0,T.z)(this.accountService.account$).then(o=>{o?(this.isApproving=!0,this.web3Service.invokeContract("ERC20","allowance",[o,S.wE.IntswapV1StakingCenter],t).then(a=>this.isApproved=p.O$.from(a[0]).gte(p.O$.from((0,m.parseUnits)(e,"18")))).finally(()=>this.isApproving=!1)):this.isApproved=!1})}onStake(t){this.isStaking||0==parseFloat(this.stakeInputValue)||p.O$.from(t).lt((0,m.parseUnits)(this.stakeInputValue+"","18"))||this.pairAddress&&(this.isStaking=!0,this.web3Service.invokeContract("IntswapV1StakingCenter","stake",[this.pairAddress,(0,m.parseUnits)(this.stakeInputValue+"","18").toString()]).then(e=>{this.stakeInputValue="0"}).finally(()=>this.isStaking=!1))}onWithdraw(t){this.isWithdrawing||0==parseFloat(this.withdrawInputValue)||p.O$.from(t).lt((0,m.parseUnits)(this.withdrawInputValue+"","18"))||this.pairAddress&&(this.isWithdrawing=!0,this.web3Service.invokeContract("IntswapV1StakingCenter","withdraw",[this.pairAddress,(0,m.parseUnits)(this.withdrawInputValue+"","18").toString()]).then(e=>{this.withdrawInputValue="0"}).finally(()=>this.isWithdrawing=!1))}claimAll(t){this.isClaiming||!t||(this.isClaiming=!0,this.web3Service.invokeContract("IntswapV1StakingCenter","getRewards",[t]).then(e=>{}).finally(()=>this.isClaiming=!1))}onApprove(){this.isApproving||(this.isApproving=!0,this.pairAddress&&this.web3Service.invokeContract("ERC20","approve",[S.wE.IntswapV1StakingCenter,S.fV],this.pairAddress).then(t=>{this.isApproved=!0}).finally(()=>this.isApproving=!1))}ngOnDestroy(){this.subUser?.unsubscribe()}}return i.\u0275fac=function(t){return new(t||i)(n.Y36(_.Ye),n.Y36(k.gz),n.Y36(z.Q),n.Y36(N.U),n.Y36(Y.J),n.Y36(Q.B))},i.\u0275cmp=n.Xpm({type:i,selectors:[["app-lp-staking-pool"]],decls:4,vars:5,consts:[["class","pool-wrapper",4,"ngIf"],["loading",""],[1,"pool-wrapper"],[4,"ngIf"],[1,"pool-card"],["mat-icon-button","",2,"margin-left","-12px",3,"click"],[1,"title"],[3,"routerLink"],[1,"divider"],[1,"info"],[1,"label"],[1,"value"],[1,"option"],["class","input-wrapper",4,"ngIf"],[1,"input-wrapper"],[1,"input-label"],["nzBorderless","",1,"nft-input",3,"nzSize","nzMin","ngModel","ngModelChange"],[1,"nft-menu-btn",3,"click"],["color","warn","class","spin-icon querying-icon","style","top: 14px; left:12px;",4,"ngIf"],[1,"price-nft-amount"],[1,"token-balance"],[1,"divider",2,"margin-bottom","24px"],[2,"font-weight","bold"],[1,"claimable-rewards"],[4,"ngFor","ngForOf"],[1,"reward-token-btn",3,"click"],["color","warn","class","spin-icon querying-icon","style","top: 12px; left:12px;",4,"ngIf"],[1,"strategy-card-list"],["class","strategy-card",4,"ngFor","ngForOf"],["class","nft-menu-btn",3,"click",4,"ngIf"],["color","warn",1,"spin-icon","querying-icon",2,"top","14px","left","12px"],["class","claimable-reward-item",4,"ngIf"],[1,"claimable-reward-item"],[1,"reward-strategy-name"],[1,"reward-token-value"],["color","warn",1,"spin-icon","querying-icon",2,"top","12px","left","12px"],[1,"strategy-card"],[4,"ngIf","ngIfElse"],[2,"font-weight","bold","font-style","oblique"],[1,"divider",2,"margin-bottom","12px"],[1,"strategy-info-item"],[1,"strategy-label"],[1,"strategy-value"],[1,"loading-mask"],["color","primary",1,"spin-icon"]],template:function(t,e){1&t&&(n.YNc(0,ln,3,3,"div",0),n.ALo(1,"async"),n.YNc(2,sn,3,0,"ng-template",null,1,n.W1O)),2&t&&n.Q6J("ngIf",n.VKq(3,cn,n.lcZ(1,1,e.pool$)))},dependencies:[_.sg,_.O5,O.lW,k.yS,M.Hw,I._V,b.JJ,b.On,_.Ov,_.JJ],styles:[".pool-wrapper[_ngcontent-%COMP%]{width:70%;margin:1rem auto;display:grid;grid-template-columns:3fr 2fr;row-gap:12px;column-gap:5vw;position:relative}.pool-card[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:2;width:100%;min-height:80vh;background:#fff;border-radius:16px;padding:12px 24px 24px;position:relative;border:1px solid rgba(94,104,135,.24)}.pool-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.pool-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{grid-column-start:span 2;font-weight:bolder}.pool-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:700}.pool-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:700;justify-self:end;text-decoration:underline}.pool-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;column-gap:24px;row-gap:12px;padding:12px;align-items:center}.pool-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-weight:700}.pool-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{justify-self:end}.input-wrapper[_ngcontent-%COMP%]{position:relative;min-height:96px;width:100%;border-radius:16px;background:rgba(243,243,243,.3);border:2px solid rgba(94,104,135,0);transition:all .2s;display:grid;grid-template-columns:2fr 3fr 2fr;column-gap:12px;justify-items:center;align-items:center;box-sizing:border-box;padding:12px 12px 0;margin:24px 0}.input-wrapper[_ngcontent-%COMP%]:hover{border:2px solid rgba(228,178,201,.24)}.input-wrapper[_ngcontent-%COMP%]:hover   .input-label[_ngcontent-%COMP%]{border:2px solid rgba(228,178,201,.4)}[_nghost-%COMP%]     .ant-input-number-handler{border:none!important}[_nghost-%COMP%]     .ant-input-number-disabled{background:transparent}.nft-input[_ngcontent-%COMP%]{width:100%;font-size:28px;color:#7f7f7f;grid-column-start:span 2}.nft-menu-btn[_ngcontent-%COMP%]{position:relative;width:100%;border-radius:16px;background:linear-gradient(45deg,#febae6 0%,#f9e1b4 100%);display:flex;justify-content:center;align-items:center;flex-direction:row;min-height:36px;padding:12px 24px;cursor:pointer;font-weight:700;font-size:18px}.nft-menu-btn[_ngcontent-%COMP%]:hover{background:linear-gradient(45deg,#f7d8fd 0%,#f9e6c2 100%)}.price-nft-amount[_ngcontent-%COMP%]{justify-self:start;padding:0 12px}.token-balance[_ngcontent-%COMP%]{grid-column-start:span 2;justify-self:end}.input-label[_ngcontent-%COMP%]{box-sizing:border-box;position:absolute;left:12px;top:-18px;color:#ff5fb7;font-weight:bolder;font-size:18px;background:rgb(251,251,251);border-radius:16px;padding:0 12px;border:2px solid rgba(228,178,201,.24);transition:all .2s}.claimable-rewards[_ngcontent-%COMP%]{min-height:20vh;width:100%}.claimable-reward-item[_ngcontent-%COMP%]{width:90%;padding:4px 12px;display:grid;grid-template-columns:1fr 3fr;align-items:center;background:rgba(243,243,243,.3);border:2px solid rgba(94,104,135,0);transition:all .2s;column-gap:12px;border-radius:12px;margin:0 auto 12px}.claimable-reward-item[_ngcontent-%COMP%]   .reward-strategy-name[_ngcontent-%COMP%]{font-weight:700;justify-self:start}.claimable-reward-item[_ngcontent-%COMP%]   .reward-token-name[_ngcontent-%COMP%]{font-weight:700;justify-self:center}.claimable-reward-item[_ngcontent-%COMP%]   .reward-token-value[_ngcontent-%COMP%]{font-weight:700;justify-self:end;padding:12px}.reward-token-btn[_ngcontent-%COMP%]{position:relative;justify-self:center;width:40%;margin:0 auto;border-radius:16px;background:linear-gradient(45deg,#febae6 0%,#f9e1b4 100%);display:flex;justify-content:center;align-items:center;flex-direction:row;padding:12px;cursor:pointer;font-weight:700;font-size:18px}.reward-token-btn[_ngcontent-%COMP%]:hover{background:linear-gradient(45deg,#f7d8fd 0%,#f9e6c2 100%)}.strategy-card-list[_ngcontent-%COMP%]{grid-column-start:2;grid-column-end:3;width:100%;position:relative}.strategy-card[_ngcontent-%COMP%]{background:#fff;border-radius:8px;padding:12px 24px;margin-bottom:12px;width:100%;min-height:30vh;position:relative;border:1px solid rgba(94,104,135,.24)}.strategy-info-item[_ngcontent-%COMP%]{width:100%;padding:0 12px;display:grid;grid-template-columns:1fr 1fr;align-items:center;font-size:16px}.strategy-label[_ngcontent-%COMP%]{font-weight:700}.strategy-value[_ngcontent-%COMP%]{justify-self:end}.loading-mask[_ngcontent-%COMP%]{width:100%;height:100%;max-height:100vh;position:absolute;left:0;top:0;display:flex;justify-content:center;align-items:center;background:rgba(236,230,233,.1)}.spin-icon[_ngcontent-%COMP%]{transform:rotate(45deg);animation:rotate 1.2s infinite linear}@keyframes rotate{to{transform:rotate(405deg)}}.divider[_ngcontent-%COMP%]{height:1px;width:100%;background:linear-gradient(90deg,#ff8bea 0%,#ffd992 100%)}.querying-icon[_ngcontent-%COMP%]{position:absolute}"]}),i})()}];let gn=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[k.Bz.forChild(pn),k.Bz]}),i})(),dn=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[_.ez,O.ot,gn,M.Ps,I.Zf,b.u5]}),i})()}}]);