"use strict";(self.webpackChunkgrace_walker=self.webpackChunkgrace_walker||[]).push([[787],{5787:(Bn,ce,d)=>{d.r(ce),d.d(ce,{PageModule:()=>Gn});var I=d(7423),_t=d(8099),O=d(7238),v=d(8966),de=d(7261),g=d(9808),_=d(8330),o=d(5e3),yt=d(2076),Ct=d(4128),vt=d(4004);let he=(()=>{class n{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq))},n.\u0275dir=o.lG2({type:n}),n})(),y=(()=>{class n extends he{}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();const h=new o.OlP("NgValueAccessor"),At={provide:h,useExisting:(0,o.Gpc)(()=>A),multi:!0},Mt=new o.OlP("CompositionEventMode");let A=(()=>{class n extends he{constructor(e,r,i){super(e,r),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function bt(){const n=(0,g.q)()?(0,g.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(e){this.setProperty("value",null==e?"":e)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(Mt,8))},n.\u0275dir=o.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,r){1&e&&o.NdJ("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[o._Bn([At]),o.qOj]}),n})();const u=new o.OlP("NgValidators"),f=new o.OlP("NgAsyncValidators");function be(n){return null!=n}function Me(n){const t=(0,o.QGY)(n)?(0,yt.D)(n):n;return(0,o.CqO)(t),t}function De(n){let t={};return n.forEach(e=>{t=null!=e?Object.assign(Object.assign({},t),e):t}),0===Object.keys(t).length?null:t}function Ee(n,t){return t.map(e=>e(n))}function Fe(n){return n.map(t=>function Et(n){return!n.validate}(t)?t:e=>t.validate(e))}function q(n){return null!=n?function we(n){if(!n)return null;const t=n.filter(be);return 0==t.length?null:function(e){return De(Ee(e,t))}}(Fe(n)):null}function R(n){return null!=n?function Oe(n){if(!n)return null;const t=n.filter(be);return 0==t.length?null:function(e){const r=Ee(e,t).map(Me);return(0,Ct.D)(r).pipe((0,vt.U)(De))}}(Fe(n)):null}function Ne(n,t){return null===n?[t]:Array.isArray(n)?[...n,t]:[n,t]}function H(n){return n?Array.isArray(n)?n:[n]:[]}function x(n,t){return Array.isArray(n)?n.includes(t):n===t}function Te(n,t){const e=H(t);return H(n).forEach(i=>{x(e,i)||e.push(i)}),e}function Pe(n,t){return H(t).filter(e=>!x(n,e))}class Ge{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=q(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=R(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}class m extends Ge{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class c extends Ge{get formDirective(){return null}get path(){return null}}let j=(()=>{class n extends class Se{constructor(t){this._cd=t}is(t){var e,r,i;return"submitted"===t?!!(null===(e=this._cd)||void 0===e?void 0:e.submitted):!!(null===(i=null===(r=this._cd)||void 0===r?void 0:r.control)||void 0===i?void 0:i[t])}}{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(m,2))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.is("untouched"))("ng-touched",r.is("touched"))("ng-pristine",r.is("pristine"))("ng-dirty",r.is("dirty"))("ng-valid",r.is("valid"))("ng-invalid",r.is("invalid"))("ng-pending",r.is("pending"))},features:[o.qOj]}),n})();function b(n,t){(function $(n,t){const e=function xe(n){return n._rawValidators}(n);null!==t.validator?n.setValidators(Ne(e,t.validator)):"function"==typeof e&&n.setValidators([e]);const r=function ke(n){return n._rawAsyncValidators}(n);null!==t.asyncValidator?n.setAsyncValidators(Ne(r,t.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const i=()=>n.updateValueAndValidity();G(t._rawValidators,i),G(t._rawAsyncValidators,i)})(n,t),t.valueAccessor.writeValue(n.value),function Gt(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&Ze(n,t)})}(n,t),function Bt(n,t){const e=(r,i)=>{t.valueAccessor.writeValue(r),i&&t.viewToModelUpdate(r)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}(n,t),function St(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&Ze(n,t),"submit"!==n.updateOn&&n.markAsTouched()})}(n,t),function Pt(n,t){if(t.valueAccessor.setDisabledState){const e=r=>{t.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}(n,t)}function G(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function Ze(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function J(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}const M="VALID",B="INVALID",V="PENDING",D="DISABLED";function X(n){return(Z(n)?n.validators:n)||null}function Re(n){return Array.isArray(n)?q(n):n||null}function K(n,t){return(Z(t)?t.asyncValidators:n)||null}function He(n){return Array.isArray(n)?R(n):n||null}function Z(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}const ee=n=>n instanceof ne;function Le(n){return(n=>n instanceof We)(n)?n.value:n.getRawValue()}function Ye(n,t){const e=ee(n),r=n.controls;if(!(e?Object.keys(r):r).length)throw new o.vHH(1e3,"");if(!r[t])throw new o.vHH(1001,"")}function $e(n,t){ee(n),n._forEachChild((r,i)=>{if(void 0===t[i])throw new o.vHH(1002,"")})}class te{constructor(t,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=e,this._composedValidatorFn=Re(this._rawValidators),this._composedAsyncValidatorFn=He(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===M}get invalid(){return this.status===B}get pending(){return this.status==V}get disabled(){return this.status===D}get enabled(){return this.status!==D}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=Re(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=He(t)}addValidators(t){this.setValidators(Te(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Te(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Pe(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Pe(t,this._rawAsyncValidators))}hasValidator(t){return x(this._rawValidators,t)}hasAsyncValidator(t){return x(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=V,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=D,this.errors=null,this._forEachChild(r=>{r.disable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=M,this._forEachChild(r=>{r.enable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===M||this.status===V)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?D:M}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=V,this._hasOwnPendingAsyncValidator=!0;const e=Me(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){return function qt(n,t,e){if(null==t||(Array.isArray(t)||(t=t.split(e)),Array.isArray(t)&&0===t.length))return null;let r=n;return t.forEach(i=>{r=ee(r)?r.controls.hasOwnProperty(i)?r.controls[i]:null:(n=>n instanceof Ht)(r)&&r.at(i)||null}),r}(this,t,".")}getError(t,e){const r=e?this.get(e):this;return r&&r.errors?r.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?D:this.errors?B:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(V)?V:this._anyControlsHaveStatus(B)?B:M}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_isBoxedValue(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){Z(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class We extends te{constructor(t=null,e,r){super(X(e),K(r,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Z(e)&&e.initialValueIsDefault&&(this.defaultValue=this._isBoxedValue(t)?t.value:t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){J(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){J(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}class ne extends te{constructor(t,e,r){super(X(e),K(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,r={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){$e(this,t),Object.keys(t).forEach(r=>{Ye(this,r),this.controls[r].setValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(r=>{this.controls[r]&&this.controls[r].patchValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((r,i)=>{r.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,r)=>(t[r]=Le(e),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,r)=>!!r._syncPendingControls()||e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const r=this.controls[e];r&&t(r,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const e of Object.keys(this.controls)){const r=this.controls[e];if(this.contains(e)&&t(r))return!0}return!1}_reduceValue(){return this._reduceChildren({},(t,e,r)=>((e.enabled||this.disabled)&&(t[r]=e.value),t))}_reduceChildren(t,e){let r=t;return this._forEachChild((i,s)=>{r=e(r,i,s)}),r}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}}class Ht extends te{constructor(t,e,r){super(X(e),K(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(t){return this.controls[t]}push(t,e={}){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(t,e,r={}){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:r.emitEvent})}removeAt(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),e&&(this.controls.splice(t,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){$e(this,t),t.forEach((r,i)=>{Ye(this,i),this.at(i).setValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(t.forEach((r,i)=>{this.at(i)&&this.at(i).patchValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((r,i)=>{r.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>Le(t))}clear(t={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_syncPendingControls(){let t=this.controls.reduce((e,r)=>!!r._syncPendingControls()||e,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){this.controls.forEach((e,r)=>{t(e,r)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}}const Yt={provide:m,useExisting:(0,o.Gpc)(()=>U)},Qe=(()=>Promise.resolve(null))();let U=(()=>{class n extends m{constructor(e,r,i,s,a){super(),this._changeDetectorRef=a,this.control=new We,this._registered=!1,this.update=new o.vpe,this._parent=e,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=function z(n,t){if(!t)return null;let e,r,i;return Array.isArray(t),t.forEach(s=>{s.constructor===A?e=s:function It(n){return Object.getPrototypeOf(n.constructor)===y}(s)?r=s:i=s}),i||r||e||null}(0,s)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){const r=e.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),function W(n,t){if(!n.hasOwnProperty("model"))return!1;const e=n.model;return!!e.isFirstChange()||!Object.is(t,e.currentValue)}(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){b(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(e){Qe.then(()=>{var r;this.control.setValue(e,{emitViewToModelChange:!1}),null===(r=this._changeDetectorRef)||void 0===r||r.markForCheck()})}_updateDisabled(e){const r=e.isDisabled.currentValue,i=""===r||r&&"false"!==r;Qe.then(()=>{var s;i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),null===(s=this._changeDetectorRef)||void 0===s||s.markForCheck()})}_getPath(e){return this._parent?function T(n,t){return[...t.path,n]}(e,this._parent):[e]}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(c,9),o.Y36(u,10),o.Y36(f,10),o.Y36(h,10),o.Y36(o.sBO,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[o._Bn([Yt]),o.qOj,o.TTD]}),n})(),Ke=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({}),n})(),Cn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[Ke]]}),n})(),vn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[Cn]}),n})();function Vn(n,t){if(1&n){const e=o.EpF();o.TgZ(0,"button",17),o.NdJ("click",function(){return o.CHM(e),o.oxw().listGroupIds=""}),o._uU(1,"Clear "),o.qZA()}}let An=(()=>{class n{constructor(e){this.router=e,this.listGroupIds=""}ngOnInit(){}openLinks(){this.listGroupIds.split("\n").forEach(r=>{let i="";i=r.startsWith("https")?r:`https://www.facebook.com/groups/${r}/`,window.open(i,"_blank")})}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(_.F0))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-link-opener-page"]],decls:44,vars:4,consts:[[1,"container","my-20"],[1,"row"],[1,"col-12","mb-5"],[1,"fw-bold"],["routerLink","/home",3,"matTooltip"],[1,"bi","bi-arrow-left","mr-3","text-dark"],[1,"text-purple-800"],[1,"mb-0"],[1,"col-12","mb-7"],[1,"card-title"],[1,"p-3","bg-slate-100","rounded-md"],[1,"form-floating"],["placeholder","Group link or group id here","id","linkInputBox",1,"form-control",2,"height","200px",3,"ngModel","ngModelChange"],["for","linkInputBox"],[1,"col-12","justify-content-center","flex"],["mat-flat-button","","color","primary",1,"py-1","px-7","mr-2",3,"disabled","click"],["mat-flat-button","","class","py-1 px-7 mr-2",3,"click",4,"ngIf"],["mat-flat-button","",1,"py-1","px-7","mr-2",3,"click"]],template:function(e,r){1&e&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h4",3)(4,"span")(5,"a",4),o._UZ(6,"i",5),o.qZA()(),o._uU(7,"Link "),o.TgZ(8,"span",6),o._uU(9,"Opener"),o.qZA()(),o.TgZ(10,"p",7),o._uU(11,"Paste link below to open all links at once!"),o.qZA()(),o.TgZ(12,"div",8)(13,"p")(14,"strong"),o._uU(15,"Declaimer:"),o.qZA(),o._uU(16," This is made for open Facebook group only."),o.qZA(),o.TgZ(17,"p",9),o._uU(18,"Example"),o.qZA(),o.TgZ(19,"div",10)(20,"code"),o._uU(21,"https://www.facebook.com/groups/889512584455616"),o.qZA(),o._UZ(22,"br"),o.TgZ(23,"code"),o._uU(24,"https://www.facebook.com/groups/zaitakuworkers"),o.qZA(),o._UZ(25,"br"),o.TgZ(26,"small"),o._uU(27,"Or"),o.qZA(),o._UZ(28,"br"),o.TgZ(29,"code"),o._uU(30,"889512584455616"),o.qZA(),o._UZ(31,"br"),o.TgZ(32,"code"),o._uU(33,"zaitakuworkers"),o.qZA(),o._UZ(34,"br"),o.qZA()(),o.TgZ(35,"div",2)(36,"div",11)(37,"textarea",12),o.NdJ("ngModelChange",function(s){return r.listGroupIds=s}),o.qZA(),o.TgZ(38,"label",13),o._uU(39,"Paste your group link or group id here"),o.qZA()()(),o.TgZ(40,"div",14)(41,"button",15),o.NdJ("click",function(){return r.openLinks()}),o._uU(42,"Open Links "),o.qZA(),o.YNc(43,Vn,2,0,"button",16),o.qZA()()()),2&e&&(o.xp6(5),o.Q6J("matTooltip","Back"),o.xp6(32),o.Q6J("ngModel",r.listGroupIds),o.xp6(4),o.Q6J("disabled",!r.listGroupIds),o.xp6(2),o.Q6J("ngIf",r.listGroupIds))},directives:[_.yS,O.gM,A,j,U,I.lW,g.O5],styles:[""]}),n})(),bn=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-group-link-modification-page"]],decls:15,vars:1,consts:[[1,"container","my-20"],[1,"row"],[1,"col-12","mb-5"],[1,"fw-bold"],["routerLink","/home",3,"matTooltip"],[1,"bi","bi-arrow-left","mr-3","text-dark"],[1,"text-purple-800"],[1,"mb-0"],[1,"col-12","mb-7"]],template:function(e,r){1&e&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h4",3)(4,"span")(5,"a",4),o._UZ(6,"i",5),o.qZA()(),o._uU(7,"Group Link "),o.TgZ(8,"span",6),o._uU(9,"Modification"),o.qZA()(),o.TgZ(10,"p",7),o._uU(11,"Customize your link to whatever you want and download as file for later."),o.qZA()(),o.TgZ(12,"div",8)(13,"p"),o._uU(14,"Coming soon... :)"),o.qZA()()()()),2&e&&(o.xp6(5),o.Q6J("matTooltip","Back"))},directives:[_.yS,O.gM],styles:[""]}),n})();class Mn{constructor(t,e){this._document=e;const r=this._textarea=this._document.createElement("textarea"),i=r.style;i.position="fixed",i.top=i.opacity="0",i.left="-999em",r.setAttribute("aria-hidden","true"),r.value=t,this._document.body.appendChild(r)}copy(){const t=this._textarea;let e=!1;try{if(t){const r=this._document.activeElement;t.select(),t.setSelectionRange(0,t.value.length),e=this._document.execCommand("copy"),r&&r.focus()}}catch(r){}return e}destroy(){const t=this._textarea;t&&(t.remove(),this._textarea=void 0)}}let Dn=(()=>{class n{constructor(e){this._document=e}copy(e){const r=this.beginCopy(e),i=r.copy();return r.destroy(),i}beginCopy(e){return new Mn(e,this._document)}}return n.\u0275fac=function(e){return new(e||n)(o.LFG(g.K0))},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),En=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({}),n})();const Fn=["getPlacementGuideDialog"];function wn(n,t){if(1&n){const e=o.EpF();o.TgZ(0,"button",24),o.NdJ("click",function(){return o.CHM(e),o.oxw().listPlacements=""}),o._uU(1,"Clear"),o.qZA()}}function On(n,t){if(1&n){const e=o.EpF();o.TgZ(0,"tr")(1,"th",26),o._uU(2),o.qZA(),o.TgZ(3,"td",27),o.NdJ("click",function(){const s=o.CHM(e).$implicit;let l;return o.oxw(2).onCopyClipboard(null!==(l=s.name)&&void 0!==l?l:"")}),o._uU(4),o.qZA(),o.TgZ(5,"td",27),o.NdJ("click",function(){const s=o.CHM(e).$implicit;let l;return o.oxw(2).onCopyClipboard(null!==(l=s.email)&&void 0!==l?l:"")}),o._uU(6),o.qZA(),o.TgZ(7,"td",27),o.NdJ("click",function(){const s=o.CHM(e).$implicit;let l;return o.oxw(2).onCopyClipboard(null!==(l=s.placementId)&&void 0!==l?l:"")}),o._uU(8),o.qZA()()}if(2&n){const e=t.$implicit,r=t.index;let i,s,a;o.xp6(2),o.Oqu(r+1),o.xp6(2),o.hij(" ",null!==(i=e.name)&&void 0!==i?i:""," "),o.xp6(2),o.hij(" ",null!==(s=e.email)&&void 0!==s?s:""," "),o.xp6(2),o.hij(" ",null!==(a=e.placementId)&&void 0!==a?a:"","")}}function Nn(n,t){if(1&n&&(o.ynx(0),o.YNc(1,On,9,4,"tr",25),o.BQk()),2&n){const e=o.oxw();o.xp6(1),o.Q6J("ngForOf",e.listFormattedPlacements)}}function xn(n,t){1&n&&(o.TgZ(0,"tr")(1,"th",28),o._uU(2," No placement item available! "),o.qZA()())}function kn(n,t){1&n&&(o.TgZ(0,"h2",29),o._uU(1,"Get placements with the "),o.TgZ(2,"span",6),o._uU(3,"right"),o.qZA(),o._uU(4," format"),o.qZA(),o.TgZ(5,"mat-dialog-content")(6,"ul")(7,"li"),o._uU(8,"Go to Facebook Creator Studio by clicking "),o.TgZ(9,"span")(10,"a",30),o._uU(11,"here"),o.qZA()()(),o.TgZ(12,"li"),o._uU(13,"Select your eligible Instant Articles page"),o.qZA(),o.TgZ(14,"li"),o._uU(15,"Click on Placement ID section"),o.qZA(),o.ynx(16),o._UZ(17,"img",31),o.BQk(),o.TgZ(18,"li"),o._uU(19,"Copy all placement IDs and names"),o.qZA(),o.ynx(20),o._UZ(21,"img",32),o.BQk(),o.TgZ(22,"li"),o._uU(23,"Done! Close dialog and paste the placement you just copied into input box."),o.qZA()(),o.TgZ(24,"p",33),o._uU(25,"If you still not clear, feel free to ask for help "),o.TgZ(26,"a",34),o._uU(27,"here"),o.qZA()()(),o.TgZ(28,"mat-dialog-actions",35)(29,"button",36),o._uU(30,"Close"),o.qZA()()),2&n&&(o.xp6(29),o.Q6J("mat-dialog-close",!0))}const Tn=[{path:"link-opener",component:An},{path:"group-link-modification",component:bn},{path:"placement-formatter",component:(()=>{class n{constructor(e,r,i){this.dialog=e,this._clipboard=r,this._snackBar=i,this.listPlacements="",this.listFormattedPlacements=[]}ngOnInit(){}openGuide(){this.dialog.open(this.getPlacementGuideDialog,{autoFocus:!1})}onFormatPlacement(){const e=this.listPlacements.split("\n");let r={};const i=/[a-zA-Z]+/g,s=/\s/g;e.forEach((a,l)=>{if(a.replace(i,"")!==a?r.name=a:r.placementId=a,r.name&&r.placementId){r.email=`${r.name.toLowerCase().replace(s,".")}@gmail.com`;const w=this.listFormattedPlacements.find(Sn=>Sn.name===a);console.log("foundDuplicate",w),this.listFormattedPlacements.push(r),r={}}}),console.log("listFormattedPlacements",this.listFormattedPlacements)}onCopyClipboard(e){this._clipboard.copy(e),this._snackBar.open("Text copied to clipboard","",{duration:1700})}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(v.uw),o.Y36(Dn),o.Y36(de.ux))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-placement-formatter-page"]],viewQuery:function(e,r){if(1&e&&o.Gf(Fn,5),2&e){let i;o.iGM(i=o.CRH())&&(r.getPlacementGuideDialog=i.first)}},decls:78,vars:6,consts:[[1,"container","my-20"],[1,"row"],[1,"col-12"],[1,"fw-bold"],["routerLink","/home",3,"matTooltip"],[1,"bi","bi-arrow-left","mr-3","text-dark"],[1,"primary-title"],[1,"col-12","mb-7"],[1,"text-primary","fw-semibold","cursor-pointer","underline",3,"click"],[1,"text-warning"],[1,"card-title"],[1,"p-3","bg-slate-100","rounded-md"],[1,"col-12","mb-5"],[1,"form-floating"],["placeholder","Paste placement here","id","linkInputBox",1,"form-control",2,"height","200px",3,"ngModel","ngModelChange"],["for","linkInputBox"],[1,"col-12","mb-10","justify-content-center","flex"],["mat-flat-button","","color","primary",1,"py-1","px-7","mr-2",3,"disabled","click"],["mat-flat-button","","class","py-1 px-7 mr-2",3,"click",4,"ngIf"],[1,"table","table-striped","w-full","border","border-purple-800"],["scope","col"],[4,"ngIf","ngIfElse"],["noListValue",""],["getPlacementGuideDialog",""],["mat-flat-button","",1,"py-1","px-7","mr-2",3,"click"],[4,"ngFor","ngForOf"],["scope","row"],[1,"hover:bg-indigo-100","cursor-pointer",3,"click"],["colspan","4",1,"text-center","fw-normal"],["mat-dialog-title",""],["href","https://business.facebook.com/creatorstudio?tab=monetization_instant_article"],["src","https://github.com/StevRoger/grace-walker/blob/main/src/assets/png/1st-step.png?raw=true","alt","",1,"image-guide","mb-3","rounded-md"],["src","https://github.com/StevRoger/grace-walker/blob/main/src/assets/png/2nd-step.png?raw=true","alt","",1,"image-guide","mb-3","rounded-md"],[1,"fw-normal"],["href","https://t.me/phalla404","target","_blank",1,"primary-title"],["align","end"],["mat-button","","cdkFocusInitial","",3,"mat-dialog-close"]],template:function(e,r){if(1&e&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h4",3)(4,"span")(5,"a",4),o._UZ(6,"i",5),o.qZA()(),o._uU(7,"Placement "),o.TgZ(8,"span",6),o._uU(9,"Formatter"),o.qZA()(),o.TgZ(10,"p"),o._uU(11,"Format sorted audience placements into "),o.TgZ(12,"span",6),o._uU(13,"table"),o.qZA(),o._uU(14," easy put into "),o.TgZ(15,"span",6),o._uU(16,"WordPress"),o.qZA()()(),o.TgZ(17,"div",7)(18,"p")(19,"strong"),o._uU(20,"Note:"),o.qZA(),o._uU(21," See guide how to get placement "),o.TgZ(22,"span",8),o.NdJ("click",function(){return r.openGuide()}),o._uU(23,"here"),o.qZA(),o._uU(24,". Please make sure the formation is correct otherwise you will get the "),o.TgZ(25,"span",9),o._uU(26,"wrong placement format"),o.qZA(),o._uU(27,"."),o.qZA(),o.TgZ(28,"p",10),o._uU(29,"Placements format example"),o.qZA(),o.TgZ(30,"div",11)(31,"code"),o._uU(32,"Placement Name 1"),o.qZA(),o._UZ(33,"br"),o.TgZ(34,"code"),o._uU(35,"551464456440256_587111856146249"),o.qZA(),o._UZ(36,"br"),o.TgZ(37,"code"),o._uU(38,"Placement Name 2"),o.qZA(),o._UZ(39,"br"),o.TgZ(40,"code"),o._uU(41,"551464456440256_587717856146249"),o.qZA(),o._UZ(42,"br"),o.TgZ(43,"code"),o._uU(44,"Placement Name 3"),o.qZA(),o._UZ(45,"br"),o.TgZ(46,"code"),o._uU(47,"551464456440256_586292282956753"),o.qZA(),o._UZ(48,"br"),o.qZA()(),o.TgZ(49,"div",12)(50,"div",13)(51,"textarea",14),o.NdJ("ngModelChange",function(s){return r.listPlacements=s}),o.qZA(),o.TgZ(52,"label",15),o._uU(53,"Paste placement here"),o.qZA()()(),o.TgZ(54,"div",16)(55,"button",17),o.NdJ("click",function(){return r.onFormatPlacement()}),o._uU(56,"Format "),o.qZA(),o.YNc(57,wn,2,0,"button",18),o.qZA(),o.TgZ(58,"div",2)(59,"p"),o._uU(60,"Click on item to copy the value"),o.qZA(),o.TgZ(61,"table",19)(62,"thead")(63,"tr")(64,"th",20),o._uU(65,"#"),o.qZA(),o.TgZ(66,"th",20),o._uU(67,"Name"),o.qZA(),o.TgZ(68,"th",20),o._uU(69,"Email"),o.qZA(),o.TgZ(70,"th",20),o._uU(71,"Placement ID"),o.qZA()()(),o.TgZ(72,"tbody"),o.YNc(73,Nn,2,1,"ng-container",21),o.YNc(74,xn,3,0,"ng-template",null,22,o.W1O),o.qZA()()()()(),o.YNc(76,kn,31,1,"ng-template",null,23,o.W1O)),2&e){const i=o.MAs(75);o.xp6(5),o.Q6J("matTooltip","Back"),o.xp6(46),o.Q6J("ngModel",r.listPlacements),o.xp6(4),o.Q6J("disabled",!r.listPlacements),o.xp6(2),o.Q6J("ngIf",r.listPlacements),o.xp6(16),o.Q6J("ngIf",r.listFormattedPlacements.length)("ngIfElse",i)}},directives:[_.yS,O.gM,A,j,U,I.lW,g.O5,g.sg,v.uh,v.xY,v.H8,v.ZT],styles:[".image-guide[_ngcontent-%COMP%]{width:100%}"]}),n})()}];let Pn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[_.Bz.forChild(Tn)],_.Bz]}),n})(),Gn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({providers:[],imports:[[I.ot,_t.Ps,O.AV,v.Is,de.ZX,g.ez,_.Bz,Pn,vn,En]]}),n})()}}]);