"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6239],{5477:(n,a,t)=>{t.r(a),t.d(a,{default:()=>Wn});var s=t(8e3),e=t(6471);const l=(0,s.Uk)(" Use `format` to control displayed text's `format` in the input box. Use `value-format` to control binding value's format. "),p=(0,s._)("p",null,[(0,s.Uk)("By default, the component accepts and emits a "),(0,s._)("code",null,"Date"),(0,s.Uk)(" object.")],-1),o=(0,s._)("p",null,"Check the list here of all available formats of Day.js.",-1),c=(0,s._)("div",{class:"custom-container warning"},[(0,s._)("p",{class:"custom-container-title"},"Note"),(0,s._)("p",null,"Pay attention to capitalization")],-1),u=(0,s.uE)('<h4 id="viwer-source" tabindex="-1"><a class="header-anchor" href="#viwer-source" aria-hidden="true">#</a> Viwer Source</h4><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo-date-picker<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>block<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demonstration<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Emits Date object<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demonstration<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Value: {{ value1 }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>field-date-picker</span>\n        <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value1<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>date<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Pick a Date<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>YYYY/MM/DD<span class="token punctuation">&quot;</span></span>\n      <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>block<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demonstration<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Use value-format<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demonstration<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Value：{{ value2 }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>field-date-picker</span>\n        <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value2<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>date<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Pick a Date<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>YYYY/MM/DD<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">value-format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>YYYY-MM-DD<span class="token punctuation">&quot;</span></span>\n      <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>block<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demonstration<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Timestamp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demonstration<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Value：{{ value3 }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>field-date-picker</span>\n        <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value3<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>date<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Pick a Date<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>YYYY/MM/DD<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">value-format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>x<span class="token punctuation">&quot;</span></span>\n      <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n\n<span class="token keyword">const</span> value1 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> value2 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> value3 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n<span class="token selector">.demo-date-picker</span> <span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.demo-date-picker .block</span> <span class="token punctuation">{</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> 30px 0<span class="token punctuation">;</span>\n  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n  <span class="token property">border-right</span><span class="token punctuation">:</span> solid 1px <span class="token function">var</span><span class="token punctuation">(</span>--el-border-color<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.demo-date-picker .block:last-child</span> <span class="token punctuation">{</span>\n  <span class="token property">border-right</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.demo-date-picker .demonstration</span> <span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--el-text-color-secondary<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>\n  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3>',3),i=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",{style:{"text-align":"center"}},"Name"),(0,s._)("th",{style:{"text-align":"center"}},"Description"),(0,s._)("th",{style:{"text-align":"center"}},"Type"),(0,s._)("th",{style:{"text-align":"center"}},"Mandatory")])],-1),r=(0,s._)("td",{style:{"text-align":"center"}},[(0,s._)("code",null,"type")],-1),d=(0,s._)("td",{style:{"text-align":"center"}},"type of the picker",-1),k={style:{"text-align":"center"}},m=(0,s._)("strong",null,(0,e.zw)("string"),-1),g={style:{"text-align":"center"}},v=(0,s._)("strong",null,(0,e.zw)("True"),-1),f=(0,s._)("h3",{id:"attributes",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#attributes","aria-hidden":"true"},"#"),(0,s.Uk)(" Attributes")],-1),_=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",{style:{"text-align":"center"}},"Name"),(0,s._)("th",{style:{"text-align":"center"}},"Description"),(0,s._)("th",{style:{"text-align":"center"}},"Type"),(0,s._)("th",{style:{"text-align":"center"}},"Default")])],-1),b=(0,s._)("td",{style:{"text-align":"center"}},[(0,s._)("code",null,"value")],-1),h=(0,s._)("td",{style:{"text-align":"center"}},"binding value, if it is an array, the length should be 2",-1),y={style:{"text-align":"center"}},x=(0,s._)("strong",null,(0,e.zw)("Date / number / string / Array"),-1),q={style:{"text-align":"center"}},w=(0,s._)("strong",null,(0,e.zw)("——————"),-1),D=(0,s._)("td",{style:{"text-align":"center"}},[(0,s._)("code",null,"format")],-1),z=(0,s._)("td",{style:{"text-align":"center"}},"format of the displayed value in the input box",-1),W={style:{"text-align":"center"}},L=(0,s._)("strong",null,[(0,s._)("strong",null,(0,e.zw)("string"))],-1),Y={style:{"text-align":"center"}},P=(0,s._)("strong",null,(0,e.zw)("YYYY-MM-DD"),-1),U=(0,s._)("td",{style:{"text-align":"center"}},[(0,s._)("code",null,"shortcuts")],-1),A=(0,s._)("td",{style:{"text-align":"center"}},"an object array to set shortcut options",-1),C={style:{"text-align":"center"}},M=(0,s.Uk)((0,e.zw)("Array")),S={style:{"text-align":"center"}},T=(0,s._)("strong",null,(0,e.zw)("——————"),-1),E=(0,s._)("td",{style:{"text-align":"center"}},[(0,s._)("code",null,"placeholder")],-1),F=(0,s._)("td",{style:{"text-align":"center"}},"placeholder in non-range mode",-1),j={style:{"text-align":"center"}},N=(0,s._)("strong",null,(0,e.zw)("string"),-1),B={style:{"text-align":"center"}},V=(0,s._)("strong",null,(0,e.zw)("——————"),-1),Z=(0,s._)("td",{style:{"text-align":"center"}},[(0,s._)("code",null,"startPlaceholder")],-1),O=(0,s._)("td",{style:{"text-align":"center"}},"placeholder in non-range mode",-1),G={style:{"text-align":"center"}},I=(0,s._)("strong",null,(0,e.zw)("string"),-1),J={style:{"text-align":"center"}},R=(0,s._)("strong",null,(0,e.zw)("——————"),-1),H=(0,s._)("td",{style:{"text-align":"center"}},[(0,s._)("code",null,"endPlaceholder")],-1),K=(0,s._)("td",{style:{"text-align":"center"}},"placeholder in non-range mode",-1),Q={style:{"text-align":"center"}},X=(0,s._)("strong",null,(0,e.zw)("string"),-1),$={style:{"text-align":"center"}},nn=(0,s._)("strong",null,(0,e.zw)("——————"),-1),an=(0,s._)("td",{style:{"text-align":"center"}},[(0,s._)("code",null,"disabled")],-1),tn=(0,s._)("td",{style:{"text-align":"center"}},[(0,s.Uk)("whether Switch is "),(0,s._)("code",null,"disabled")],-1),sn={style:{"text-align":"center"}},en=(0,s.Uk)((0,e.zw)("boolean")),ln={style:{"text-align":"center"}},pn=(0,s._)("strong",null,(0,e.zw)("False"),-1),on=(0,s._)("td",{style:{"text-align":"center"}},[(0,s._)("code",null,"clearable")],-1),cn=(0,s._)("td",{style:{"text-align":"center"}},"whether to show clear button",-1),un={style:{"text-align":"center"}},rn=(0,s._)("strong",null,(0,e.zw)("boolean"),-1),dn={style:{"text-align":"center"}},kn=(0,s._)("strong",null,(0,e.zw)("False"),-1),mn=(0,s._)("td",{style:{"text-align":"center"}},[(0,s._)("code",null,"size")],-1),gn={style:{"text-align":"center"}},vn=(0,s.Uk)("size of Switch "),fn=(0,s._)("strong",null,(0,e.zw)("large / default / small"),-1),_n={style:{"text-align":"center"}},bn=(0,s._)("strong",null,[(0,s._)("strong",null,(0,e.zw)("string"))],-1),hn={style:{"text-align":"center"}},yn=(0,s._)("strong",null,(0,e.zw)("default"),-1),xn=(0,s.uE)('<h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h3><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:center;">Description</th></tr></thead><tbody><tr><td style="text-align:center;"><code>header</code></td><td style="text-align:center;">Customize Default Content Top</td></tr><tr><td style="text-align:center;"><code>footer</code></td><td style="text-align:center;">Customize Default Content Bottom</td></tr></tbody></table><h3 id="example-for-developer" tabindex="-1"><a class="header-anchor" href="#example-for-developer" aria-hidden="true">#</a> Example for Developer</h3>',3),qn={href:"https://stackblitz.com/edit/fields-date-picker?file=app.vue",target:"_blank",rel:"noopener noreferrer"},wn=(0,s._)("img",{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Open in StackBlitz"},null,-1),Dn=(0,s.uE)('<h3 id="directory" tabindex="-1"><a class="header-anchor" href="#directory" aria-hidden="true">#</a> Directory</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>  └─ src                                            <span class="token comment"># Main source code.</span>\n      └── Components                                <span class="token comment"># Global components</span>\n              └── Atoms                             <span class="token comment"># Atom components</span>\n                  └── FieldDatePicker               <span class="token comment"># Field DatePicker specific components.</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',2),zn={},Wn=(0,t(3860).Z)(zn,[["render",function(n,a){const t=(0,s.up)("DateFormats"),e=(0,s.up)("el-tag"),zn=(0,s.up)("ExternalLinkIcon");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("span",null,[l,p,o,c,(0,s.Wm)(t),u,(0,s._)("table",null,[i,(0,s._)("tbody",null,[(0,s._)("tr",null,[r,d,(0,s._)("td",k,[(0,s.Wm)(e,{effect:"Light"},{default:(0,s.w5)((()=>[m])),_:1})]),(0,s._)("td",g,[(0,s.Wm)(e,{effect:"dark",round:""},{default:(0,s.w5)((()=>[v])),_:1})])])])]),f,(0,s._)("table",null,[_,(0,s._)("tbody",null,[(0,s._)("tr",null,[b,h,(0,s._)("td",y,[(0,s.Wm)(e,{effect:"Light"},{default:(0,s.w5)((()=>[(0,s.Wm)(e,{effect:"Light"},{default:(0,s.w5)((()=>[x])),_:1})])),_:1})]),(0,s._)("td",q,[(0,s.Wm)(e,{effect:"dark",round:""},{default:(0,s.w5)((()=>[w])),_:1})])]),(0,s._)("tr",null,[D,z,(0,s._)("td",W,[(0,s.Wm)(e,{effect:"Light"},{default:(0,s.w5)((()=>[(0,s.Wm)(e,{effect:"Light"},{default:(0,s.w5)((()=>[L])),_:1})])),_:1})]),(0,s._)("td",Y,[(0,s.Wm)(e,{effect:"dark",round:""},{default:(0,s.w5)((()=>[P])),_:1})])]),(0,s._)("tr",null,[U,A,(0,s._)("td",C,[(0,s.Wm)(e,{effect:"Light"},{default:(0,s.w5)((()=>[M])),_:1})]),(0,s._)("td",S,[(0,s.Wm)(e,{effect:"dark",round:""},{default:(0,s.w5)((()=>[T])),_:1})])]),(0,s._)("tr",null,[E,F,(0,s._)("td",j,[(0,s.Wm)(e,{effect:"Light"},{default:(0,s.w5)((()=>[(0,s.Wm)(e,{effect:"Light"},{default:(0,s.w5)((()=>[N])),_:1})])),_:1})]),(0,s._)("td",B,[(0,s.Wm)(e,{effect:"dark",round:""},{default:(0,s.w5)((()=>[V])),_:1})])]),(0,s._)("tr",null,[Z,O,(0,s._)("td",G,[(0,s.Wm)(e,{effect:"Light"},{default:(0,s.w5)((()=>[(0,s.Wm)(e,{effect:"Light"},{default:(0,s.w5)((()=>[I])),_:1})])),_:1})]),(0,s._)("td",J,[(0,s.Wm)(e,{effect:"dark",round:""},{default:(0,s.w5)((()=>[R])),_:1})])]),(0,s._)("tr",null,[H,K,(0,s._)("td",Q,[(0,s.Wm)(e,{effect:"Light"},{default:(0,s.w5)((()=>[(0,s.Wm)(e,{effect:"Light"},{default:(0,s.w5)((()=>[X])),_:1})])),_:1})]),(0,s._)("td",$,[(0,s.Wm)(e,{effect:"dark",round:""},{default:(0,s.w5)((()=>[nn])),_:1})])]),(0,s._)("tr",null,[an,tn,(0,s._)("td",sn,[(0,s.Wm)(e,{effect:"Light"},{default:(0,s.w5)((()=>[(0,s.Wm)(e,{effect:"Light"},{default:(0,s.w5)((()=>[en])),_:1})])),_:1})]),(0,s._)("td",ln,[(0,s.Wm)(e,{effect:"dark",round:""},{default:(0,s.w5)((()=>[pn])),_:1})])]),(0,s._)("tr",null,[on,cn,(0,s._)("td",un,[(0,s.Wm)(e,{effect:"Light"},{default:(0,s.w5)((()=>[(0,s.Wm)(e,{effect:"Light"},{default:(0,s.w5)((()=>[rn])),_:1})])),_:1})]),(0,s._)("td",dn,[(0,s.Wm)(e,{effect:"dark",round:""},{default:(0,s.w5)((()=>[kn])),_:1})])]),(0,s._)("tr",null,[mn,(0,s._)("td",gn,[vn,(0,s.Wm)(e,{effect:"Light"},{default:(0,s.w5)((()=>[fn])),_:1})]),(0,s._)("td",_n,[(0,s.Wm)(e,{effect:"Light"},{default:(0,s.w5)((()=>[(0,s.Wm)(e,{effect:"Light"},{default:(0,s.w5)((()=>[bn])),_:1})])),_:1})]),(0,s._)("td",hn,[(0,s.Wm)(e,{effect:"dark",round:""},{default:(0,s.w5)((()=>[yn])),_:1})])])])]),xn,(0,s._)("p",null,[(0,s._)("a",qn,[wn,(0,s.Wm)(zn)])]),Dn])])}]])},8756:(n,a,t)=>{t.r(a),t.d(a,{data:()=>s});const s=JSON.parse('{"key":"v-0749b530","path":"/docs/component/Atoms/FieldDatePiker.html","title":"Date Picker","lang":"en-US","frontmatter":{"title":"Date Picker","category":["Component","Atom"],"tag":["Date","Atom","Component"],"footer":"<a href=\\"https://github.com/adempiere\\" rel=\\"noopener noreferrer\\" target=\\"_blank\\">ADempiere Community</a> | <a href=\\"https://www.adempiere.io/about/site\\">About Site</a>","summary":"Use format to control displayed text\'s format in the input box. Use value-format to control binding value\'s format. By default, the component accepts and emits a Date object. Check","head":[["meta",{"property":"og:url","content":"https://github.com/adempiere/adempiere-site.github.io/docs/component/Atoms/FieldDatePiker.html"}],["meta",{"property":"og:title","content":"Date Picker"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-21T14:04:10.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:tag","content":"Date"}],["meta",{"property":"article:tag","content":"Atom"}],["meta",{"property":"article:tag","content":"Component"}],["meta",{"property":"article:modified_time","content":"2023-03-21T14:04:10.000Z"}]]},"excerpt":"","headers":[{"level":3,"title":"Props","slug":"props","children":[]},{"level":3,"title":"Attributes","slug":"attributes","children":[]},{"level":3,"title":"Slots","slug":"slots","children":[]},{"level":3,"title":"Example for Developer","slug":"example-for-developer","children":[]},{"level":3,"title":"Directory","slug":"directory","children":[]}],"git":{"createdTime":1679407450000,"updatedTime":1679407450000,"contributors":[{"name":"Elsio Sanchez","email":"45974454+elsiosanchez@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.95,"words":586},"filePathRelative":"docs/component/Atoms/FieldDatePiker.md","localizedDate":"March 21, 2023"}')}}]);